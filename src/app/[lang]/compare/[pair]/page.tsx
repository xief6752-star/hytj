import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { TOOLS } from "@/data/tools";
import { UI_TEXT, SITE_URL, type Lang } from "@/data/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ToolLogo from "@/components/ToolLogo";
import AirportBanner from "@/components/AirportBanner";

// 支持的比较组合（高流量关键词）
const COMPARE_PAIRS = [
  ["chatgpt", "claude"],
  ["chatgpt", "perplexity"],
  ["chatgpt", "midjourney"],
  ["claude", "perplexity"],
  ["youtube", "netflix"],
  ["discord", "notion"],
  ["github", "notion"],
];

export function generateStaticParams() {
  const params: { lang: string; pair: string }[] = [];
  for (const lang of ["zh", "en", "ar"]) {
    for (const [a, b] of COMPARE_PAIRS) {
      params.push({ lang, pair: `${a}-vs-${b}` });
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
  const toolA = TOOLS.find((t) => t.slug === slugA);
  const toolB = TOOLS.find((t) => t.slug === slugB);
  if (!toolA || !toolB) return {};

  const nameA = toolA.name[l];
  const nameB = toolB.name[l];

  const title =
    l === "zh"
      ? `${nameA} vs ${nameB} 2026 深度对比：哪个更好用？`
      : l === "en"
      ? `${nameA} vs ${nameB} 2026 — Which Is Better?`
      : `${nameA} مقابل ${nameB} 2026 — أيهما أفضل؟`;

  const desc =
    l === "zh"
      ? `2026 年 ${nameA} 和 ${nameB} 哪个更好？从功能、价格、使用场景到国内访问方式全面对比，附机场推荐与加速方案。`
      : l === "en"
      ? `${nameA} vs ${nameB} in 2026 — a full comparison of features, pricing, use cases, and how to access from restricted regions.`
      : `مقارنة شاملة بين ${nameA} و ${nameB} في 2026: الميزات والأسعار وحالات الاستخدام وطرق الوصول.`;

  return {
    title,
    description: desc,
    keywords:
      l === "zh"
        ? [`${nameA} vs ${nameB}`, `${nameA}和${nameB}哪个好`, `${nameA}对比${nameB}`, `${nameA} 2026`, `${nameB} 2026`, "出海工具对比", "机场推荐"]
        : [`${nameA} vs ${nameB}`, `${nameA} or ${nameB}`, `${nameA} alternative`, `compare ${nameA} ${nameB}`, `${nameA} 2026`],
    alternates: {
      canonical: `${SITE_URL}/${l}/compare/${pair}`,
      languages: {
        "zh-CN": `${SITE_URL}/zh/compare/${pair}`,
        "en-US": `${SITE_URL}/en/compare/${pair}`,
        "ar": `${SITE_URL}/ar/compare/${pair}`,
      },
    },
  };
}

// 对比维度配置
const DIMENSIONS: {
  key: string;
  zh: string; en: string; ar: string;
  icon: string;
}[] = [
  { key: "free",      icon: "💰", zh: "免费方案",   en: "Free Plan",      ar: "الخطة المجانية" },
  { key: "price",     icon: "💳", zh: "付费价格",   en: "Paid Price",     ar: "السعر المدفوع" },
  { key: "vpn",       icon: "🔒", zh: "国内需翻墙", en: "VPN Required",   ar: "يتطلب VPN" },
  { key: "lang",      icon: "🌐", zh: "中文支持",   en: "Chinese Support",ar: "دعم اللغة" },
  { key: "mobile",    icon: "📱", zh: "移动端",     en: "Mobile App",     ar: "تطبيق الجوال" },
  { key: "platform",  icon: "🖥️", zh: "平台",       en: "Platform",       ar: "المنصة" },
];

// 每个工具的维度数据（手动维护，精准且可引用）
const TOOL_SPECS: Record<string, Record<string, { zh: string; en: string; ar: string }>> = {
  chatgpt: {
    free:     { zh: "有（GPT-4o mini）", en: "Yes (GPT-4o mini)", ar: "نعم (GPT-4o mini)" },
    price:    { zh: "$20/月（Plus）",    en: "$20/mo (Plus)",     ar: "20$/شهر (Plus)" },
    vpn:      { zh: "需要",              en: "Required",          ar: "مطلوب" },
    lang:     { zh: "支持中文",          en: "Yes",               ar: "نعم" },
    mobile:   { zh: "iOS / Android",    en: "iOS / Android",     ar: "iOS / Android" },
    platform: { zh: "网页 + App",        en: "Web + App",         ar: "ويب + تطبيق" },
  },
  claude: {
    free:     { zh: "有（每日限额）",    en: "Yes (daily limit)", ar: "نعم (بحد يومي)" },
    price:    { zh: "$20/月（Pro）",     en: "$20/mo (Pro)",      ar: "20$/شهر (Pro)" },
    vpn:      { zh: "需要",              en: "Required",          ar: "مطلوب" },
    lang:     { zh: "支持中文",          en: "Yes",               ar: "نعم" },
    mobile:   { zh: "iOS / Android",    en: "iOS / Android",     ar: "iOS / Android" },
    platform: { zh: "网页 + App + API", en: "Web + App + API",   ar: "ويب + تطبيق + API" },
  },
  perplexity: {
    free:     { zh: "有（基础搜索）",    en: "Yes (basic search)","ar": "نعم (بحث أساسي)" },
    price:    { zh: "$20/月（Pro）",     en: "$20/mo (Pro)",      ar: "20$/شهر (Pro)" },
    vpn:      { zh: "需要",              en: "Required",          ar: "مطلوب" },
    lang:     { zh: "支持中文",          en: "Yes",               ar: "نعم" },
    mobile:   { zh: "iOS / Android",    en: "iOS / Android",     ar: "iOS / Android" },
    platform: { zh: "网页 + App",        en: "Web + App",         ar: "ويب + تطبيق" },
  },
  midjourney: {
    free:     { zh: "无（已取消）",      en: "No (discontinued)", ar: "لا (توقف)" },
    price:    { zh: "$10/月起",          en: "From $10/mo",       ar: "من 10$/شهر" },
    vpn:      { zh: "需要（Discord）",   en: "Required (Discord)","ar": "مطلوب (Discord)" },
    lang:     { zh: "英文提示词",        en: "English prompts",   ar: "أوامر بالإنجليزية" },
    mobile:   { zh: "无独立 App",        en: "No dedicated app",  ar: "لا يوجد تطبيق مستقل" },
    platform: { zh: "Discord + 网页",   en: "Discord + Web",     ar: "Discord + ويب" },
  },
  youtube: {
    free:     { zh: "有（含广告）",      en: "Yes (with ads)",    ar: "نعم (مع إعلانات)" },
    price:    { zh: "$13.99/月（Premium）",en:"$13.99/mo (Premium)","ar":"13.99$/شهر (Premium)"},
    vpn:      { zh: "需要",              en: "Required",          ar: "مطلوب" },
    lang:     { zh: "支持中文字幕",      en: "Chinese subtitles", ar: "ترجمة بالعربية" },
    mobile:   { zh: "iOS / Android / TV",en:"iOS/Android/TV",    ar: "iOS/Android/TV" },
    platform: { zh: "全平台",            en: "All platforms",     ar: "جميع المنصات" },
  },
  netflix: {
    free:     { zh: "无",                en: "No",                ar: "لا" },
    price:    { zh: "$7.99/月起",        en: "From $7.99/mo",     ar: "من 7.99$/شهر" },
    vpn:      { zh: "需要（国内无服务）", en: "Required",         ar: "مطلوب" },
    lang:     { zh: "部分中文字幕",      en: "Some Chinese subs", ar: "بعض الترجمات العربية" },
    mobile:   { zh: "iOS / Android / TV",en:"iOS/Android/TV",    ar: "iOS/Android/TV" },
    platform: { zh: "全平台",            en: "All platforms",     ar: "جميع المنصات" },
  },
  discord: {
    free:     { zh: "有",                en: "Yes",               ar: "نعم" },
    price:    { zh: "$9.99/月（Nitro）", en: "$9.99/mo (Nitro)",  ar: "9.99$/شهر (Nitro)" },
    vpn:      { zh: "需要",              en: "Required",          ar: "مطلوب" },
    lang:     { zh: "支持中文界面",      en: "Yes",               ar: "نعم" },
    mobile:   { zh: "iOS / Android",    en: "iOS / Android",     ar: "iOS / Android" },
    platform: { zh: "全平台",            en: "All platforms",     ar: "جميع المنصات" },
  },
  notion: {
    free:     { zh: "有（个人版）",      en: "Yes (Personal)",    ar: "نعم (شخصي)" },
    price:    { zh: "$10/月（Plus）",    en: "$10/mo (Plus)",     ar: "10$/شهر (Plus)" },
    vpn:      { zh: "不需要",            en: "Not required",      ar: "غير مطلوب" },
    lang:     { zh: "支持中文",          en: "Yes",               ar: "نعم" },
    mobile:   { zh: "iOS / Android",    en: "iOS / Android",     ar: "iOS / Android" },
    platform: { zh: "全平台",            en: "All platforms",     ar: "جميع المنصات" },
  },
  github: {
    free:     { zh: "有（无限公私仓库）",en: "Yes (unlimited repos)","ar":"نعم (مستودعات غير محدودة)" },
    price:    { zh: "$4/月（Team）",     en: "$4/mo (Team)",      ar: "4$/شهر (Team)" },
    vpn:      { zh: "建议使用",          en: "Recommended",       ar: "يُنصح به" },
    lang:     { zh: "英文为主",          en: "English primarily", ar: "الإنجليزية أساساً" },
    mobile:   { zh: "iOS / Android",    en: "iOS / Android",     ar: "iOS / Android" },
    platform: { zh: "全平台",            en: "All platforms",     ar: "جميع المنصات" },
  },
  spotify: {
    free:     { zh: "有（含广告）",      en: "Yes (with ads)",    ar: "نعم (مع إعلانات)" },
    price:    { zh: "$10.99/月（Individual）",en:"$10.99/mo",     ar: "10.99$/شهر" },
    vpn:      { zh: "建议使用",          en: "Recommended",       ar: "يُنصح به" },
    lang:     { zh: "支持中文歌",        en: "Chinese music",     ar: "موسيقى عربية" },
    mobile:   { zh: "iOS / Android",    en: "iOS / Android",     ar: "iOS / Android" },
    platform: { zh: "全平台",            en: "All platforms",     ar: "جميع المنصات" },
  },
  instagram: {
    free:     { zh: "有",                en: "Yes",               ar: "نعم" },
    price:    { zh: "免费（无付费版）",  en: "Free (no paid tier)","ar":"مجاني (لا توجد خطة مدفوعة)" },
    vpn:      { zh: "需要",              en: "Required",          ar: "مطلوب" },
    lang:     { zh: "支持中文界面",      en: "Yes",               ar: "نعم" },
    mobile:   { zh: "iOS / Android",    en: "iOS / Android",     ar: "iOS / Android" },
    platform: { zh: "手机为主 + 网页",  en: "Mobile + Web",      ar: "جوال + ويب" },
  },
  "twitter-x": {
    free:     { zh: "有",                en: "Yes",               ar: "نعم" },
    price:    { zh: "$8/月（Premium）",  en: "$8/mo (Premium)",   ar: "8$/شهر (Premium)" },
    vpn:      { zh: "需要",              en: "Required",          ar: "مطلوب" },
    lang:     { zh: "支持中文",          en: "Yes",               ar: "نعم" },
    mobile:   { zh: "iOS / Android",    en: "iOS / Android",     ar: "iOS / Android" },
    platform: { zh: "全平台",            en: "All platforms",     ar: "جميع المنصات" },
  },
};

// 每对工具的文字总结（GEO核心，AI搜索引擎最爱引用这类结论）
const PAIR_SUMMARY: Record<string, { zh: string; en: string; ar: string; winnerZh?: string; winnerEn?: string; winnerAr?: string }> = {
  "chatgpt-vs-claude": {
    zh: "ChatGPT 插件生态丰富、图像生成能力强，适合多任务通用场景；Claude 长文档处理（200K Token）和创意写作更出色，更注重安全性。日常使用推荐 ChatGPT，专业写作/代码分析推荐 Claude。",
    en: "ChatGPT excels at plugin ecosystems and image generation, making it ideal for general-purpose tasks. Claude shines in long-document analysis (200K tokens) and creative writing with stronger safety. For everyday use, choose ChatGPT; for professional writing or code analysis, choose Claude.",
    ar: "يتفوق ChatGPT في منظومة الإضافات وتوليد الصور وهو مثالي للاستخدام العام. يتميز Claude في تحليل المستندات الطويلة (200K رمز) والكتابة الإبداعية مع أمان أعلى. للاستخدام اليومي اختر ChatGPT؛ للكتابة الاحترافية أو تحليل الأكواد اختر Claude.",
  },
  "chatgpt-vs-perplexity": {
    zh: "ChatGPT 是对话式 AI 创作工具，适合写作、编程、头脑风暴；Perplexity 是 AI 搜索引擎，适合查资料、找事实、附来源引用。需要生成内容用 ChatGPT，需要搜索查询用 Perplexity。",
    en: "ChatGPT is a conversational AI for writing, coding, and brainstorming. Perplexity is an AI search engine designed for research, fact-finding, and sourced answers. Use ChatGPT to generate content; use Perplexity to research and verify facts.",
    ar: "ChatGPT هو أداة ذكاء اصطناعي تفاعلية مثالية للكتابة والبرمجة والعصف الذهني. Perplexity هو محرك بحث ذكي مصمم للبحث وإيجاد الحقائق مع الاستشهاد بالمصادر. استخدم ChatGPT لإنشاء المحتوى؛ استخدم Perplexity للبحث والتحقق من الحقائق.",
  },
  "chatgpt-vs-midjourney": {
    zh: "ChatGPT 是文字/对话 AI，Midjourney 是专业 AI 绘图工具。两者功能完全不同，互补而非替代。需要文字创作用 ChatGPT，需要高质量 AI 生成图片用 Midjourney。",
    en: "ChatGPT is a text-based conversational AI while Midjourney is a dedicated AI image generator. They serve completely different purposes and complement each other. Use ChatGPT for writing; use Midjourney for stunning AI-generated visuals.",
    ar: "ChatGPT هو ذكاء اصطناعي للنصوص والمحادثات بينما Midjourney هو أداة متخصصة في توليد الصور. لهما أغراض مختلفة تماماً ويكملان بعضهما. استخدم ChatGPT للكتابة وMidjourney للصور الاحترافية.",
  },
  "claude-vs-perplexity": {
    zh: "Claude 是长文创作和代码分析的利器；Perplexity 是实时联网 AI 搜索引擎。两者定位不同，Claude 做创作生成，Perplexity 做信息检索验证。",
    en: "Claude is powerful for long-form writing and code analysis; Perplexity is a real-time web-connected AI search engine. They serve different needs: Claude for content creation, Perplexity for information retrieval and fact-checking.",
    ar: "يتفوق Claude في الكتابة الطويلة وتحليل الأكواد؛ Perplexity محرك بحث ذكي متصل بالإنترنت في الوقت الفعلي. لكل منهما هدف مختلف: Claude لإنشاء المحتوى، Perplexity للبحث والتحقق من المعلومات.",
  },
  "youtube-vs-netflix": {
    zh: "YouTube 免费、内容海量（用户创作为主）、以短视频和直播为核心；Netflix 付费、内容高端（专业制作原创剧集）、电影电视剧体验更好。两者都需要科学上网。",
    en: "YouTube is free, user-generated, and centered on short videos and live streams. Netflix is subscription-based, with premium original productions and cinematic viewing. Both require a VPN in China.",
    ar: "يوتيوب مجاني ومحتواه من إنشاء المستخدمين ويركز على الفيديوهات القصيرة والبث المباشر. نتفلكس مدفوع ويقدم إنتاجات احترافية وأفلاماً وعروضاً أصلية راقية. كلاهما يتطلب VPN.",
  },
  "discord-vs-notion": {
    zh: "Discord 是实时社群通讯工具（语音/文字/频道）；Notion 是异步知识管理和项目协作工具（文档/数据库）。前者适合即时沟通，后者适合信息沉淀。",
    en: "Discord is a real-time community communication platform (voice, text, channels). Notion is an async knowledge management and project collaboration tool (docs, databases). Discord for live communication; Notion for structured documentation.",
    ar: "Discord منصة تواصل مجتمعي في الوقت الفعلي (صوت، نص، قنوات). Notion أداة إدارة المعرفة والتعاون غير المتزامن (مستندات، قواعد بيانات). Discord للتواصل الفوري؛ Notion لتوثيق المعلومات.",
  },
  "github-vs-notion": {
    zh: "GitHub 是代码托管和开发者协作平台（版本控制/CI-CD）；Notion 是通用知识管理工具（文档/任务/数据库）。前者专为开发团队，后者适合所有团队。",
    en: "GitHub is a code hosting and developer collaboration platform (version control, CI/CD). Notion is a general-purpose knowledge management tool (docs, tasks, databases). GitHub for developer teams; Notion for all teams.",
    ar: "GitHub منصة استضافة الأكواد والتعاون بين المطورين (تحكم في الإصدارات، CI/CD). Notion أداة إدارة المعرفة العامة (مستندات، مهام، قواعد بيانات). GitHub للفرق البرمجية؛ Notion لجميع الفرق.",
  },
};

export default async function ComparePage({
  params,
}: {
  params: Promise<{ lang: string; pair: string }>;
}) {
  const { lang, pair } = await params;
  if (lang !== "zh" && lang !== "en" && lang !== "ar") notFound();
  const l = lang as Lang;
  const t = UI_TEXT[l];

  const [slugA, slugB] = pair.split("-vs-");
  const toolA = TOOLS.find((t) => t.slug === slugA);
  const toolB = TOOLS.find((t) => t.slug === slugB);
  if (!toolA || !toolB) notFound();

  const summary = PAIR_SUMMARY[pair];
  const specsA = TOOL_SPECS[slugA] ?? {};
  const specsB = TOOL_SPECS[slugB] ?? {};

  const nameA = toolA.name[l];
  const nameB = toolB.name[l];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: l === "zh" ? `${nameA} vs ${nameB} 2026 深度对比` : l === "en" ? `${nameA} vs ${nameB} 2026 Comparison` : `${nameA} مقابل ${nameB} 2026`,
        description: summary?.[l] ?? "",
        datePublished: "2026-07-15",
        dateModified: new Date().toISOString().split("T")[0],
        author: { "@type": "Organization", name: l === "zh" ? "出海工具箱" : "Overseas Toolkit" },
        publisher: { "@type": "Organization", name: l === "zh" ? "出海工具箱" : "Overseas Toolkit", url: SITE_URL },
        inLanguage: l === "zh" ? "zh-CN" : l === "en" ? "en-US" : "ar",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: l === "zh" ? "首页" : l === "en" ? "Home" : "الرئيسية", item: `${SITE_URL}/${l}` },
          { "@type": "ListItem", position: 2, name: l === "zh" ? "工具对比" : l === "en" ? "Compare" : "مقارنة الأدوات", item: `${SITE_URL}/${l}/compare` },
          { "@type": "ListItem", position: 3, name: `${nameA} vs ${nameB}`, item: `${SITE_URL}/${l}/compare/${pair}` },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: l === "zh" ? `${nameA} 和 ${nameB} 哪个更好？` : l === "en" ? `Is ${nameA} better than ${nameB}?` : `أيهما أفضل ${nameA} أم ${nameB}؟`,
            acceptedAnswer: { "@type": "Answer", text: summary?.[l] ?? "" },
          },
          {
            "@type": "Question",
            name: l === "zh" ? `${nameA} 和 ${nameB} 有什么区别？` : l === "en" ? `What is the difference between ${nameA} and ${nameB}?` : `ما الفرق بين ${nameA} و ${nameB}؟`,
            acceptedAnswer: {
              "@type": "Answer",
              text: l === "zh"
                ? `${nameA} 创立于 ${toolA.founded.slice(0,4)} 年，${toolA.description.zh}；${nameB} 创立于 ${toolB.founded.slice(0,4)} 年，${toolB.description.zh}`
                : l === "en"
                ? `${nameA} was founded in ${toolA.founded.slice(0,4)}. ${toolA.description.en} ${nameB} was founded in ${toolB.founded.slice(0,4)}. ${toolB.description.en}`
                : `تأسس ${nameA} في عام ${toolA.founded.slice(0,4)}. ${toolA.description.ar} تأسس ${nameB} في عام ${toolB.founded.slice(0,4)}. ${toolB.description.ar}`,
            },
          },
        ],
      },
    ],
  };

  return (
    <div dir={l === "ar" ? "rtl" : "ltr"}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Header lang={l} t={t as any} />
      <main style={{ minHeight: "100vh" }}>

        {/* Hero */}
        <div className="tool-detail-hero">
          <div className="container">
            <nav className="tool-detail-breadcrumb" aria-label="breadcrumb">
              <Link href={`/${l}`}>{l === "zh" ? "首页" : l === "en" ? "Home" : "الرئيسية"}</Link>
              <span className="tool-detail-breadcrumb-sep">›</span>
              <span>{l === "zh" ? "工具对比" : l === "en" ? "Compare" : "مقارنة الأدوات"}</span>
              <span className="tool-detail-breadcrumb-sep">›</span>
              <span style={{ color: "var(--text-primary)" }}>{nameA} vs {nameB}</span>
            </nav>

            {/* 双工具头部 */}
            <div style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap", marginBottom: 24 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <ToolLogo slug={toolA.slug} fallback={toolA.logo} size={64} />
                <div>
                  <div style={{ fontSize: 22, fontWeight: 800 }}>{nameA}</div>
                  <div style={{ fontSize: 13, color: "var(--text-muted)" }}>{toolA.founded.slice(0,4)}</div>
                </div>
              </div>
              <div style={{
                width: 48, height: 48, borderRadius: "50%",
                background: "linear-gradient(135deg, var(--primary), var(--accent))",
                display: "grid", placeItems: "center",
                color: "#fff", fontWeight: 900, fontSize: 18, flexShrink: 0,
              }}>VS</div>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <ToolLogo slug={toolB.slug} fallback={toolB.logo} size={64} />
                <div>
                  <div style={{ fontSize: 22, fontWeight: 800 }}>{nameB}</div>
                  <div style={{ fontSize: 13, color: "var(--text-muted)" }}>{toolB.founded.slice(0,4)}</div>
                </div>
              </div>
            </div>

            <h1 style={{ fontSize: "clamp(24px,4vw,40px)", fontWeight: 800, marginBottom: 16, lineHeight: 1.2 }}>
              {l === "zh" ? `${nameA} vs ${nameB}：哪个更好用？` : l === "en" ? `${nameA} vs ${nameB}: Which Should You Choose?` : `${nameA} مقابل ${nameB}: أيهما تختار؟`}
            </h1>
            <p style={{ fontSize: 14, color: "var(--text-muted)" }}>
              🔄 {l === "zh" ? "内容更新：2026年7月" : l === "en" ? "Updated: July 2026" : "آخر تحديث: يوليو 2026"}
            </p>
          </div>
        </div>

        <div className="container" style={{ padding: "48px 24px 80px" }}>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>

            {/* 总结结论（GEO核心段落） */}
            {summary && (
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
                  {summary[l]}
                </div>
              </section>
            )}

            {/* 规格对比表 */}
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
                    {DIMENSIONS.map((dim, i) => (
                      <tr key={dim.key} style={{ borderBottom: "1px solid var(--border)", background: i % 2 === 0 ? "transparent" : "var(--bg-muted)" }}>
                        <td style={{ padding: "14px 16px", fontWeight: 600, color: "var(--text-secondary)" }}>
                          <span style={{ marginRight: 8 }}>{dim.icon}</span>
                          {dim[l]}
                        </td>
                        <td style={{ padding: "14px 16px", textAlign: "center", color: "var(--text-primary)" }}>
                          {specsA[dim.key]?.[l] ?? "—"}
                        </td>
                        <td style={{ padding: "14px 16px", textAlign: "center", color: "var(--text-primary)" }}>
                          {specsB[dim.key]?.[l] ?? "—"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* 工具A 简介 */}
            <section className="detail-section">
              <h2 className="detail-section-title">
                <ToolLogo slug={toolA.slug} fallback={toolA.logo} size={28} />
                <span style={{ marginLeft: 8 }}>{nameA}</span>
                <span style={{ fontSize: 14, fontWeight: 500, color: "var(--text-muted)", marginLeft: 8 }}>
                  {l === "zh" ? "简介" : l === "en" ? "Overview" : "نظرة عامة"}
                </span>
              </h2>
              <p className="overview-text" style={{ marginBottom: 20 }}>{toolA.longDescription[l]}</p>
              <Link href={`/${l}/tools/${toolA.slug}`} className="btn-learn" style={{ display: "inline-block", width: "auto" }}>
                {l === "zh" ? `查看 ${nameA} 完整教程 →` : l === "en" ? `Full ${nameA} Guide →` : `دليل ${nameA} الكامل →`}
              </Link>
            </section>

            {/* 工具B 简介 */}
            <section className="detail-section">
              <h2 className="detail-section-title">
                <ToolLogo slug={toolB.slug} fallback={toolB.logo} size={28} />
                <span style={{ marginLeft: 8 }}>{nameB}</span>
                <span style={{ fontSize: 14, fontWeight: 500, color: "var(--text-muted)", marginLeft: 8 }}>
                  {l === "zh" ? "简介" : l === "en" ? "Overview" : "نظرة عامة"}
                </span>
              </h2>
              <p className="overview-text" style={{ marginBottom: 20 }}>{toolB.longDescription[l]}</p>
              <Link href={`/${l}/tools/${toolB.slug}`} className="btn-learn" style={{ display: "inline-block", width: "auto" }}>
                {l === "zh" ? `查看 ${nameB} 完整教程 →` : l === "en" ? `Full ${nameB} Guide →` : `دليل ${nameB} الكامل →`}
              </Link>
            </section>

            {/* Airport Banner */}
            <AirportBanner lang={l} variant="banner" />
          </div>
        </div>
      </main>
      <Footer lang={l} />
    </div>
  );
}
