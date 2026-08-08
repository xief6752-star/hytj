// Helpers for cross-page internal linking.
import { TOPICS, type Topic } from "./topics";
import { BRANDS, type Brand } from "./brands";
import { BRAND_COMPARE_PAIRS, type BrandComparePair } from "./brand-compare";

// TOOL_COMPARE_PAIRS lives in the compare page. Re-declare here to avoid the circular import.
export const TOOL_COMPARE_PAIRS: [string, string][] = [
  ["chatgpt", "claude"],
  ["chatgpt", "perplexity"],
  ["chatgpt", "midjourney"],
  ["claude", "perplexity"],
  ["youtube", "netflix"],
  ["discord", "notion"],
  ["github", "notion"],
];

/** Topics that reference a given tool slug. */
export function topicsWithTool(slug: string): Topic[] {
  return TOPICS.filter((t) => t.toolSlugs.includes(slug));
}

/** Top-rated brands (score ≥ 9.2), excluding the current one. */
export function recommendedBrands(excludeSlug?: string, limit = 3): Brand[] {
  return BRANDS
    .filter((b) => b.slug !== excludeSlug && b.reviewScore >= 9.2)
    .sort((a, b) => b.reviewScore - a.reviewScore)
    .slice(0, limit);
}

/** Brand-compare pairs involving a given brand slug. */
export function brandComparesFor(slug: string): BrandComparePair[] {
  return BRAND_COMPARE_PAIRS.filter((p) => p.slugA === slug || p.slugB === slug);
}

/** Tool-compare pairs whose both members appear in a topic's toolSlugs list. */
export function toolComparesForTopic(topicSlug: string): [string, string][] {
  const topic = TOPICS.find((t) => t.slug === topicSlug);
  if (!topic) return [];
  return TOOL_COMPARE_PAIRS.filter(
    ([a, b]) => topic.toolSlugs.includes(a) && topic.toolSlugs.includes(b)
  );
}
