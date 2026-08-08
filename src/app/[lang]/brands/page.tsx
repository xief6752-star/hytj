import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { BRANDS } from "@/data/brands";
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
    l === "zh" ? "2026 机场推荐榜 · 稳定专线机场评测"
    : l === "en" ? "2026 Airport (VPN) Rankings & Reviews"
    : "تصنيفات وتقييمات airports (VPN) 2026";
  const description =
    l === "zh" ? "2026 稳定/便宜/专线机场推荐榜：真实测速、晚高峰实测、流媒体解锁验证、跑路风险跟踪，收录云图机场等主流机场的深度评测。"
    : l === "en" ? "2026 airport (VPN) rankings — real-world speed tests, peak-hour reliability, streaming unlock verification, and reviews of YunTu and other top brands."
    : "تصنيفات airports 2026 — اختبارات سرعة حقيقية، موثوقية ذروة، فتح البث، مراجعات YunTu وغيرها.";

  return {
    title,
    description,
    keywords: l === "zh" ? [
      "2026 机场推荐", "机场评测", "稳定机场推荐", "便宜机场推荐", "专线机场推荐",
      "IPLC 机场", "云图机场", "云图机场评测", "梯子推荐", "魔法梯子",
    ] : [
      "2026 airport ranking", "VPN review", "IPLC VPN", "YunTu VPN", "airport benchmark",
    ],
    alternates: {
      canonical: `${SITE_URL}/${l}/brands`,
      languages: {
        "zh-CN": `${SITE_URL}/zh/brands`,
        "en-US": `${SITE_URL}/en/brands`,
        "ar": `${SITE_URL}/ar/brands`,
      },
    },
  };
}

export default async function BrandsIndexPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (lang !== "zh" && lang !== "en" && lang !== "ar") notFound();
  const l = lang as Lang;
  const t = UI_TEXT[l];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: l === "zh" ? "2026 机场推荐榜" : "2026 Airport Rankings",
    numberOfItems: BRANDS.length,
    itemListElement: BRANDS.map((b, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: b.name[l],
      url: `${SITE_URL}/${l}/brands/${b.slug}`,
      description: b.shortDescription[l],
    })),
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
              <span style={{ color: "var(--text-primary)" }}>{l === "zh" ? "机场推荐" : l === "en" ? "Airports" : "Airports"}</span>
            </nav>
            <h1 style={{ fontSize: "clamp(24px,4vw,40px)", fontWeight: 800, marginBottom: 16 }}>
              {l === "zh" ? "2026 机场推荐榜 · 稳定专线机场评测" : l === "en" ? "2026 Airport (VPN) Rankings & Reviews" : "تصنيفات airports 2026"}
            </h1>
            <p style={{ fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.75, maxWidth: 800 }}>
              {l === "zh"
                ? "只收录我们亲测过、正常营运、无跑路风险的机场品牌。所有评测都是真实使用体验，绝不接受付费植入 — 榜单每月复核一次。"
                : l === "en"
                ? "Only brands we've personally tested and that are actively maintained. All reviews are firsthand — no paid placements. List reviewed monthly."
                : "علامات اختبرناها بأنفسنا فقط — لا وسائط مدفوعة، مراجعة شهرية."}
            </p>
          </div>
        </div>

        <div className="tool-detail-body">
          <div className="container">
            <div style={{ maxWidth: 900, margin: "0 auto" }}>
              <div className="tools-grid" style={{ gridTemplateColumns: "1fr", gap: 20 }}>
                {BRANDS.map((b) => (
                  <Link key={b.slug} href={`/${l}/brands/${b.slug}`} className="tool-card" style={{ padding: 28 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
                      <div style={{
                        width: 72, height: 72, borderRadius: 16,
                        background: `${b.color}20`, display: "grid", placeItems: "center",
                        fontSize: 40, flexShrink: 0,
                      }} aria-hidden="true">{b.logo}</div>
                      <div style={{ flex: 1, minWidth: 240 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap", marginBottom: 6 }}>
                          <h2 style={{ fontSize: 22, fontWeight: 800, margin: 0 }}>{b.name[l]}</h2>
                          <span style={{
                            background: "linear-gradient(135deg,#f97316,#ef4444)",
                            color: "#fff", fontSize: 12, fontWeight: 700,
                            padding: "2px 10px", borderRadius: 999,
                          }}>{b.reviewScore.toFixed(1)}/10</span>
                        </div>
                        <p style={{ fontSize: 14, color: "var(--text-muted)", marginBottom: 8 }}>{b.tagline[l]}</p>
                        <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.65 }}>{b.shortDescription[l]}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              <div style={{ marginTop: 40 }}>
                <AirportBanner lang={l} variant="banner" />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer lang={l} />
    </div>
  );
}
