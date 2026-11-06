import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { Lang } from "@/data/i18n";
import { UI_TEXT, SITE_URL } from "@/data/i18n";
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

  const title =
    lang === "zh"
      ? "关于本站 | 出海工具箱 — 出海工作者一站式工具指南"
      : lang === "en"
      ? "About | Overseas Toolbox — One-Stop Guide for Global Chinese Workers"
      : "حول الموقع | صندوق أدوات المغتربين — دليل شامل للعمال الصينيين في الخارج";

  const description =
    lang === "zh"
      ? "出海工具箱由人工研究撰写和定期更新，专为出海工作者、海外华人和跨境创业者提供 AI（ChatGPT/Claude/Gemini/Midjourney）、社交媒体（X/LinkedIn/Instagram）、开发工具（GitHub/Notion）、视频平台（YouTube/Netflix）、办公协作（Slack/Figma）、电商金融（Shopify/PayPal）、学习资源（Coursera/Duolingo）等 28+ 款全球工具的中文一站式导航、国内访问教程、注册指南与机场加速方案，内容经过事实核查。"
      : lang === "en"
      ? "Overseas Toolbox is a human-curated, fact-checked, and regularly updated directory designed for Chinese overseas workers, expats, and cross-border entrepreneurs. Covers 28+ global tools across AI (ChatGPT/Claude/Gemini/Midjourney), social media (X/LinkedIn/Instagram), dev tools (GitHub/Notion), video platforms (YouTube/Netflix), office collaboration (Slack/Figma), e-commerce & finance (Shopify/PayPal), and learning resources (Coursera/Duolingo) — with trilingual guides, China access tutorials, registration steps, and VPN/airport setup recommendations."
      : "صندوق أدوات المغتربين دليل منسق بشرياً، محقق من الحقائق، ومحدَّث بانتظام مصمم للعمال الصينيين في الخارج والمغتربين ورواد الأعمال عبر الحدود. يغطي أكثر من 28 أداة عالمية عبر الذكاء الاصطناعي (ChatGPT/Claude/Gemini/Midjourney)، ووسائل التواصل الاجتماعي (X/LinkedIn/Instagram)، وأدوات التطوير (GitHub/Notion)، ومنصات الفيديو (YouTube/Netflix)، والتعاون المكتبي (Slack/Figma)، والتجارة الإلكترونية والتمويل (Shopify/PayPal)، ومصادر التعلم (Coursera/Duolingo) — مع أدلة ثلاثية اللغة وشروحات الوصول من الصين وخطوات التسجيل وتوصيات إعداد VPN/airport.";

  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}/${lang}/about`,
    },
  };
}

const ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "出海工具箱",
  alternateName: ["Overseas Toolbox", "صندوق أدوات المغتربين"],
  url: "https://hytuijian.com",
  description:
    "专为出海工作者和海外华人提供全球工具中文导航，涵盖AI、社交、开发、视频、办公、电商、学习等分类，内容由人工研究撰写，定期更新。",
  inLanguage: ["zh", "en", "ar"],
  audience: {
    "@type": "Audience",
    audienceType: "overseas Chinese workers, global nomads, Chinese expats",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "contact@hytuijian.com",
    contactType: "editorial",
  },
};

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (lang !== "zh" && lang !== "en" && lang !== "ar") notFound();
  const l = lang as Lang;
  const t = UI_TEXT[l];

  const categories = [
    {
      icon: "🤖",
      zh: { title: "AI 工具", desc: "ChatGPT、Claude、Gemini、Midjourney 等主流 AI 产品" },
      en: { title: "AI Tools", desc: "ChatGPT, Claude, Gemini, Midjourney and more" },
      ar: { title: "أدوات الذكاء الاصطناعي", desc: "ChatGPT و Claude و Gemini و Midjourney وغيرها" },
    },
    {
      icon: "💬",
      zh: { title: "社交媒体", desc: "Twitter/X、Instagram、TikTok、LinkedIn 等" },
      en: { title: "Social Media", desc: "Twitter/X, Instagram, TikTok, LinkedIn and more" },
      ar: { title: "التواصل الاجتماعي", desc: "Twitter/X و Instagram و TikTok و LinkedIn وغيرها" },
    },
    {
      icon: "💻",
      zh: { title: "开发工具", desc: "GitHub、Vercel、Cursor、Cloudflare 等" },
      en: { title: "Dev Tools", desc: "GitHub, Vercel, Cursor, Cloudflare and more" },
      ar: { title: "أدوات التطوير", desc: "GitHub و Vercel و Cursor و Cloudflare والمزيد" },
    },
    {
      icon: "🎬",
      zh: { title: "视频平台", desc: "YouTube、Netflix、Twitch、Vimeo 等" },
      en: { title: "Video Platforms", desc: "YouTube, Netflix, Twitch, Vimeo and more" },
      ar: { title: "منصات الفيديو", desc: "YouTube و Netflix و Twitch و Vimeo وغيرها" },
    },
    {
      icon: "📊",
      zh: { title: "办公效率", desc: "Notion、Figma、Slack、Google Workspace 等" },
      en: { title: "Productivity", desc: "Notion, Figma, Slack, Google Workspace and more" },
      ar: { title: "الإنتاجية", desc: "Notion و Figma و Slack و Google Workspace وغيرها" },
    },
    {
      icon: "🛒",
      zh: { title: "跨境电商", desc: "Shopify、Amazon、Etsy、Stripe 等" },
      en: { title: "E-Commerce", desc: "Shopify, Amazon, Etsy, Stripe and more" },
      ar: { title: "التجارة الإلكترونية", desc: "Shopify و Amazon و Etsy و Stripe وغيرها" },
    },
    {
      icon: "📚",
      zh: { title: "学习成长", desc: "Coursera、Duolingo、Khan Academy、Udemy 等" },
      en: { title: "Learning", desc: "Coursera, Duolingo, Khan Academy, Udemy and more" },
      ar: { title: "التعلم والتطوير", desc: "Coursera و Duolingo و Khan Academy و Udemy وغيرها" },
    },
    {
      icon: "🌐",
      zh: { title: "更多分类", desc: "金融、新闻、设计、游戏等持续收录中" },
      en: { title: "More Categories", desc: "Finance, news, design, gaming and more incoming" },
      ar: { title: "تصنيفات أخرى", desc: "المال والأخبار والتصميم والألعاب وما هو قادم" },
    },
  ];

  return (
    <div dir={l === "ar" ? "rtl" : "ltr"}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }}
      />
      <Header lang={l} t={t as any} />
      <main style={{ paddingTop: 80, minHeight: "100vh" }}>
        {/* Hero */}
        <div className="tool-detail-hero" style={{ padding: "60px 0 48px" }}>
          <div className="container">
            <p style={{ fontSize: 13, opacity: 0.6, marginBottom: 12, letterSpacing: "0.04em" }}>
              {l === "zh"
                ? "出海工具箱 · 关于本站"
                : l === "en"
                ? "Overseas Toolbox · About"
                : "صندوق أدوات المغتربين · حول الموقع"}
            </p>
            <h1
              className="hero-title gradient-text"
              style={{ fontSize: "clamp(28px, 5vw, 48px)" }}
            >
              {l === "zh"
                ? "出海工作者的一站式工具指南"
                : l === "en"
                ? "One-Stop Tool Guide for Overseas Workers"
                : "دليل أدوات شامل للعمال الصينيين في الخارج"}
            </h1>
            <p className="hero-subtitle" style={{ maxWidth: 660 }}>
              {l === "zh"
                ? "专为出海工作者和海外华人设计，收录全球主流工具，提供中英阿三语详细介绍，内容由人工研究撰写并定期更新。"
                : l === "en"
                ? "Built for Chinese overseas workers and expats. Human-researched, trilingual tool guides covering the global internet — updated regularly."
                : "مصمم للعمال الصينيين في الخارج والمغتربين، يغطي الأدوات العالمية الرئيسية بأدلة بشرية الإنشاء بثلاث لغات، محدَّثة بانتظام."}
            </p>
          </div>
        </div>

        <div className="container" style={{ padding: "48px 24px 80px" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>

            {/* 本站定位 */}
            <section className="detail-section">
              <h2 className="detail-section-title">
                <span className="detail-section-icon">🎯</span>
                {l === "zh" ? "本站定位" : l === "en" ? "Our Purpose" : "هدف الموقع"}
              </h2>
              <p className="overview-text">
                {l === "zh"
                  ? "出海工具箱面向在海外工作、生活或创业的中文用户群体。互联网是出海一族的核心基础设施，但优质工具往往缺乏中文资料。我们填补这一空白：每款工具均附有使用场景说明、功能概述、定价信息和常见问题，帮助你快速判断一款工具是否适合自己的需求。"
                  : l === "en"
                  ? "Overseas Toolbox serves Chinese-speaking users who live, work, or build businesses outside mainland China. The global internet is the backbone of overseas life, yet most quality tools lack Chinese-language resources. We bridge that gap: each tool entry includes use-case context, feature overview, pricing notes, and FAQs so you can quickly decide whether a tool fits your needs."
                  : "يخدم صندوق أدوات المغتربين المستخدمين الناطقين بالصينية الذين يعيشون أو يعملون أو يبنون أعمالاً خارج البر الرئيسي للصين. الإنترنت العالمي هو العمود الفقري للحياة في الخارج، غير أن معظم الأدوات الجيدة تفتقر إلى موارد باللغة الصينية. نحن نسد هذه الفجوة بمقدمات شاملة تتضمن سياق الاستخدام ونظرة عامة على الميزات ومعلومات الأسعار والأسئلة الشائعة."}
              </p>
            </section>

            {/* 内容标准 */}
            <section className="detail-section">
              <h2 className="detail-section-title">
                <span className="detail-section-icon">✅</span>
                {l === "zh" ? "收录标准与内容承诺" : l === "en" ? "Content Standards & Commitment" : "معايير المحتوى والتزاماتنا"}
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {[
                  {
                    zh: { label: "收录标准", text: "仅收录有实际用户基础、功能稳定、服务可持续的全球主流工具，不收录功能存疑或仅付费推广的产品。" },
                    en: { label: "Inclusion Criteria", text: "We only list tools with real user bases, stable functionality, and sustainable services. No pay-to-list, no vaporware." },
                    ar: { label: "معايير الإدراج", text: "ندرج فقط الأدوات ذات القواعد الحقيقية من المستخدمين والوظائف المستقرة. لا إدراج مدفوع، ولا منتجات وهمية." },
                  },
                  {
                    zh: { label: "更新频率", text: "核心工具介绍每季度审查一次，功能或定价发生重大变化时随时更新，确保信息准确。最后全站审查：2025 年。" },
                    en: { label: "Update Frequency", text: "Core tool entries are reviewed quarterly. Major feature or pricing changes are updated promptly. Last full-site review: 2025." },
                    ar: { label: "تكرار التحديث", text: "تُراجع إدخالات الأدوات الأساسية كل ربع سنة. تُحدَّث التغييرات الكبرى فوراً. آخر مراجعة شاملة للموقع: 2025." },
                  },
                  {
                    zh: { label: "信息准确性", text: "所有数据来源于官方文档、权威媒体报道及编辑亲测，标注不确定信息，杜绝无来源猜测。" },
                    en: { label: "Accuracy", text: "All data is sourced from official docs, credible media, and editorial testing. Uncertain info is flagged; guesswork is not published." },
                    ar: { label: "الدقة", text: "جميع البيانات مصدرها الوثائق الرسمية ووسائل الإعلام الموثوقة والاختبار التحريري. المعلومات غير المؤكدة مُشار إليها ولا نُصدر تخمينات." },
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      background: "var(--card-bg, rgba(255,255,255,0.04))",
                      border: "1px solid var(--border-color, rgba(255,255,255,0.08))",
                      borderRadius: 12,
                      padding: "16px 20px",
                    }}
                  >
                    <strong style={{ display: "block", marginBottom: 6, fontSize: 14 }}>
                      {item[l].label}
                    </strong>
                    <p className="overview-text" style={{ margin: 0 }}>
                      {item[l].text}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* 编辑方针 */}
            <section className="detail-section">
              <h2 className="detail-section-title">
                <span className="detail-section-icon">✍️</span>
                {l === "zh" ? "编辑方针" : l === "en" ? "Editorial Policy" : "السياسة التحريرية"}
              </h2>
              <p className="overview-text">
                {l === "zh"
                  ? "本站所有工具介绍均由人工研究、撰写和编辑，不使用 AI 批量生成正文内容。编辑团队在发布前进行事实核查，引用信息注明来源，并在内容过时时主动更新而非删除。商业合作（如联盟链接）会明确标注，不影响工具评价的独立性。"
                  : l === "en"
                  ? "All tool descriptions on this site are researched, written, and edited by humans — we do not bulk-generate content with AI. Editors fact-check before publishing, cite sources where applicable, and proactively update rather than delete outdated content. Any commercial arrangements (e.g. affiliate links) are disclosed and do not influence editorial assessments."
                  : "جميع وصف الأدوات في هذا الموقع يتم بحثه وكتابته وتحريره من قبل البشر — لا نولّد المحتوى بالجملة بالذكاء الاصطناعي. يتحقق المحررون من الوقائع قبل النشر ويستشهدون بالمصادر عند الاقتضاء ويحدّثون المحتوى بصورة استباقية بدلاً من حذفه. تُكشف أي ترتيبات تجارية كروابط الشركاء ولا تؤثر في التقييمات التحريرية."}
              </p>
            </section>

            {/* 覆盖分类 */}
            <section className="detail-section">
              <h2 className="detail-section-title">
                <span className="detail-section-icon">🌐</span>
                {l === "zh" ? "内容覆盖分类" : l === "en" ? "Coverage Categories" : "تصنيفات المحتوى"}
              </h2>
              <div className="features-grid">
                {categories.map((item, i) => (
                  <div className="feature-card" key={i}>
                    <div className="feature-card-icon">{item.icon}</div>
                    <h3 className="feature-card-title">{item[l].title}</h3>
                    <p className="feature-card-desc">{item[l].desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 科学上网提示 */}
            <AirportBanner lang={l} variant="banner" />

            {/* 联系我们 */}
            <section className="detail-section">
              <h2 className="detail-section-title">
                <span className="detail-section-icon">📧</span>
                {l === "zh" ? "联系我们" : l === "en" ? "Contact Us" : "اتصل بنا"}
              </h2>
              <p className="overview-text">
                {l === "zh"
                  ? "有工具推荐、内容纠错或合作意向？欢迎发邮件联系编辑团队：contact@hytuijian.com"
                  : l === "en"
                  ? "Have a tool recommendation, correction, or partnership proposal? Reach our editorial team at: contact@hytuijian.com"
                  : "هل لديك توصية بأداة أو تصحيح أو مقترح شراكة؟ تواصل مع فريقنا التحريري على: contact@hytuijian.com"}
              </p>
            </section>

          </div>
        </div>
      </main>
      <Footer lang={l} />
    </div>
  );
}
