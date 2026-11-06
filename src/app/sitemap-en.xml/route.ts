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
 * English sitemap
 * Only includes /en/ paths for better crawl efficiency
 */
export async function GET() {
  const now = new Date().toISOString();
  const lang = "en";

  const urls: string[] = [];

  // Static pages
  urls.push(`${SITE_URL}/${lang}`);
  urls.push(`${SITE_URL}/${lang}/news`);
  urls.push(`${SITE_URL}/${lang}/topics`);
  urls.push(`${SITE_URL}/${lang}/brands`);
  urls.push(`${SITE_URL}/${lang}/faq`);
  urls.push(`${SITE_URL}/${lang}/status`);
  urls.push(`${SITE_URL}/${lang}/sitemap`);
  urls.push(`${SITE_URL}/${lang}/about`);
  urls.push(`${SITE_URL}/${lang}/privacy`);

  // Brand pages
  for (const brand of BRANDS) {
    urls.push(`${SITE_URL}/${lang}/brands/${brand.slug}`);
  }

  // Brand comparisons
  for (const p of BRAND_COMPARE_PAIRS) {
    urls.push(`${SITE_URL}/${lang}/compare-airport/${p.slugA}-vs-${p.slugB}`);
  }

  // Tool pages
  for (const tool of TOOLS) {
    urls.push(`${SITE_URL}/${lang}/tools/${tool.slug}`);
  }

  // Topic pages
  for (const topic of TOPICS) {
    urls.push(`${SITE_URL}/${lang}/topics/${topic.slug}`);
  }

  // Tool comparisons
  for (const [a, b] of TOOL_COMPARE_PAIRS) {
    urls.push(`${SITE_URL}/${lang}/compare/${a}-vs-${b}`);
  }

  // News articles
  for (const article of NEWS) {
    urls.push(`${SITE_URL}/${lang}/news/${article.slug}`);
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
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
