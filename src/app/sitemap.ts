import type { MetadataRoute } from "next";
import { TOOLS } from "@/data/tools";
import { NEWS } from "@/data/news";
import { TOPICS } from "@/data/topics";
import { BRANDS } from "@/data/brands";
import { BRAND_COMPARE_PAIRS } from "@/data/brand-compare";
import { TOOL_COMPARE_PAIRS } from "@/data/related";
import { SITE_URL } from "@/data/i18n";

export const dynamic = "force-static";

const LANGS = ["zh", "en", "ar"] as const;

// Google 期望的 hreflang 语言标签：zh-CN / en-US / ar
const HREFLANG: Record<string, string> = {
  zh: "zh-CN",
  en: "en-US",
  ar: "ar",
};

/** 生成一组 hreflang 备选链接（同一份路径的三语版本） */
function altsFor(path: string): { languages: Record<string, string> } {
  const languages: Record<string, string> = {};
  for (const lang of LANGS) {
    languages[HREFLANG[lang]] = `${SITE_URL}/${lang}${path}`;
  }
  // x-default 指向中文版（主要目标用户）
  languages["x-default"] = `${SITE_URL}/zh${path}`;
  return { languages };
}

/** 为一条路径生成三语 sitemap 条目，每条都带完整 hreflang alternates */
function trilingualEntries(
  path: string,
  changeFrequency: "daily" | "weekly" | "monthly" | "yearly",
  priority: number,
  lastModified: string
): MetadataRoute.Sitemap {
  const alternates = altsFor(path);
  return LANGS.map((lang) => ({
    url: `${SITE_URL}/${lang}${path}`,
    lastModified,
    changeFrequency,
    priority,
    alternates,
  }));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const entries: MetadataRoute.Sitemap = [];

  // ───────── 一级静态页 ─────────
  entries.push(...trilingualEntries("", "daily", 1.0, now));                    // 首页
  entries.push(...trilingualEntries("/news", "daily", 0.9, now));               // 资讯列表
  entries.push(...trilingualEntries("/topics", "weekly", 0.9, now));            // 专题列表
  entries.push(...trilingualEntries("/brands", "weekly", 0.9, now));            // 机场列表
  entries.push(...trilingualEntries("/faq", "weekly", 0.85, now));              // FAQ 汇总
  entries.push(...trilingualEntries("/status", "daily", 0.7, now));             // 站点状态
  entries.push(...trilingualEntries("/sitemap", "weekly", 0.6, now));            // HTML 网站地图
  entries.push(...trilingualEntries("/about", "monthly", 0.5, now));            // 关于
  entries.push(...trilingualEntries("/privacy", "yearly", 0.3, now));           // 隐私政策

  // ───────── 品牌详情（转化优先，权重最高） ─────────
  for (const brand of BRANDS) {
    entries.push(...trilingualEntries(`/brands/${brand.slug}`, "weekly", 0.95, now));
  }

  // ───────── 机场对比页（高长尾流量） ─────────
  for (const p of BRAND_COMPARE_PAIRS) {
    entries.push(...trilingualEntries(`/compare-airport/${p.slugA}-vs-${p.slugB}`, "weekly", 0.9, now));
  }

  // ───────── 工具详情 ─────────
  for (const tool of TOOLS) {
    entries.push(...trilingualEntries(`/tools/${tool.slug}`, "weekly", 0.9, now));
  }

  // ───────── 专题详情 ─────────
  for (const topic of TOPICS) {
    entries.push(...trilingualEntries(`/topics/${topic.slug}`, "weekly", 0.85, now));
  }

  // ───────── 工具对比 ─────────
  for (const [a, b] of TOOL_COMPARE_PAIRS) {
    entries.push(...trilingualEntries(`/compare/${a}-vs-${b}`, "monthly", 0.85, now));
  }

  // ───────── 资讯详情（按发布日期） ─────────
  for (const article of NEWS) {
    entries.push(...trilingualEntries(`/news/${article.slug}`, "monthly", 0.8, article.date));
  }

  return entries;
}
