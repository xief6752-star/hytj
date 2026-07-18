import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { NEWS, NEWS_TAG_LABELS, type NewsTag } from "@/data/news";
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
  const title =
    lang === "zh" ? "出海资讯 | 出海工具箱" :
    lang === "en" ? "News & Insights | Overseas Toolkit" :
    "الأخبار والرؤى | صندوق أدوات المغتربين";
  const desc =
    lang === "zh" ? "追踪 ChatGPT、GitHub、Midjourney 等出海工具的最新动态、功能更新与行业资讯。" :
    lang === "en" ? "Stay up to date with the latest news, feature updates and insights on ChatGPT, GitHub, Midjourney, and other essential global tools." :
    "ابق على اطلاع بآخر الأخبار وتحديثات الميزات والرؤى حول ChatGPT و GitHub و Midjourney وغيرها من الأدوات العالمية.";
  return {
    title,
    description: desc,
    alternates: {
      canonical: `${SITE_URL}/${lang}/news`,
      languages: {
        "zh-CN": `${SITE_URL}/zh/news`,
        "en-US": `${SITE_URL}/en/news`,
        "ar":    `${SITE_URL}/ar/news`,
      },
    },
  };
}

export default async function NewsListPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (lang !== "zh" && lang !== "en" && lang !== "ar") notFound();
  const l = lang as Lang;
  const t = UI_TEXT[l];

  const sorted = [...NEWS].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div dir={l === "ar" ? "rtl" : "ltr"}>
      <Header lang={l} t={t as any} />
      <main style={{ minHeight: "100vh" }}>
        {/* Hero */}
        <div className="tool-detail-hero">
          <div className="container">
            <nav className="tool-detail-breadcrumb" aria-label="breadcrumb">
              <Link href={`/${l}`}>{l === "zh" ? "首页" : l === "en" ? "Home" : "الرئيسية"}</Link>
              <span className="tool-detail-breadcrumb-sep">›</span>
              <span style={{ color: "var(--text-primary)" }}>
                {l === "zh" ? "出海资讯" : l === "en" ? "News & Insights" : "الأخبار والرؤى"}
              </span>
            </nav>
            <h1 style={{ fontSize: "clamp(28px,5vw,48px)", fontWeight: 800, marginBottom: 12, lineHeight: 1.15 }}>
              {l === "zh" ? "📰 出海资讯" : l === "en" ? "📰 News & Insights" : "📰 الأخبار والرؤى"}
            </h1>
            <p style={{ fontSize: 16, color: "var(--text-secondary)", maxWidth: 560 }}>
              {l === "zh"
                ? "追踪 ChatGPT、GitHub、Midjourney 等出海工具的最新动态与功能更新"
                : l === "en"
                ? "Stay updated on the latest news and feature updates for ChatGPT, GitHub, Midjourney, and more"
                : "ابق على اطلاع بآخر أخبار وتحديثات ChatGPT و GitHub و Midjourney وغيرها"}
            </p>
          </div>
        </div>

        {/* 文章列表 */}
        <div className="container" style={{ padding: "48px 24px 80px" }}>
          <div className="news-grid">
            {sorted.map((article) => {
              const tagInfo = NEWS_TAG_LABELS[article.tag];
              return (
                <article key={article.slug} className="news-card">
                  <Link href={`/${l}/news/${article.slug}`} className="news-card-link">
                    <div className="news-card-cover">{article.coverEmoji}</div>
                    <div className="news-card-body">
                      <div className="news-card-meta">
                        <span className="news-tag">{tagInfo.icon} {tagInfo[l]}</span>
                        <time className="news-date" dateTime={article.date}>
                          {new Date(article.date).toLocaleDateString(
                            l === "zh" ? "zh-CN" : l === "en" ? "en-US" : "ar",
                            { year: "numeric", month: "short", day: "numeric" }
                          )}
                        </time>
                      </div>
                      <h2 className="news-card-title">{article.title[l]}</h2>
                      <p className="news-card-summary">{article.summary[l]}</p>
                      {article.source && (
                        <div className="news-source">
                          {l === "zh" ? "来源：" : l === "en" ? "Source: " : "المصدر: "}
                          {article.source}
                        </div>
                      )}
                      <span className="news-read-more">
                        {l === "zh" ? "阅读全文 →" : l === "en" ? "Read more →" : "اقرأ المزيد →"}
                      </span>
                    </div>
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </main>
      <Footer lang={l} />
    </div>
  );
}
