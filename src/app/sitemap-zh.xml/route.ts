import { NextResponse } from "next/server";
import { TOOLS } from "@/data/tools";
import { NEWS } from "@/data/news";
import { TOPICS } from "@/data/topics";
import { BRANDS } from "@/data/brands";
import { BRAND_COMPARE_PAIRS } from "@/data/brand-compare";
import { TOOL_COMPARE_PAIRS } from "@/data/related";
import { SITE_URL } from "@/data/i18n";

export const dynamic = "force-static";

/**
 * 中文版专用 sitemap
 * 只包含 /zh/ 路径，优化中文搜索引擎爬取效率
 */
export async function GET() {
  const now = new Date().toISOString();
  const lang = "zh";

  const urls: string[] = [];

  // 静态页面
  urls.push(`${SITE_URL}/${lang}`); // 首页
  urls.push(`${SITE_URL}/${lang}/news`);
  urls.push(`${SITE_URL}/${lang}/topics`);
  urls.push(`${SITE_URL}/${lang}/brands`);
  urls.push(`${SITE_URL}/${lang}/faq`);
  urls.push(`${SITE_URL}/${lang}/status`);
  urls.push(`${SITE_URL}/${lang}/sitemap`);
  urls.push(`${SITE_URL}/${lang}/about`);
  urls.push(`${SITE_URL}/${lang}/privacy`);

  // 机场品牌详情页
  for (const brand of BRANDS) {
    urls.push(`${SITE_URL}/${lang}/brands/${brand.slug}`);
  }

  // 机场对比页
  for (const p of BRAND_COMPARE_PAIRS) {
    urls.push(`${SITE_URL}/${lang}/compare-airport/${p.slugA}-vs-${p.slugB}`);
  }

  // 工具详情页
  for (const tool of TOOLS) {
    urls.push(`${SITE_URL}/${lang}/tools/${tool.slug}`);
  }

  // 专题页
  for (const topic of TOPICS) {
    urls.push(`${SITE_URL}/${lang}/topics/${topic.slug}`);
  }

  // 工具对比页
  for (const [a, b] of TOOL_COMPARE_PAIRS) {
    urls.push(`${SITE_URL}/${lang}/compare/${a}-vs-${b}`);
  }

  // 资讯详情页
  for (const article of NEWS) {
    urls.push(`${SITE_URL}/${lang}/news/${article.slug}`);
  }

  // 生成 XML
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls
  .map(
    (url) => `  <url>
    <loc>${url}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
