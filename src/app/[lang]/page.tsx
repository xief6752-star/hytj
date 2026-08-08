import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { TOOLS } from "@/data/tools";
import { TOPICS } from "@/data/topics";
import { BRANDS } from "@/data/brands";
import { UI_TEXT, AIRPORT_GO, type Lang } from "@/data/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AirportBanner from "@/components/AirportBanner";
import ToolsSection from "@/components/ToolsSection";

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
  const t = UI_TEXT[lang as Lang];
  return {
    title: { absolute: t.siteTitle },
    description: t.siteDescription,
    alternates: {
      canonical: `https://hytuijian.com/${lang}`,
      languages: {
        "zh-CN": "https://hytuijian.com/zh",
        "en-US": "https://hytuijian.com/en",
        "ar": "https://hytuijian.com/ar",
      },
    },
    openGraph: {
      title: t.siteTitle,
      description: t.siteDescription,
      url: `https://hytuijian.com/${lang}`,
      type: "website",
    },
  };
}

// 首页展示的精选 FAQ（从工具库里挑高频问题，避免全量堆首页）
const FEATURED_FAQ_SLUGS = ["chatgpt", "midjourney", "youtube", "github", "shopify", "netflix"];

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (lang !== "zh" && lang !== "en" && lang !== "ar") notFound();
  const l = lang as Lang;
  const t = UI_TEXT[l];

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: l === "zh" ? "出海必备工具目录" : l === "en" ? "Overseas Toolkit Directory" : "دليل أدوات المغتربين",
    description: l === "zh" ? "精选全球出海必备工具，包含 AI、社交、开发、视频、办公、电商、学习等分类" : l === "en" ? "Curated directory of essential tools for going global, covering AI, social, dev, video, office, e-commerce, and learning" : "دليل منسق لأفضل الأدوات العالمية يشمل الذكاء الاصطناعي والتواصل الاجتماعي والتطوير والتعليم والتجارة الإلكترونية",
    numberOfItems: TOOLS.length,
    itemListElement: TOOLS.map((tool, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: tool.name[l],
      url: `https://hytuijian.com/${l}/tools/${tool.slug}`,
      description: tool.description[l],
    })),
  };

  // 首页 FAQ 精选（每个工具挑第 1 个 FAQ）
  const featuredFaqs = FEATURED_FAQ_SLUGS.map((slug) => {
    const tool = TOOLS.find((tt) => tt.slug === slug);
    if (!tool || !tool.faqs?.[0]) return null;
    return { tool, faq: tool.faqs[0] };
  }).filter(Boolean) as { tool: (typeof TOOLS)[number]; faq: (typeof TOOLS)[number]["faqs"][number] }[];

  const featuredFaqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: featuredFaqs.map(({ faq }) => ({
      "@type": "Question",
      name: faq.q[l],
      acceptedAnswer: { "@type": "Answer", text: faq.a[l] },
    })),
  };

  const sectionLabels = {
    zh: {
      topicsTitle: "🎯 热门专题",
      topicsSubtitle: "按意图组合工具卡片，一站式解决具体问题",
      topicsCta: "查看全部专题 →",
      brandsTitle: "✈️ 2026 机场推荐",
      brandsSubtitle: "稳定专线机场评测，助你选对科学上网工具",
      brandsCta: "查看机场评测 →",
      faqTitle: "❓ 常见问题速查",
      faqSubtitle: "工具使用与国内访问最高频的 6 个问题",
      faqCta: "查看完整 FAQ 库（100+）→",
    },
    en: {
      topicsTitle: "🎯 Featured Topics",
      topicsSubtitle: "Intent-based tool bundles that solve a concrete problem end-to-end",
      topicsCta: "See all topics →",
      brandsTitle: "✈️ 2026 Airport Picks",
      brandsSubtitle: "Reviewed dedicated-line airports to pick the right VPN",
      brandsCta: "See airport reviews →",
      faqTitle: "❓ FAQ Quick Look",
      faqSubtitle: "The 6 questions we get asked most about using tools from China",
      faqCta: "See full FAQ library (100+) →",
    },
    ar: {
      topicsTitle: "🎯 مواضيع مميزة",
      topicsSubtitle: "حزم أدوات مبنية على النية تحل مشكلة محددة من البداية للنهاية",
      topicsCta: "عرض كل المواضيع ←",
      brandsTitle: "✈️ توصيات airport لعام 2026",
      brandsSubtitle: "تقييمات airports بخطوط مخصصة لاختيار VPN مناسب",
      brandsCta: "عرض تقييمات الـairport ←",
      faqTitle: "❓ نظرة سريعة على الأسئلة الشائعة",
      faqSubtitle: "6 من أكثر الأسئلة تكراراً حول استخدام الأدوات من الصين",
      faqCta: "عرض مكتبة الأسئلة الكاملة (100+) ←",
    },
  }[l];

  return (
    <div dir={l === "ar" ? "rtl" : "ltr"}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(featuredFaqJsonLd) }}
      />
      <Header lang={l} t={t as any} />
      <main id="main-content">
        <ToolsSection lang={l} tools={TOOLS} />

        {/* 🎯 热门专题 */}
        <section
          className="home-section"
          aria-labelledby="home-topics-heading"
          style={{ padding: "72px 0 8px" }}
        >
          <div className="container">
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 16, flexWrap: "wrap", marginBottom: 24 }}>
              <div>
                <h2 id="home-topics-heading" className="section-title" style={{ margin: 0 }}>
                  {sectionLabels.topicsTitle}
                </h2>
                <p style={{ color: "var(--text-muted)", fontSize: 15, marginTop: 6 }}>
                  {sectionLabels.topicsSubtitle}
                </p>
              </div>
              <Link href={`/${l}/topics`} className="btn-visit" style={{ whiteSpace: "nowrap" }}>
                {sectionLabels.topicsCta}
              </Link>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
                gap: 16,
              }}
            >
              {TOPICS.map((topic) => (
                <Link
                  key={topic.slug}
                  href={`/${l}/topics/${topic.slug}`}
                  className="tool-card"
                  style={{ textDecoration: "none" }}
                >
                  <div className="tool-card-header" style={{ marginBottom: 12 }}>
                    <div
                      className="tool-card-logo"
                      style={{ background: "linear-gradient(135deg,var(--primary-soft),var(--accent-soft))" }}
                      aria-hidden="true"
                    >
                      {topic.icon}
                    </div>
                  </div>
                  <h3 className="tool-card-name" style={{ fontSize: 17 }}>
                    {topic.title[l]}
                  </h3>
                  <p className="tool-card-desc" style={{ marginTop: 6, lineHeight: 1.55 }}>
                    {topic.description[l]}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ✈️ 机场推荐 */}
        <section
          className="home-section"
          aria-labelledby="home-brands-heading"
          style={{ padding: "72px 0 8px" }}
        >
          <div className="container">
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 16, flexWrap: "wrap", marginBottom: 24 }}>
              <div>
                <h2 id="home-brands-heading" className="section-title" style={{ margin: 0 }}>
                  {sectionLabels.brandsTitle}
                </h2>
                <p style={{ color: "var(--text-muted)", fontSize: 15, marginTop: 6 }}>
                  {sectionLabels.brandsSubtitle}
                </p>
              </div>
              <Link href={`/${l}/brands`} className="btn-visit" style={{ whiteSpace: "nowrap" }}>
                {sectionLabels.brandsCta}
              </Link>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                gap: 16,
              }}
            >
              {BRANDS.map((brand) => (
                <article
                  key={brand.slug}
                  style={{
                    padding: "24px 28px",
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius-lg)",
                    background: "var(--bg-elevated)",
                    display: "flex",
                    flexDirection: "column",
                    gap: 14,
                  }}
                >
                  <header style={{ display: "flex", alignItems: "center", gap: 14 }}>
                    <div
                      style={{
                        width: 52,
                        height: 52,
                        borderRadius: 14,
                        display: "grid",
                        placeItems: "center",
                        fontSize: 26,
                        background: `${brand.color}22`,
                        color: brand.color,
                      }}
                      aria-hidden="true"
                    >
                      {brand.logo}
                    </div>
                    <div>
                      <h3 style={{ fontSize: 18, fontWeight: 700, margin: 0 }}>
                        {brand.name[l]}
                      </h3>
                      <p style={{ fontSize: 13, color: "var(--text-muted)", margin: "4px 0 0" }}>
                        {brand.tagline[l]}
                      </p>
                    </div>
                    <div
                      style={{
                        marginLeft: "auto",
                        padding: "6px 12px",
                        borderRadius: 999,
                        background: "var(--primary-soft)",
                        color: "var(--primary)",
                        fontSize: 13,
                        fontWeight: 700,
                      }}
                    >
                      ★ {brand.reviewScore.toFixed(1)}
                    </div>
                  </header>
                  <p style={{ fontSize: 14, lineHeight: 1.65, color: "var(--text-secondary)", margin: 0 }}>
                    {brand.shortDescription[l]}
                  </p>
                  <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: "auto" }}>
                    <Link
                      href={`/${l}/brands/${brand.slug}`}
                      className="btn-learn"
                      style={{ width: "auto", padding: "10px 18px" }}
                    >
                      {l === "zh" ? "查看评测 →" : l === "en" ? "Read review →" : "قراءة التقييم ←"}
                    </Link>
                    <a
                      href={`/go/${brand.goSlug}`}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="btn-visit"
                      style={{ width: "auto", padding: "10px 18px" }}
                    >
                      {l === "zh" ? "免费试用 ↗" : l === "en" ? "Free trial ↗" : "تجربة مجانية ↗"}
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ❓ 常见问题 */}
        <section
          className="home-section"
          aria-labelledby="home-faq-heading"
          style={{ padding: "72px 0 8px" }}
        >
          <div className="container">
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 16, flexWrap: "wrap", marginBottom: 24 }}>
              <div>
                <h2 id="home-faq-heading" className="section-title" style={{ margin: 0 }}>
                  {sectionLabels.faqTitle}
                </h2>
                <p style={{ color: "var(--text-muted)", fontSize: 15, marginTop: 6 }}>
                  {sectionLabels.faqSubtitle}
                </p>
              </div>
              <Link href={`/${l}/faq`} className="btn-visit" style={{ whiteSpace: "nowrap" }}>
                {sectionLabels.faqCta}
              </Link>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                gap: 12,
              }}
            >
              {featuredFaqs.map(({ tool, faq }) => (
                <details
                  key={tool.slug}
                  style={{
                    border: "1px solid var(--border)",
                    borderRadius: "var(--radius-md)",
                    background: "var(--bg-elevated)",
                    padding: "14px 18px",
                  }}
                >
                  <summary
                    style={{
                      fontWeight: 600,
                      cursor: "pointer",
                      fontSize: 15,
                      lineHeight: 1.5,
                      display: "flex",
                      gap: 8,
                      alignItems: "flex-start",
                    }}
                  >
                    <span style={{ color: "var(--primary)", fontWeight: 700, whiteSpace: "nowrap" }}>
                      {tool.name[l]}
                    </span>
                    <span style={{ color: "var(--text-primary)" }}>
                      {faq.q[l]}
                    </span>
                  </summary>
                  <p style={{ marginTop: 10, color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.75 }}>
                    {faq.a[l]}
                  </p>
                  <Link
                    href={`/${l}/tools/${tool.slug}#section-faq`}
                    style={{ fontSize: 13, color: "var(--primary)", marginTop: 10, display: "inline-block" }}
                  >
                    {l === "zh" ? `查看 ${tool.name[l]} 完整 FAQ →` : l === "en" ? `Full ${tool.name[l]} FAQ →` : `الأسئلة الكاملة لـ ${tool.name[l]} ←`}
                  </Link>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 📝 编辑器文段 - E-E-A-T 权威性信号 */}
        <section
          className="home-section"
          aria-labelledby="home-explainer-heading"
          style={{ padding: "72px 0 8px" }}
        >
          <div className="container" style={{ maxWidth: 860 }}>
            <h2 id="home-explainer-heading" className="section-title" style={{ margin: "0 0 24px" }}>
              {l === "zh" ? "📝 出海选工具与选机场，怎么才不踩坑？" : l === "en" ? "📝 How to Pick Tools and Airports Without Getting Burned" : "📝 كيفية اختيار الأدوات وشبكات VPN"}
            </h2>

            <article style={{ marginBottom: 28 }}>
              <h3 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 12px" }}>
                {l === "zh" ? "① 出海工具怎么选：先看使用场景，再看付费方式" : l === "en" ? "① Picking a tool: match the use case first, then the payment path" : "① اختيار الأداة: النية أولاً، ثم الدفع"}
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.85, color: "var(--text-secondary)", margin: 0 }}>
                {l === "zh"
                  ? "2026 年出海工具生态高度细分：ChatGPT 侧重通用对话与代码，Claude 强在长文档和创意写作，Perplexity 是 AI 搜索引擎，Midjourney 只做图像生成。选工具第一步永远是明确「是要生成内容还是要查信息」。付费方面，国内 Visa/Mastercard 目前对 ChatGPT Plus、Claude Pro、Midjourney 一律失败，可选 WildCard / Depay 虚拟卡，或用海外区 Apple ID 走 App Store 内购。想省钱可以先用免费额度（GPT-4o mini、Claude 每日限额、Perplexity 基础搜索）跑一段时间再决定升级哪一家。"
                  : l === "en"
                  ? "The 2026 tool ecosystem is highly specialized: ChatGPT for general chat and code, Claude for long docs and creative writing, Perplexity as an AI search engine, Midjourney purely for image generation. Step one is always to name your use case: are you generating content or retrieving information? For payment, mainland Chinese Visa/Mastercard fails for ChatGPT Plus, Claude Pro, and Midjourney — use virtual cards (WildCard / Depay) or an overseas Apple ID via App Store in-app purchase. Start with free tiers (GPT-4o mini, Claude daily quota, Perplexity basic search) to figure out which one you actually need before subscribing."
                  : "منظومة الأدوات في 2026 متخصصة جداً: ChatGPT للمحادثة العامة والبرمجة، Claude للوثائق الطويلة والكتابة الإبداعية، Perplexity كمحرك بحث ذكي، Midjourney للصور فقط. الخطوة الأولى دائماً تحديد حالة الاستخدام. للدفع، فشلت البطاقات الصينية مع الاشتراكات؛ استخدم البطاقات الافتراضية أو Apple ID خارجي. ابدأ بالمستويات المجانية قبل الاشتراك."}
              </p>
            </article>

            <article>
              <h3 style={{ fontSize: 20, fontWeight: 700, margin: "0 0 12px" }}>
                {l === "zh" ? "② 机场怎么选：线路类型 > 节点数量 > 价格 > 客服" : l === "en" ? "② Picking an airport: line type > node count > price > support" : "② اختيار airport: نوع الخط > عدد العقد > السعر > الدعم"}
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.85, color: "var(--text-secondary)", margin: 0 }}>
                {l === "zh"
                  ? "机场（俗称「梯子」、「魔法」）的核心指标不是「节点数」或「价格」，而是「线路类型」。IPLC / IEPL 专线在晚高峰（22-24 点）掉包率能压到 0.5% 以下，普通中转机场晚高峰往往缓冲到不能看。看视频、开 ChatGPT、跨境电商都强推专线；只做偶尔查资料、看社交可以选中转机场省钱。价格方面 2026 年主流区间：中端专线 ¥15-30/月，高端 IEPL 或 AWS 加速专线 ¥80+/月，超低价 ¥1-5/月的一分/一元机场普遍跑路风险高，不建议长期主力使用。本站评测的 9 家机场里，评分 9.6+ 的（寰宇云、飞鸟、奶昔、WgetCloud）是稳定性和口碑的第一梯队；评分 9.2 的云图和瞬云是性价比首选；评分 5-6 分的一元、一分机场则作为风险案例呈现。"
                  : l === "en"
                  ? "The core airport metric isn't 'node count' or 'price' — it's line type. IPLC / IEPL dedicated lines keep peak-hour (22:00-24:00) packet loss under 0.5%; generic transit airports become unusable at peak. Video, ChatGPT, and e-commerce all mandate dedicated lines; occasional research or social browsing can afford transit airports. 2026 price ranges: mid-tier dedicated ¥15-30/mo, high-end IEPL or AWS-accelerated ¥80+/mo. Ultra-cheap ¥1-5/mo 'one-cent' airports usually carry high exit-scam risk — avoid as daily driver. Of the 9 airports reviewed here, the 9.6+ tier (HuanYuYun, FlyingBird, Nexitally, WgetCloud) is the reliability leader; 9.2-rated YunTu and ShunYun offer the best value; 5-6 rated ones are documented as risk case studies."
                  : "المؤشر الأساسي لـairport ليس عدد العقد ولا السعر بل نوع الخط. خطوط IPLC/IEPL المخصصة تحافظ على فقد الحزم أقل من 0.5٪ في الذروة. الفيديو و ChatGPT والتجارة الإلكترونية تتطلب خطوطاً مخصصة. النطاقات السعرية 2026: متوسط 15-30¥/شهر، عالي 80¥+/شهر. تجنب الـ ¥1-5/شهر لخطر الإغلاق."}
              </p>
              <p style={{ marginTop: 14, fontSize: 13, color: "var(--text-muted)" }}>
                {l === "zh"
                  ? <>更详细的挑选逻辑见 <Link href={`/${l}/brands`} style={{ color: "var(--primary)" }}>机场评测榜</Link> 与 <Link href={`/${l}/faq`} style={{ color: "var(--primary)" }}>FAQ 库</Link>；急着开通的可以直接看 <Link href={`/${l}/brands/yuntu`} style={{ color: "var(--primary)" }}>云图机场评测</Link>。</>
                  : l === "en"
                  ? <>See <Link href={`/${l}/brands`} style={{ color: "var(--primary)" }}>the airport rankings</Link> and <Link href={`/${l}/faq`} style={{ color: "var(--primary)" }}>FAQ library</Link> for the full picking logic; if you want to sign up now, read the <Link href={`/${l}/brands/yuntu`} style={{ color: "var(--primary)" }}>YunTu review</Link>.</>
                  : <>راجع <Link href={`/${l}/brands`} style={{ color: "var(--primary)" }}>ترتيب الـairport</Link> و <Link href={`/${l}/faq`} style={{ color: "var(--primary)" }}>مكتبة الأسئلة</Link>.</>
                }
              </p>
            </article>
          </div>
        </section>

        <div className="container" style={{ marginTop: 48 }}>
          <AirportBanner lang={l} variant="banner" />
        </div>
      </main>
      <Footer lang={l} />
    </div>
  );
}
