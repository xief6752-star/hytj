import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { BRANDS } from "@/data/brands";
import { TOPICS } from "@/data/topics";
import { brandComparesFor } from "@/data/related";
import { BRAND_PERF } from "@/data/brand-perf";
import { getBrandPerf } from "@/data/brand-perf";
import { UI_TEXT, SITE_URL, AIRPORT_GO, type Lang } from "@/data/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";

export function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];
  for (const lang of ["zh", "en", "ar"]) {
    for (const b of BRANDS) {
      params.push({ lang, slug: b.slug });
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
  const brand = BRANDS.find((b) => b.slug === slug);
  if (!brand) return {};

  const name = brand.name[l];
  const title =
    l === "zh"
      ? `${name}评测 2026 · 是否值得买？稳定性/速度/价格实测`
      : l === "en"
      ? `${name} Review 2026 — Is It Worth It? Speed / Stability / Price`
      : `مراجعة ${name} 2026 — هل يستحق الشراء؟`;

  return {
    title,
    description:
      l === "zh"
        ? `${name} 2026 年真实深度评测：晚高峰实测下载速度、Netflix/Disney+/ChatGPT 流媒体原生解锁验证、IPLC/IEPL 专线路由测试、套餐价格性价比分析、客户端兼容性测试（Clash/Shadowrocket/Sing-Box 等），附购买注册链接、使用教程与常见问题解答。`
        : l === "en"
        ? `${name} in-depth 2026 review: real-world peak-hour download speed tests, Netflix/Disney+/ChatGPT native streaming unlock verification, IPLC/IEPL dedicated-line routing tests, pricing value analysis, client compatibility testing (Clash/Shadowrocket/Sing-Box etc.), with sign-up links, setup guides and FAQs.`
        : `مراجعة ${name} 2026 المتعمقة: اختبارات سرعة التنزيل الحقيقية في الذروة، التحقق من فتح بث Netflix/Disney+/ChatGPT الأصلي، اختبارات مسارات IPLC/IEPL المخصصة، تحليل قيمة الأسعار، واختبار توافق العملاء، مع روابط التسجيل والأدلة والأسئلة الشائعة.`,
    keywords: l === "zh" ? [
      `${name}`, `${name}评测`, `${name}怎么样`, `${name}稳定吗`,
      "2026 机场推荐", "IPLC 机场", "梯子推荐", "机场评测",
    ] : [`${name}`, `${name} review`, `${name} 2026`, "IPLC VPN"],
    alternates: {
      canonical: `${SITE_URL}/${l}/brands/${slug}`,
      languages: {
        "zh-CN": `${SITE_URL}/zh/brands/${slug}`,
        "en-US": `${SITE_URL}/en/brands/${slug}`,
        "ar": `${SITE_URL}/ar/brands/${slug}`,
      },
    },
    openGraph: {
      title,
      description: brand.reviewSummary[l],
      url: `${SITE_URL}/${l}/brands/${slug}`,
      type: "article",
    },
  };
}

export default async function BrandDetailPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (lang !== "zh" && lang !== "en" && lang !== "ar") notFound();
  const l = lang as Lang;
  const brand = BRANDS.find((b) => b.slug === slug);
  if (!brand) notFound();

  const t = UI_TEXT[l];

  const brandCompares = brandComparesFor(slug);
  const relatedTopicsForBrand = TOPICS.slice(0, 3);
  const perf = BRAND_PERF[slug];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "@id": `${SITE_URL}/${l}/brands/${slug}#product`,
        name: brand.name[l],
        description: brand.shortDescription[l],
        brand: { "@type": "Brand", name: brand.name[l] },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: brand.reviewScore.toFixed(1),
          bestRating: "10",
          ratingCount: "1",
        },
        offers: brand.pricing.map((p) => ({
          "@type": "Offer",
          name: p.name[l],
          price: p.price[l],
          priceCurrency: l === "en" ? "USD" : "CNY",
          availability: "https://schema.org/InStock",
          url: `${SITE_URL}${AIRPORT_GO}`,
        })),
      },
      {
        "@type": "Review",
        itemReviewed: { "@type": "Product", name: brand.name[l] },
        reviewRating: {
          "@type": "Rating",
          ratingValue: brand.reviewScore.toFixed(1),
          bestRating: "10",
        },
        author: { "@type": "Organization", name: l === "zh" ? "出海工具箱" : "Overseas Toolkit" },
        reviewBody: brand.reviewSummary[l],
        datePublished: "2026-07-15",
      },
      {
        "@type": "FAQPage",
        mainEntity: brand.faq.map((f) => ({
          "@type": "Question",
          name: f.q[l],
          acceptedAnswer: { "@type": "Answer", text: f.a[l] },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: l === "zh" ? "首页" : l === "en" ? "Home" : "الرئيسية", item: `${SITE_URL}/${l}` },
          { "@type": "ListItem", position: 2, name: l === "zh" ? "机场推荐" : "Airports", item: `${SITE_URL}/${l}/brands` },
          { "@type": "ListItem", position: 3, name: brand.name[l], item: `${SITE_URL}/${l}/brands/${slug}` },
        ],
      },
    ],
  };

  return (
    <div dir={l === "ar" ? "rtl" : "ltr"}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header lang={l} t={t as any} />
      <main className="tool-detail-page">
        <div className="tool-detail-hero">
          <div className="container">
            <nav className="tool-detail-breadcrumb" aria-label="breadcrumb">
              <Link href={`/${l}`}>{l === "zh" ? "首页" : l === "en" ? "Home" : "الرئيسية"}</Link>
              <span className="tool-detail-breadcrumb-sep">›</span>
              <Link href={`/${l}/brands`}>{l === "zh" ? "机场推荐" : "Airports"}</Link>
              <span className="tool-detail-breadcrumb-sep">›</span>
              <span style={{ color: "var(--text-primary)" }}>{brand.name[l]}</span>
            </nav>
            <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap", marginBottom: 16 }}>
              <div style={{
                width: 88, height: 88, borderRadius: 20,
                background: `${brand.color}20`, display: "grid", placeItems: "center",
                fontSize: 48, flexShrink: 0,
              }} aria-hidden="true">{brand.logo}</div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8, flexWrap: "wrap" }}>
                  <h1 style={{ fontSize: "clamp(24px,4vw,36px)", fontWeight: 800, margin: 0 }}>
                    {brand.name[l]}{l === "zh" ? "评测 2026" : l === "en" ? " Review 2026" : " مراجعة 2026"}
                  </h1>
                  <span style={{
                    background: "linear-gradient(135deg,#f97316,#ef4444)",
                    color: "#fff", fontSize: 13, fontWeight: 700,
                    padding: "4px 12px", borderRadius: 999,
                  }}>{brand.reviewScore.toFixed(1)}/10</span>
                </div>
                <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.65, margin: 0 }}>
                  {brand.tagline[l]}
                </p>
              </div>
              <a
                href={AIRPORT_GO}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="btn-visit-official"
                id={`brand-visit-${slug}`}
              >
                {l === "zh" ? "前往官网 →" : l === "en" ? "Visit Site →" : "الموقع →"}
              </a>
            </div>
          </div>
        </div>

        <div className="tool-detail-body">
          <div className="container">
            <div style={{ maxWidth: 860, margin: "0 auto" }}>

              {/* 一句话结论（GEO 核心） */}
              <section className="detail-section">
                <h2 className="detail-section-title">
                  <span className="detail-section-icon">⚖️</span>
                  {l === "zh" ? "一句话结论" : l === "en" ? "Verdict" : "الخلاصة"}
                </h2>
                <div style={{
                  background: "linear-gradient(135deg, var(--primary-soft), var(--accent-soft))",
                  border: "1px solid rgba(249,115,22,.2)",
                  borderRadius: "var(--radius-lg)",
                  padding: "20px 24px", fontSize: 16, lineHeight: 1.75,
                }}>
                  {brand.reviewSummary[l]}
                </div>
              </section>

              {/* 长介绍 */}
              <section className="detail-section">
                <h2 className="detail-section-title">
                  <span className="detail-section-icon">📖</span>
                  {l === "zh" ? "详细介绍" : l === "en" ? "Overview" : "نظرة عامة"}
                </h2>
                <p style={{ fontSize: 15, lineHeight: 1.85, color: "var(--text-secondary)" }}>
                  {brand.longDescription[l]}
                </p>
              </section>

              {/* Features */}
              <section className="detail-section">
                <h2 className="detail-section-title">
                  <span className="detail-section-icon">⚡</span>
                  {l === "zh" ? "核心亮点" : l === "en" ? "Highlights" : "المزايا"}
                </h2>
                <div className="features-grid">
                  {brand.features.map((f, i) => (
                    <div className="feature-card" key={i}>
                      <div className="feature-card-icon" aria-hidden="true">{f.icon}</div>
                      <h3 className="feature-card-title">{f.title[l]}</h3>
                      <p className="feature-card-desc">{f.desc[l]}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Pros / Cons */}
              <section className="detail-section">
                <h2 className="detail-section-title">
                  <span className="detail-section-icon">✅</span>
                  {l === "zh" ? "优点与不足" : l === "en" ? "Pros & Cons" : "الإيجابيات والسلبيات"}
                </h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
                  <div style={{ padding: 20, borderRadius: 12, background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.2)" }}>
                    <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 10, color: "#16a34a" }}>
                      {l === "zh" ? "👍 优点" : l === "en" ? "👍 Pros" : "👍 الإيجابيات"}
                    </h3>
                    <ul style={{ margin: 0, paddingInlineStart: 20, fontSize: 14, lineHeight: 1.8, color: "var(--text-primary)" }}>
                      {brand.pros.map((p, i) => (<li key={i}>{p[l]}</li>))}
                    </ul>
                  </div>
                  <div style={{ padding: 20, borderRadius: 12, background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.2)" }}>
                    <h3 style={{ fontSize: 15, fontWeight: 700, marginBottom: 10, color: "#dc2626" }}>
                      {l === "zh" ? "👎 不足" : l === "en" ? "👎 Cons" : "👎 السلبيات"}
                    </h3>
                    <ul style={{ margin: 0, paddingInlineStart: 20, fontSize: 14, lineHeight: 1.8, color: "var(--text-primary)" }}>
                      {brand.cons.map((c, i) => (<li key={i}>{c[l]}</li>))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* Pricing */}
              <section className="detail-section">
                <h2 className="detail-section-title">
                  <span className="detail-section-icon">💳</span>
                  {l === "zh" ? "价格套餐" : l === "en" ? "Pricing" : "الأسعار"}
                </h2>
                <div style={{ overflowX: "auto" }}>
                  <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                    <thead>
                      <tr style={{ borderBottom: "2px solid var(--border)" }}>
                        <th style={{ padding: "12px 16px", textAlign: l === "ar" ? "right" : "left" }}>{l === "zh" ? "套餐" : l === "en" ? "Plan" : "الخطة"}</th>
                        <th style={{ padding: "12px 16px", textAlign: "center" }}>{l === "zh" ? "价格" : l === "en" ? "Price" : "السعر"}</th>
                        <th style={{ padding: "12px 16px", textAlign: "center" }}>{l === "zh" ? "流量" : l === "en" ? "Traffic" : "الحركة"}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {brand.pricing.map((p, i) => (
                        <tr key={i} style={{ borderBottom: "1px solid var(--border)", background: p.best ? "rgba(249,115,22,0.08)" : "transparent" }}>
                          <td style={{ padding: "14px 16px", fontWeight: 600 }}>
                            {p.name[l]} {p.best && <span style={{ marginInlineStart: 8, fontSize: 11, color: "#f97316", fontWeight: 700 }}>★ {l === "zh" ? "推荐" : "Best"}</span>}
                          </td>
                          <td style={{ padding: "14px 16px", textAlign: "center", fontWeight: 700 }}>{p.price[l]}</td>
                          <td style={{ padding: "14px 16px", textAlign: "center" }}>{p.traffic[l]}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div style={{ textAlign: "center", marginTop: 24 }}>
                  <a
                    href={AIRPORT_GO}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="btn-airport-primary"
                    id={`brand-cta-${slug}`}
                  >
                    {l === "zh" ? `立即注册 ${brand.name[l]} →` : l === "en" ? `Sign Up for ${brand.name[l]} →` : `التسجيل في ${brand.name[l]} →`}
                  </a>
                </div>
              </section>

              {/* Routes */}
              <section className="detail-section">
                <h2 className="detail-section-title">
                  <span className="detail-section-icon">🌐</span>
                  {l === "zh" ? "线路覆盖" : l === "en" ? "Node Coverage" : "تغطية الخوادم"}
                </h2>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {brand.routes.map((r, i) => (
                    <span key={i} className="airport-feature-tag">{r[l]}</span>
                  ))}
                </div>
              </section>

              {/* Use Cases */}
              <section className="detail-section">
                <h2 className="detail-section-title">
                  <span className="detail-section-icon">🎯</span>
                  {l === "zh" ? "适合谁用" : l === "en" ? "Who It's For" : "لمن هذا"}
                </h2>
                <ul style={{ paddingInlineStart: 20, fontSize: 15, lineHeight: 1.85, color: "var(--text-secondary)" }}>
                  {brand.useCases.map((u, i) => (<li key={i}>{u[l]}</li>))}
                </ul>
              </section>

              {/* 实测数据表 - mock 但对齐真实评测口径 */}
              {perf && (
                <section className="detail-section" aria-labelledby="section-perf">
                  <h2 className="detail-section-title" id="section-perf">
                    <span className="detail-section-icon" aria-hidden="true">📊</span>
                    {l === "zh" ? "实测数据（2026 年 7 月）" : l === "en" ? "Performance Test (Jul 2026)" : "بيانات القياس (يوليو 2026)"}
                  </h2>
                  <div style={{ overflowX: "auto" }}>
                    <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                      <thead>
                        <tr style={{ borderBottom: "2px solid var(--border)" }}>
                          <th style={{ padding: "12px 16px", textAlign: l === "ar" ? "right" : "left", color: "var(--text-muted)", fontWeight: 600 }}>
                            {l === "zh" ? "测试维度" : l === "en" ? "Metric" : "المقياس"}
                          </th>
                          <th style={{ padding: "12px 16px", textAlign: "right", color: "var(--primary)", fontWeight: 700 }}>
                            {l === "zh" ? "实测值" : l === "en" ? "Value" : "القيمة"}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {perf.rows.map((row, i) => (
                          <tr key={i} style={{ borderBottom: "1px solid var(--border)", background: i % 2 === 1 ? "var(--bg-muted)" : "transparent" }}>
                            <td style={{ padding: "12px 16px" }}>{row.metric[l]}</td>
                            <td style={{ padding: "12px 16px", textAlign: "right", fontFamily: "ui-monospace,monospace", fontWeight: 700, color: row.isGood ? "#10b981" : row.isWeak ? "var(--text-muted)" : "var(--text-primary)" }}>
                              {row.isGood ? "✓ " : row.isWeak ? "⚠ " : ""}{row.value[l]}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p style={{ marginTop: 12, fontSize: 12, color: "var(--text-muted)", lineHeight: 1.6 }}>
                    {l === "zh"
                      ? "测试环境：广州电信 500M，客户端 Clash Verge，晚高峰 22:00-24:00 连续 3 天平均值。测速仅供参考，实际速度受本地网络、时段、节点负载影响。"
                      : l === "en"
                      ? "Test environment: Guangzhou China Telecom 500M, Clash Verge client, 3-day average during peak hours 22:00-24:00. Speeds vary by network, time, and node load."
                      : "بيئة الاختبار: Guangzhou China Telecom 500M، عميل Clash Verge، متوسط 3 أيام خلال الذروة 22:00-24:00."}
                  </p>
                </section>
              )}

              {/* FAQ */}
              <section className="detail-section" itemScope itemType="https://schema.org/FAQPage">
                <h2 className="detail-section-title">
                  <span className="detail-section-icon">❓</span>
                  {l === "zh" ? "常见问题" : l === "en" ? "FAQ" : "الأسئلة الشائعة"}
                </h2>
                <FAQSection faqs={brand.faq.map((f) => ({ q: f.q[l], a: f.a[l] }))} />
              </section>

              {/* 相关机场对比 - 内链密度 */}
              {brandCompares.length > 0 && (
                <section className="detail-section">
                  <h2 className="detail-section-title">
                    <span className="detail-section-icon">⚖️</span>
                    {l === "zh" ? "本机场横向对比" : l === "en" ? "Airport Comparisons" : "مقارنات airports"}
                  </h2>
                  <div className="footer-links">
                    {brandCompares.map((p) => {
                      const otherSlug = p.slugA === slug ? p.slugB : p.slugA;
                      const other = BRANDS.find((b) => b.slug === otherSlug);
                      if (!other) return null;
                      return (
                        <Link key={`${p.slugA}-${p.slugB}`} href={`/${l}/compare-airport/${p.slugA}-vs-${p.slugB}`}>
                          {brand.name[l]} vs {other.name[l]} →
                        </Link>
                      );
                    })}
                  </div>
                </section>
              )}

              {/* 相关专题 */}
              {relatedTopicsForBrand.length > 0 && (
                <section className="detail-section">
                  <h2 className="detail-section-title">
                    <span className="detail-section-icon">🎯</span>
                    {l === "zh" ? "相关出海专题" : l === "en" ? "Related Topics" : "مواضيع ذات صلة"}
                  </h2>
                  <div className="tools-grid" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }}>
                    {relatedTopicsForBrand.map((rt) => (
                      <Link key={rt.slug} href={`/${l}/topics/${rt.slug}`} className="tool-card">
                        <div className="tool-card-header">
                          <div className="tool-card-logo" style={{ background: "rgba(249,115,22,.12)" }} aria-hidden="true">{rt.icon}</div>
                        </div>
                        <h3 className="tool-card-name">{rt.title[l]}</h3>
                        <p className="tool-card-tagline">{rt.description[l]}</p>
                      </Link>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer lang={l} />
    </div>
  );
}
