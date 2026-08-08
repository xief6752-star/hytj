import { NEWS } from "@/data/news";
import { SITE_URL } from "@/data/i18n";

export const dynamic = "force-static";

function esc(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function GET() {
  const now = new Date().toUTCString();
  const items = [...NEWS]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 30)
    .map((n) => {
      const link = `${SITE_URL}/zh/news/${n.slug}`;
      const pub = new Date(n.date + "T00:00:00Z").toUTCString();
      return `
    <item>
      <title>${esc(n.title.zh)}</title>
      <link>${link}</link>
      <guid isPermaLink="true">${link}</guid>
      <pubDate>${pub}</pubDate>
      <description>${esc(n.summary.zh)}</description>
      <category>${esc(n.tag)}</category>
    </item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>出海工具箱 · 出海资讯</title>
    <link>${SITE_URL}/zh/news</link>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
    <description>2026 出海工具箱最新资讯：AI 工具、机场推荐、科学上网、跨境电商、社交媒体。</description>
    <language>zh-CN</language>
    <lastBuildDate>${now}</lastBuildDate>
    <generator>hytuijian.com</generator>${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
