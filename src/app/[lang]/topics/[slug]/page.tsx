import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { TOPICS } from "@/data/topics";
import { TOOLS } from "@/data/tools";
import { UI_TEXT, SITE_URL, AIRPORT_GO, type Lang } from "@/data/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AirportBanner from "@/components/AirportBanner";
import FAQSection from "@/components/FAQSection";
import ToolLogo from "@/components/ToolLogo";
import { recommendedBrands, toolComparesForTopic } from "@/data/related";

export function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];
  for (const lang of ["zh", "en", "ar"]) {
    for (const topic of TOPICS) {
      params.push({ lang, slug: topic.slug });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  if (lang !== "zh" && lang !== "en" && lang !== "ar") return {};
  const l = lang as Lang;
  const topic = TOPICS.find((t) => t.slug === slug);
  if (!topic) return {};

  return {
    title: topic.h1[l],
    description: topic.description[l],
    keywords: topic.keywords,
    alternates: {
      canonical: `${SITE_URL}/${l}/topics/${slug}`,
      languages: {
        "zh-CN": `${SITE_URL}/zh/topics/${slug}`,
        "en-US": `${SITE_URL}/en/topics/${slug}`,
        "ar": `${SITE_URL}/ar/topics/${slug}`,
      },
    },
    openGraph: {
      title: topic.h1[l],
      description: topic.description[l],
      url: `${SITE_URL}/${l}/topics/${slug}`,
      type: "article",
    },
  };
}

export default async function TopicDetailPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (lang !== "zh" && lang !== "en" && lang !== "ar") notFound();
  const l = lang as Lang;
  const topic = TOPICS.find((t) => t.slug === slug);
  if (!topic) notFound();
  const t = UI_TEXT[l];

  const topicTools = topic.toolSlugs
    .map((s) => TOOLS.find((tt) => tt.slug === s))
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  const relatedTopics = topic.relatedTopics
    .map((s) => TOPICS.find((tt) => tt.slug === s))
    .filter((x): x is NonNullable<typeof x> => Boolean(x));

  const today = new Date().toISOString().split("T")[0];
  const recBrands = recommendedBrands(undefined, 3);
  const topicCompares = toolComparesForTopic(slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${SITE_URL}/${l}/topics/${slug}#article`,
        headline: topic.h1[l],
        description: topic.description[l],
        datePublished: "2026-07-15",
        dateModified: today,
        author: { "@type": "Organization", name: l === "zh" ? "出海工具箱" : "Overseas Toolkit" },
        publisher: { "@type": "Organization", name: l === "zh" ? "出海工具箱" : "Overseas Toolkit", url: SITE_URL },
        inLanguage: l === "zh" ? "zh-CN" : l === "en" ? "en-US" : "ar",
      },
      {
        "@type": "ItemList",
        name: topic.title[l],
        numberOfItems: topicTools.length,
        itemListElement: topicTools.map((tool, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: tool.name[l],
          url: `${SITE_URL}/${l}/tools/${tool.slug}`,
          description: tool.description[l],
        })),
      },
      {
        "@type": "FAQPage",
        mainEntity: topic.faq.map((f) => ({
          "@type": "Question",
          name: f.q[l],
          acceptedAnswer: { "@type": "Answer", text: f.a[l] },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: l === "zh" ? "首页" : l === "en" ? "Home" : "الرئيسية", item: `${SITE_URL}/${l}` },
          { "@type": "ListItem", position: 2, name: l === "zh" ? "专题" : l === "en" ? "Topics" : "المواضيع", item: `${SITE_URL}/${l}/topics` },
          { "@type": "ListItem", position: 3, name: topic.title[l], item: `${SITE_URL}/${l}/topics/${slug}` },
        ],
      },
    ],
  };

  return (
    <div dir={l === "ar" ? "rtl" : "ltr"}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header lang={l} t={t as any} />
      <main className="tool-detail-page" id="main-content">
        <div className="tool-detail-hero">
          <div className="container">
            <nav className="tool-detail-breadcrumb" aria-label="breadcrumb">
              <Link href={`/${l}`}>{l === "zh" ? "首页" : l === "en" ? "Home" : "الرئيسية"}</Link>
              <span className="tool-detail-breadcrumb-sep">›</span>
              <Link href={`/${l}/topics`}>{l === "zh" ? "专题" : l === "en" ? "Topics" : "المواضيع"}</Link>
              <span className="tool-detail-breadcrumb-sep">›</span>
              <span style={{ color: "var(--text-primary)" }}>{topic.title[l]}</span>
            </nav>

            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
              <span style={{ fontSize: 48 }} aria-hidden="true">{topic.icon}</span>
              <div>
                <h1 style={{ fontSize: "clamp(24px,4vw,40px)", fontWeight: 800, lineHeight: 1.2 }}>
                  {topic.h1[l]}
                </h1>
                <p style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 6 }}>
                  🔄 {l === "zh" ? `更新：${today}` : l === "en" ? `Updated: ${today}` : `آخر تحديث: ${today}`}
                </p>
              </div>
            </div>
            <p style={{ fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.75, maxWidth: 800 }}>
              {topic.description[l]}
            </p>
          </div>
        </div>

        <div className="tool-detail-body">
          <div className="container">
            <div className="tool-detail-layout">
              <div className="tool-detail-main">
                <div className="need-vpn-alert" role="note">
                  <span aria-hidden="true">🔒</span>
                  <span>
                    {l === "zh" ? "本专题内多数工具需要科学上网访问 — " : l === "en" ? "Most tools in this hub require a VPN — " : "معظم الأدوات تتطلب VPN — "}
                    <a href={AIRPORT_GO} target="_blank" rel="noopener noreferrer sponsored"
                       style={{ color: "var(--primary-light)", fontWeight: 600 }}>
                      {l === "zh" ? "推荐云图机场 →" : "Try YunTu VPN →"}
                    </a>
                  </span>
                </div>

                <section className="detail-section">
                  <h2 className="detail-section-title">
                    <span className="detail-section-icon">📖</span>
                    {l === "zh" ? "专题导读" : l === "en" ? "Overview" : "نظرة عامة"}
                  </h2>
                  <p className="overview-text">{topic.intro[l]}</p>
                </section>

                {/* 工具全攻略 — SEO 内容扩充：对每个工具的定位做一句话摘要 + 为什么需要机场 */}
                {topicTools.length > 0 && (
                  <section className="detail-section">
                    <h2 className="detail-section-title">
                      <span className="detail-section-icon">📋</span>
                      {l === "zh" ? "本专题工具使用要点" : l === "en" ? "Key Points for Each Tool" : "نقاط رئيسية لكل أداة"}
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                      {topicTools.map((tool) => (
                        <div
                          key={tool.slug}
                          style={{
                            padding: "16px 20px",
                            background: "var(--bg-muted)",
                            borderRadius: "var(--radius-md)",
                            border: "1px solid var(--border)",
                          }}
                        >
                          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6, flexWrap: "wrap" }}>
                            <span style={{ fontSize: 22 }}>{tool.logo}</span>
                            <Link
                              href={`/${l}/tools/${tool.slug}`}
                              style={{ fontWeight: 700, fontSize: 16, color: "var(--primary)", textDecoration: "none" }}
                            >
                              {tool.name[l]}
                            </Link>
                            <span style={{ fontSize: 12, color: "var(--text-muted)", background: "var(--bg-elevated)", padding: "2px 8px", borderRadius: 999, border: "1px solid var(--border)" }}>
                              {tool.category}
                            </span>
                          </div>
                          <p style={{ fontSize: 14, lineHeight: 1.7, color: "var(--text-secondary)", margin: 0 }}>
                            {tool.tagline[l]} — {tool.description[l]}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div style={{ marginTop: 20, padding: "16px 20px", background: "rgba(249,115,22,0.06)", border: "1px solid rgba(249,115,22,0.2)", borderRadius: "var(--radius-md)", fontSize: 14, lineHeight: 1.75, color: "var(--text-secondary)" }}>
                      <strong style={{ color: "var(--primary)" }}>
                        {l === "zh" ? "🔒 科学上网提示：" : l === "en" ? "🔒 VPN Note: " : "🔒 ملاحظة VPN: "}
                      </strong>
                      {l === "zh"
                        ? `本专题内的 ${topicTools.filter(t => ["ai","social","dev","video","ecommerce"].includes(t.category)).length} 款主要工具在国内均需科学上网访问。推荐使用 IPLC 专线机场（如云图机场、飞鸟机场），晚高峰稳定性远优于普通中转方案。强烈不推荐使用超低价「一分/一元机场」，跑路风险高且速度不稳定。`
                        : l === "en"
                        ? `Most of the ${topicTools.length} tools in this topic require a VPN from mainland China. We recommend IPLC dedicated-line airports (YunTu, FlyingBird etc.) for stable peak-hour performance far better than generic transit setups. Ultra-cheap '1-cent/1-yuan' airports are strongly not recommended due to exit-scam risk and speed instability.`
                        : `معظم الأدوات في هذا الموضوع تتطلب VPN من الصين. نوصي بخطوط IPLC مخصصة (YunTu, FlyingBird) لأداء مستقر في الذروة. لا نوصي الـairports الرخيصة جداً بسبب خطر الإغلاق.`}
                    </div>
                  </section>
                )}

                {topicTools.length > 0 && (
                  <section className="detail-section">
                    <h2 className="detail-section-title">
                      <span className="detail-section-icon">🧰</span>
                      {l === "zh" ? "专题工具（点击查看完整教程）" : l === "en" ? "Tools in This Hub" : "أدوات هذا الموضوع"}
                    </h2>
                    <div className="tools-grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))" }}>
                      {topicTools.map((tool) => (
                        <Link key={tool.slug} href={`/${l}/tools/${tool.slug}`} className="tool-card">
                          <div className="tool-card-header">
                            <div className="tool-card-logo" style={{ background: `${tool.color}20` }} aria-hidden="true">
                              <ToolLogo slug={tool.slug} fallback={tool.logo} size={40} />
                            </div>
                          </div>
                          <h3 className="tool-card-name">{tool.name[l]}</h3>
                          <p className="tool-card-tagline">{tool.tagline[l]}</p>
                          <p className="tool-card-desc">{tool.description[l]}</p>
                        </Link>
                      ))}
                    </div>
                  </section>
                )}

                <AirportBanner lang={l} variant="banner" />

                {topic.faq.length > 0 && (
                  <section className="detail-section">
                    <h2 className="detail-section-title">
                      <span className="detail-section-icon">❓</span>
                      {l === "zh" ? "常见问题" : l === "en" ? "FAQ" : "الأسئلة الشائعة"}
                    </h2>
                    <FAQSection faqs={topic.faq.map((f) => ({ q: f.q[l], a: f.a[l] }))} />
                  </section>
                )}

                {/* 推荐机场 - 内链密度 */}
                {recBrands.length > 0 && (
                  <section className="detail-section">
                    <h2 className="detail-section-title">
                      <span className="detail-section-icon">✈️</span>
                      {l === "zh" ? "这些机场都能满足本专题需求" : l === "en" ? "Airports That Fit This Topic" : "airports مناسبة لهذا الموضوع"}
                    </h2>
                    <div className="tools-grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }}>
                      {recBrands.map((b) => (
                        <Link key={b.slug} href={`/${l}/brands/${b.slug}`} className="tool-card">
                          <div className="tool-card-header">
                            <div className="tool-card-logo" style={{ background: `${b.color}20` }} aria-hidden="true">{b.logo}</div>
                            <div style={{ fontSize: 12, fontWeight: 700, color: "var(--primary)" }}>★ {b.reviewScore.toFixed(1)}</div>
                          </div>
                          <h3 className="tool-card-name">{b.name[l]}</h3>
                          <p className="tool-card-tagline">{b.tagline[l]}</p>
                        </Link>
                      ))}
                    </div>
                  </section>
                )}

                {/* 相关工具对比 */}
                {topicCompares.length > 0 && (
                  <section className="detail-section">
                    <h2 className="detail-section-title">
                      <span className="detail-section-icon">⚖️</span>
                      {l === "zh" ? "本专题工具横向对比" : l === "en" ? "Tool Comparisons in This Topic" : "مقارنات الأدوات"}
                    </h2>
                    <div className="footer-links">
                      {topicCompares.map(([a, b]) => (
                        <Link key={`${a}-${b}`} href={`/${l}/compare/${a}-vs-${b}`}>
                          {a.toUpperCase()} vs {b.toUpperCase()} →
                        </Link>
                      ))}
                    </div>
                  </section>
                )}

                {relatedTopics.length > 0 && (
                  <section className="detail-section">
                    <h2 className="detail-section-title">
                      <span className="detail-section-icon">🔗</span>
                      {l === "zh" ? "相关专题" : l === "en" ? "Related Topics" : "مواضيع ذات صلة"}
                    </h2>
                    <div className="tools-grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }}>
                      {relatedTopics.map((rt) => (
                        <Link key={rt.slug} href={`/${l}/topics/${rt.slug}`} className="tool-card">
                          <div className="tool-card-header">
                            <div className="tool-card-logo" style={{ background: "rgba(249,115,22,.12)" }} aria-hidden="true">
                              {rt.icon}
                            </div>
                          </div>
                          <h3 className="tool-card-name">{rt.title[l]}</h3>
                          <p className="tool-card-tagline">{rt.description[l]}</p>
                        </Link>
                      ))}
                    </div>
                  </section>
                )}
              </div>

              <aside className="tool-detail-sidebar-col">
                <AirportBanner lang={l} variant="sidebar" />
              </aside>
            </div>
          </div>
        </div>
      </main>
      <Footer lang={l} />
    </div>
  );
}
