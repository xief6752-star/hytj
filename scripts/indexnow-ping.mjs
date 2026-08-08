#!/usr/bin/env node
// IndexNow ping — 部署后调用，向 Bing / Yandex 提交最新 URL 列表
// 用法：node scripts/indexnow-ping.mjs
// 或加到 package.json："indexnow": "node scripts/indexnow-ping.mjs"
//
// 密钥文件位置：public/{KEY}.txt，内容必须与 KEY 一致。
// 修改 KEY 时同时改 public/ 下的文件名与内容。

const KEY = "e3b8a24c9d7f4b8e91c5a0f6b4d2e5a7";
const HOST = "hytuijian.com";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;

const ENDPOINTS = [
  "https://api.indexnow.org/indexnow",
  "https://www.bing.com/indexnow",
  "https://yandex.com/indexnow",
];

async function fetchSitemapUrls() {
  const res = await fetch(SITEMAP_URL);
  if (!res.ok) throw new Error(`Failed to fetch sitemap: ${res.status}`);
  const xml = await res.text();
  // 简单 XML 解析：抓出所有 <loc>...</loc>
  const matches = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)];
  return matches.map((m) => m[1]).filter((u) => u.startsWith(`https://${HOST}`));
}

async function ping(endpoint, urls) {
  const body = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  };
  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(body),
    });
    console.log(`  ${endpoint} → ${res.status} ${res.statusText}`);
    return res.ok;
  } catch (err) {
    console.error(`  ${endpoint} → FAILED: ${err.message}`);
    return false;
  }
}

async function main() {
  console.log(`Fetching sitemap ${SITEMAP_URL}...`);
  const urls = await fetchSitemapUrls();
  console.log(`Found ${urls.length} URLs.`);

  // IndexNow 每次最多 10000 URLs，我们远远达不到，一次提交即可
  console.log(`Pinging ${ENDPOINTS.length} endpoints:`);
  const results = await Promise.all(ENDPOINTS.map((ep) => ping(ep, urls)));
  const okCount = results.filter(Boolean).length;
  console.log(`\nDone: ${okCount}/${ENDPOINTS.length} endpoints accepted.`);
  process.exit(okCount === ENDPOINTS.length ? 0 : 1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
