"use client";
import { useState } from "react";
import Link from "next/link";
import type { Tool } from "@/data/tools";
import type { Lang } from "@/data/i18n";
import { UI_TEXT } from "@/data/i18n";
import { CATEGORIES } from "@/data/tools";
import ToolLogo from "@/components/ToolLogo";

interface Props {
  lang: Lang;
  tools: Tool[];
}

const CATEGORY_LABELS: Record<string, { zh: string; en: string; ar: string }> = {
  ai:        { zh: "AI 工具",  en: "AI Tools",        ar: "أدوات الذكاء الاصطناعي" },
  social:    { zh: "社交媒体", en: "Social Media",     ar: "وسائل التواصل" },
  dev:       { zh: "开发工具", en: "Dev Tools",        ar: "أدوات التطوير" },
  video:     { zh: "视频平台", en: "Video",            ar: "منصات الفيديو" },
  office:    { zh: "办公协作", en: "Office",           ar: "العمل والتعاون" },
  ecommerce: { zh: "电商金融", en: "E-Commerce",       ar: "التجارة الإلكترونية" },
  learning:  { zh: "学习资源", en: "Learning",         ar: "مصادر التعلم" },
};

export default function ToolsSection({ lang, tools }: Props) {
  const t = UI_TEXT[lang];
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = tools.filter((tool) => {
    const matchCat = activeCategory === "all" || tool.category === activeCategory;
    const q = searchQuery.toLowerCase();
    const matchSearch =
      !q ||
      tool.name[lang].toLowerCase().includes(q) ||
      tool.tagline[lang].toLowerCase().includes(q) ||
      tool.description[lang].toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  // 各分类计数
  const countByCategory = (catId: string) =>
    catId === "all" ? tools.length : tools.filter((t) => t.category === catId).length;

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">{t.hero.badge}</div>
            <h1 className="hero-title">
              <span className="gradient-text">{t.hero.title}</span>
            </h1>
            <p className="hero-subtitle">{t.hero.subtitle}</p>
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="hero-stat-value">{tools.length}+</div>
                <div className="hero-stat-label">
                  {lang === "zh" ? "精选工具" : lang === "en" ? "Curated Tools" : "أدوات مختارة"}
                </div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-value">3</div>
                <div className="hero-stat-label">
                  {lang === "zh" ? "支持语言" : lang === "en" ? "Languages" : "اللغات"}
                </div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-value">100%</div>
                <div className="hero-stat-label">
                  {lang === "zh" ? "免费阅读" : lang === "en" ? "Free to Read" : "مجاني"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 主体：侧边栏 + 工具网格 */}
      <section id="tools">
        <div className="container">
          <div className="tools-layout">

            {/* 左侧分类侧边栏 */}
            <aside className="category-sidebar" aria-label="Tool categories">
              <p className="category-sidebar-title">
                {lang === "zh" ? "按分类浏览" : lang === "en" ? "Browse by Category" : "تصفح حسب التصنيف"}
              </p>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  className={`category-sidebar-btn${activeCategory === cat.id ? " active" : ""}`}
                  onClick={() => setActiveCategory(cat.id)}
                  aria-pressed={activeCategory === cat.id}
                  id={`cat-btn-${cat.id}`}
                >
                  <span className="cat-icon" aria-hidden="true">{cat.icon}</span>
                  <span>{cat.label[lang]}</span>
                  {countByCategory(cat.id) > 0 && (
                    <span className="cat-count">{countByCategory(cat.id)}</span>
                  )}
                </button>
              ))}
            </aside>

            {/* 右侧内容区 */}
            <div className="tools-content">
              {/* 搜索框 */}
              <div className="tools-search-bar">
                <span className="tools-search-icon" aria-hidden="true">🔍</span>
                <input
                  type="search"
                  className="tools-search-input"
                  placeholder={t.hero.searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    if (e.target.value) setActiveCategory("all");
                  }}
                  aria-label={t.hero.searchPlaceholder}
                  id="tool-search-input"
                />
                {searchQuery && (
                  <button
                    className="tools-search-clear"
                    onClick={() => setSearchQuery("")}
                    aria-label="清除搜索"
                  >
                    ✕
                  </button>
                )}
              </div>

              <div className="tools-content-header">
                <h2 className="tools-content-title">
                  {searchQuery
                    ? (lang === "zh" ? `"${searchQuery}" 的结果` : lang === "en" ? `Results for "${searchQuery}"` : `نتائج "${searchQuery}"`)
                    : activeCategory === "all"
                    ? (lang === "zh" ? "全部工具" : lang === "en" ? "All Tools" : "جميع الأدوات")
                    : CATEGORY_LABELS[activeCategory]?.[lang] ?? activeCategory}
                </h2>
                <p className="tools-count">
                  {lang === "zh" ? "共" : ""}
                  <span> {filtered.length} </span>
                  {lang === "zh" ? "个工具" : lang === "en" ? "tools" : "أدوات"}
                </p>
              </div>

              {filtered.length === 0 ? (
                <div className="no-results">
                  <div className="no-results-icon">🔍</div>
                  <p className="no-results-title">
                    {lang === "zh" ? "未找到相关工具" : lang === "en" ? "No tools found" : "لم يتم العثور على نتائج"}
                  </p>
                  <p className="no-results-desc">
                    {lang === "zh" ? "试试其他关键词或分类" : lang === "en" ? "Try different keywords or categories" : "جرب كلمات بحث مختلفة"}
                  </p>
                </div>
              ) : (
                <div className="tools-grid">
                  {filtered.map((tool, idx) => (
                    <article
                      key={tool.slug}
                      className="tool-card"
                      style={{ animationDelay: `${idx * 0.05}s` }}
                    >
                      <div className="tool-card-header">
                        <ToolLogo
                          slug={tool.slug}
                          fallback={tool.logo}
                          size={48}
                          className="tool-card-logo"
                        />
                        <span className="tool-card-category">
                          {CATEGORY_LABELS[tool.category]?.[lang] ?? tool.category}
                        </span>
                      </div>
                      <h2 className="tool-card-name">{tool.name[lang]}</h2>
                      <p className="tool-card-tagline">{tool.tagline[lang]}</p>
                      <p className="tool-card-desc">{tool.description[lang]}</p>
                      <div className="tool-card-footer">
                        <Link
                          href={`/${lang}/tools/${tool.slug}`}
                          className="btn-learn"
                          id={`tool-card-learn-${tool.slug}`}
                        >
                          {t.toolCard.learnMore}
                        </Link>
                        <a
                          href={tool.officialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-visit"
                          id={`tool-card-visit-${tool.slug}`}
                        >
                          {t.toolCard.visitSite} ↗
                        </a>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
