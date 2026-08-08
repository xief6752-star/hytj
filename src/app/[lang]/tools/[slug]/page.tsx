import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { TOOLS } from "@/data/tools";
import { UI_TEXT, AIRPORT_GO, SITE_URL, type Lang } from "@/data/i18n";
import { topicsWithTool, recommendedBrands } from "@/data/related";
import { getPitfallsFor } from "@/data/tool-pitfalls";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AirportBanner from "@/components/AirportBanner";
import FAQSection from "@/components/FAQSection";
import ToolLogo from "@/components/ToolLogo";

export function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];
  for (const lang of ["zh", "en", "ar"]) {
    for (const tool of TOOLS) {
      params.push({ lang, slug: tool.slug });
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
  const tool = TOOLS.find((t) => t.slug === slug);
  if (!tool) return {};
  const name = tool.name[l];
  const desc = tool.description[l];

  const titleZh = `${name} 2026 国内使用教程 · 注册与加速指南`;
  const titleEn = `${name} 2026 Guide — How to Sign Up, Use & Speed Up`;
  const titleAr = `${name} 2026 — دليل التسجيل والاستخدام والتسريع`;

  return {
    title: l === "zh" ? titleZh : l === "en" ? titleEn : titleAr,
    description:
      l === "zh"
        ? `2026 最新 ${name} 使用教程：${desc}。含国内访问方案、注册步骤、加速技巧与常见问题。创立于 ${tool.founded.slice(0,4)} 年。`
        : l === "en"
        ? `2026 ${name} guide: ${desc} Includes sign-up steps, speed-up tips, and FAQs. Founded in ${tool.founded.slice(0,4)} by ${tool.founder}.`
        : `دليل ${name} 2026: ${desc} يشمل خطوات التسجيل والوصول ونصائح التسريع. تأسس عام ${tool.founded.slice(0,4)} على يد ${tool.founder}.`,
    keywords:
      l === "zh"
        ? [
            `${name} 2026`,
            `${name}使用教程`,
            `${name}国内怎么用`,
            `${name}注册教程`,
            `${name}加速`,
            `${name}是什么`,
            name,
            "科学上网",
            "出海工具",
          ]
        : l === "en"
        ? [name, `${name} 2026`, `how to use ${name}`, `${name} tutorial`, `${name} sign up`, `${name} in China`]
        : [name, `${name} 2026`, `كيفية استخدام ${name}`, `شرح موقع ${name}`, `دليل ${name}`],
    alternates: {
      canonical: `${SITE_URL}/${l}/tools/${slug}`,
      languages: {
        "zh-CN": `${SITE_URL}/zh/tools/${slug}`,
        "en-US": `${SITE_URL}/en/tools/${slug}`,
        "ar": `${SITE_URL}/ar/tools/${slug}`,
      },
    },
    openGraph: {
      title: l === "zh" ? titleZh : l === "en" ? titleEn : titleAr,
      description: desc,
      url: `${SITE_URL}/${l}/tools/${slug}`,
      type: "article",
    },
  };
}

const CATEGORY_NAMES: Record<string, { zh: string; en: string; ar: string }> = {
  ai: { zh: "AI 工具", en: "AI Tools", ar: "أدوات الذكاء الاصطناعي" },
  social: { zh: "社交媒体", en: "Social Media", ar: "وسائل التواصل الاجتماعي" },
  dev: { zh: "开发工具", en: "Dev Tools", ar: "أدوات التطوير" },
  video: { zh: "视频平台", en: "Video", ar: "منصات الفيديو" },
  office: { zh: "办公协作", en: "Office", ar: "العمل والتعاون" },
  ecommerce: { zh: "电商金融", en: "E-Commerce", ar: "التجارة الإلكترونية" },
  learning: { zh: "学习资源", en: "Learning", ar: "مصادر التعلم" },
};

export default async function ToolDetailPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (lang !== "zh" && lang !== "en" && lang !== "ar") notFound();
  const l = lang as Lang;
  const tool = TOOLS.find((t) => t.slug === slug);
  if (!tool) notFound();

  const t = UI_TEXT[l];
  const catName = CATEGORY_NAMES[tool.category]?.[l] || tool.category;

  // Related tools (same category, different slug)
  const related = TOOLS.filter(
    (tt) => tt.category === tool.category && tt.slug !== slug
  ).slice(0, 3);

  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${SITE_URL}/${l}/tools/${slug}#article`,
        headline: `${tool.name[l]} ${l === "zh" ? "使用教程和功能介绍" : l === "en" ? "Tutorial and Feature Guide" : "شرح واستخدام الأدوات"}`,
        description: tool.description[l],
        image: `${SITE_URL}/og-image.png`,
        datePublished: tool.founded,
        dateModified: new Date().toISOString().split("T")[0],
        author: { "@type": "Organization", name: l === "zh" ? "出海工具箱" : l === "en" ? "Overseas Toolkit" : "صندوق أدوات المغتربين" },
        publisher: {
          "@type": "Organization",
          name: l === "zh" ? "出海工具箱" : l === "en" ? "Overseas Toolkit" : "صندوق أدوات المغتربين",
          url: SITE_URL,
        },
        inLanguage: l === "zh" ? "zh-CN" : l === "en" ? "en-US" : "ar",
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE_URL}/${l}/tools/${slug}#software`,
        name: tool.name["en"],
        alternateName: tool.name[l],
        description: tool.longDescription[l],
        url: tool.officialUrl,
        sameAs: tool.officialUrl,
        datePublished: tool.founded,
        dateModified: new Date().toISOString().split("T")[0],
        creator: { "@type": "Organization", name: tool.founder },
        applicationCategory: tool.category,
        operatingSystem: "Web, iOS, Android",
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD", description: l === "zh" ? "提供免费版本" : l === "en" ? "Free tier available" : "نسخة مجانية متاحة" },
        inLanguage: l === "zh" ? "zh-CN" : l === "en" ? "en-US" : "ar",
      },
      {
        "@type": "FAQPage",
        mainEntity: tool.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q[l],
          acceptedAnswer: { "@type": "Answer", text: faq.a[l] },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: l === "zh" ? "首页" : l === "en" ? "Home" : "الرئيسية", item: `${SITE_URL}/${l}` },
          { "@type": "ListItem", position: 2, name: catName, item: `${SITE_URL}/${l}?cat=${tool.category}` },
          { "@type": "ListItem", position: 3, name: tool.name[l], item: `${SITE_URL}/${l}/tools/${slug}` },
        ],
      },
    ],
  };

  return (
    <div dir={l === "ar" ? "rtl" : "ltr"}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header lang={l} t={t as any} />
      <main className="tool-detail-page" id="main-content">
        {/* Hero */}
        <div className="tool-detail-hero">
          <div className="container">
            {/* Breadcrumb */}
            <nav
              className="tool-detail-breadcrumb"
              aria-label="breadcrumb"
              itemScope
              itemType="https://schema.org/BreadcrumbList"
            >
              <Link href={`/${l}`} itemProp="item">
                <span itemProp="name">{t.toolDetail.backToHome.replace("← ", "")}</span>
              </Link>
              <span className="tool-detail-breadcrumb-sep">›</span>
              <Link href={`/${l}?cat=${tool.category}`}>{catName}</Link>
              <span className="tool-detail-breadcrumb-sep">›</span>
              <span style={{ color: "var(--text-primary)" }}>{tool.name[l]}</span>
            </nav>

            {/* Header */}
            <div className="tool-detail-header">
              <ToolLogo
                slug={tool.slug}
                fallback={tool.logo}
                size={88}
                className="tool-detail-logo"
              />
              <div className="tool-detail-meta">
                <span className="tool-detail-category">{catName}</span>
                <h1 className="tool-detail-name gradient-text">{tool.name[l]}</h1>
                <p className="tool-detail-tagline">{tool.tagline[l]}</p>
                <div className="tool-detail-info-row">
                  <div className="tool-detail-info-item">
                    <span className="tool-detail-info-icon" aria-hidden="true">📅</span>
                    <span>{t.toolDetail.founded}: {tool.founded.slice(0, 4)}</span>
                  </div>
                  <div className="tool-detail-info-item">
                    <span className="tool-detail-info-icon" aria-hidden="true">👤</span>
                    <span>{t.toolDetail.founder}: {tool.founder.split(",")[0]}</span>
                  </div>
                  <div className="tool-detail-info-item">
                    <span className="tool-detail-info-icon" aria-hidden="true">📍</span>
                    <span>{tool.headquarter.split(",")[0]}</span>
                  </div>
                  <div className="tool-detail-info-item" style={{ marginLeft: "auto" }}>
                    <span className="tool-detail-info-icon" aria-hidden="true">🔄</span>
                    <span style={{ fontSize: 12, color: "var(--text-muted)" }}>
                      {l === "zh" ? "内容更新：2026年7月" : l === "en" ? "Updated: Jul 2026" : "آخر تحديث: يوليو 2026"}
                    </span>
                  </div>
                  <a
                    href={tool.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-visit-official"
                    id={`visit-official-${slug}`}
                  >
                    {t.toolDetail.visitOfficial} ↗
                  </a>
                  {l !== "zh" && (
                    <Link href={`/zh/tools/${slug}`} className="btn-visit-official">
                      中文
                    </Link>
                  )}
                  {l !== "en" && (
                    <Link href={`/en/tools/${slug}`} className="btn-visit-official">
                      English
                    </Link>
                  )}
                  {l !== "ar" && (
                    <Link href={`/ar/tools/${slug}`} className="btn-visit-official">
                      العربية
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Body */}
        <div className="tool-detail-body">
          <div className="container">
            <div className="tool-detail-layout">
              {/* Main Content */}
              <div className="tool-detail-main">
                {/* Need VPN Alert */}
                <div className="need-vpn-alert" role="note">
                  <span aria-hidden="true">🔒</span>
                  <span>
                    {t.toolDetail.needVPN}
                    {" — "}
                    <a
                      href={AIRPORT_GO}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      style={{ color: "var(--primary-light)", fontWeight: 600 }}
                      id={`vpn-alert-cta-${slug}`}
                    >
                      {lang === "zh" ? "推荐云图机场 →" : "Try YunTu VPN →"}
                    </a>
                  </span>
                </div>

                {/* Overview */}
                <section className="detail-section" aria-labelledby="section-overview">
                  <h2 className="detail-section-title" id="section-overview">
                    <span className="detail-section-icon" aria-hidden="true">📖</span>
                    {t.toolDetail.overview}
                  </h2>
                  <p className="overview-text">{tool.longDescription[l]}</p>
                </section>

                {/* Features */}
                <section className="detail-section" aria-labelledby="section-features">
                  <h2 className="detail-section-title" id="section-features">
                    <span className="detail-section-icon" aria-hidden="true">⚡</span>
                    {t.toolDetail.features}
                  </h2>
                  <div className="features-grid">
                    {tool.features.map((f, i) => (
                      <div className="feature-card" key={i}>
                        <div className="feature-card-icon" aria-hidden="true">{f.icon}</div>
                        <h3 className="feature-card-title">{f.title[l]}</h3>
                        <p className="feature-card-desc">{f.desc[l]}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* How to Use */}
                <section className="detail-section" aria-labelledby="section-howto">
                  <h2 className="detail-section-title" id="section-howto">
                    <span className="detail-section-icon" aria-hidden="true">🚀</span>
                    {t.toolDetail.howToUse}
                  </h2>
                  <ol className="steps-list">
                    {tool.howToUse.map((step, i) => (
                      <li className="step-item" key={i}>
                        <div className="step-number" aria-hidden="true">{i + 1}</div>
                        <div className="step-content">
                          <h3 className="step-title">{step.title[l]}</h3>
                          <p className="step-desc">{step.desc[l]}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </section>

                {/* Airport Banner (mid-article) */}
                <AirportBanner lang={l} variant="banner" />

                {/* History */}
                <section className="detail-section" aria-labelledby="section-history">
                  <h2 className="detail-section-title" id="section-history">
                    <span className="detail-section-icon" aria-hidden="true">🏛️</span>
                    {t.toolDetail.history}
                  </h2>
                  <p className="history-text">{tool.history[l]}</p>
                </section>

                {/* 常见踩坑 - GEO/E-E-A-T 核心：AI 引擎最爱抓这段实操内容 */}
                {(() => {
                  const pitfalls = getPitfallsFor(tool.slug, tool.category);
                  if (pitfalls.length === 0) return null;
                  return (
                    <section className="detail-section" aria-labelledby="section-pitfalls">
                      <h2 className="detail-section-title" id="section-pitfalls">
                        <span className="detail-section-icon" aria-hidden="true">⚠️</span>
                        {l === "zh" ? `使用 ${tool.name[l]} 的 3 个常见踩坑` : l === "en" ? `3 Common Pitfalls Using ${tool.name[l]}` : `3 عثرات شائعة عند استخدام ${tool.name[l]}`}
                      </h2>
                      <p style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 20, lineHeight: 1.65 }}>
                        {l === "zh"
                          ? "以下是社区反馈里最高频的三个坑，注册前先看，能省下大量试错时间。"
                          : l === "en"
                          ? "The three most-reported gotchas from the community. Read these before you sign up to skip the trial-and-error."
                          : "أكثر ثلاث مشاكل شيوعاً من المجتمع. اقرأها قبل التسجيل لتوفير وقت التجربة."}
                      </p>
                      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                        {pitfalls.map((p, i) => (
                          <article
                            key={i}
                            style={{
                              padding: "18px 22px",
                              background: "var(--bg-elevated)",
                              border: "1px solid var(--border)",
                              borderLeft: "4px solid #f59e0b",
                              borderRadius: "var(--radius-md)",
                            }}
                          >
                            <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 6, color: "var(--text-primary)" }}>
                              <span style={{ color: "#f59e0b", marginRight: 8 }}>#{i + 1}</span>
                              {p.title[l]}
                            </h3>
                            <p style={{ fontSize: 14, lineHeight: 1.75, color: "var(--text-secondary)", marginBottom: 8 }}>
                              {p.desc[l]}
                            </p>
                            <p style={{ fontSize: 13, lineHeight: 1.6, color: "var(--primary)", fontWeight: 600 }}>
                              
                            </p>
                          </article>
                        ))}
                      </div>
                    </section>
                  );
                })()}

                {/* FAQ */}
                <section
                  className="detail-section"
                  aria-labelledby="section-faq"
                  itemScope
                  itemType="https://schema.org/FAQPage"
                >
                  <h2 className="detail-section-title" id="section-faq">
                    <span className="detail-section-icon" aria-hidden="true">❓</span>
                    {t.toolDetail.faq}
                  </h2>
                  <FAQSection faqs={tool.faqs.map((f) => ({ q: f.q[l], a: f.a[l] }))} />
                </section>

                {/* Related Topics */}
                {(() => {
                  const relTopics = topicsWithTool(tool.slug);
                  if (relTopics.length === 0) return null;
                  return (
                    <section className="detail-section" aria-labelledby="section-related-topics">
                      <h2 className="detail-section-title" id="section-related-topics">
                        <span className="detail-section-icon" aria-hidden="true">🎯</span>
                        {l === "zh" ? "相关专题" : l === "en" ? "Related Topics" : "مواضيع ذات صلة"}
                      </h2>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                        {relTopics.map((tp) => (
                          <Link
                            key={tp.slug}
                            href={`/${l}/topics/${tp.slug}`}
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: 8,
                              padding: "10px 16px",
                              border: "1px solid var(--border)",
                              borderRadius: "var(--radius-md)",
                              textDecoration: "none",
                              color: "var(--text-primary)",
                              fontSize: 14,
                              fontWeight: 600,
                              background: "var(--bg-muted)",
                            }}
                          >
                            <span aria-hidden="true">{tp.icon}</span>
                            {tp.title[l]}
                          </Link>
                        ))}
                      </div>
                    </section>
                  );
                })()}

                {/* Recommended Airports */}
                {(() => {
                  const brands = recommendedBrands(undefined, 3);
                  if (brands.length === 0) return null;
                  return (
                    <section className="detail-section" aria-labelledby="section-rec-brands">
                      <h2 className="detail-section-title" id="section-rec-brands">
                        <span className="detail-section-icon" aria-hidden="true">✈️</span>
                        {l === "zh"
                          ? `访问 ${tool.name[l]} 推荐机场`
                          : l === "en"
                          ? `Recommended Airports for ${tool.name[l]}`
                          : `airports موصى بها لـ ${tool.name[l]}`}
                      </h2>
                      <p style={{ color: "var(--text-secondary)", marginBottom: 16, fontSize: 14 }}>
                        {l === "zh"
                          ? "以下机场均通过我们的稳定性、流媒体解锁、客户端兼容性三项硬测，评分 ≥ 9.2。"
                          : l === "en"
                          ? "All airports below pass our three-way test (stability, streaming unlock, client compatibility) with score ≥ 9.2."
                          : "جميع airports أدناه اجتازت اختبارات الاستقرار وفتح البث وتوافق العملاء بتقييم ≥ 9.2."}
                      </p>
                      <div className="tools-grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }}>
                        {brands.map((b) => (
                          <Link key={b.slug} href={`/${l}/brands/${b.slug}`} className="tool-card">
                            <div className="tool-card-header">
                              <div
                                className="tool-card-logo"
                                style={{ background: `${b.color}20` }}
                                aria-hidden="true"
                              >
                                {b.logo}
                              </div>
                              <div style={{ marginLeft: "auto", fontSize: 12, color: "var(--primary)", fontWeight: 700 }}>
                                ⭐ {b.reviewScore.toFixed(1)}
                              </div>
                            </div>
                            <h3 className="tool-card-name">{b.name[l]}</h3>
                            <p className="tool-card-tagline">{b.tagline[l]}</p>
                            <p className="tool-card-desc">{b.shortDescription[l]}</p>
                          </Link>
                        ))}
                      </div>
                    </section>
                  );
                })()}

                {/* Related Tools */}
                {related.length > 0 && (
                  <section className="detail-section" aria-labelledby="section-related">
                    <h2 className="detail-section-title" id="section-related">
                      <span className="detail-section-icon" aria-hidden="true">🔗</span>
                      {t.toolDetail.relatedTools}
                    </h2>
                    <div className="tools-grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }}>
                      {related.map((rt) => (
                        <Link key={rt.slug} href={`/${l}/tools/${rt.slug}`} className="tool-card">
                          <div className="tool-card-header">
                            <div
                              className="tool-card-logo"
                              style={{ background: `${rt.color}20` }}
                              aria-hidden="true"
                            >
                              {rt.logo}
                            </div>
                          </div>
                          <h3 className="tool-card-name">{rt.name[l]}</h3>
                          <p className="tool-card-tagline">{rt.tagline[l]}</p>
                          <p className="tool-card-desc">{rt.description[l]}</p>
                        </Link>
                      ))}
                    </div>
                  </section>
                )}
              </div>

              {/* Sidebar */}
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
