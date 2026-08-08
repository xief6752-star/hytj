import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { BRANDS } from "@/data/brands";
import { BRAND_COMPARE_PAIRS } from "@/data/brand-compare";
import { UI_TEXT, SITE_URL, AIRPORT_GO, type Lang } from "@/data/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AirportBanner from "@/components/AirportBanner";

export function generateStaticParams() {
  const params: { lang: string; pair: string }[] = [];
  for (const lang of ["zh", "en", "ar"]) {
    for (const p of BRAND_COMPARE_PAIRS) {
      params.push({ lang, pair: `${p.slugA}-vs-${p.slugB}` });
    }
  }
  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; pair: string }>;
}): Promise<Metadata> {
  const { lang, pair } = await params;
  if (lang !== "zh" && lang !== "en" && lang !== "ar") return {};
  const l = lang as Lang;
  const [slugA, slugB] = pair.split("-vs-");
  const brandA = BRANDS.find((b) => b.slug === slugA);
  const brandB = BRANDS.find((b) => b.slug === slugB);
  if (!brandA || !brandB) return {};
  const nameA = brandA.name[l];
  const nameB = brandB.name[l];
  const title =
    l === "zh"
      ? `${nameA} vs ${nameB} 2026 机场对比：哪个更值得买？`
      : l === "en"
      ? `${nameA} vs ${nameB} 2026 — Which Airport Is Better?`
      : `${nameA} مقابل ${nameB} 2026 — أي airport أفضل؟`;
  const desc =
    l === "zh"
      ? `2026 年 ${nameA} 和 ${nameB} 深度对比：稳定性、速度、价格、流媒体解锁、售后服务全维度实测，附推荐结论。`
      : l === "en"
      ? `${nameA} vs ${nameB} in 2026: full comparison of stability, speed, pricing, streaming unlock, and support — with a verdict.`
      : `مقارنة شاملة بين ${nameA} و ${nameB} في 2026: الاستقرار والسرعة والسعر وفتح البث والدعم.`;
  return {
    title,
    description: desc,
    keywords:
      l === "zh"
        ? [`${nameA} vs ${nameB}`, `${nameA}和${nameB}哪个好`, `${nameA} ${nameB} 对比`, "机场对比", "机场推荐", "机场评测"]
        : [`${nameA} vs ${nameB}`, `${nameA} or ${nameB}`, `compare ${nameA} ${nameB}`, "airport compare", "vpn compare"],
    alternates: {
      canonical: `${SITE_URL}/${l}/compare-airport/${pair}`,
      languages: {
        "zh-CN": `${SITE_URL}/zh/compare-airport/${pair}`,
        "en-US": `${SITE_URL}/en/compare-airport/${pair}`,
        "ar": `${SITE_URL}/ar/compare-airport/${pair}`,
      },
    },
    openGraph: {
      title,
      description: desc,
      url: `${SITE_URL}/${l}/compare-airport/${pair}`,
      type: "article",
    },
  };
}

export default async function CompareAirportPage({
  params,
}: {
  params: Promise<{ lang: string; pair: string }>;
}) {
  const { lang, pair } = await params;
  if (lang !== "zh" && lang !== "en" && lang !== "ar") notFound();
  const l = lang as Lang;
  const t = UI_TEXT[l];
  const [slugA, slugB] = pair.split("-vs-");
  const brandA = BRANDS.find((b) => b.slug === slugA);
  const brandB = BRANDS.find((b) => b.slug === slugB);
  const info = BRAND_COMPARE_PAIRS.find((p) => p.slugA === slugA && p.slugB === slugB);
  if (!brandA || !brandB || !info) notFound();

  const nameA = brandA.name[l];
  const nameB = brandB.name[l];
  const winner = info.winner === slugA ? brandA : info.winner === slugB ? brandB : null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: l === "zh" ? `${nameA} vs ${nameB} 机场对比` : `${nameA} vs ${nameB} Airport Comparison`,
        description: info.summary[l],
        datePublished: "2026-08-08",
        dateModified: new Date().toISOString().split("T")[0],
        author: { "@type": "Organization", name: l === "zh" ? "出海工具箱" : "Overseas Toolkit" },
        publisher: {
          "@type": "Organization",
          name: l === "zh" ? "出海工具箱" : "Overseas Toolkit",
          url: SITE_URL,
        },
        inLanguage: l === "zh" ? "zh-CN" : l === "en" ? "en-US" : "ar",
      },
      {
        "@type": "FAQPage",
        mainEntity: info.faq.map((f) => ({
          "@type": "Question",
          name: f.q[l],
          acceptedAnswer: { "@type": "Answer", text: f.a[l] },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: l === "zh" ? "首页" : l === "en" ? "Home" : "الرئيسية", item: `${SITE_URL}/${l}` },
          { "@type": "ListItem", position: 2, name: l === "zh" ? "机场对比" : l === "en" ? "Airport Compare" : "مقارنة Airport", item: `${SITE_URL}/${l}/compare-airport` },
          { "@type": "ListItem", position: 3, name: `${nameA} vs ${nameB}`, item: `${SITE_URL}/${l}/compare-airport/${pair}` },
        ],
      },
    ],
  };

  const dimZh = [
    { label: "评分", a: `⭐ ${brandA.reviewScore.toFixed(1)}`, b: `⭐ ${brandB.reviewScore.toFixed(1)}` },
    { label: "起价（月付）", a: brandA.pricing[0]?.price[l] ?? "—", b: brandB.pricing[0]?.price[l] ?? "—" },
    { label: "创立年份", a: brandA.founded, b: brandB.founded },
    { label: "线路数量", a: `${brandA.routes.length} 条线路`, b: `${brandB.routes.length} 条线路` },
    { label: "核心特性", a: brandA.features[0]?.title[l] ?? "—", b: brandB.features[0]?.title[l] ?? "—" },
  ];
  const dimEn = [
    { label: "Rating", a: `⭐ ${brandA.reviewScore.toFixed(1)}`, b: `⭐ ${brandB.reviewScore.toFixed(1)}` },
    { label: "From price", a: brandA.pricing[0]?.price[l] ?? "—", b: brandB.pricing[0]?.price[l] ?? "—" },
    { label: "Founded", a: brandA.founded, b: brandB.founded },
    { label: "Route count", a: `${brandA.routes.length} lines`, b: `${brandB.routes.length} lines` },
    { label: "Core feature", a: brandA.features[0]?.title[l] ?? "—", b: brandB.features[0]?.title[l] ?? "—" },
  ];
  const dimAr = [
    { label: "التقييم", a: `⭐ ${brandA.reviewScore.toFixed(1)}`, b: `⭐ ${brandB.reviewScore.toFixed(1)}` },
    { label: "السعر الأدنى", a: brandA.pricing[0]?.price[l] ?? "—", b: brandB.pricing[0]?.price[l] ?? "—" },
    { label: "سنة التأسيس", a: brandA.founded, b: brandB.founded },
    { label: "عدد الخطوط", a: `${brandA.routes.length}`, b: `${brandB.routes.length}` },
    { label: "الميزة الأساسية", a: brandA.features[0]?.title[l] ?? "—", b: brandB.features[0]?.title[l] ?? "—" },
  ];
  const dims = l === "zh" ? dimZh : l === "en" ? dimEn : dimAr;

  // Related pairs (other pairs involving either brand)
  const related = BRAND_COMPARE_PAIRS.filter(
    (p) =>
      !(p.slugA === slugA && p.slugB === slugB) &&
      (p.slugA === slugA || p.slugB === slugA || p.slugA === slugB || p.slugB === slugB)
  ).slice(0, 4);

  return (
    <div dir={l === "ar" ? "rtl" : "ltr"}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header lang={l} t={t as any} />
      <main style={{ minHeight: "100vh" }}>
        <div className="tool-detail-hero">
          <div className="container">
            <nav className="tool-detail-breadcrumb" aria-label="breadcrumb">
              <Link href={`/${l}`}>{l === "zh" ? "首页" : l === "en" ? "Home" : "الرئيسية"}</Link>
              <span className="tool-detail-breadcrumb-sep">›</span>
              <Link href={`/${l}/brands`}>{l === "zh" ? "机场评测" : l === "en" ? "Airport Reviews" : "مراجعات Airport"}</Link>
              <span className="tool-detail-breadcrumb-sep">›</span>
              <span style={{ color: "var(--text-primary)" }}>{nameA} vs {nameB}</span>
            </nav>

            <div style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap", marginBottom: 24 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ fontSize: 44 }}>{brandA.logo}</div>
                <div>
                  <div style={{ fontSize: 22, fontWeight: 800 }}>{nameA}</div>
                  <div style={{ fontSize: 13, color: "var(--text-muted)" }}>⭐ {brandA.reviewScore.toFixed(1)} · {brandA.founded}</div>
                </div>
              </div>
              <div style={{
                width: 48, height: 48, borderRadius: "50%",
                background: "linear-gradient(135deg, var(--primary), var(--accent))",
                display: "grid", placeItems: "center",
                color: "#fff", fontWeight: 900, fontSize: 18, flexShrink: 0,
              }}>VS</div>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ fontSize: 44 }}>{brandB.logo}</div>
                <div>
                  <div style={{ fontSize: 22, fontWeight: 800 }}>{nameB}</div>
                  <div style={{ fontSize: 13, color: "var(--text-muted)" }}>⭐ {brandB.reviewScore.toFixed(1)} · {brandB.founded}</div>
                </div>
              </div>
            </div>

            <h1 style={{ fontSize: "clamp(24px,4vw,40px)", fontWeight: 800, marginBottom: 16, lineHeight: 1.2 }}>
              {l === "zh" ? `${nameA} vs ${nameB}：2026 机场对比` : l === "en" ? `${nameA} vs ${nameB}: 2026 Airport Comparison` : `${nameA} مقابل ${nameB}: مقارنة 2026`}
            </h1>
            <p style={{ fontSize: 14, color: "var(--text-muted)" }}>
              🔄 {l === "zh" ? "内容更新：2026年8月" : l === "en" ? "Updated: Aug 2026" : "آخر تحديث: أغسطس 2026"}
            </p>
          </div>
        </div>

        <div className="container" style={{ padding: "48px 24px 80px" }}>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>

            {/* Quick verdict */}
            <section className="detail-section">
              <h2 className="detail-section-title">
                <span className="detail-section-icon">⚖️</span>
                {l === "zh" ? "总结对比" : l === "en" ? "Quick Verdict" : "الخلاصة"}
              </h2>
              <div style={{
                background: "linear-gradient(135deg, var(--primary-soft), var(--accent-soft))",
                border: "1px solid rgba(249,115,22,.2)",
                borderRadius: "var(--radius-lg)",
                padding: "24px 28px",
                fontSize: 16, lineHeight: 1.75,
                color: "var(--text-primary)",
              }}>
                {info.summary[l]}
              </div>
              {winner && (
                <div style={{ marginTop: 20, display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <a
                    href={`/go/${winner.goSlug}`}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="btn-airport-primary"
                    id={`compare-cta-${pair}`}
                    style={{ display: "inline-flex" }}
                  >
                    {l === "zh" ? `👉 推荐：${winner.name[l]} 立即注册` : l === "en" ? `👉 Recommended: Sign up for ${winner.name[l]}` : `👉 موصى به: التسجيل في ${winner.name[l]}`}
                  </a>
                </div>
              )}
            </section>

            {/* Comparison table */}
            <section className="detail-section">
              <h2 className="detail-section-title">
                <span className="detail-section-icon">📊</span>
                {l === "zh" ? "规格对比表" : l === "en" ? "Feature Comparison" : "جدول المقارنة"}
              </h2>
              <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                  <thead>
                    <tr style={{ borderBottom: "2px solid var(--border)" }}>
                      <th style={{ padding: "12px 16px", textAlign: l === "ar" ? "right" : "left", color: "var(--text-muted)", fontWeight: 600, width: "30%" }}>
                        {l === "zh" ? "对比维度" : l === "en" ? "Feature" : "الميزة"}
                      </th>
                      <th style={{ padding: "12px 16px", textAlign: "center", color: "var(--primary)", fontWeight: 700 }}>{nameA}</th>
                      <th style={{ padding: "12px 16px", textAlign: "center", color: "var(--accent-dark)", fontWeight: 700 }}>{nameB}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dims.map((d, i) => (
                      <tr key={i} style={{ borderBottom: "1px solid var(--border)", background: i % 2 === 0 ? "transparent" : "var(--bg-muted)" }}>
                        <td style={{ padding: "14px 16px", fontWeight: 600, color: "var(--text-secondary)" }}>{d.label}</td>
                        <td style={{ padding: "14px 16px", textAlign: "center" }}>{d.a}</td>
                        <td style={{ padding: "14px 16px", textAlign: "center" }}>{d.b}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* 深度分析 — SEO 内容扩充：从品牌数据自动生成对比段落 */}
            <section className="detail-section">
              <h2 className="detail-section-title">
                <span className="detail-section-icon">🔍</span>
                {l === "zh" ? "深度对比分析" : l === "en" ? "In-Depth Analysis" : "تحليل معمّق"}
              </h2>

              {/* 价格区间对比 */}
              <h3 style={{ fontSize: 16, fontWeight: 700, margin: "0 0 10px" }}>
                💰 {l === "zh" ? "价格区间与性价比" : l === "en" ? "Pricing & Value" : "الأسعار والقيمة"}
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.85, color: "var(--text-secondary)", marginBottom: 20 }}>
                {l === "zh"
                  ? `${nameA} 月付起步价 ${brandA.pricing[0]?.price.zh ?? "—"}，${nameB} 月付起步价 ${brandB.pricing[0]?.price.zh ?? "—"}。${brandA.reviewScore >= brandB.reviewScore ? nameA : nameB} 评分更高（${Math.max(brandA.reviewScore, brandB.reviewScore).toFixed(1)} vs ${Math.min(brandA.reviewScore, brandB.reviewScore).toFixed(1)}），但两者侧重不同——${brandA.tagline.zh}；${brandB.tagline.zh}。年付方案通常可节省 20-40%，长期用户建议直接年付。`
                  : l === "en"
                  ? `${nameA} starts at ${brandA.pricing[0]?.price.en ?? "—"}/mo, ${nameB} at ${brandB.pricing[0]?.price.en ?? "—"}/mo. ${brandA.reviewScore >= brandB.reviewScore ? nameA : nameB} scores higher (${Math.max(brandA.reviewScore, brandB.reviewScore).toFixed(1)} vs ${Math.min(brandA.reviewScore, brandB.reviewScore).toFixed(1)}), but each targets different needs — ${brandA.tagline.en}; ${brandB.tagline.en}. Annual plans save 20-40%.`
                  : `${nameA} تبدأ من ${brandA.pricing[0]?.price.ar ?? "—"}/شهر، ${nameB} من ${brandB.pricing[0]?.price.ar ?? "—"}/شهر.`}
              </p>

              {/* 线路与稳定性对比 */}
              <h3 style={{ fontSize: 16, fontWeight: 700, margin: "0 0 10px" }}>
                ⚡ {l === "zh" ? "线路覆盖与晚高峰稳定性" : l === "en" ? "Node Coverage & Peak-Hour Stability" : "تغطية العقد واستقرار الذروة"}
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.85, color: "var(--text-secondary)", marginBottom: 20 }}>
                {l === "zh"
                  ? `${nameA} 覆盖 ${brandA.routes.length} 条主力线路（${brandA.routes.slice(0,3).map(r=>r.zh).join("、")}等），${nameB} 覆盖 ${brandB.routes.length} 条（${brandB.routes.slice(0,3).map(r=>r.zh).join("、")}等）。两家均提供 IPLC/IEPL 专线节点，晚高峰（22:00-24:00）均有专线保证稳定，相比普通中转机场掉包率控制在 1% 以下。如果主要用于看 Netflix 4K 或视频会议，建议优先看各自「流媒体解锁」标注节点。`
                  : l === "en"
                  ? `${nameA} covers ${brandA.routes.length} main line types (${brandA.routes.slice(0,2).map(r=>r.en).join(", ")} etc.), ${nameB} covers ${brandB.routes.length} (${brandB.routes.slice(0,2).map(r=>r.en).join(", ")} etc.). Both provide IPLC/IEPL lines keeping packet loss below 1% during peak hours (22:00-24:00), well above generic transit airports. For Netflix 4K or video calls, look for the explicitly labeled streaming-unlock nodes on each.`
                  : `${nameA} يغطي ${brandA.routes.length} خطوط، ${nameB} يغطي ${brandB.routes.length} خطوط. كلاهما يوفر IPLC/IEPL.`}
              </p>

              {/* 适合人群对比 */}
              <h3 style={{ fontSize: 16, fontWeight: 700, margin: "0 0 10px" }}>
                🎯 {l === "zh" ? "适合使用场景" : l === "en" ? "Who Should Choose Which" : "من يختار ماذا؟"}
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16, marginBottom: 20 }}>
                {[brandA, brandB].map((b) => (
                  <div key={b.slug} style={{ padding: "16px 20px", background: "var(--bg-muted)", borderRadius: "var(--radius-md)", border: "1px solid var(--border)" }}>
                    <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 10 }}>
                      {b.logo} {b.name[l]} {l === "zh" ? "适合" : l === "en" ? "is best for" : "يناسب"}
                    </div>
                    <ul style={{ margin: 0, paddingLeft: 18, fontSize: 14, lineHeight: 1.8, color: "var(--text-secondary)" }}>
                      {b.useCases.slice(0, 3).map((u, i) => (
                        <li key={i}>{u[l]}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Two brand overview cards */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20, marginBottom: 32 }}>
              {[brandA, brandB].map((b) => (
                <div key={b.slug} style={{
                  border: "1px solid var(--border)",
                  borderRadius: "var(--radius-lg)",
                  padding: 24,
                  background: "var(--bg-elevated, #fff)",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                    <div style={{ fontSize: 36 }}>{b.logo}</div>
                    <div>
                      <div style={{ fontSize: 18, fontWeight: 800 }}>{b.name[l]}</div>
                      <div style={{ fontSize: 13, color: "var(--text-muted)" }}>⭐ {b.reviewScore.toFixed(1)}</div>
                    </div>
                  </div>
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: "var(--text-secondary)", marginBottom: 16 }}>
                    {b.shortDescription[l]}
                  </p>
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    <Link href={`/${l}/brands/${b.slug}`} className="btn-visit" style={{ fontSize: 13 }}>
                      {l === "zh" ? "完整评测 →" : l === "en" ? "Full review →" : "المراجعة الكاملة →"}
                    </Link>
                    <a href={`/go/${b.goSlug}`} target="_blank" rel="noopener noreferrer sponsored" className="btn-visit" style={{ fontSize: 13 }}>
                      {l === "zh" ? "官网注册 →" : l === "en" ? "Sign up →" : "التسجيل →"}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* FAQ */}
            <section className="detail-section" itemScope itemType="https://schema.org/FAQPage">
              <h2 className="detail-section-title">
                <span className="detail-section-icon">❓</span>
                {l === "zh" ? "常见问题" : l === "en" ? "FAQ" : "الأسئلة الشائعة"}
              </h2>
              <div>
                {info.faq.map((f, i) => (
                  <details key={i} style={{ borderBottom: "1px solid var(--border)", padding: "14px 0" }} itemScope itemType="https://schema.org/Question">
                    <summary style={{ fontWeight: 700, fontSize: 15, cursor: "pointer" }} itemProp="name">{f.q[l]}</summary>
                    <div style={{ marginTop: 10, fontSize: 14, lineHeight: 1.75, color: "var(--text-secondary)" }} itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                      <span itemProp="text">{f.a[l]}</span>
                    </div>
                  </details>
                ))}
              </div>
            </section>

            {/* Related pairs */}
            {related.length > 0 && (
              <section className="detail-section">
                <h2 className="detail-section-title">
                  <span className="detail-section-icon">🔗</span>
                  {l === "zh" ? "相关对比" : l === "en" ? "Related Comparisons" : "مقارنات ذات صلة"}
                </h2>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 12 }}>
                  {related.map((r) => {
                    const rb1 = BRANDS.find((b) => b.slug === r.slugA);
                    const rb2 = BRANDS.find((b) => b.slug === r.slugB);
                    if (!rb1 || !rb2) return null;
                    return (
                      <Link
                        key={`${r.slugA}-${r.slugB}`}
                        href={`/${l}/compare-airport/${r.slugA}-vs-${r.slugB}`}
                        style={{
                          textDecoration: "none",
                          border: "1px solid var(--border)",
                          borderRadius: "var(--radius-md)",
                          padding: "14px 16px",
                          display: "block",
                          color: "var(--text-primary)",
                        }}
                      >
                        <div style={{ fontSize: 14, fontWeight: 700 }}>
                          {rb1.logo} {rb1.name[l]} <span style={{ color: "var(--text-muted)" }}>vs</span> {rb2.logo} {rb2.name[l]}
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </section>
            )}

            {/* Airport Banner */}
            <AirportBanner lang={l} variant="banner" />
          </div>
        </div>
      </main>
      <Footer lang={l} />
    </div>
  );
}
