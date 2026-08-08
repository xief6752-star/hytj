import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { TOOLS, CATEGORIES } from "@/data/tools";
import { UI_TEXT, SITE_URL, type Lang } from "@/data/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AirportBanner from "@/components/AirportBanner";

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
      ? "出海工具常见问题库 2026 · 100+ 高频问题一站解答"
      : l === "en"
      ? "Overseas Toolkit FAQ 2026 — 100+ Common Questions Answered"
      : "أسئلة أدوات المغتربين الشائعة 2026 — أكثر من 100 إجابة";
  return {
    title,
    description:
      l === "zh"
        ? "2026 出海工具箱常见问题库：ChatGPT / Claude / YouTube / Shopify 等 20+ 工具的国内使用、注册、支付、加速方案 100+ 高频问题集中解答，附机场推荐。"
        : l === "en"
        ? "The 2026 Overseas Toolkit FAQ hub: 100+ high-frequency questions on how to use ChatGPT, Claude, YouTube, Shopify and 20+ tools from China, with sign-up, payment, and VPN tips."
        : "مركز الأسئلة الشائعة 2026 لأدوات المغتربين: أكثر من 100 سؤال عن استخدام ChatGPT و Claude و YouTube وغيرها من الصين، مع نصائح التسجيل والدفع والـVPN.",
    keywords: l === "zh"
      ? ["出海工具常见问题", "chatgpt 常见问题", "科学上网常见问题", "机场推荐 faq", "2026 出海 faq"]
      : ["overseas tools faq", "chatgpt faq", "china vpn faq", "2026 tools faq"],
    alternates: {
      canonical: `${SITE_URL}/${l}/faq`,
      languages: {
        "zh-CN": `${SITE_URL}/zh/faq`,
        "en-US": `${SITE_URL}/en/faq`,
        "ar": `${SITE_URL}/ar/faq`,
      },
    },
  };
}

const CAT_ORDER = ["ai", "social", "dev", "video", "office", "ecommerce", "learning"];

export default async function FAQPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (lang !== "zh" && lang !== "en" && lang !== "ar") notFound();
  const l = lang as Lang;
  const t = UI_TEXT[l];

  // 平铺所有 FAQ，为 FAQPage schema 使用（Google 会挑其中一部分显示富摘要）
  const allFaqs = TOOLS.flatMap((tool) =>
    tool.faqs.map((f, i) => ({
      toolSlug: tool.slug,
      toolName: tool.name[l],
      toolCategory: tool.category,
      logo: tool.logo,
      color: tool.color,
      id: `${tool.slug}-q${i + 1}`,
      q: f.q[l],
      a: f.a[l],
    }))
  );

  // 只把前 25 条塞进 FAQPage schema，避免过大；正文列出全部
  const faqSchemaItems = allFaqs.slice(0, 25);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        mainEntity: faqSchemaItems.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: l === "zh" ? "首页" : l === "en" ? "Home" : "الرئيسية", item: `${SITE_URL}/${l}` },
          { "@type": "ListItem", position: 2, name: l === "zh" ? "常见问题" : "FAQ", item: `${SITE_URL}/${l}/faq` },
        ],
      },
    ],
  };

  // 按分类分组
  const byCategory: Record<string, typeof allFaqs> = {};
  for (const f of allFaqs) {
    if (!byCategory[f.toolCategory]) byCategory[f.toolCategory] = [];
    byCategory[f.toolCategory].push(f);
  }

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
              <span style={{ color: "var(--text-primary)" }}>{l === "zh" ? "常见问题" : l === "en" ? "FAQ" : "الأسئلة الشائعة"}</span>
            </nav>
            <h1 style={{ fontSize: "clamp(24px,4vw,40px)", fontWeight: 800, lineHeight: 1.2, marginBottom: 12 }}>
              {l === "zh" ? "出海工具常见问题库 2026" : l === "en" ? "Overseas Toolkit FAQ 2026" : "الأسئلة الشائعة 2026"}
            </h1>
            <p style={{ fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.7, maxWidth: 720 }}>
              {l === "zh"
                ? `20+ 出海工具的国内使用、注册、支付、加速问题一站式解答，共 ${allFaqs.length} 条。`
                : l === "en"
                ? `${allFaqs.length} answers to how-to-use, sign-up, payment, and VPN questions across 20+ tools.`
                : `${allFaqs.length} إجابة على أسئلة الاستخدام والتسجيل والدفع والـVPN عبر 20+ أداة.`}
            </p>
          </div>
        </div>

        <div className="container" style={{ padding: "48px 24px 80px" }}>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>

            {/* 目录 */}
            <nav style={{
              marginBottom: 40,
              padding: 20,
              background: "var(--bg-muted)",
              borderRadius: 12,
              border: "1px solid var(--border)",
            }}>
              <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 12 }}>
                {l === "zh" ? "目录" : l === "en" ? "Contents" : "المحتويات"}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                {CAT_ORDER.filter((cid) => byCategory[cid]?.length).map((cid) => {
                  const cat = CATEGORIES.find((c) => c.id === cid);
                  const count = byCategory[cid].length;
                  return (
                    <a
                      key={cid}
                      href={`#cat-${cid}`}
                      style={{
                        fontSize: 14, fontWeight: 600,
                        color: "var(--primary)",
                        textDecoration: "none",
                        padding: "6px 12px",
                        borderRadius: 999,
                        background: "var(--primary-soft)",
                      }}
                    >
                      {cat?.icon} {cat?.label[l]} ({count})
                    </a>
                  );
                })}
              </div>
            </nav>

            {CAT_ORDER.map((cid) => {
              const list = byCategory[cid];
              if (!list?.length) return null;
              const cat = CATEGORIES.find((c) => c.id === cid);
              return (
                <section key={cid} id={`cat-${cid}`} className="detail-section" style={{ scrollMarginTop: 80 }}>
                  <h2 className="detail-section-title">
                    <span className="detail-section-icon">{cat?.icon}</span>
                    {cat?.label[l]}
                    <span style={{ marginInlineStart: 8, fontSize: 14, fontWeight: 500, color: "var(--text-muted)" }}>
                      ({list.length})
                    </span>
                  </h2>
                  <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    {list.map((f) => (
                      <details
                        key={f.id}
                        id={f.id}
                        style={{
                          padding: "16px 20px",
                          border: "1px solid var(--border)",
                          borderRadius: 10,
                          background: "var(--bg-card)",
                          scrollMarginTop: 80,
                        }}
                      >
                        <summary style={{ cursor: "pointer", fontWeight: 600, fontSize: 15, color: "var(--text-primary)", listStyle: "none" }}>
                          <span style={{ marginInlineEnd: 8, color: "var(--primary)" }}>Q.</span>
                          {f.q}
                          <Link
                            href={`/${l}/tools/${f.toolSlug}`}
                            style={{ marginInlineStart: 8, fontSize: 12, fontWeight: 500, color: "var(--text-muted)", textDecoration: "none" }}
                          >
                            {f.logo} {f.toolName}
                          </Link>
                        </summary>
                        <div style={{ marginTop: 12, fontSize: 14, lineHeight: 1.75, color: "var(--text-secondary)" }}>
                          <span style={{ marginInlineEnd: 8, color: "var(--accent-dark)", fontWeight: 700 }}>A.</span>
                          {f.a}
                        </div>
                      </details>
                    ))}
                  </div>
                </section>
              );
            })}

            <div style={{ marginTop: 40 }}>
              <AirportBanner lang={l} variant="banner" />
            </div>
          </div>
        </div>
      </main>
      <Footer lang={l} />
    </div>
  );
}
