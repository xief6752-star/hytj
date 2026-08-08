// 人类可读的HTML 网站地图页面 — 面向用户和搜索引擎爬虫的双重导航入口
// 补充 sitemap.xml 之外的 SEO 内链，帮助搜索引擎理解站点结构
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { TOOLS } from "@/data/tools";
import { NEWS } from "@/data/news";
import { TOPICS } from "@/data/topics";
import { BRANDS } from "@/data/brands";
import { BRAND_COMPARE_PAIRS } from "@/data/brand-compare";
import { TOOL_COMPARE_PAIRS } from "@/data/related";
import { UI_TEXT, SITE_URL, type Lang } from "@/data/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return [{ lang: "zh" }, { lang: "en" }, { lang: "ar" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (lang !== "zh" && lang !== "en" && lang !== "ar") return {};
  const l = lang as Lang;

  const title =
    l === "zh"
      ? "网站地图 2026 · 出海工具箱全部页面索引"
      : l === "en"
      ? "Sitemap 2026 · Complete Page Index"
      : "خريطة الموقع 2026 · فهرس الصفحات الكامل";

  const description =
    l === "zh"
      ? "出海工具箱完整网站地图：20+ 工具评测、9 个专题聚合、9 家机场评测、机场对比、工具对比、出海资讯、常见问题一览。三语覆盖，方便快速定位。"
      : l === "en"
      ? "Complete sitemap of Overseas Toolbox: 20+ tool guides, 9 topic hubs, 9 airport reviews, airport comparisons, tool comparisons, news, and FAQs. Trilingual coverage."
      : "خريطة الموقع الكاملة لصندوق الأدوات: 20+ دليل أدوات، 9 مواضيع، 9 مراجعات مطارات، مقارنات، أخبار وأسئلة شائعة.";

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}/${lang}/sitemap`,
      languages: {
        "zh-CN": `${SITE_URL}/zh/sitemap`,
        "en-US": `${SITE_URL}/en/sitemap`,
        ar: `${SITE_URL}/ar/sitemap`,
      },
    },
  };
}

export default async function SitemapPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (lang !== "zh" && lang !== "en" && lang !== "ar") notFound();
  const l = lang as Lang;
  const t = UI_TEXT[l];

  const T = {
    zh: {
      breadcrumb: "网站地图",
      h1: "网站地图 2026",
      subtitle: "出海工具箱全部页面索引 · 中文/English/العربية",
      s1: "🏠 站点主要入口",
      s2: "🧰 工具评测（20+ 篇）",
      s3: "🎯 热门专题（9 个）",
      s4: "✈️ 机场评测（9 家）",
      s5: "⚖️ 机场对比（12 组）",
      s6: "🆚 工具对比（7 组）",
      s7: "📰 出海资讯（最新）",
      s8: "📄 其他页面",
      viewAll: "查看全部 →",
    },
    en: {
      breadcrumb: "Sitemap",
      h1: "Sitemap 2026",
      subtitle: "Complete page index for Overseas Toolbox · Chinese / English / Arabic",
      s1: "🏠 Main Entry Points",
      s2: "🧰 Tool Reviews (20+)",
      s3: "🎯 Featured Topics (9)",
      s4: "✈️ Airport Reviews (9)",
      s5: "⚖️ Airport Comparisons (12)",
      s6: "🆚 Tool Comparisons (7)",
      s7: "📰 Latest News",
      s8: "📄 Other Pages",
      viewAll: "View all →",
    },
    ar: {
      breadcrumb: "خريطة الموقع",
      h1: "خريطة الموقع 2026",
      subtitle: "فهرس شامل لصندوق الأدوات · العربية / الإنجليزية / الصينية",
      s1: "🏠 الصفحات الرئيسية",
      s2: "🧰 مراجعات الأدوات (20+)",
      s3: "🎯 المواضيع المميزة (9)",
      s4: "✈️ مراجعات المطارات (9)",
      s5: "⚖️ مقارنات المطارات (12)",
      s6: "🆚 مقارنات الأدوات (7)",
      s7: "📰 آخر الأخبار",
      s8: "📄 صفحات أخرى",
      viewAll: "عرض الكل ←",
    },
  }[l];

  // Breadcrumb JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: l === "zh" ? "首页" : l === "en" ? "Home" : "الرئيسية", item: `${SITE_URL}/${l}` },
          { "@type": "ListItem", position: 2, name: T.breadcrumb, item: `${SITE_URL}/${l}/sitemap` },
        ],
      },
    ],
  };

  const linkStyle: React.CSSProperties = {
    display: "block",
    padding: "8px 12px",
    borderRadius: 6,
    color: "var(--text-secondary)",
    textDecoration: "none",
    fontSize: 14,
    lineHeight: 1.5,
    transition: "background .15s ease, color .15s ease",
  };

  const sectionStyle: React.CSSProperties = {
    background: "var(--bg-elevated)",
    border: "1px solid var(--border)",
    borderRadius: "var(--radius-md)",
    padding: "24px 28px",
    marginBottom: 20,
  };

  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
    gap: 8,
    marginTop: 16,
  };

  return (
    <div dir={l === "ar" ? "rtl" : "ltr"}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header lang={l} t={t as any} />
      <main id="main-content" style={{ minHeight: "100vh" }}>
        <div className="tool-detail-hero">
          <div className="container">
            <nav className="tool-detail-breadcrumb" aria-label="breadcrumb">
              <Link href={`/${l}`}>{l === "zh" ? "首页" : l === "en" ? "Home" : "الرئيسية"}</Link>
              <span className="tool-detail-breadcrumb-sep">›</span>
              <span style={{ color: "var(--text-primary)" }}>{T.breadcrumb}</span>
            </nav>
            <h1 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 800, lineHeight: 1.2, marginBottom: 12 }}>
              {T.h1}
            </h1>
            <p style={{ fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.65, maxWidth: 780 }}>
              {T.subtitle}
            </p>
          </div>
        </div>

        <div className="container" style={{ padding: "40px 24px 64px", maxWidth: 1080 }}>
          {/* Main Entry */}
          <section style={sectionStyle}>
            <h2 style={{ fontSize: 20, fontWeight: 700, margin: 0 }}>{T.s1}</h2>
            <div style={gridStyle}>
              <Link href={`/${l}`} style={linkStyle}>🏠 {l === "zh" ? "首页" : l === "en" ? "Home" : "الرئيسية"}</Link>
              <Link href={`/${l}/topics`} style={linkStyle}>🎯 {l === "zh" ? "热门专题" : l === "en" ? "Topics" : "المواضيع"}</Link>
              <Link href={`/${l}/brands`} style={linkStyle}>✈️ {l === "zh" ? "机场评测" : l === "en" ? "Airports" : "المطارات"}</Link>
              <Link href={`/${l}/faq`} style={linkStyle}>❓ {l === "zh" ? "常见问题" : l === "en" ? "FAQ" : "الأسئلة"}</Link>
              <Link href={`/${l}/news`} style={linkStyle}>📰 {l === "zh" ? "出海资讯" : l === "en" ? "News" : "الأخبار"}</Link>
              <Link href={`/${l}/status`} style={linkStyle}>📊 {l === "zh" ? "站点状态" : l === "en" ? "Status" : "حالة الموقع"}</Link>
              <Link href={`/${l}/about`} style={linkStyle}>ℹ️ {l === "zh" ? "关于本站" : l === "en" ? "About" : "حول"}</Link>
              <Link href={`/${l}/privacy`} style={linkStyle}>🔒 {l === "zh" ? "隐私政策" : l === "en" ? "Privacy" : "الخصوصية"}</Link>
            </div>
          </section>

          {/* Tools */}
          <section style={sectionStyle}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
              <h2 style={{ fontSize: 20, fontWeight: 700, margin: 0 }}>{T.s2}</h2>
              <Link href={`/${l}`} style={{ fontSize: 13, color: "var(--primary)" }}>{T.viewAll}</Link>
            </div>
            <div style={gridStyle}>
              {TOOLS.map((tool) => (
                <Link key={tool.slug} href={`/${l}/tools/${tool.slug}`} style={linkStyle}>
                  {tool.logo} {tool.name[l]}
                </Link>
              ))}
            </div>
          </section>

          {/* Topics */}
          <section style={sectionStyle}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
              <h2 style={{ fontSize: 20, fontWeight: 700, margin: 0 }}>{T.s3}</h2>
              <Link href={`/${l}/topics`} style={{ fontSize: 13, color: "var(--primary)" }}>{T.viewAll}</Link>
            </div>
            <div style={gridStyle}>
              {TOPICS.map((topic) => (
                <Link key={topic.slug} href={`/${l}/topics/${topic.slug}`} style={linkStyle}>
                  {topic.icon} {topic.title[l]}
                </Link>
              ))}
            </div>
          </section>

          {/* Brands */}
          <section style={sectionStyle}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
              <h2 style={{ fontSize: 20, fontWeight: 700, margin: 0 }}>{T.s4}</h2>
              <Link href={`/${l}/brands`} style={{ fontSize: 13, color: "var(--primary)" }}>{T.viewAll}</Link>
            </div>
            <div style={gridStyle}>
              {BRANDS.map((brand) => (
                <Link key={brand.slug} href={`/${l}/brands/${brand.slug}`} style={linkStyle}>
                  {brand.logo} {brand.name[l]} <span style={{ color: "var(--text-muted)", fontSize: 12 }}>⭐ {brand.reviewScore.toFixed(1)}</span>
                </Link>
              ))}
            </div>
          </section>

          {/* Brand Comparisons */}
          <section style={sectionStyle}>
            <h2 style={{ fontSize: 20, fontWeight: 700, margin: 0 }}>{T.s5}</h2>
            <div style={gridStyle}>
              {BRAND_COMPARE_PAIRS.map((p) => {
                const a = BRANDS.find((b) => b.slug === p.slugA);
                const b = BRANDS.find((br) => br.slug === p.slugB);
                if (!a || !b) return null;
                return (
                  <Link key={`${p.slugA}-vs-${p.slugB}`} href={`/${l}/compare-airport/${p.slugA}-vs-${p.slugB}`} style={linkStyle}>
                    ⚖️ {a.name[l]} vs {b.name[l]}
                  </Link>
                );
              })}
            </div>
          </section>

          {/* Tool Comparisons */}
          <section style={sectionStyle}>
            <h2 style={{ fontSize: 20, fontWeight: 700, margin: 0 }}>{T.s6}</h2>
            <div style={gridStyle}>
              {TOOL_COMPARE_PAIRS.map(([a, b]) => {
                const ta = TOOLS.find((t) => t.slug === a);
                const tb = TOOLS.find((t) => t.slug === b);
                if (!ta || !tb) return null;
                return (
                  <Link key={`${a}-vs-${b}`} href={`/${l}/compare/${a}-vs-${b}`} style={linkStyle}>
                    🆚 {ta.name[l]} vs {tb.name[l]}
                  </Link>
                );
              })}
            </div>
          </section>

          {/* News */}
          <section style={sectionStyle}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
              <h2 style={{ fontSize: 20, fontWeight: 700, margin: 0 }}>{T.s7}</h2>
              <Link href={`/${l}/news`} style={{ fontSize: 13, color: "var(--primary)" }}>{T.viewAll}</Link>
            </div>
            <div style={gridStyle}>
              {NEWS.slice(0, 12).map((n) => (
                <Link key={n.slug} href={`/${l}/news/${n.slug}`} style={linkStyle}>
                  {n.coverEmoji} {n.title[l]}
                </Link>
              ))}
            </div>
          </section>

          {/* Machine-readable */}
          <section style={{ ...sectionStyle, textAlign: "center", background: "var(--primary-soft)" }}>
            <p style={{ fontSize: 14, color: "var(--text-secondary)", margin: 0, lineHeight: 1.7 }}>
              {l === "zh"
                ? "🤖 需要机器可读的网站地图？"
                : l === "en"
                ? "🤖 Need a machine-readable sitemap?"
                : "🤖 هل تحتاج خريطة موقع قابلة للقراءة الآلية؟"}
              <br />
              <a href="/sitemap.xml" style={{ color: "var(--primary)", fontWeight: 600, marginRight: 12 }}>/sitemap.xml</a>
              <a href="/rss.xml" style={{ color: "var(--primary)", fontWeight: 600, marginRight: 12 }}>/rss.xml</a>
              <a href="/llms.txt" style={{ color: "var(--primary)", fontWeight: 600 }}>/llms.txt</a>
            </p>
          </section>
        </div>
      </main>
      <Footer lang={l} />
    </div>
  );
}
