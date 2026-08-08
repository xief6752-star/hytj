import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { TOOLS } from "@/data/tools";
import { NEWS } from "@/data/news";
import { TOPICS } from "@/data/topics";
import { BRANDS } from "@/data/brands";
import { UI_TEXT, SITE_URL, type Lang } from "@/data/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AirportBanner from "@/components/AirportBanner";

export function generateStaticParams() {
  return [{ lang: "zh" }, { lang: "en" }, { lang: "ar" }];
}

const T = {
  zh: {
    breadcrumb: "站点状态",
    title: "站点更新状态 2026 · 每日审校",
    subtitle: "记录本站的更新节奏、内容规模与最近审校时间，供搜索引擎和读者判断新鲜度。",
    updatedLabel: "本次构建时间",
    stats: {
      tools: "工具收录",
      topics: "专题聚合",
      brands: "机场评测",
      compare: "工具对比",
      news: "出海资讯",
      faq: "常见问题",
    },
    dailyLabel: "每日审校",
    dailyDesc: "内容团队每天对工具页与机场评测做一次审校，遇有大版本更新即时同步。",
    weeklyLabel: "每周复核",
    weeklyDesc: "工具排行榜、专题内容与机场对比表每周一集中复核，避免过期数据。",
    recentNewsTitle: "近期资讯",
    recentNewsMore: "查看全部资讯 →",
    updateLogTitle: "更新日志",
    updates: [
      { d: "2026-08-08", t: "扩充机场品牌评测：新增瞬云、寰宇云、WgetCloud、TAG、一元、飞鸟 6 家（Product/Review Schema）" },
      { d: "2026-08-08", t: "云图机场深度评测上线，含 Product / Brand / Offer / AggregateRating / Review 全套 Schema" },
      { d: "2026-08-08", t: "上线 9 个专题聚合页 + FAQ 汇总页（100+ 条 FAQ Schema）" },
      { d: "2026-08-06", t: "全站 title 引入 2026 年份、机场推荐/梯子推荐长尾词" },
      { d: "2026-08-06", t: "接入 /go/{brand} 联盟跳转中间页与统一埋点" },
      { d: "2026-07-30", t: "新增 21 条对比页 Schema（Article + FAQPage + BreadcrumbList）" },
      { d: "2026-07-20", t: "工具页统一补齐 SoftwareApplication + FAQPage 结构化数据" },
    ],
    methodologyTitle: "内容方法论",
    methodology: [
      "每个工具页至少给出：功能、注册教程、国内访问方式、常见问题四段。",
      "机场评测采用晚高峰实测 + 流媒体解锁测试 + 客户端兼容性三条硬指标。",
      "对比页面标注对比日期与信息来源，避免与官方最新参数不一致。",
      "所有出站联盟链接走 /go/{brand} 中间跳转，noindex + rel=sponsored。",
    ],
  },
  en: {
    breadcrumb: "Site Status",
    title: "Site Update Status 2026 · Reviewed Daily",
    subtitle: "A live record of update cadence, content volume, and last review time so search engines and readers can judge freshness at a glance.",
    updatedLabel: "This build",
    stats: {
      tools: "Tools",
      topics: "Topic hubs",
      brands: "Airport reviews",
      compare: "Tool comparisons",
      news: "News articles",
      faq: "FAQ entries",
    },
    dailyLabel: "Daily review",
    dailyDesc: "The content team reviews tool pages and airport reviews daily, syncing major version changes immediately.",
    weeklyLabel: "Weekly recheck",
    weeklyDesc: "Rankings, topic hubs, and comparison tables are re-audited every Monday to avoid stale data.",
    recentNewsTitle: "Recent news",
    recentNewsMore: "See all news →",
    updateLogTitle: "Changelog",
    updates: [
      { d: "2026-08-08", t: "Launched airport brand review: YunTu (Product/Review schema)" },
      { d: "2026-08-08", t: "Launched 9 topic hubs + FAQ aggregate (100+ FAQ entries with schema)" },
      { d: "2026-08-06", t: "Rolled out 2026 year-stamped titles + airport/ladder long-tail keywords" },
      { d: "2026-08-06", t: "Introduced /go/{brand} affiliate redirect page and unified tracking" },
      { d: "2026-07-30", t: "Added 21 comparison-page schemas (Article + FAQPage + BreadcrumbList)" },
      { d: "2026-07-20", t: "Backfilled SoftwareApplication + FAQPage across all tool pages" },
    ],
    methodologyTitle: "Editorial methodology",
    methodology: [
      "Every tool page ships four sections: features, sign-up, China access, FAQ.",
      "Airport reviews use three concrete metrics: peak-hour measurements, streaming unlock, client compatibility.",
      "Comparison pages surface the review date and source to avoid drift from vendor pages.",
      "All affiliate outbound links go through /go/{brand} with noindex + rel=sponsored.",
    ],
  },
  ar: {
    breadcrumb: "حالة الموقع",
    title: "حالة تحديث الموقع 2026 · مراجعة يومية",
    subtitle: "سجل حي لوتيرة التحديث وحجم المحتوى ووقت المراجعة الأخير ليقيّم محركو البحث والقراء الحداثة بلمحة.",
    updatedLabel: "هذا الإصدار",
    stats: {
      tools: "الأدوات",
      topics: "المواضيع",
      brands: "تقييمات airport",
      compare: "المقارنات",
      news: "الأخبار",
      faq: "الأسئلة الشائعة",
    },
    dailyLabel: "مراجعة يومية",
    dailyDesc: "يراجع فريق المحتوى صفحات الأدوات وتقييمات airport يومياً، ويحدّث أي تغييرات كبرى فوراً.",
    weeklyLabel: "إعادة فحص أسبوعية",
    weeklyDesc: "يُعاد فحص التصنيفات ومحاور المواضيع وجداول المقارنة كل يوم اثنين لتفادي البيانات القديمة.",
    recentNewsTitle: "الأخبار الحديثة",
    recentNewsMore: "عرض كل الأخبار ←",
    updateLogTitle: "سجل التغييرات",
    updates: [
      { d: "2026-08-08", t: "إطلاق تقييم airport للعلامة: YunTu (Product/Review schema)" },
      { d: "2026-08-08", t: "إطلاق 9 محاور مواضيع + مكتبة أسئلة شاملة (100+ عنصر FAQ schema)" },
      { d: "2026-08-06", t: "تحديث العناوين بختم سنة 2026 وكلمات مفتاحية طويلة عن airport" },
      { d: "2026-08-06", t: "إضافة صفحة تحويل /go/{brand} للشراكات وتوحيد التتبع" },
      { d: "2026-07-30", t: "إضافة 21 schema لصفحات المقارنة (Article + FAQPage + BreadcrumbList)" },
      { d: "2026-07-20", t: "استكمال SoftwareApplication + FAQPage على كل صفحات الأدوات" },
    ],
    methodologyTitle: "منهجية التحرير",
    methodology: [
      "كل صفحة أداة تحتوي على أربعة أقسام: الميزات، والتسجيل، والوصول من الصين، والأسئلة الشائعة.",
      "تقييمات الـairport تعتمد ثلاث مقاييس: قياس الذروة، وفتح البث، وتوافق العملاء.",
      "صفحات المقارنة تعرض تاريخ المراجعة والمصدر لتفادي الاختلاف عن صفحات المزود.",
      "كل الروابط التابعة تمر عبر /go/{brand} مع noindex + rel=sponsored.",
    ],
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (lang !== "zh" && lang !== "en" && lang !== "ar") return {};
  const l = lang as Lang;
  const t = T[l];
  return {
    title: t.title,
    description: t.subtitle,
    alternates: {
      canonical: `${SITE_URL}/${l}/status`,
      languages: {
        "zh-CN": `${SITE_URL}/zh/status`,
        "en-US": `${SITE_URL}/en/status`,
        "ar": `${SITE_URL}/ar/status`,
      },
    },
    openGraph: {
      title: t.title,
      description: t.subtitle,
      url: `${SITE_URL}/${l}/status`,
      type: "website",
    },
  };
}

// 对比 pair 数量与 sitemap.ts 保持一致（用于统计展示）
const COMPARE_PAIR_COUNT = 14;
const FAQ_COUNT_ESTIMATE =
  TOOLS.reduce((sum, tool) => sum + (tool.faqs?.length ?? 0), 0) +
  BRANDS.reduce((sum, b) => sum + (b.faq?.length ?? 0), 0);

export default async function StatusPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (lang !== "zh" && lang !== "en" && lang !== "ar") notFound();
  const l = lang as Lang;
  const t = T[l];
  const ui = UI_TEXT[l];

  // 构建时间 —— 每次 CI/CD 都会更新，就是 freshness 信号
  const buildTime = new Date();
  const buildIso = buildTime.toISOString();
  const buildDisplay = buildTime.toLocaleString(
    l === "zh" ? "zh-CN" : l === "en" ? "en-US" : "ar",
    { year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" }
  );

  const recentNews = [...NEWS].sort((a, b) => (b.date > a.date ? 1 : -1)).slice(0, 6);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: t.title,
        description: t.subtitle,
        url: `${SITE_URL}/${l}/status`,
        dateModified: buildIso,
        inLanguage: l === "zh" ? "zh-CN" : l === "en" ? "en-US" : "ar",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: l === "zh" ? "首页" : l === "en" ? "Home" : "الرئيسية", item: `${SITE_URL}/${l}` },
          { "@type": "ListItem", position: 2, name: t.breadcrumb, item: `${SITE_URL}/${l}/status` },
        ],
      },
    ],
  };

  const stats = [
    { icon: "🧰", label: t.stats.tools, value: TOOLS.length },
    { icon: "🎯", label: t.stats.topics, value: TOPICS.length },
    { icon: "✈️", label: t.stats.brands, value: BRANDS.length },
    { icon: "⚖️", label: t.stats.compare, value: COMPARE_PAIR_COUNT },
    { icon: "📰", label: t.stats.news, value: NEWS.length },
    { icon: "❓", label: t.stats.faq, value: FAQ_COUNT_ESTIMATE },
  ];

  return (
    <div dir={l === "ar" ? "rtl" : "ltr"}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header lang={l} t={ui as any} />
      <main id="main-content" style={{ minHeight: "100vh" }}>
        <div className="tool-detail-hero">
          <div className="container">
            <nav className="tool-detail-breadcrumb" aria-label="breadcrumb">
              <Link href={`/${l}`}>{l === "zh" ? "首页" : l === "en" ? "Home" : "الرئيسية"}</Link>
              <span className="tool-detail-breadcrumb-sep">›</span>
              <span style={{ color: "var(--text-primary)" }}>{t.breadcrumb}</span>
            </nav>

            <h1 style={{ fontSize: "clamp(24px,4vw,42px)", fontWeight: 800, lineHeight: 1.2, marginBottom: 12 }}>
              {t.title}
            </h1>
            <p style={{ fontSize: 16, color: "var(--text-secondary)", lineHeight: 1.75, maxWidth: 780, marginBottom: 20 }}>
              {t.subtitle}
            </p>

            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "10px 18px",
                borderRadius: 999,
                background: "var(--primary-soft)",
                color: "var(--primary)",
                fontWeight: 700,
                fontSize: 14,
              }}
            >
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--primary)", boxShadow: "0 0 0 4px rgba(249,115,22,.2)" }} aria-hidden="true" />
              <span>{t.updatedLabel}：</span>
              <time dateTime={buildIso} style={{ fontFamily: "ui-monospace, monospace" }}>
                {buildDisplay}
              </time>
            </div>
          </div>
        </div>

        <div className="container" style={{ padding: "48px 24px 32px" }}>
          {/* 内容规模 stats */}
          <section className="detail-section">
            <h2 className="detail-section-title">📊 {l === "zh" ? "内容规模" : l === "en" ? "Content volume" : "حجم المحتوى"}</h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
                gap: 12,
                marginTop: 16,
              }}
            >
              {stats.map((s) => (
                <div
                  key={s.label}
                  style={{
                    padding: "20px 24px",
                    background: "var(--bg-elevated)",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius-md)",
                  }}
                >
                  <div style={{ fontSize: 24, marginBottom: 6 }}>{s.icon}</div>
                  <div style={{ fontSize: 30, fontWeight: 800, lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 6 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* 机场品牌评分榜 - 按 reviewScore 自动排序 */}
          <section className="detail-section">
            <h2 className="detail-section-title">
              🏆 {l === "zh" ? "机场品牌评分榜（自动排序）" : l === "en" ? "Airport Brand Ranking (auto-sorted)" : "ترتيب airports حسب التقييم"}
            </h2>
            <p style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 4, marginBottom: 16 }}>
              {l === "zh"
                ? "评分基于晚高峰实测速度、流媒体解锁能力、客户端兼容性与老用户口碑，10 分制，每周复核。"
                : l === "en"
                ? "Scores blend peak-hour speed tests, streaming unlock ability, client compatibility, and long-term user reports; 10-point scale, reviewed weekly."
                : "الدرجات تجمع بين اختبارات السرعة، فتح البث، توافق العملاء، وتقارير المستخدمين."}
            </p>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
                <thead>
                  <tr style={{ borderBottom: "2px solid var(--border)" }}>
                    <th style={{ padding: "10px 12px", textAlign: l === "ar" ? "right" : "left", fontWeight: 600, color: "var(--text-muted)", width: 44 }}>#</th>
                    <th style={{ padding: "10px 12px", textAlign: l === "ar" ? "right" : "left", fontWeight: 600, color: "var(--text-muted)" }}>
                      {l === "zh" ? "品牌" : l === "en" ? "Brand" : "العلامة"}
                    </th>
                    <th style={{ padding: "10px 12px", textAlign: "center", fontWeight: 600, color: "var(--text-muted)" }}>
                      {l === "zh" ? "评分" : l === "en" ? "Score" : "التقييم"}
                    </th>
                    <th style={{ padding: "10px 12px", textAlign: "center", fontWeight: 600, color: "var(--text-muted)" }}>
                      {l === "zh" ? "起价" : l === "en" ? "From" : "من"}
                    </th>
                    <th style={{ padding: "10px 12px", textAlign: l === "ar" ? "right" : "left", fontWeight: 600, color: "var(--text-muted)" }}>
                      {l === "zh" ? "定位" : l === "en" ? "Positioning" : "التموضع"}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[...BRANDS]
                    .sort((a, b) => b.reviewScore - a.reviewScore)
                    .map((b, i) => (
                      <tr key={b.slug} style={{ borderBottom: "1px solid var(--border)", background: i % 2 === 0 ? "transparent" : "var(--bg-muted)" }}>
                        <td style={{ padding: "12px 12px", fontWeight: 700, color: i < 3 ? "var(--primary)" : "var(--text-muted)" }}>
                          {i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : `#${i + 1}`}
                        </td>
                        <td style={{ padding: "12px 12px" }}>
                          <Link href={`/${l}/brands/${b.slug}`} style={{ fontWeight: 700, color: "var(--text-primary)" }}>
                            <span style={{ marginRight: 6 }}>{b.logo}</span>
                            {b.name[l]}
                          </Link>
                        </td>
                        <td style={{ padding: "12px 12px", textAlign: "center", fontWeight: 700, color: b.reviewScore >= 9.5 ? "var(--accent-dark)" : b.reviewScore >= 9 ? "var(--primary)" : b.reviewScore >= 7 ? "var(--text-primary)" : "var(--text-muted)" }}>
                          {b.reviewScore.toFixed(1)}
                        </td>
                        <td style={{ padding: "12px 12px", textAlign: "center", fontSize: 13, color: "var(--text-secondary)" }}>
                          {b.pricing[0]?.price[l] ?? "—"}
                        </td>
                        <td style={{ padding: "12px 12px", fontSize: 13, color: "var(--text-secondary)" }}>
                          {b.tagline[l]}
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* 更新节奏 */}
          <section className="detail-section">
            <h2 className="detail-section-title">🔄 {l === "zh" ? "更新节奏" : l === "en" ? "Update cadence" : "وتيرة التحديث"}</h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: 16,
                marginTop: 16,
              }}
            >
              <div style={{ padding: "20px 24px", background: "var(--bg-elevated)", border: "1px solid var(--border)", borderRadius: "var(--radius-md)" }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>🕐 {t.dailyLabel}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.75, color: "var(--text-secondary)" }}>{t.dailyDesc}</p>
              </div>
              <div style={{ padding: "20px 24px", background: "var(--bg-elevated)", border: "1px solid var(--border)", borderRadius: "var(--radius-md)" }}>
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>📅 {t.weeklyLabel}</h3>
                <p style={{ fontSize: 14, lineHeight: 1.75, color: "var(--text-secondary)" }}>{t.weeklyDesc}</p>
              </div>
            </div>
          </section>

          {/* 更新日志 */}
          <section className="detail-section">
            <h2 className="detail-section-title">📝 {t.updateLogTitle}</h2>
            <ol style={{ listStyle: "none", padding: 0, marginTop: 12 }}>
              {t.updates.map((u, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    gap: 16,
                    padding: "14px 0",
                    borderBottom: "1px solid var(--border)",
                    alignItems: "flex-start",
                  }}
                >
                  <time
                    dateTime={u.d}
                    style={{
                      fontFamily: "ui-monospace, monospace",
                      fontSize: 13,
                      color: "var(--text-muted)",
                      whiteSpace: "nowrap",
                      paddingTop: 2,
                    }}
                  >
                    {u.d}
                  </time>
                  <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "var(--text-primary)" }}>{u.t}</p>
                </li>
              ))}
            </ol>
          </section>

          {/* 方法论 */}
          <section className="detail-section">
            <h2 className="detail-section-title">🎯 {t.methodologyTitle}</h2>
            <ul style={{ paddingLeft: 20, marginTop: 12 }}>
              {t.methodology.map((m, i) => (
                <li key={i} style={{ marginBottom: 10, fontSize: 15, lineHeight: 1.75, color: "var(--text-secondary)" }}>
                  {m}
                </li>
              ))}
            </ul>
          </section>

          {/* 近期资讯 */}
          <section className="detail-section">
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", flexWrap: "wrap", gap: 12 }}>
              <h2 className="detail-section-title" style={{ margin: 0 }}>📰 {t.recentNewsTitle}</h2>
              <Link href={`/${l}/news`} style={{ fontSize: 14, color: "var(--primary)" }}>{t.recentNewsMore}</Link>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 16 }}>
              {recentNews.map((n) => (
                <Link
                  key={n.slug}
                  href={`/${l}/news/${n.slug}`}
                  style={{
                    display: "flex",
                    gap: 12,
                    padding: "12px 16px",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius-md)",
                    textDecoration: "none",
                    color: "var(--text-primary)",
                    background: "var(--bg-elevated)",
                    alignItems: "center",
                  }}
                >
                  <span style={{ fontSize: 20 }}>{n.coverEmoji}</span>
                  <time dateTime={n.date} style={{ fontFamily: "ui-monospace,monospace", fontSize: 12, color: "var(--text-muted)", whiteSpace: "nowrap" }}>{n.date}</time>
                  <span style={{ fontSize: 14, lineHeight: 1.55 }}>{n.title[l]}</span>
                </Link>
              ))}
            </div>
          </section>

          {/* Airport banner */}
          <div style={{ marginTop: 32 }}>
            <AirportBanner lang={l} variant="banner" />
          </div>
        </div>
      </main>
      <Footer lang={l} />
    </div>
  );
}
