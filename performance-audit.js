// Next.js 性能审计脚本
const fs = require('fs');
const path = require('path');

console.log('🔍 Next.js 性能审计\n');
console.log('='.repeat(60));

const issues = [];
const optimizations = [];

// 1. 检查 next.config.js
console.log('\n📋 检查 Next.js 配置...');
const configFiles = ['next.config.js', 'next.config.mjs', 'next.config.ts'];
let configFile = configFiles.find(f => fs.existsSync(f));

if (configFile) {
  const config = fs.readFileSync(configFile, 'utf8');
  console.log(`✅ 找到配置文件: ${configFile}`);
  
  if (!config.includes('compress')) {
    issues.push('未启用 gzip 压缩');
    optimizations.push('启用 compress: true');
  }
  
  if (!config.includes('swcMinify')) {
    issues.push('未使用 SWC minify');
    optimizations.push('启用 swcMinify: true');
  }
  
  if (!config.includes('images')) {
    issues.push('未配置图片优化');
    optimizations.push('配置 next/image 优化参数');
  }
} else {
  console.log('⚠️  未找到 next.config 文件');
  issues.push('缺少 next.config 配置文件');
}

// 2. 检查图片使用
console.log('\n🖼️  检查图片优化...');
let imgCount = 0;
let nextImageCount = 0;
let largeImages = [];

function checkImages(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      checkImages(fullPath);
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const imgs = content.match(/<img[^>]*>/g) || [];
      const nextImgs = content.match(/from ['"]next\/image['"]/g) || [];
      imgCount += imgs.length;
      nextImageCount += nextImgs.length;
    } else if (file.match(/\.(png|jpg|jpeg|webp|gif)$/i)) {
      if (stat.size > 500 * 1024) { // > 500KB
        largeImages.push({
          file: fullPath,
          size: (stat.size / 1024).toFixed(1) + ' KB'
        });
      }
    }
  });
}

checkImages('src');
checkImages('public');

console.log(`  原生 <img> 标签: ${imgCount}`);
console.log(`  next/image 使用: ${nextImageCount}`);

if (imgCount > 0) {
  issues.push(`${imgCount} 个原生 <img> 标签未使用 next/image`);
  optimizations.push('将 <img> 替换为 next/image 的 Image 组件');
}

if (largeImages.length > 0) {
  console.log(`\n⚠️  发现 ${largeImages.length} 个大尺寸图片:`);
  largeImages.slice(0, 5).forEach(img => {
    console.log(`    ${img.file} (${img.size})`);
  });
  issues.push(`${largeImages.length} 个图片超过 500KB`);
  optimizations.push('压缩大尺寸图片');
}

// 3. 检查字体加载
console.log('\n🔤 检查字体加载...');
const layoutFile = 'src/app/layout.tsx';
if (fs.existsSync(layoutFile)) {
  const content = fs.readFileSync(layoutFile, 'utf8');
  
  if (content.includes('fonts.googleapis.com') && !content.includes('display=swap')) {
    issues.push('Google Fonts 未使用 display=swap');
    optimizations.push('添加 &display=swap 参数到字体 URL');
  }
  
  if (content.includes('next/font')) {
    console.log('✅ 使用 next/font 优化');
  } else if (content.includes('fonts.googleapis.com')) {
    issues.push('未使用 next/font 优化 Google Fonts');
    optimizations.push('使用 next/font/google 替代外部字体链接');
  }
}

// 4. 检查动态导入
console.log('\n📦 检查代码分割...');
let dynamicImports = 0;
let totalComponents = 0;

function checkDynamicImports(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      checkDynamicImports(fullPath);
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('dynamic(')) dynamicImports++;
      if (content.match(/export\s+(default\s+)?function|export\s+const.*=.*\(/)) totalComponents++;
    }
  });
}

checkDynamicImports('src');
console.log(`  动态导入组件: ${dynamicImports}`);
console.log(`  总组件数: ${totalComponents}`);

if (dynamicImports === 0 && totalComponents > 10) {
  issues.push('未使用动态导入优化大组件');
  optimizations.push('对低频组件使用 next/dynamic');
}

// 5. 检查 bundle 分析
console.log('\n📊 检查 bundle 分析配置...');
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
if (!packageJson.devDependencies || !packageJson.devDependencies['@next/bundle-analyzer']) {
  issues.push('未安装 @next/bundle-analyzer');
  optimizations.push('安装 bundle analyzer 分析打包体积');
}

// 6. 检查缓存配置
console.log('\n💾 检查缓存策略...');
const pagesWithRevalidate = [];
function checkRevalidate(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !file.startsWith('.')) {
      checkRevalidate(fullPath);
    } else if (file === 'page.tsx' || file === 'route.ts') {
      const content = fs.readFileSync(fullPath, 'utf8');
      if (content.includes('revalidate') || content.includes('force-static')) {
        pagesWithRevalidate.push(fullPath);
      }
    }
  });
}

checkRevalidate('src/app');
console.log(`  配置了缓存策略的页面: ${pagesWithRevalidate.length}`);

// 总结
console.log('\n' + '='.repeat(60));
console.log('📊 性能审计总结');
console.log('='.repeat(60));

if (issues.length === 0) {
  console.log('\n🎉 未发现明显的性能问题！');
} else {
  console.log(`\n发现 ${issues.length} 个可优化项:\n`);
  issues.forEach((issue, i) => console.log(`${i + 1}. ${issue}`));
}

if (optimizations.length > 0) {
  console.log('\n💡 优化建议:\n');
  optimizations.forEach((opt, i) => console.log(`${i + 1}. ${opt}`));
}

console.log('\n');
