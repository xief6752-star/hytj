import { TOOLS } from "@/data/tools";
import { NEWS } from "@/data/news";
import { SITE_URL } from "@/data/i18n";

export const dynamic = "force-static";

const COMPARE_PAIRS = [
  ["chatgpt", "claude"],
  ["chatgpt", "perplexity"],
  ["chatgpt", "gemini"],
  ["chatgpt", "midjourney"],
  ["claude", "perplexity"],
  ["claude", "gemini"],
  ["youtube", "netflix"],
  ["youtube", "spotify"],
  ["discord", "telegram"],
  ["discord", "notion"],
  ["github", "notion"],
  ["linkedin", "twitter-x"],
  ["shopify", "notion"],
  ["coursera", "duolingo"],
];

export default function sitemap() {
  const now = new Date().toISOString();
  const langs = ["zh", "en", "ar"];

  const staticPages = langs.flatMap((lang) => [
    { url: `${SITE_URL}/${lang}`,       lastModified: now, changeFrequency: "daily"   as const, priority: 1.0 },
    { url: `${SITE_URL}/${lang}/about`, lastModified: now, changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${SITE_URL}/${lang}/news`,  lastModified: now, changeFrequency: "daily"   as const, priority: 0.9 },
  ]);

  const toolPages = langs.flatMap((lang) =>
    TOOLS.map((tool) => ({
      url: `${SITE_URL}/${lang}/tools/${tool.slug}`,
      lastModified: now, changeFrequency: "weekly" as const, priority: 0.9,
    }))
  );

  const comparePages = langs.flatMap((lang) =>
    COMPARE_PAIRS.map(([a, b]) => ({
      url: `${SITE_URL}/${lang}/compare/${a}-vs-${b}`,
      lastModified: now, changeFrequency: "monthly" as const, priority: 0.85,
    }))
  );

  const newsPages = langs.flatMap((lang) =>
    NEWS.map((article) => ({
      url: `${SITE_URL}/${lang}/news/${article.slug}`,
      lastModified: article.date, changeFrequency: "monthly" as const, priority: 0.8,
    }))
  );

  return [...staticPages, ...toolPages, ...comparePages, ...newsPages];
}
