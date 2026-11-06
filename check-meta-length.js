// 检查所有页面的 meta description 长度
const fs = require('fs');
const path = require('path');

function findPageFiles(dir, results = []) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      findPageFiles(fullPath, results);
    } else if (file === 'page.tsx') {
      results.push(fullPath);
    }
  });
  return results;
}

const pages = findPageFiles('src/app');
const shortDescriptions = [];

pages.forEach(filePath => {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // 提取 description 字段
  const descMatch = content.match(/description:\s*["'`]([^"'`]+)["'`]/);
  if (descMatch) {
    const desc = descMatch[1];
    if (desc.length < 120) {
      shortDescriptions.push({
        file: filePath.replace('src/app/', ''),
        length: desc.length,
        desc: desc.substring(0, 80) + '...'
      });
    }
  }
  
  // 检查 generateMetadata 里的 description
  const metaFnMatch = content.match(/description:\s*\n?\s*l === ["']zh["']\s*\?\s*["'`]([^"'`]+)["'`]/);
  if (metaFnMatch) {
    const desc = metaFnMatch[1];
    if (desc.length < 120) {
      shortDescriptions.push({
        file: filePath.replace('src/app/', '') + ' (zh)',
        length: desc.length,
        desc: desc.substring(0, 80) + '...'
      });
    }
  }
});

console.log('找到', shortDescriptions.length, '个 description 长度不足 120 字符的页面:\n');
shortDescriptions.sort((a, b) => a.length - b.length).forEach(item => {
  console.log(`${item.length} 字符 - ${item.file}`);
  console.log(`  "${item.desc}"`);
  console.log();
});
