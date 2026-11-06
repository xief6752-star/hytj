// SEO 审计脚本 - 检查常见 SEO 问题
const fs = require('fs');
const path = require('path');

const issues = [];
const recommendations = [];

// 1. 检查 robots.txt
if (!fs.existsSync('public/robots.txt')) {
  issues.push('❌ 缺少 public/robots.txt');
  recommendations.push('添加 robots.txt 文件');
} else {
  console.log('✅ robots.txt 存在');
}

// 2. 检查 sitemap.xml 引用
const robotsContent = fs.existsSync('public/robots.txt') 
  ? fs.readFileSync('public/robots.txt', 'utf8') 
  : '';
if (!robotsContent.includes('sitemap')) {
  issues.push('⚠️  robots.txt 未引用 sitemap.xml');
  recommendations.push('在 robots.txt 中添加 Sitemap 引用');
}

// 3. 检查 Open Graph 图片
if (!fs.existsSync('public/og-image.png')) {
  issues.push('⚠️  缺少 public/og-image.png (Open Graph 分享图)');
  recommendations.push('添加 1200x630 的 OG 图片');
} else {
  const stats = fs.statSync('public/og-image.png');
  console.log(`✅ og-image.png 存在 (${(stats.size / 1024).toFixed(1)} KB)`);
}

// 4. 检查结构化数据
const layoutFiles = [
  'src/app/layout.tsx',
  'src/app/[lang]/page.tsx',
];
layoutFiles.forEach(file => {
  if (fs.existsSync(file)) {
    const content = fs.readFileSync(file, 'utf8');
    if (content.includes('application/ld+json')) {
      console.log(`✅ ${file} 包含 JSON-LD 结构化数据`);
    }
  }
});

// 5. 检查图片 alt 属性
const imageChecks = [];
const checkImages = (dir) => {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      checkImages(fullPath);
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const imgTags = content.match(/<img[^>]*>/g) || [];
      const missingAlt = imgTags.filter(tag => !tag.includes('alt='));
      if (missingAlt.length > 0) {
        imageChecks.push(`${fullPath}: ${missingAlt.length} 个 <img> 缺少 alt`);
      }
    }
  });
};
checkImages('src');

if (imageChecks.length > 0) {
  issues.push(`⚠️  发现 ${imageChecks.length} 个文件包含无 alt 的图片`);
  console.log('\n图片 alt 检查:');
  imageChecks.slice(0, 5).forEach(check => console.log(`  ${check}`));
  if (imageChecks.length > 5) console.log(`  ... 还有 ${imageChecks.length - 5} 个`);
}

// 6. 检查内部链接结构
console.log('\n检查内部链接结构...');
const pageFiles = [];
const findPages = (dir) => {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory() && !file.startsWith('.')) {
      findPages(fullPath);
    } else if (file === 'page.tsx') {
      pageFiles.push(fullPath);
    }
  });
};
findPages('src/app');
console.log(`✅ 找到 ${pageFiles.length} 个页面文件`);

// 7. 检查 canonical 标签
let missingCanonical = 0;
pageFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  if (!content.includes('canonical')) {
    missingCanonical++;
  }
});
if (missingCanonical > 0) {
  issues.push(`⚠️  ${missingCanonical} 个页面可能缺少 canonical 标签`);
} else {
  console.log('✅ 所有页面都包含 canonical 引用');
}

// 8. 检查语言标签
let missingHreflang = 0;
pageFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  if (!content.includes('hreflang') && !content.includes('languages')) {
    missingHreflang++;
  }
});
if (missingHreflang > 0) {
  issues.push(`⚠️  ${missingHreflang} 个页面可能缺少 hreflang 标签`);
} else {
  console.log('✅ 多语言标签配置完整');
}

// 总结
console.log('\n' + '='.repeat(60));
console.log('SEO 审计总结');
console.log('='.repeat(60));

if (issues.length === 0) {
  console.log('\n🎉 太棒了！未发现明显的 SEO 问题');
} else {
  console.log(`\n发现 ${issues.length} 个需要改进的地方:\n`);
  issues.forEach(issue => console.log(issue));
}

if (recommendations.length > 0) {
  console.log('\n📋 建议优化:\n');
  recommendations.forEach((rec, i) => console.log(`${i + 1}. ${rec}`));
}

console.log('\n');
