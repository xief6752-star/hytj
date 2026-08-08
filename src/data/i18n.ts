export type Lang = "zh" | "en" | "ar";

export const SITE_URL = "https://hytuijian.com";
export const SITE_YEAR = "2026";
export const AIRPORT_NAME = "云图机场";
export const AIRPORT_LINK = "https://vip.ytjcok.org/#/register?code=iV8ahCNE";
/** 站内联盟跳转中间页，便于集中埋点/统一换链；实际外链由 /go/[brand] 转发 */
export const AIRPORT_GO = "/go/yuntu";

/** 联盟跳转品牌配置：新增品牌只需加一条 */
export const BRAND_LINKS: Record<string, { url: string; label: string }> = {
  yuntu:      { url: AIRPORT_LINK, label: "云图机场" },
  shunyun:    { url: "https://ccc.jichang.best/#/register?code=MhKYAnsG&utm_source=hytuijian", label: "瞬云机场" },
  huanyuyun:  { url: "https://huanyuyun.cc/#/register?code=CPBmzXgk&utm_source=hytuijian",    label: "寰宇云机场" },
  wgetcloud:  { url: "https://wgetcloud.org/?utm_source=hytuijian",                            label: "WgetCloud 极速Cloud" },
  tag:        { url: AIRPORT_LINK, label: "TAG 机场（推荐替代：云图）" },
  yiyuan:     { url: AIRPORT_LINK, label: "一元机场（推荐更稳的替代：云图）" },
  flyingbird: { url: "https://flyingbird.cc/?utm_source=hytuijian",                            label: "飞鸟机场" },
  nexitally:  { url: "https://nexitally.com/?utm_source=hytuijian",                             label: "奶昔机场 Nexitally" },
  yifen:      { url: AIRPORT_LINK,                                                              label: "一分机场（推荐替代云图）" },
};

/** 友情链接：对标勇哥博客、机场查等同垂类站，方便后续互链
 *  修改说明：URL/name 直接改这里；新增就 push 一条 */
export const FRIEND_LINKS: {
  name: { zh: string; en: string; ar: string };
  url: string;
  note?: { zh: string; en: string; ar: string };
}[] = [
  {
    name: { zh: "勇哥博客", en: "YongGe Blog", ar: "مدونة YongGe" },
    url: "https://yongjichang.com/",
    note: { zh: "机场评测与梯子推荐", en: "VPN reviews", ar: "مراجعات VPN" },
  },
  {
    name: { zh: "机场查", en: "JichangCha", ar: "JichangCha" },
    url: "https://www.jichangcha.com/",
    note: { zh: "机场推荐榜单", en: "Airport rankings", ar: "تصنيفات المطارات" },
  },
];

export const UI_TEXT = {
  zh: {
    siteTitle: "出海工具箱 2026 - AI/开发/社交/科学上网工具推荐榜",
    siteTagline: "2026 出海必备工具，一站全搞定",
    siteDescription: "2026 年出海工具推荐榜：收录 ChatGPT、Claude、Gemini、YouTube、GitHub、Shopify 等 28+ 款出海必备工具，提供国内使用教程、注册指南、加速方案和科学上网攻略。",
    nav: {
      home: "首页",
      tools: "工具目录",
      categories: "分类",
      about: "关于",
      langSwitch: "English",
    },
    hero: {
      badge: "🧰 出海必备工具站",
      title: "出海工具箱",
      subtitle: "精选全球出海必备工具，提供详细注册教程、使用指南与科学上网攻略",
      searchPlaceholder: "搜索工具名称，如 ChatGPT...",
      cta: "探索工具",
    },
    categories: {
      all: "全部",
      ai: "AI 工具",
      social: "社交媒体",
      dev: "开发工具",
      video: "视频平台",
      office: "办公协作",
      ecommerce: "电商金融",
      learning: "学习资源",
    },
    toolCard: {
      learnMore: "查看详情",
      visitSite: "访问官网",
    },
    airport: {
      badge: "🚀 推荐机场",
      title: "访问以上网站需要科学上网",
      subtitle: "推荐使用云图机场 · 高速稳定 · 按需付费",
      features: ["超高速 IPLC 专线", "全平台客户端支持", "按月/季/年灵活付费", "不限设备同时在线", "7×24 小时客服"],
      cta: "立即注册免费试用",
      ctaSub: "注册即可获得试用流量",
      noAds: "无广告 · 无跟踪 · 注重隐私",
    },
    toolDetail: {
      overview: "工具简介",
      features: "核心功能",
      howToUse: "使用教程",
      history: "创始故事",
      faq: "常见问题",
      visitOfficial: "访问官网",
      founded: "创立时间",
      founder: "创始人",
      headquarter: "总部",
      category: "分类",
      backToHome: "← 返回首页",
      relatedTools: "相关工具",
      needVPN: "访问此工具需要科学上网",
    },
    footer: {
      description: "出海工具箱 - 全球优质外网工具导航站，帮助您发现并使用最好的外网工具。",
      categories: "工具分类",
      quickLinks: "快速链接",
      about: "关于我们",
      privacy: "隐私政策",
      contact: "联系我们",
      copyright: "© 2026 出海工具箱 hytuijian.com · 仅供参考使用",
    },
  },
  en: {
    siteTitle: "Overseas Toolkit 2026 — AI, Dev, Social & VPN Guide",
    siteTagline: "The 2026 Essential Toolkit for Going Global",
    siteDescription: "Overseas Toolkit 2026: 28+ curated tools for going global — ChatGPT, Claude, Gemini, YouTube, GitHub, Shopify — with step-by-step guides, sign-up tutorials, and VPN tips.",
    nav: {
      home: "Home",
      tools: "Tools",
      categories: "Categories",
      about: "About",
      langSwitch: "中文",
    },
    hero: {
      badge: "🧰 Essential Tools for Going Global",
      title: "Overseas Toolkit",
      subtitle: "Curated global tools with step-by-step guides, tutorials, and access instructions",
      searchPlaceholder: "Search tools, e.g. ChatGPT...",
      cta: "Explore Tools",
    },
    categories: {
      all: "All",
      ai: "AI Tools",
      social: "Social Media",
      dev: "Dev Tools",
      video: "Video Platforms",
      office: "Office & Collab",
      ecommerce: "E-Commerce & Finance",
      learning: "Learning",
    },
    toolCard: {
      learnMore: "Learn More",
      visitSite: "Visit Site",
    },
    airport: {
      badge: "🚀 Recommended VPN",
      title: "A VPN is required to access these sites",
      subtitle: "We recommend YunTu VPN · Fast & Stable · Pay-as-you-go",
      features: ["Ultra-fast IPLC lines", "Multi-platform clients", "Monthly/Quarterly/Annual plans", "Unlimited simultaneous devices", "24/7 customer support"],
      cta: "Sign Up for Free Trial",
      ctaSub: "Get trial traffic upon registration",
      noAds: "No Ads · No Tracking · Privacy First",
    },
    toolDetail: {
      overview: "Overview",
      features: "Core Features",
      howToUse: "How to Use",
      history: "Founding Story",
      faq: "FAQ",
      visitOfficial: "Visit Official Site",
      founded: "Founded",
      founder: "Founder",
      headquarter: "Headquarters",
      category: "Category",
      backToHome: "← Back to Home",
      relatedTools: "Related Tools",
      needVPN: "A VPN is required to access this tool",
    },
    footer: {
      description: "Overseas Toolkit - Your guide to the world's best online tools.",
      categories: "Categories",
      quickLinks: "Quick Links",
      about: "About",
      privacy: "Privacy Policy",
      contact: "Contact",
      copyright: "© 2026 Overseas Toolkit hytuijian.com · For reference only",
    },
  },
  ar: {
    siteTitle: "صندوق أدوات المغتربين 2026 — الذكاء الاصطناعي والتطوير والتواصل و VPN",
    siteTagline: "أدواتك الأساسية للعمل والتواصل عالمياً في 2026",
    siteDescription: "صندوق أدوات المغتربين 2026: 28+ أداة مختارة للعمل عالمياً — ChatGPT، Claude، Gemini، YouTube، GitHub، Shopify — مع شروحات خطوة بخطوة ودليل التسجيل ونصائح VPN.",
    nav: {
      home: "الرئيسية",
      tools: "دليل الأدوات",
      categories: "التصنيفات",
      about: "حول الموقع",
      langSwitch: "العربية",
    },
    hero: {
      badge: "🧰 أدواتك الأساسية للعالمية",
      title: "صندوق أدوات المغتربين",
      subtitle: "مجموعة مختارة من أفضل الأدوات العالمية مع شروحات مفصلة ودليل تسجيل وطرق الوصول",
      searchPlaceholder: "ابحث عن أداة، مثل ChatGPT...",
      cta: "اكتشف الأدوات",
    },
    categories: {
      all: "الكل",
      ai: "أدوات الذكاء الاصطناعي",
      social: "وسائل التواصل الاجتماعي",
      dev: "أدوات التطوير",
      video: "منصات الفيديو",
      office: "العمل والتعاون",
      ecommerce: "التجارة الإلكترونية",
      learning: "مصادر التعلم",
    },
    toolCard: {
      learnMore: "عرض التفاصيل",
      visitSite: "زيارة الموقع",
    },
    airport: {
      badge: "🚀 شبكة VPN الموصى بها",
      title: "يتطلب الوصول إلى هذه المواقع شبكة VPN (تجاوز الحجب)",
      subtitle: "نوصي باستخدام YunTu VPN · سرعة عالية واستقرار · دفع مرن حسب الاستخدام",
      features: ["خطوط IPLC فائقة السرعة", "دعم تطبيقات جميع الأنظمة", "خطط دفع مرنة (شهري/ربع سنوي/سنوي)", "أجهزة غير محدودة متصلة في نفس الوقت", "دعم عملاء على مدار الساعة 24/7"],
      cta: "سجل الآن للتجربة المجانية",
      ctaSub: "احصل على حركة مرور تجريبية مجانية عند التسجيل",
      noAds: "بدون إعلانات · بدون تتبع · الخصوصية أولاً",
    },
    toolDetail: {
      overview: "نظرة عامة",
      features: "الميزات الرئيسية",
      howToUse: "طريقة الاستخدام",
      history: "قصة التأسيس",
      faq: "الأسئلة الشائعة",
      visitOfficial: "زيارة الموقع الرسمي",
      founded: "تاريخ التأسيس",
      founder: "المؤسس",
      headquarter: "المقر الرئيسي",
      category: "التصنيف",
      backToHome: "← العودة للرئيسية",
      relatedTools: "أدوات ذات صلة",
      needVPN: "يتطلب الوصول إلى هذه الأداة استخدام شبكة VPN",
    },
    footer: {
      description: "صندوق أدوات المغتربين - دليلك لأفضل الأدوات والخدمات عبر الإنترنت في العالم.",
      categories: "تصنيفات الأدوات",
      quickLinks: "روابط سريعة",
      about: "حول الموقع",
      privacy: "سياسة الخصوصية",
      contact: "اتصل بنا",
      copyright: "© 2026 صندوق أدوات المغتربين hytuijian.com · للمرجعية فقط",
    },
  },
};
