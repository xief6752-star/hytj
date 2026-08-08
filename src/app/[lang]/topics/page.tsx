import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { TOPICS } from "@/data/topics";
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
      ? "出海专题 2026：ChatGPT / AI 绘画 / 漫剧 / 机场推荐 一站合集"
      : l === "en"
      ? "Overseas Topics 2026: ChatGPT · AI Art · Manju · VPN — All-in-One"
      : "المواضيع الشاملة 2026: ChatGPT و AI و Manju و VPN";
  const desc =
    l === "zh"
      ? "按意图分组的出海工具专题合集：ChatGPT 国内使用、AI 绘画全家桶、开发者提速、YouTube 视频加速、海外漫剧短剧 APP、机场推荐等，一次找齐。"
      : l === "en"
      ? "Intent-grouped topic hubs for going global: ChatGPT in China, AI image generation, dev acceleration, YouTube speed-up, overseas short-drama apps, VPN recommendations."
      : "مجموعات مواضيع مصنفة حسب الهدف: ChatGPT في الصين، توليد الصور بالذكاء الاصطناعي، تسريع المطورين، وأكثر.";
  return {
    title,
    description: desc,
    alternates: {
      canonical: `${SITE_URL}/${l}/topics`,
      languages: {
        "zh-CN": `${SITE_URL}/zh/topics`,
        "en-US": `${SITE_URL}/en/topics`,
        "ar": `${SITE_URL}/ar/topics`,
      },
    },
  };
}

export default async function TopicsIndexPage({
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
    "@graph": [
      {
        "@type": "CollectionPage",
        name: l === "zh" ? "出海专题合集 2026" : l === "en" ? "Overseas Topics 2026" : "المواضيع 2026",
        url: `${SITE_URL}/${l}/topics`,
        inLanguage: l === "zh" ? "zh-CN" : l === "en" ? "en-US" : "ar",
      },
      {
        "@type": "ItemList",
        numberOfItems: TOPICS.length,
        itemListElement: TOPICS.map((topic, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: topic.title[l],
          url: `${SITE_URL}/${l}/topics/${topic.slug}`,
          description: topic.description[l],
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: l === "zh" ? "首页" : l === "en" ? "Home" : "الرئيسية", item: `${SITE_URL}/${l}` },
          { "@type": "ListItem", position: 2, name: l === "zh" ? "专题" : l === "en" ? "Topics" : "المواضيع", item: `${SITE_URL}/${l}/topics` },
        ],
      },
    ],
  };

  return (
    <div dir={l === "ar" ? "rtl" : "ltr"}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header lang={l} t={t as any} />
      <main style={{ minHeight: "100vh" }} id="main-content">
        <div className="tool-detail-hero">
          <div className="container">
            <nav className="tool-detail-breadcrumb" aria-label="breadcrumb">
              <Link href={`/${l}`}>{l === "zh" ? "首页" : l === "en" ? "Home" : "الرئيسية"}</Link>
              <span className="tool-detail-breadcrumb-sep">›</span>
              <span style={{ color: "var(--text-primary)" }}>{l === "zh" ? "专题" : l === "en" ? "Topics" : "المواضيع"}</span>
            </nav>
            <h1 style={{ fontSize: "clamp(28px,4vw,44px)", fontWeight: 800, lineHeight: 1.2, marginBottom: 16 }}>
              {l === "zh" ? "出海专题合集 2026" : l === "en" ? "Overseas Topics 2026" : "المواضيع الشاملة 2026"}
            </h1>
            <p style={{ fontSize: 17, color: "var(--text-secondary)", lineHeight: 1.7, maxWidth: 720 }}>
              {l === "zh"
                ? "按使用意图组织的一站式专题：每个专题聚合 3-6 个工具卡、注册与加速教程、常见问题与相关专题跳转。"
                : l === "en"
                ? "Intent-grouped one-stop hubs: each topic bundles 3-6 tools, sign-up + speed-up guides, FAQs, and links to related hubs."
                : "مواضيع منظمة حسب النية: كل موضوع يجمع 3-6 أدوات وشروحات وأسئلة شائعة."}
            </p>
          </div>
        </div>

        <div className="container" style={{ padding: "48px 24px 80px" }}>
          <div className="tools-grid">
            {TOPICS.map((topic) => (
              <Link
                key={topic.slug}
                href={`/${l}/topics/${topic.slug}`}
                className="tool-card"
              >
                <div className="tool-card-header">
                  <div className="tool-card-logo" style={{ background: "rgba(249,115,22,.12)" }} aria-hidden="true">
                    {topic.icon}
                  </div>
                </div>
                <h2 className="tool-card-name">{topic.title[l]}</h2>
                <p className="tool-card-tagline">{topic.description[l]}</p>
                <div style={{ marginTop: 12, display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {topic.keywords.slice(0, 3).map((kw) => (
                    <span
                      key={kw}
                      style={{
                        fontSize: 11,
                        color: "var(--text-muted)",
                        background: "var(--bg-muted)",
                        padding: "3px 8px",
                        borderRadius: 999,
                      }}
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>

          <div style={{ marginTop: 48 }}>
            <AirportBanner lang={l} variant="banner" />
          </div>
        </div>
      </main>
      <Footer lang={l} />
    </div>
  );
}
