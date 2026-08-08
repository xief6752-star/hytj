import { TOOLS } from "@/data/tools";
import { NEWS } from "@/data/news";
import { TOPICS } from "@/data/topics";
import { BRANDS } from "@/data/brands";
import { BRAND_COMPARE_PAIRS } from "@/data/brand-compare";
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
    { url: `${SITE_URL}/${lang}`,        lastModified: now, changeFrequency: "daily"   as const, priority: 1.0 },
    { url: `${SITE_URL}/${lang}/about`,  lastModified: now, changeFrequency: "monthly" as const, priority: 0.5 },
    { url: `${SITE_URL}/${lang}/news`,   lastModified: now, changeFrequency: "daily"   as const, priority: 0.9 },
    { url: `${SITE_URL}/${lang}/topics`, lastModified: now, changeFrequency: "weekly"  as const, priority: 0.9 },
    { url: `${SITE_URL}/${lang}/brands`, lastModified: now, changeFrequency: "weekly"  as const, priority: 0.9 },
    { url: `${SITE_URL}/${lang}/faq`,    lastModified: now, changeFrequency: "weekly"  as const, priority: 0.85 },
    { url: `${SITE_URL}/${lang}/status`, lastModified: now, changeFrequency: "daily"   as const, priority: 0.7 },
  ]);

  const topicPages = langs.flatMap((lang) =>
    TOPICS.map((topic) => ({
      url: `${SITE_URL}/${lang}/topics/${topic.slug}`,
      lastModified: now, changeFrequency: "weekly" as const, priority: 0.85,
    }))
  );

  const brandPages = langs.flatMap((lang) =>
    BRANDS.map((brand) => ({
      url: `${SITE_URL}/${lang}/brands/${brand.slug}`,
      lastModified: now, changeFrequency: "weekly" as const, priority: 0.95,
    }))
  );

  const brandComparePages = langs.flatMap((lang) =>
    BRAND_COMPARE_PAIRS.map((p) => ({
      url: `${SITE_URL}/${lang}/compare-airport/${p.slugA}-vs-${p.slugB}`,
      lastModified: now, changeFrequency: "weekly" as const, priority: 0.9,
    }))
  );

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

  return [...staticPages, ...topicPages, ...brandPages, ...toolPages, ...comparePages, ...brandComparePages, ...newsPages];
}
