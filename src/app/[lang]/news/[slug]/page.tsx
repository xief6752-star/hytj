import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { NEWS, NEWS_TAG_LABELS } from "@/data/news";
import { UI_TEXT, SITE_URL, type Lang } from "@/data/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AirportBanner from "@/components/AirportBanner";

export function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];
  for (const lang of ["zh", "en", "ar"]) {
    for (const article of NEWS) {
      params.push({ lang, slug: article.slug });
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
  const article = NEWS.find((a) => a.slug === slug);
  if (!article) return {};
  return {
    title: article.title[l],
    description: article.summary[l],
    alternates: {
      canonical: `${SITE_URL}/${l}/news/${slug}`,
      languages: {
        "zh-CN": `${SITE_URL}/zh/news/${slug}`,
        "en-US": `${SITE_URL}/en/news/${slug}`,
        "ar":    `${SITE_URL}/ar/news/${slug}`,
      },
    },
    openGraph: {
      title: article.title[l],
      description: article.summary[l],
      type: "article",
      publishedTime: article.date,
      modifiedTime: article.date,
    },
  };
}

// 简单 Markdown → HTML（只处理 ##、###、**、`、\n）
function mdToHtml(md: string): string {
  return md
    .replace(/^### (.+)$/gm, "<h3>$1</h3>")
    .replace(/^## (.+)$/gm, "<h2>$1</h2>")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/^- (.+)$/gm, "<li>$1</li>")
    .replace(/(<li>.*<\/li>\n?)+/g, (m) => `<ul>${m}</ul>`)
    .replace(/^(\d+)\. (.+)$/gm, "<li>$2</li>")
    .replace(/\n\n/g, "</p><p>")
    .replace(/^(?!<[hul]|<\/[hul]|<li)(.+)$/gm, "<p>$1</p>")
    .replace(/<p><\/p>/g, "");
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  if (lang !== "zh" && lang !== "en" && lang !== "ar") notFound();
  const l = lang as Lang;
  const t = UI_TEXT[l];
  const article = NEWS.find((a) => a.slug === slug);
  if (!article) notFound();

  const tagInfo = NEWS_TAG_LABELS[article.tag];
  const related = NEWS.filter((a) => a.tag === article.tag && a.slug !== slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "NewsArticle",
        headline: article.title[l],
        description: article.summary[l],
        datePublished: article.date,
        dateModified: article.date,
        image: `${SITE_URL}/og-image.png`,
        author: { "@type": "Organization", name: l === "zh" ? "出海工具箱" : "Overseas Toolkit" },
        publisher: {
          "@type": "Organization",
          name: l === "zh" ? "出海工具箱" : "Overseas Toolkit",
          url: SITE_URL,
        },
        mainEntityOfPage: `${SITE_URL}/${l}/news/${slug}`,
        inLanguage: l === "zh" ? "zh-CN" : l === "en" ? "en-US" : "ar",
        ...(article.sourceUrl ? { sameAs: article.sourceUrl } : {}),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: l === "zh" ? "首页" : l === "en" ? "Home" : "الرئيسية", item: `${SITE_URL}/${l}` },
          { "@type": "ListItem", position: 2, name: l === "zh" ? "出海资讯" : l === "en" ? "News" : "الأخبار", item: `${SITE_URL}/${l}/news` },
          { "@type": "ListItem", position: 3, name: article.title[l], item: `${SITE_URL}/${l}/news/${slug}` },
        ],
      },
    ],
  };

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
              <Link href={`/${l}/news`}>
                {l === "zh" ? "出海资讯" : l === "en" ? "News" : "الأخبار"}
              </Link>
              <span className="tool-detail-breadcrumb-sep">›</span>
              <span style={{ color: "var(--text-primary)" }}>{article.title[l].slice(0, 30)}…</span>
            </nav>

            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <span className="news-tag">{tagInfo.icon} {tagInfo[l]}</span>
              <time style={{ fontSize: 13, color: "var(--text-muted)" }} dateTime={article.date}>
                🔄 {new Date(article.date).toLocaleDateString(
                  l === "zh" ? "zh-CN" : l === "en" ? "en-US" : "ar",
                  { year: "numeric", month: "long", day: "numeric" }
                )}
              </time>
              {article.source && (
                <span style={{ fontSize: 13, color: "var(--text-muted)" }}>
                  · {l === "zh" ? "来源：" : "Source: "}
                  {article.sourceUrl
                    ? <a href={article.sourceUrl} target="_blank" rel="noopener noreferrer"
                        style={{ color: "var(--primary)", textDecoration: "none" }}>
                        {article.source}
                      </a>
                    : article.source}
                </span>
              )}
            </div>

            <h1 style={{ fontSize: "clamp(24px,4vw,42px)", fontWeight: 800, lineHeight: 1.2, marginBottom: 20 }}>
              <span style={{ marginRight: 12, fontSize: "0.85em" }}>{article.coverEmoji}</span>
              {article.title[l]}
            </h1>
            <p style={{ fontSize: 17, color: "var(--text-secondary)", lineHeight: 1.7, maxWidth: 720 }}>
              {article.summary[l]}
            </p>
          </div>
        </div>

        <div className="container" style={{ padding: "48px 24px 80px" }}>
          <div className="news-detail-layout">
            {/* 主内容 */}
            <div className="news-detail-main">
              <div
                className="news-content prose"
                dangerouslySetInnerHTML={{ __html: mdToHtml(article.content[l]) }}
              />

              {/* 语言切换 */}
              <div style={{ display: "flex", gap: 8, marginTop: 40, paddingTop: 24, borderTop: "1px solid var(--border)" }}>
                {l !== "zh" && <Link href={`/zh/news/${slug}`} className="btn-visit">中文</Link>}
                {l !== "en" && <Link href={`/en/news/${slug}`} className="btn-visit">English</Link>}
                {l !== "ar" && <Link href={`/ar/news/${slug}`} className="btn-visit">العربية</Link>}
              </div>
            </div>

            {/* 侧边栏 */}
            <aside className="news-detail-sidebar">
              <AirportBanner lang={l} variant="sidebar" />
              {related.length > 0 && (
                <div style={{ marginTop: 24 }}>
                  <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: 16 }}>
                    {l === "zh" ? "相关资讯" : l === "en" ? "Related News" : "أخبار ذات صلة"}
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {related.map((a) => (
                      <Link key={a.slug} href={`/${l}/news/${a.slug}`} style={{ textDecoration: "none" }}>
                        <div style={{
                          padding: "12px 16px", borderRadius: "var(--radius-md)",
                          border: "1px solid var(--border)",
                        }}
                          className="news-related-item"
                        >
                          <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text-primary)", lineHeight: 1.4, marginBottom: 4 }}>
                            {a.coverEmoji} {a.title[l]}
                          </div>
                          <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{a.date}</div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </main>
      <Footer lang={l} />
    </div>
  );
}
