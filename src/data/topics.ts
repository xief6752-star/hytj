import type { I18n } from "./tools";

export interface Topic {
  slug: string;
  icon: string;
  title: I18n;
  h1: I18n;
  description: I18n;
  intro: I18n;
  keywords: string[];
  toolSlugs: string[];
  relatedTopics: string[];
  faq: { q: I18n; a: I18n }[];
}

/**
 * 专题聚合页 —— 面向"意图 + 长尾词"，把工具卡片组合成一站式解决方案。
 * URL 规则：/{lang}/topics/{slug}，slug 全拼音，直露关键词。
 */
export const TOPICS: Topic[] = [
  {
    slug: "chatgpt-guonei-shiyong",
    icon: "🧠",
    keywords: ["chatgpt 国内怎么用", "chatgpt 国内", "chatgpt 中文", "chatgpt 注册", "AI 对话工具推荐"],
    title: {
      zh: "ChatGPT 国内怎么用",
      en: "How to Use ChatGPT in China",
      ar: "كيفية استخدام ChatGPT في الصين",
    },
    h1: {
      zh: "ChatGPT 国内怎么用 2026：注册 + 加速 + 平替全方案",
      en: "How to Use ChatGPT in China 2026: Sign-Up, Speed-Up & Alternatives",
      ar: "كيفية استخدام ChatGPT في الصين 2026: التسجيل والتسريع والبدائل",
    },
    description: {
      zh: "2026 年 ChatGPT 国内使用完整指南：注册教程、支付方式、机场加速方案，附 Claude / Gemini / Perplexity 等平替 AI 工具对比。",
      en: "The 2026 complete guide to using ChatGPT from mainland China: sign-up steps, payment tricks, VPN acceleration, and Claude/Gemini/Perplexity alternatives.",
      ar: "دليل 2026 الشامل لاستخدام ChatGPT من داخل الصين: خطوات التسجيل، طرق الدفع، تسريع VPN، وبدائل Claude/Gemini/Perplexity.",
    },
    intro: {
      zh: "ChatGPT 官网在中国大陆无法直连，且账号注册对 IP 地区极为敏感。本专题整理 2026 年最新的国内使用方案：从选择稳定机场（首推云图机场的 IPLC 专线），到用海外邮箱注册、绕过 +86 手机号限制、订阅 Plus 的支付方式，再到 Claude、Gemini、Perplexity 等三大平替工具的完整对比。",
      en: "ChatGPT is not directly reachable from mainland China, and its sign-up flow is strict about IP regions. This hub bundles the freshest 2026 methods: choose a stable airport (IPLC lines from YunTu recommended), register with an overseas email, bypass the +86 phone limit, subscribe to Plus safely, and compare Claude/Gemini/Perplexity as viable alternatives.",
      ar: "لا يمكن الوصول إلى ChatGPT مباشرة من الصين القارية، وتسجيل الحساب حساس جداً لمنطقة الـIP. يجمع هذا الملف أحدث طرق 2026: اختيار خط IPLC مستقر (يوصى بـ YunTu)، والتسجيل ببريد خارجي، وتجاوز حد +86، والاشتراك بأمان في Plus، ومقارنة Claude/Gemini/Perplexity كبدائل.",
    },
    toolSlugs: ["chatgpt", "claude", "gemini", "perplexity"],
    relatedTopics: ["ai-huihua-quanjia", "kaifa-tichun"],
    faq: [
      {
        q: { zh: "ChatGPT 在中国大陆能直接访问吗？", en: "Can I access ChatGPT directly from mainland China?", ar: "هل يمكنني الوصول إلى ChatGPT مباشرة من الصين القارية؟" },
        a: { zh: "不能。官网、API 和 App 全部无法直连，必须使用机场/VPN 走海外节点。推荐 IPLC 专线机场如云图机场，晚高峰不掉线。", en: "No — the site, API, and app are all unreachable. You need an airport/VPN with an overseas node, ideally an IPLC-line airport like YunTu that doesn't choke during evening peak.", ar: "لا. الموقع والـAPI والتطبيق كلها محجوبة. تحتاج إلى VPN/airport بخادم خارجي، ويفضل خط IPLC مثل YunTu لتجنب التذبذب في الذروة المسائية." },
      },
      {
        q: { zh: "国内号能订阅 Plus 吗？", en: "Can Chinese cards subscribe to ChatGPT Plus?", ar: "هل يمكن البطاقات الصينية الاشتراك في Plus؟" },
        a: { zh: "国内的 Visa/Mastercard 目前一律失败。可以用 WildCard、Depay 等虚拟卡，或用海外 Apple ID 走 App Store 内购。", en: "Domestic Visa/Mastercards currently fail 100%. Use virtual cards (WildCard, Depay) or an overseas Apple ID via App Store in-app purchase.", ar: "بطاقات Visa/Mastercard الصينية تفشل حالياً. استخدم بطاقات افتراضية (WildCard, Depay) أو Apple ID خارجي عبر شراء التطبيق." },
      },
      {
        q: { zh: "免费用 GPT-4o 有哪些方法？", en: "How can I use GPT-4o for free?", ar: "كيف يمكنني استخدام GPT-4o مجاناً؟" },
        a: { zh: "免费账户每 3 小时可用 GPT-4o mini 若干次；Poe、Perplexity、Microsoft Copilot 都提供免费的 GPT-4 系列调用。", en: "Free accounts get limited GPT-4o mini every 3 hours. Poe, Perplexity, and Microsoft Copilot all offer free GPT-4-class access.", ar: "الحسابات المجانية تحصل على GPT-4o mini محدود كل 3 ساعات. Poe و Perplexity و Copilot توفر وصولاً مجانياً إلى GPT-4." },
      },
    ],
  },
  {
    slug: "ai-huihua-quanjia",
    icon: "🎨",
    keywords: ["AI 绘画", "midjourney 教程", "midjourney 国内使用", "AI 图像生成", "AI 画图工具推荐"],
    title: {
      zh: "AI 绘画全家桶",
      en: "The AI Image Generation Toolkit",
      ar: "حزمة أدوات توليد الصور بالذكاء الاصطناعي",
    },
    h1: {
      zh: "AI 绘画全家桶 2026：Midjourney + ChatGPT DALL·E + Gemini 图像方案对比",
      en: "AI Image Generation Toolkit 2026: Midjourney + DALL·E + Gemini Compared",
      ar: "حزمة توليد الصور بالذكاء الاصطناعي 2026: مقارنة Midjourney و DALL·E و Gemini",
    },
    description: {
      zh: "2026 年 AI 绘画工具全对比：Midjourney、ChatGPT（DALL·E 3）、Gemini 图像三大主流方案的画风、价格、国内使用方式全面横评。",
      en: "The 2026 AI image generator face-off: Midjourney vs ChatGPT (DALL·E 3) vs Gemini image, compared by style, price, and China access.",
      ar: "مواجهة أدوات الصور بالذكاء الاصطناعي 2026: Midjourney مقابل ChatGPT (DALL·E 3) مقابل Gemini، مقارنة بالأسلوب والسعر والوصول من الصين.",
    },
    intro: {
      zh: "AI 绘画在 2026 年进入「多引擎共存」阶段：Midjourney V7 依然是艺术画风天花板，ChatGPT 内置的 DALL·E 3 更擅长文字准确性和图文联动，Gemini 图像则以速度和免费额度取胜。本专题按使用场景把三家工具拆开对比，附国内接入方案。",
      en: "AI image generation entered a multi-engine era in 2026: Midjourney V7 still leads on artistic style, DALL·E 3 (inside ChatGPT) excels at text rendering and prompt+image loops, and Gemini image wins on speed and free quota. This hub breaks all three down by use case with China-access notes.",
      ar: "دخل توليد الصور بالذكاء الاصطناعي عصر التعدد في 2026: Midjourney V7 يقود الأسلوب الفني، و DALL·E 3 داخل ChatGPT يبرع في النصوص، و Gemini image يفوز بالسرعة والحصة المجانية. يقارن هذا الملف الثلاثة حسب حالة الاستخدام.",
    },
    toolSlugs: ["midjourney", "chatgpt", "gemini"],
    relatedTopics: ["chatgpt-guonei-shiyong", "sheji-shi-gongju"],
    faq: [
      {
        q: { zh: "Midjourney 国内怎么用？", en: "How do I use Midjourney from China?", ar: "كيف أستخدم Midjourney من الصين؟" },
        a: { zh: "Midjourney 依赖 Discord，Discord 和 Midjourney 官网在国内都无法直连。需要 IPLC 专线机场保证 Discord 长连接稳定，推荐云图机场。", en: "Midjourney runs on Discord and both are blocked in China. Use an IPLC-line airport to keep Discord's WebSocket stable — YunTu is a solid pick.", ar: "يعتمد Midjourney على Discord وكلاهما محجوب في الصين. استخدم خط IPLC للحفاظ على استقرار Discord — YunTu خيار جيد." },
      },
      {
        q: { zh: "DALL·E 3 和 Midjourney 该选哪个？", en: "DALL·E 3 or Midjourney — which should I pick?", ar: "DALL·E 3 أم Midjourney — أيهما تختار؟" },
        a: { zh: "追求艺术风格用 Midjourney；需要精准出字、图文联动、多轮修图选 DALL·E 3（在 ChatGPT Plus 里）。两者可以互补。", en: "Midjourney for artistic style; DALL·E 3 (inside ChatGPT Plus) for accurate text rendering, image+prompt iteration. They complement each other.", ar: "Midjourney للأسلوب الفني؛ DALL·E 3 (داخل ChatGPT Plus) لدقة النصوص والتكرار. يكملان بعضهما." },
      },
    ],
  },
  {
    slug: "kaifa-tichun",
    icon: "⚙️",
    keywords: ["github 加速", "程序员科学上网", "开发者机场推荐", "github clone 慢", "docker 拉取慢"],
    title: { zh: "程序员出海加速", en: "The Developer Speed-Up Kit", ar: "حزمة تسريع المطورين" },
    h1: {
      zh: "程序员出海加速 2026：GitHub / Docker / npm 全套解决方案",
      en: "Developer Speed-Up Kit 2026: GitHub, Docker, npm — All Solved",
      ar: "حزمة تسريع المطورين 2026: GitHub و Docker و npm — كل الحلول",
    },
    description: {
      zh: "程序员必备工具：GitHub、Notion、ChatGPT、Claude 一站配齐，附 GitHub clone 慢、Docker pull 卡、npm install 超时的解决方案与专线机场推荐。",
      en: "Essential developer toolkit — GitHub, Notion, ChatGPT, Claude — plus fixes for slow git clone, Docker pull timeouts, and npm install hangs, with dedicated-line airport recommendations.",
      ar: "حزمة أدوات المطور: GitHub و Notion و ChatGPT و Claude، مع حلول لبطء git clone و Docker pull و npm install، وتوصيات خطوط مخصصة.",
    },
    intro: {
      zh: "国内开发环境的三大痛点：GitHub clone/push 慢到超时、Docker Hub 拉取被劫持、npm/pip 国外源不通。本专题给出 2026 年的完整方案：从机场选择（TCP 长连接稳定的 IPLC 线路，云图机场表现优秀）到 GitHub SSH 加速、AI Coding 工具接入（ChatGPT + Claude 双引擎）、文档协作用 Notion。",
      en: "Three chronic dev pains in China: git clone/push timeouts, Docker Hub throttling, and npm/pip failures on foreign registries. This hub gives the full 2026 kit: airport choice (IPLC-line with stable TCP long-lived, YunTu is a strong pick), GitHub SSH tunneling, AI coding assistants (ChatGPT + Claude), and Notion for docs.",
      ar: "ثلاث آلام مزمنة للمطورين في الصين: انقطاع git clone/push، اختناق Docker Hub، وفشل npm/pip على المستودعات الأجنبية. يقدم هذا الملف حزمة 2026 كاملة.",
    },
    toolSlugs: ["github", "notion", "chatgpt", "claude"],
    relatedTopics: ["chatgpt-guonei-shiyong", "ai-huihua-quanjia"],
    faq: [
      {
        q: { zh: "GitHub clone 慢怎么解决？", en: "How do I fix slow git clone?", ar: "كيف أعالج بطء git clone؟" },
        a: { zh: "三种方案：1）SSH 走机场代理（推荐云图 IPLC）；2）用 GitHub 官方 CDN 加速域名；3）配置 git config http.proxy 走本地代理。IPLC 线路对大文件传输最稳。", en: "Three options: 1) tunnel SSH through an airport (IPLC recommended, e.g. YunTu); 2) use GitHub's CDN mirror; 3) set git config http.proxy to your local proxy. IPLC lines are the most reliable for large transfers.", ar: "ثلاثة خيارات: 1) توجيه SSH عبر airport (يوصى بـ IPLC مثل YunTu)؛ 2) استخدام مرآة CDN؛ 3) ضبط git config http.proxy." },
      },
      {
        q: { zh: "Copilot 和 ChatGPT / Claude 冲突吗？", en: "Do Copilot and ChatGPT/Claude conflict?", ar: "هل يتعارض Copilot مع ChatGPT/Claude؟" },
        a: { zh: "不冲突，很互补。Copilot 在 IDE 里做补全和 inline chat；ChatGPT/Claude 做架构讨论、代码 review、长文档理解。2026 年主流实践是三个都开。", en: "No — they complement each other. Copilot handles inline completions in your IDE; ChatGPT/Claude handle architecture discussions, code review, and long-document analysis. Running all three is standard practice in 2026.", ar: "لا، إنها متكاملة. Copilot يتولى الإكمال داخل IDE؛ ChatGPT/Claude يتولى النقاشات المعمارية ومراجعة الكود." },
      },
    ],
  },
  {
    slug: "youtube-shipin-jiasu",
    icon: "📺",
    keywords: ["youtube 国内看", "youtube 加速", "netflix 国内", "海外流媒体推荐", "机场解锁流媒体"],
    title: { zh: "海外视频与流媒体加速", en: "Video Streaming Acceleration", ar: "تسريع بث الفيديو" },
    h1: {
      zh: "海外视频与流媒体加速 2026：YouTube · Netflix · Spotify 一站解锁",
      en: "Video & Streaming Acceleration 2026: YouTube · Netflix · Spotify Unlocked",
      ar: "تسريع البث والفيديو 2026: YouTube · Netflix · Spotify مفتوحة",
    },
    description: {
      zh: "2026 年国内看 YouTube 4K、Netflix 原生解锁、Spotify 无广告全指南。附机场解锁能力对比、专线选择和防封号技巧。",
      en: "The 2026 guide to 4K YouTube, native Netflix unlocking, and ad-free Spotify from China. Includes streaming-unlock airport comparison and anti-ban tips.",
      ar: "دليل 2026 لمشاهدة YouTube 4K و Netflix و Spotify من الصين. مقارنة قدرات الفتح ونصائح لتجنب الحظر.",
    },
    intro: {
      zh: "流媒体对机场的要求最苛刻：Netflix 判断「原生 IP」、YouTube 4K 吃带宽、Spotify 频繁掉线检测。本专题按解锁能力横评机场，重点推荐云图机场（有专门的流媒体节点），并给出 4K 播放的最低带宽配置。",
      en: "Streaming has the strictest airport requirements: Netflix checks for 'native IP', YouTube 4K needs bandwidth, Spotify probes for drops. This hub compares airports by unlock capability. YunTu (with dedicated streaming nodes) is our top pick.",
      ar: "البث لديه أشد المتطلبات: Netflix يفحص IP الأصلي، YouTube 4K يستهلك النطاق، Spotify يراقب الانقطاع. يقارن هذا الملف الخوادم بقدرة الفتح.",
    },
    toolSlugs: ["youtube", "netflix", "spotify"],
    relatedTopics: ["chuhai-shejiaomeiti"],
    faq: [
      {
        q: { zh: "国内看 YouTube 4K 需要多少带宽？", en: "How much bandwidth do I need for YouTube 4K from China?", ar: "كم من النطاق أحتاج لـ YouTube 4K؟" },
        a: { zh: "YouTube 4K 60fps 峰值约 25–45 Mbps。机场带宽建议 100 Mbps 起步的专线节点，云图的 IPLC 4K 节点实测能跑满。", en: "YouTube 4K 60fps peaks at 25–45 Mbps. Pick an airport advertising ≥100 Mbps on IPLC lines — YunTu's 4K nodes saturate reliably.", ar: "يوتيوب 4K 60fps يبلغ ذروته 25–45 Mbps. اختر خطاً بسعة ≥100 Mbps." },
      },
      {
        q: { zh: "Netflix 提示「You seem to be using an unblocker」 怎么办？", en: "Netflix says 'unblocker detected' — what now?", ar: "نتفلكس يقول 'كاشف VPN' — ماذا أفعل؟" },
        a: { zh: "换支持「原生 IP」的机场节点，普通落地 IP 会被识别。云图机场明确标注了流媒体解锁节点。", en: "Switch to a node advertised as 'native IP'. Generic landing IPs are flagged. YunTu labels its unlock nodes explicitly.", ar: "بدّل إلى عقدة 'IP أصلي'. الـIP العادية تُكتشف. YunTu يوضح عقد الفتح صراحة." },
      },
    ],
  },
  {
    slug: "chuhai-shejiaomeiti",
    icon: "💬",
    keywords: ["出海社交媒体", "twitter 国内使用", "linkedin 国内", "instagram 注册", "telegram 使用"],
    title: { zh: "出海社交媒体全套", en: "The Social Media Stack for Going Global", ar: "حزمة التواصل الاجتماعي العالمي" },
    h1: {
      zh: "出海社交媒体全套 2026：Twitter / LinkedIn / Instagram / Telegram / Discord",
      en: "Social Media Stack for Going Global 2026: Twitter / LinkedIn / Instagram / Telegram / Discord",
      ar: "حزمة التواصل الاجتماعي 2026: Twitter و LinkedIn و Instagram و Telegram و Discord",
    },
    description: {
      zh: "出海必用的 5 大社交平台一次配齐：X（前 Twitter）营销、LinkedIn 求职、Instagram 品牌、Telegram 社群、Discord 客户运营。",
      en: "Five social platforms for going global: X (Twitter) marketing, LinkedIn hiring, Instagram branding, Telegram communities, Discord customer ops.",
      ar: "خمس منصات اجتماعية للتوسع العالمي: X للتسويق، LinkedIn للتوظيف، Instagram للعلامة، Telegram للمجتمعات، Discord لخدمة العملاء.",
    },
    intro: {
      zh: "出海营销 = 内容 × 平台 × 加速。本专题梳理 2026 年五大出海社交平台的账号注册、防封号、内容差异化定位，并附国内运营时的稳定接入方案（首推云图机场，海外节点覆盖 20+ 国家）。",
      en: "Overseas marketing = content × platform × acceleration. This hub covers sign-up, anti-ban tactics, and content positioning across the top-5 platforms, plus stable China-side access via YunTu (nodes across 20+ countries).",
      ar: "التسويق الخارجي = محتوى × منصة × تسريع. يغطي هذا الملف التسجيل ومكافحة الحظر والتموضع عبر أكبر 5 منصات، مع وصول مستقر من الصين عبر YunTu.",
    },
    toolSlugs: ["twitter-x", "linkedin", "instagram", "telegram", "discord"],
    relatedTopics: ["youtube-shipin-jiasu"],
    faq: [
      {
        q: { zh: "同一个机场同时运营多个海外社交账号会封号吗？", en: "Will running multiple overseas accounts through one airport get me banned?", ar: "هل تشغيل حسابات متعددة عبر airport واحد يؤدي إلى الحظر؟" },
        a: { zh: "共享出口 IP 是主要封号原因。建议：1）不同账号绑不同节点；2）优先用独享 IP 节点，云图有独享节点方案；3）使用防指纹浏览器。", en: "Shared exit IPs are the top ban trigger. Best practice: 1) bind each account to a different node; 2) prefer dedicated-IP nodes (YunTu offers them); 3) use anti-detect browsers.", ar: "الـIP المشترك هو السبب الأول. أفضل ممارسة: 1) عقدة لكل حساب؛ 2) IP مخصص (يوفره YunTu)؛ 3) متصفح مضاد للبصمات." },
      },
    ],
  },
  {
    slug: "kuajing-dianshang",
    icon: "🛒",
    keywords: ["跨境电商工具", "shopify 建站", "paypal 收款", "跨境电商机场", "独立站教程"],
    title: { zh: "跨境电商必备", en: "Cross-Border E-Commerce Essentials", ar: "أساسيات التجارة عبر الحدود" },
    h1: {
      zh: "跨境电商必备 2026：Shopify 建站 + PayPal 收款 + 协作工具",
      en: "Cross-Border E-Commerce Essentials 2026: Shopify + PayPal + Collaboration",
      ar: "أساسيات التجارة عبر الحدود 2026: Shopify و PayPal والتعاون",
    },
    description: {
      zh: "跨境电商 0 到 1 的完整工具链：Shopify 独立站、PayPal 收款、Notion 团队协作、Figma 设计、Instagram 营销，附国内运营加速方案。",
      en: "The 0-to-1 cross-border e-commerce toolchain: Shopify storefront, PayPal checkout, Notion collaboration, Figma design, Instagram marketing — with China-side acceleration.",
      ar: "سلسلة أدوات التجارة عبر الحدود من 0 إلى 1: متجر Shopify، الدفع عبر PayPal، تعاون Notion، تصميم Figma، تسويق Instagram.",
    },
    intro: {
      zh: "跨境电商在国内运营的核心挑战：Shopify 后台管理国内访问慢、PayPal 收款需要海外 IP、Instagram/TikTok 广告投放依赖稳定翻墙。本专题给出全套工具组合和加速建议。",
      en: "Running a cross-border shop from China: Shopify admin lags, PayPal needs overseas IP, Instagram/TikTok ads require a stable tunnel. This hub gives the complete tool stack and acceleration plan.",
      ar: "إدارة متجر عالمي من الصين: بطء Shopify، احتياج PayPal لـIP خارجي، إعلانات Instagram/TikTok تحتاج نفقاً مستقراً.",
    },
    toolSlugs: ["shopify", "paypal", "notion", "figma", "instagram"],
    relatedTopics: ["sheji-shi-gongju", "chuhai-shejiaomeiti"],
    faq: [
      {
        q: { zh: "PayPal 国内账号能收美金吗？", en: "Can a China PayPal account receive USD?", ar: "هل يمكن حساب PayPal الصيني استقبال الدولار؟" },
        a: { zh: "国内 PayPal 商家账号可以收美金，但需要绑定境内美金账户或换汇入境。建议开美国 PayPal 账号，需海外 IP 注册。", en: "Yes for merchant accounts, but you'll need a domestic USD sub-account or FX conversion. A US PayPal account (registered from overseas IP) is smoother.", ar: "نعم لحسابات التجار، لكن مع حساب فرعي بالدولار أو تحويل. حساب PayPal أمريكي مسجل من IP خارجي أسهل." },
      },
    ],
  },
  {
    slug: "sheji-shi-gongju",
    icon: "🎨",
    keywords: ["设计师工具", "figma 国内使用", "figma 加速", "海外设计工具", "UI 设计工具推荐"],
    title: { zh: "设计师出海工具箱", en: "Designer's Global Toolkit", ar: "حزمة المصمم العالمية" },
    h1: {
      zh: "设计师出海工具箱 2026：Figma + Midjourney + AI 生图完整工作流",
      en: "Designer's Global Toolkit 2026: Figma + Midjourney + AI Image Workflow",
      ar: "حزمة المصمم 2026: سير عمل Figma و Midjourney و AI للصور",
    },
    description: {
      zh: "2026 年设计师完整工作流：Figma 团队协作、Midjourney AI 生图、ChatGPT 文案生成，附 Figma 国内加速与团队机场方案。",
      en: "The 2026 designer workflow: Figma collaboration, Midjourney AI imagery, ChatGPT copywriting — with Figma acceleration for China-based teams.",
      ar: "سير عمل المصمم 2026: تعاون Figma، صور Midjourney، كتابة ChatGPT، مع تسريع Figma من الصين.",
    },
    intro: {
      zh: "Figma 服务器在海外，国内直连不稳定，团队协作卡顿。本专题给出 Figma + AI 生图 + AI 文案的完整设计工作流，并推荐团队级机场方案（云图机场有企业套餐）。",
      en: "Figma servers are overseas — direct China access is unstable and team collab lags. This hub covers Figma + AI images + AI copy as a full workflow, plus team-tier airport plans (YunTu offers enterprise tiers).",
      ar: "خوادم Figma خارج الصين — الوصول المباشر غير مستقر. يغطي هذا الملف سير العمل الكامل مع خطط الفرق.",
    },
    toolSlugs: ["figma", "midjourney", "chatgpt"],
    relatedTopics: ["ai-huihua-quanjia", "kuajing-dianshang"],
    faq: [
      {
        q: { zh: "Figma 团队协作卡顿怎么办？", en: "How do I fix Figma collaboration lag?", ar: "كيف أعالج بطء Figma التعاوني؟" },
        a: { zh: "Figma 用 WebSocket 长连接，对丢包极敏感。用 IPLC 专线机场（如云图）比普通节点稳定 3-5 倍，团队 5 人以上建议企业级线路。", en: "Figma uses long-lived WebSockets that hate packet loss. IPLC-line airports (like YunTu) are 3–5× more stable than generic nodes. Teams of 5+ should use enterprise tiers.", ar: "يستخدم Figma WebSocket طويلة المدى تكره فقدان الحزم. خطوط IPLC (مثل YunTu) أكثر استقراراً 3–5×." },
      },
    ],
  },
  {
    slug: "liuxue-xuexi",
    icon: "🎓",
    keywords: ["留学工具", "coursera 课程", "duolingo 学英语", "海外网课加速", "在线学习平台"],
    title: { zh: "留学与在线学习", en: "Study Abroad & Online Learning", ar: "الدراسة والتعلم عبر الإنترنت" },
    h1: {
      zh: "留学与在线学习 2026：Coursera · Duolingo · YouTube 教育频道全攻略",
      en: "Study Abroad & Online Learning 2026: Coursera · Duolingo · YouTube EDU",
      ar: "الدراسة والتعلم 2026: Coursera و Duolingo و YouTube التعليمي",
    },
    description: {
      zh: "2026 年留学与在线学习必备工具：Coursera 名校课程、Duolingo 语言学习、YouTube 教育频道，附国内学习加速方案。",
      en: "The 2026 study-abroad and online learning kit: Coursera degrees, Duolingo languages, YouTube EDU — plus China-side acceleration.",
      ar: "حزمة الدراسة والتعلم 2026: دورات Coursera، لغات Duolingo، YouTube التعليمي، مع تسريع من الصين.",
    },
    intro: {
      zh: "Coursera 部分课程仅美国区可选，Duolingo 国内可用但同步学习伙伴需要海外网络，YouTube 教育视频吃带宽。本专题给出留学与在线学习的加速方案。",
      en: "Some Coursera courses are US-only, Duolingo works in China but the community sync needs overseas net, YouTube EDU is bandwidth-hungry. This hub covers acceleration for study-abroad and online learning.",
      ar: "بعض دورات Coursera متاحة في الولايات المتحدة فقط، Duolingo يعمل في الصين لكن المزامنة تحتاج شبكة خارجية.",
    },
    toolSlugs: ["coursera", "duolingo", "youtube", "chatgpt"],
    relatedTopics: ["kaifa-tichun", "chatgpt-guonei-shiyong"],
    faq: [
      {
        q: { zh: "Coursera 国内能报名吗？", en: "Can I enroll in Coursera from China?", ar: "هل يمكنني التسجيل في Coursera من الصين؟" },
        a: { zh: "网站可访问但视频加载慢，部分课程（涉及加密学等敏感内容）需要美国 IP。用云图美国节点全部课程可解锁。", en: "The site loads but videos crawl; some courses (cryptography, etc.) need a US IP. YunTu's US nodes unlock all of them.", ar: "الموقع متاح لكن الفيديو بطيء، وبعض الدورات تحتاج IP أمريكي. عقد YunTu الأمريكية تفتح الجميع." },
      },
    ],
  },
  {
    slug: "haiwai-manju-duanju",
    icon: "🎭",
    keywords: [
      "漫剧怎么弄", "漫剧下载", "海外漫剧 APP", "短剧出海", "短剧海外版",
      "ReelShort 下载", "ReelShort 怎么用", "DramaBox 下载", "GoodShort",
      "漫剧翻译", "海外短剧 APP 推荐", "短剧 APP 加速",
    ],
    title: {
      zh: "海外漫剧 / 短剧 APP",
      en: "Overseas Short-Drama Apps",
      ar: "تطبيقات الدراما القصيرة الخارجية",
    },
    h1: {
      zh: "漫剧怎么弄 2026：ReelShort · DramaBox · GoodShort 下载与加速全指南",
      en: "How to Watch Overseas Short Dramas 2026: ReelShort, DramaBox & GoodShort",
      ar: "كيفية مشاهدة الدراما القصيرة 2026: ReelShort و DramaBox و GoodShort",
    },
    description: {
      zh: "2026 年海外漫剧/短剧 APP 全指南：ReelShort、DramaBox、GoodShort 三大主流 APP 下载、注册、付费与国内加速方案，附翻译与字幕技巧。",
      en: "The 2026 guide to overseas short-drama (Manju) apps: how to download and use ReelShort, DramaBox, and GoodShort from restricted regions — sign-up, payment, and acceleration.",
      ar: "دليل 2026 لتطبيقات الدراما القصيرة (Manju): كيفية تنزيل واستخدام ReelShort و DramaBox و GoodShort من المناطق المحجوبة.",
    },
    intro: {
      zh: "「漫剧」（海外短剧）是 2025-2026 年出海爆款品类。ReelShort（枫叶）、DramaBox（点众）、GoodShort（阅文）是三大头部 APP，都需要海外 App Store / Google Play 账号下载，运行时需要海外 IP 才能加载完整剧集。国内直连普遍加载失败或只能看前几集。本专题整理下载路径、注册技巧、付费方式与稳定加速方案（首推云图机场的美国/新加坡节点）。",
      en: "'Manju' (overseas short vertical dramas) is a breakout 2025-2026 category. ReelShort (Crazy Maple), DramaBox (Dianzhong), and GoodShort (Yuewen) are the three leading apps. All require an overseas Apple ID / Google Play account to install and an overseas IP to load full episodes — direct connection from China fails past the first few episodes. This hub covers install paths, sign-up, payment, and a stable acceleration plan (YunTu US/Singapore nodes recommended).",
      ar: "'Manju' (الدراما القصيرة العمودية) فئة صاعدة في 2025-2026. ReelShort و DramaBox و GoodShort هي التطبيقات الثلاثة الرائدة. كلها تتطلب حساب Apple ID/Google Play خارجي للتثبيت و IP خارجي لتحميل الحلقات الكاملة.",
    },
    toolSlugs: ["youtube", "netflix", "twitter-x"],
    relatedTopics: ["youtube-shipin-jiasu", "chuhai-shejiaomeiti"],
    faq: [
      {
        q: { zh: "漫剧 APP 国内直接下载能用吗？", en: "Can I install Manju apps directly in China?", ar: "هل يمكن تثبيت تطبيقات Manju مباشرة من الصين؟" },
        a: { zh: "国内 App Store 里没有 ReelShort、DramaBox 海外版，需要切换到海外区 Apple ID（美区 / 港区常用），或用海外 Google Play 账号安装 APK。安装后仍需海外 IP 才能加载所有剧集。", en: "The overseas versions of ReelShort/DramaBox aren't in the China App Store — switch to a US or HK Apple ID, or install the APK via an overseas Google Play account. After install, you still need an overseas IP to load full episodes.", ar: "النسخ الخارجية غير موجودة في App Store الصيني — بدّل إلى Apple ID أمريكي/هونغ كونغ، أو ثبّت APK عبر Google Play خارجي. تحتاج IP خارجي لتحميل جميع الحلقات." },
      },
      {
        q: { zh: "看漫剧对机场节点有什么要求？", en: "What kind of VPN node do I need for Manju apps?", ar: "ما نوع خادم الـVPN المطلوب؟" },
        a: { zh: "漫剧 APP 是竖屏视频流，单集码率 2-5 Mbps，要求节点稳定不掉线。ReelShort 主要用美国 CDN，推荐美国 IPLC 专线；DramaBox 用新加坡 / 日本 CDN，用亚洲专线更快。云图机场的美国和新加坡节点实测都能满速。", en: "Manju apps stream vertical video at 2-5 Mbps — you need a stable node that doesn't drop. ReelShort uses US CDN (US IPLC recommended); DramaBox uses SG/JP CDN (Asia line preferred). YunTu's US and Singapore nodes hit full bitrate in our tests.", ar: "التطبيقات تبث فيديو عمودي بمعدل 2-5 ميجابت/ثانية. ReelShort على CDN أمريكي، DramaBox على سنغافورة/اليابان. عقد YunTu الأمريكية والسنغافورية تصل لسعة كاملة." },
      },
      {
        q: { zh: "漫剧付费需要什么支付方式？", en: "How do I pay for Manju coins?", ar: "كيف أدفع للعملات في تطبيقات Manju؟" },
        a: { zh: "APP 内购走 Apple ID 或 Google Play，需要绑定海外区支付方式：WildCard、Depay 虚拟 Visa，或用海外礼品卡（Apple Gift Card / Google Play Gift Card）充值。国内 Visa/银联卡 100% 拒付。", en: "In-app purchases go through Apple ID or Google Play — bind an overseas payment: WildCard/Depay virtual Visa, or top up with overseas gift cards (Apple / Google Play). China-issued Visa or UnionPay fails 100%.", ar: "المشتريات عبر Apple/Google Play — تحتاج دفع خارجي (WildCard, Depay) أو بطاقات هدايا. البطاقات الصينية ترفض 100٪." },
      },
    ],
  },
];
