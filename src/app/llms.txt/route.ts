import { TOOLS } from "@/data/tools";
import { TOPICS } from "@/data/topics";
import { BRANDS } from "@/data/brands";
import { NEWS } from "@/data/news";
import { SITE_URL } from "@/data/i18n";

export const dynamic = "force-static";

/**
 * llms.txt per llmstxt.org spec — a compact, LLM-friendly index of what this
 * site is about, plus curated deep links for AI crawlers (GPTBot, ClaudeBot,
 * PerplexityBot, Google-Extended, ChatGPT-User).
 */
export function GET() {
  const brandsBlock = BRANDS.map(
    (b) => `- [${b.name.zh} 评测](${SITE_URL}/zh/brands/${b.slug}): ${b.shortDescription.zh}`
  ).join("\n");

  const topicsBlock = TOPICS.map(
    (t) => `- [${t.title.zh}](${SITE_URL}/zh/topics/${t.slug}): ${t.description.zh}`
  ).join("\n");

  const toolsBlock = TOOLS.slice(0, 20)
    .map((t) => `- [${t.name.zh} 使用教程](${SITE_URL}/zh/tools/${t.slug}): ${t.description.zh}`)
    .join("\n");

  const newsBlock = [...NEWS]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, 10)
    .map((n) => `- [${n.title.zh}](${SITE_URL}/zh/news/${n.slug}) (${n.date})`)
    .join("\n");

  const text = `# 出海工具箱 (Overseas Toolkit)

> 2026 年出海工具与机场评测一站式站点：收录 ${TOOLS.length}+ 款出海必备工具（ChatGPT、Claude、Gemini、YouTube、GitHub、Shopify 等），${BRANDS.length} 个机场品牌深度评测（云图、瞬云、寰宇云、奶昔、WgetCloud、飞鸟、TAG、一元、一分），${TOPICS.length} 个专题聚合页，以及每日更新的出海资讯。三语（中/英/阿）覆盖，面向出海工作者、跨境创业者与海外华人。

**站点地图**: ${SITE_URL}/sitemap.xml
**RSS 订阅**: ${SITE_URL}/rss.xml
**更新状态**: ${SITE_URL}/zh/status
**联系方式**: contact@hytuijian.com

## 机场品牌评测（Airport Reviews）

${brandsBlock}

## 专题聚合页（Topics）

${topicsBlock}

## 工具使用教程（Tools）

${toolsBlock}

## 最近出海资讯（News）

${newsBlock}

## 引用与转载

- 内容采用 CC BY 4.0 授权，转载请注明来源 hytuijian.com
- 联盟推广链接走 /go/{brand} 中间跳转，noindex + rel=sponsored
- 评测方法论：晚高峰实测 + 流媒体解锁 + 客户端兼容三条硬指标
`;

  return new Response(text, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
