// 工具使用常见踩坑（分类默认 + 个别工具覆盖）
// 目的：为工具页新增「常见踩坑」段落，增强 E-E-A-T 与 GEO 引用价值
import type { I18n, Category } from "./tools";

export interface Pitfall {
  icon: string;
  title: I18n;
  desc: I18n;
}

/** 分类级默认踩坑（4 条 / 类） */
export const CATEGORY_PITFALLS: Record<Category, Pitfall[]> = {
  ai: [
    {
      icon: "🌐",
      title: { zh: "国内 IP 无法直连", en: "Direct connection blocked in mainland China", ar: "الاتصال المباشر محجوب" },
      desc: {
        zh: "AI 工具官网、API 与 App 在国内几乎全部无法直连。必须走机场/VPN 海外节点（推荐 IPLC 专线，如云图机场），走香港/新加坡/日本节点最稳。",
        en: "Official sites, APIs, and apps are all blocked from mainland China. You need an airport/VPN with an overseas node — IPLC lines (e.g. YunTu) via HK/SG/JP are most reliable.",
        ar: "المواقع الرسمية و API والتطبيقات كلها محجوبة من الصين. تحتاج إلى VPN بعقد خارجية — خطوط IPLC (مثل YunTu) عبر HK/SG/JP الأكثر موثوقية.",
      },
    },
    {
      icon: "💳",
      title: { zh: "国内 Visa/Master 一律拒付", en: "Chinese Visa/Master cards all fail", ar: "بطاقات Visa/Master الصينية ترفض" },
      desc: {
        zh: "国内发行的 Visa/Mastercard 目前对 AI 订阅（Plus/Pro）一律失败。用 WildCard、Depay 虚拟卡，或用海外 Apple ID 走 App Store 内购。",
        en: "Domestic Visa/Master 100% fails on AI subscriptions. Use virtual cards (WildCard, Depay) or overseas Apple ID via App Store in-app purchase.",
        ar: "بطاقات Visa/Master الصينية تفشل 100٪ في اشتراكات AI. استخدم بطاقات افتراضية (WildCard, Depay) أو Apple ID خارجي.",
      },
    },
    {
      icon: "📧",
      title: { zh: "+86 手机号 / QQ 邮箱注册被拒", en: "+86 phone / QQ mail rejected at signup", ar: "رقم +86 / بريد QQ يُرفض عند التسجيل" },
      desc: {
        zh: "OpenAI、Anthropic、Google 都对 +86 手机号和 QQ 邮箱做限流。用 Gmail/Outlook + 海外接码平台（如 SMS-Activate）注册最稳。",
        en: "OpenAI/Anthropic/Google throttle +86 phones and QQ mail. Use Gmail/Outlook + overseas SMS providers (SMS-Activate) for reliable signup.",
        ar: "OpenAI/Anthropic/Google تحد من رقم +86 وبريد QQ. استخدم Gmail/Outlook + مزودي SMS خارجيين.",
      },
    },
    {
      icon: "🚫",
      title: { zh: "机场节点频繁切换会封号", en: "Frequent node-switching triggers bans", ar: "التبديل المتكرر للعقد يُطلق الحظر" },
      desc: {
        zh: "AI 平台风控严，10 分钟内切换 3 次以上 IP 会被判定为异常并封号。建议锁定单一海外节点 24 小时以上，同一账号别频繁换机场。",
        en: "AI platforms are strict on risk: 3+ IP switches in 10 min flags your account. Stick to one node for 24+ hours per session.",
        ar: "منصات AI صارمة: 3+ تبديلات IP في 10 دقائق تسجل حسابك. التزم بعقدة واحدة لأكثر من 24 ساعة.",
      },
    },
  ],
  social: [
    {
      icon: "🌐",
      title: { zh: "国内无法直连", en: "Blocked from mainland China", ar: "محجوب من الصين" },
      desc: {
        zh: "海外社交平台（X/Instagram/Discord 等）在国内均无法直连，需要机场/VPN。推荐 IPLC 专线保证长连接稳定，如云图机场。",
        en: "Overseas social platforms (X/Instagram/Discord etc.) are all blocked. IPLC-line airports (e.g. YunTu) keep WebSockets stable.",
        ar: "المنصات الاجتماعية الأجنبية محجوبة كلها. خطوط IPLC (مثل YunTu) تحافظ على استقرار WebSockets.",
      },
    },
    {
      icon: "🔒",
      title: { zh: "多账号共用 IP 封号", en: "Shared IP = mass ban risk", ar: "IP مشترك = خطر الحظر الجماعي" },
      desc: {
        zh: "同一机场出口 IP 登多个海外账号极易被判定为营销号并批量封号。多账号运营强推独享 IP 节点 + 防指纹浏览器（如 AdsPower）。",
        en: "Running multiple accounts on one exit IP is the #1 mass-ban trigger. Use dedicated-IP nodes + anti-fingerprint browsers (e.g. AdsPower).",
        ar: "تشغيل حسابات متعددة على IP واحد هو المسبب الأول للحظر الجماعي. استخدم عقد IP مخصصة + متصفح مضاد للبصمة.",
      },
    },
    {
      icon: "📱",
      title: { zh: "国内 App Store 下载不到海外版", en: "China App Store lacks overseas version", ar: "App Store الصيني يفتقد النسخة العالمية" },
      desc: {
        zh: "X、Discord、Telegram 等在国内 App Store 下架，必须切换海外区 Apple ID（美区/港区常见）或用海外 Google Play 账号。",
        en: "X/Discord/Telegram are all delisted from China App Store. Switch to an overseas Apple ID (US/HK) or use overseas Google Play.",
        ar: "X/Discord/Telegram كلها محذوفة من App Store الصيني. بدّل إلى Apple ID خارجي (US/HK) أو استخدم Google Play خارجي.",
      },
    },
    {
      icon: "⚠️",
      title: { zh: "新号 24 小时内被限流", en: "New accounts throttled in first 24h", ar: "الحسابات الجديدة تُقيَّد في 24 ساعة الأولى" },
      desc: {
        zh: "新注册账号 24 小时内发帖、加人、点赞频次过高会触发风控。前 3 天先浏览+关注，不要立即发帖或大量互动。",
        en: "New accounts get flagged if they post/follow/like heavily in the first 24h. Browse + follow only for the first 3 days.",
        ar: "الحسابات الجديدة تُوسم إذا نشرت/تابعت/أعجبت بكثافة في أول 24 ساعة. تصفح فقط لأول 3 أيام.",
      },
    },
  ],
  dev: [
    {
      icon: "🐌",
      title: { zh: "git clone / npm install 超时", en: "git clone / npm install timeouts", ar: "انتهاء المهلة لـ git clone / npm install" },
      desc: {
        zh: "GitHub/npm/Docker Hub 在国内直连超慢。三种方案：1）走机场 SSH 代理；2）配置 git http.proxy；3）用国内镜像（如淘宝 npm、腾讯云 Docker）。",
        en: "GitHub/npm/Docker Hub crawl in China. Fix: 1) tunnel SSH via airport; 2) git http.proxy; 3) domestic mirrors (Taobao npm, Tencent Docker).",
        ar: "GitHub/npm/Docker Hub بطيئة في الصين. الإصلاح: 1) SSH عبر airport؛ 2) git http.proxy؛ 3) مرايا محلية.",
      },
    },
    {
      icon: "🔐",
      title: { zh: "SSH 长连接被 GFW 掐断", en: "SSH long connections cut by GFW", ar: "اتصالات SSH الطويلة تُقطع بواسطة GFW" },
      desc: {
        zh: "SSH 空闲 5 分钟后 GFW 会掐断连接。设置 ServerAliveInterval 30 保持长连接，配合 IPLC 专线机场（如云图）几乎不掉线。",
        en: "GFW cuts idle SSH after 5 min. Set ServerAliveInterval 30 + use IPLC-line airport (e.g. YunTu) for near-zero disconnects.",
        ar: "GFW يقطع SSH بعد 5 دقائق من الخمول. اضبط ServerAliveInterval 30 + استخدم IPLC.",
      },
    },
    {
      icon: "☁️",
      title: { zh: "云函数/CI 部署被拒", en: "Cloud function / CI deploys rejected", ar: "دوال cloud / CI تُرفض" },
      desc: {
        zh: "Vercel、Netlify、Cloudflare Pages 在国内直接部署常被拒。走美国节点 + 邮箱验证时用 Gmail，避免 QQ/163 邮箱。",
        en: "Vercel/Netlify/CF Pages often reject China IPs at deploy. Use US node + Gmail (not QQ/163) for verification.",
        ar: "Vercel/Netlify/CF Pages ترفض IPs صينية أحياناً. استخدم عقدة أمريكية + Gmail.",
      },
    },
    {
      icon: "💰",
      title: { zh: "AWS/GCP 账单要美元卡", en: "AWS/GCP billing needs USD card", ar: "فواتير AWS/GCP تتطلب بطاقة USD" },
      desc: {
        zh: "AWS、GCP、Azure 账单只支持海外 Visa/Master。国内卡 100% 拒付，用 WildCard 或走支付宝海外版（限 GCP）。",
        en: "AWS/GCP/Azure only accept overseas Visa/Master. Domestic cards fail — use WildCard or overseas Alipay (GCP only).",
        ar: "AWS/GCP/Azure تقبل فقط Visa/Master أجنبية. البطاقات المحلية تفشل — استخدم WildCard.",
      },
    },
  ],
  video: [
    {
      icon: "📺",
      title: { zh: "4K 播放缓冲", en: "4K playback buffering", ar: "تخزين مؤقت لبث 4K" },
      desc: {
        zh: "YouTube 4K / Netflix 4K 峰值需要 25-45 Mbps。普通中转机场晚高峰跑不满，必须专线 IPLC 机场（云图/飞鸟 100Mbps+ 节点）。",
        en: "YouTube/Netflix 4K needs 25-45 Mbps peak. Generic transit airports fail at peak — need IPLC (YunTu/FlyingBird 100Mbps+).",
        ar: "YouTube/Netflix 4K يحتاج 25-45 Mbps. الخوادم العادية تفشل بالذروة — تحتاج IPLC.",
      },
    },
    {
      icon: "🚫",
      title: { zh: "Netflix 提示「unblocker detected」", en: "Netflix 'unblocker detected' error", ar: "Netflix خطأ 'كاشف VPN'" },
      desc: {
        zh: "普通落地 IP 会被 Netflix 识别为代理，只能看部分节目。换支持「原生 IP」的机场节点（云图、奶昔机场明确标注原生 IP 节点）。",
        en: "Generic exit IPs get flagged, limiting content. Switch to 'native IP' nodes (YunTu, Nexitally label them explicitly).",
        ar: "IPs العادية تُوسم، مما يحد من المحتوى. بدّل إلى عقد 'IP أصلي' (YunTu, Nexitally).",
      },
    },
    {
      icon: "🌍",
      title: { zh: "区域内容差异", en: "Region-locked content", ar: "محتوى مقيد جغرافياً" },
      desc: {
        zh: "美区 Netflix 内容最多但价格最贵，日区最便宜但内容少。多个海外账号建议按需切换机场节点，或直接买当区礼品卡续费。",
        en: "US Netflix has most content but highest price; JP is cheapest with less. Switch airport nodes per region, or use regional gift cards.",
        ar: "Netflix US أوسع محتوى لكن أغلى؛ اليابان أرخص وأقل. بدّل عقد airport لكل منطقة.",
      },
    },
    {
      icon: "📱",
      title: { zh: "移动端 App 内嵌浏览器不走代理", en: "Mobile app in-browser bypasses VPN", ar: "متصفح التطبيق يتجاوز VPN" },
      desc: {
        zh: "iOS Netflix/YouTube 内嵌网页有时不走系统代理。iOS 用 Shadowrocket 增强模式 + Enhanced Mode，Android 用 Clash 的 TUN 模式。",
        en: "iOS Netflix/YouTube in-app browsers sometimes bypass system proxy. Use Shadowrocket 'Enhanced Mode' on iOS, Clash TUN on Android.",
        ar: "متصفح iOS Netflix/YouTube يتجاوز البروكسي أحياناً. استخدم Shadowrocket Enhanced على iOS.",
      },
    },
  ],
  office: [
    {
      icon: "🐌",
      title: { zh: "Figma / Notion 卡顿", en: "Figma / Notion lag", ar: "بطء Figma / Notion" },
      desc: {
        zh: "Figma/Notion 用 WebSocket 长连接，对丢包极敏感。普通机场丢包 3% 就明显卡顿，必须 IPLC 专线（云图/奶昔 掉包 < 0.5%）。",
        en: "Figma/Notion use WebSockets — hate packet loss. 3% loss on generic airports = visible lag. IPLC lines (YunTu/Nexitally <0.5%).",
        ar: "Figma/Notion يستخدمان WebSockets — يكرهان فقد الحزم. 3٪ فقد = بطء واضح. IPLC (YunTu/Nexitally <0.5٪).",
      },
    },
    {
      icon: "🔐",
      title: { zh: "多人协作时突然掉线", en: "Sudden disconnect during collaboration", ar: "قطع مفاجئ أثناء التعاون" },
      desc: {
        zh: "5 人以上协作时，普通机场并发连接不够。选支持不限设备数的机场（如云图、瞬云、飞鸟都不限设备），团队每人一条连接。",
        en: "5+ collaborators saturate weak airports. Pick airports with unlimited-device plans (YunTu, ShunYun, FlyingBird all offer this).",
        ar: "5+ متعاونين يشبعون الخوادم الضعيفة. اختر خططاً بأجهزة غير محدودة (YunTu, ShunYun, FlyingBird).",
      },
    },
    {
      icon: "💳",
      title: { zh: "团队订阅国内卡拒付", en: "Team subscriptions reject domestic cards", ar: "اشتراكات الفريق ترفض بطاقات محلية" },
      desc: {
        zh: "Figma Team、Notion Plus、Slack Pro 团队版付款只支持海外 Visa/Master。走 WildCard 虚拟卡或用境外注册的公司账号支付。",
        en: "Figma Team, Notion Plus, Slack Pro reject domestic cards. Use WildCard or overseas-registered company account.",
        ar: "Figma Team, Notion Plus, Slack Pro ترفض البطاقات المحلية. استخدم WildCard.",
      },
    },
    {
      icon: "📎",
      title: { zh: "上传大文件失败", en: "Large file uploads fail", ar: "تحميل الملفات الكبيرة يفشل" },
      desc: {
        zh: "Figma/Notion 上传 >50MB 附件时，机场带宽不足会中断。选带宽 ≥ 100 Mbps 的节点，实测云图 IPLC 美国节点跑满。",
        en: "Uploads >50MB fail on weak airports. Pick ≥100 Mbps nodes — YunTu US IPLC hits line speed in tests.",
        ar: "التحميلات >50MB تفشل على الخوادم الضعيفة. اختر ≥100 Mbps.",
      },
    },
  ],
  ecommerce: [
    {
      icon: "💳",
      title: { zh: "PayPal 国内号收不到美金", en: "China PayPal can't receive USD", ar: "PayPal الصيني لا يستقبل USD" },
      desc: {
        zh: "国内 PayPal 商家账号收美金需绑定境内美金账户或换汇入境。跨境电商强推开美国 PayPal（需美国 IP 注册 + 美国地址 + SSN 或 ITIN）。",
        en: "China PayPal needs domestic USD sub-account or FX. Open US PayPal (US IP + address + SSN/ITIN) for cross-border e-commerce.",
        ar: "PayPal الصيني يحتاج حساب USD محلي. افتح PayPal أمريكي (IP + عنوان + SSN/ITIN أمريكي).",
      },
    },
    {
      icon: "🏦",
      title: { zh: "Stripe 拒绝国内主体", en: "Stripe rejects China entities", ar: "Stripe يرفض الكيانات الصينية" },
      desc: {
        zh: "Stripe 不支持中国大陆公司主体。方案：香港/新加坡/美国公司主体注册，或用 Payoneer / WildCard 等替代收单方案。",
        en: "Stripe doesn't accept mainland China entities. Register HK/SG/US entity, or use Payoneer/WildCard as alternatives.",
        ar: "Stripe لا يقبل الكيانات الصينية. سجل كيان HK/SG/US، أو استخدم Payoneer/WildCard.",
      },
    },
    {
      icon: "🚚",
      title: { zh: "跨境物流关税坑", en: "Cross-border shipping duty traps", ar: "فخاخ الرسوم الجمركية عبر الحدود" },
      desc: {
        zh: "美国 T86 免税额度已改。US$800 以下也可能被抽查，建议 Shopify 商家用 DDP 条款 + 关税自负说明。欧盟 IOSS 需注册。",
        en: "US T86 rules changed. Even <$800 may be checked. Use DDP terms + duty-included pricing. EU IOSS registration required.",
        ar: "قواعد US T86 تغيرت. حتى <$800 قد تُفحص. استخدم DDP + التسعير الشامل.",
      },
    },
    {
      icon: "🌐",
      title: { zh: "Shopify 后台在国内加载慢", en: "Shopify admin loads slow in China", ar: "لوحة Shopify بطيئة في الصين" },
      desc: {
        zh: "Shopify admin.shopify.com 走 CDN 全球分发但国内仍慢。用美国专线节点（如云图、WgetCloud）跳板，管理后台响应 < 500ms。",
        en: "Shopify admin's CDN is slow from China. Tunnel via US IPLC (YunTu, WgetCloud) — admin response <500ms.",
        ar: "لوحة Shopify بطيئة من الصين. استخدم US IPLC (YunTu, WgetCloud).",
      },
    },
  ],
  learning: [
    {
      icon: "🎓",
      title: { zh: "美区课程需美国 IP", en: "US-only courses need US IP", ar: "دورات US-only تحتاج IP أمريكي" },
      desc: {
        zh: "Coursera 部分课程（涉密码学、出口管制内容）仅美国区可选。用美国 IPLC 节点 + 海外 IP 注册的账号，才能报名。",
        en: "Some Coursera courses (crypto, export-controlled) are US-only. Use US IPLC node + US-registered account.",
        ar: "بعض دورات Coursera (تشفير، صادرات) US-only. استخدم عقدة US IPLC + حساب مسجل US.",
      },
    },
    {
      icon: "📹",
      title: { zh: "YouTube EDU 视频加载慢", en: "YouTube EDU videos crawl", ar: "فيديو YouTube EDU بطيء" },
      desc: {
        zh: "教育视频 720p 需 5 Mbps，1080p 需 10 Mbps。普通中转机场晚高峰跑不满。IPLC 专线机场（云图/飞鸟）稳定跑满 4K。",
        en: "EDU videos need 5 Mbps for 720p, 10 for 1080p. Weak airports fail at peak. IPLC (YunTu/FlyingBird) hit 4K stably.",
        ar: "فيديو EDU يحتاج 5 Mbps لـ 720p، 10 لـ 1080p. IPLC (YunTu/FlyingBird) تصل إلى 4K بثبات.",
      },
    },
    {
      icon: "🌏",
      title: { zh: "Duolingo 社区功能同步慢", en: "Duolingo community sync slow", ar: "مزامنة مجتمع Duolingo بطيئة" },
      desc: {
        zh: "Duolingo 本身可访问，但排行榜、社区、语言伙伴功能走海外服务器同步慢。开机场后进度同步和奖励刷新明显快。",
        en: "Duolingo works, but leaderboards / community / partners sync via overseas servers. Airport speeds them up noticeably.",
        ar: "Duolingo يعمل، لكن المجتمع/الشركاء يتزامن عبر خوادم خارجية. airport يسرعه.",
      },
    },
    {
      icon: "💳",
      title: { zh: "Coursera Plus 国内卡拒付", en: "Coursera Plus rejects domestic cards", ar: "Coursera Plus يرفض البطاقات المحلية" },
      desc: {
        zh: "Coursera Plus 年费 US$399，国内 Visa/Master 一律失败。用 WildCard 或 PayPal 美国账号支付。学生认证可打 5 折。",
        en: "Coursera Plus ($399/yr) rejects domestic cards. Use WildCard or US PayPal. Student verification = 50% off.",
        ar: "Coursera Plus ($399/سنة) يرفض البطاقات المحلية. استخدم WildCard.",
      },
    },
  ],
};

/** 特定工具的踩坑覆盖（可选，未覆盖的工具走 CATEGORY_PITFALLS） */
export const TOOL_PITFALLS_OVERRIDE: Record<string, Pitfall[]> = {
  chatgpt: [
    {
      icon: "🚫",
      title: { zh: "美国 IP 也可能触发验证", en: "US IP still triggers verification", ar: "IP الأمريكي أيضاً يطلق التحقق" },
      desc: {
        zh: "OpenAI 对数据中心 IP 段（AWS/Azure/GCP）风控严。走住宅 IP 或 IPLC 专线（如云图美国节点）成功率高得多，避免用云服务器 IP。",
        en: "OpenAI blocks datacenter IPs (AWS/Azure/GCP). Use residential IPs or IPLC lines (YunTu US) — success rate much higher than cloud IPs.",
        ar: "OpenAI يحجب IPs المراكز البيانات (AWS/Azure/GCP). استخدم IPs سكنية أو IPLC.",
      },
    },
    {
      icon: "💳",
      title: { zh: "Plus 订阅要海外支付", en: "Plus subscription needs overseas payment", ar: "اشتراك Plus يحتاج دفع خارجي" },
      desc: {
        zh: "国内 Visa/Master、支付宝、微信全部拒付。走 WildCard、Depay 虚拟 Visa，或用海外 Apple ID 走 App Store 内购（价格高约 30%，含苹果分成）。",
        en: "China Visa/Master, Alipay, WeChat all reject. Use WildCard, Depay, or overseas Apple ID (30% price premium for Apple cut).",
        ar: "بطاقات صينية كلها ترفض. استخدم WildCard, Depay, أو Apple ID خارجي.",
      },
    },
    {
      icon: "📱",
      title: { zh: "App 与网页版限额独立", en: "App and web quotas are separate", ar: "حصة التطبيق والويب منفصلة" },
      desc: {
        zh: "Plus 用户 GPT-4o 限额网页和 App 分开计算，两边合计能用更多次。中重度用户可以两端交替刷额度。",
        en: "GPT-4o quotas are split between app and web. Alternate between them to double effective usage.",
        ar: "حصة GPT-4o مقسمة بين التطبيق والويب. تبديل بينهما يضاعف الاستخدام.",
      },
    },
    {
      icon: "🔐",
      title: { zh: "多人共用账号会封", en: "Sharing accounts triggers bans", ar: "مشاركة الحسابات تطلق الحظر" },
      desc: {
        zh: "OpenAI 对同账号多设备/多地区登录风控严。团队用建议直接开 Team Plan（$30/月/席）或多个独立账号，别 5 人共用一个。",
        en: "OpenAI flags multi-region logins on one account. Use Team Plan ($30/seat/mo) for teams, not 5 people sharing one account.",
        ar: "OpenAI يوسم تسجيلات متعددة المناطق. استخدم Team Plan للفرق.",
      },
    },
  ],
  midjourney: [
    {
      icon: "💬",
      title: { zh: "Discord 长连接不稳", en: "Discord long connection unstable", ar: "اتصال Discord الطويل غير مستقر" },
      desc: {
        zh: "Midjourney 依赖 Discord WebSocket。普通中转机场跑不动，必须 IPLC 专线 + Discord 客户端 TUN 模式。云图美国节点实测稳定。",
        en: "MJ needs Discord WebSocket. Generic airports drop it. Use IPLC + Discord TUN mode. YunTu US tested stable.",
        ar: "MJ يحتاج Discord WebSocket. الخوادم العادية تسقطه. استخدم IPLC + TUN.",
      },
    },
    {
      icon: "💳",
      title: { zh: "订阅国内卡拒付", en: "Subscription rejects domestic cards", ar: "الاشتراك يرفض البطاقات المحلية" },
      desc: {
        zh: "Midjourney Basic $10/月、Standard $30/月，只支持海外 Visa/Master。国内卡走 WildCard 或 PayPal 海外账号。",
        en: "MJ Basic $10, Standard $30 — overseas cards only. Use WildCard or overseas PayPal.",
        ar: "MJ Basic $10 — بطاقات خارجية فقط. استخدم WildCard.",
      },
    },
    {
      icon: "🎨",
      title: { zh: "GPU 排队限制", en: "GPU queue limits", ar: "قيود طابور GPU" },
      desc: {
        zh: "Basic Plan 只有 Relax 模式（排队 15 分钟起）。想做商用/高频出图必须 Standard 及以上（有 Fast 模式）。",
        en: "Basic gets Relax only (15+ min queue). Need Standard+ for Fast mode if you generate commercially.",
        ar: "Basic Relax فقط (15+ دقيقة). تحتاج Standard+ للسرعة.",
      },
    },
    {
      icon: "©️",
      title: { zh: "免费/Basic 无商用权", en: "Free/Basic lack commercial rights", ar: "Free/Basic بلا حقوق تجارية" },
      desc: {
        zh: "Free trial 和 Basic Plan 生成的图片没有商用授权，公开使用需 Standard 及以上。年收入 >$1M 的公司还需 Pro Plan。",
        en: "Free/Basic images have no commercial license. Need Standard+ for public use, Pro Plan if company revenue >$1M.",
        ar: "صور Free/Basic بلا رخصة تجارية. تحتاج Standard+.",
      },
    },
  ],
  netflix: [
    {
      icon: "🚫",
      title: { zh: "unblocker detected", en: "'Unblocker detected' error", ar: "خطأ 'كاشف VPN'" },
      desc: {
        zh: "普通落地 IP 会被识别。换支持「原生 IP」的机场节点（云图、奶昔、飞鸟标注了原生 IP 节点）。",
        en: "Generic IPs are flagged. Switch to 'native IP' nodes (YunTu, Nexitally, FlyingBird all label these).",
        ar: "IPs عادية مُعلمة. بدّل إلى 'IP أصلي' (YunTu, Nexitally).",
      },
    },
    {
      icon: "🌍",
      title: { zh: "各区价格差 3-5 倍", en: "Prices vary 3-5× by region", ar: "الأسعار تختلف 3-5× حسب المنطقة" },
      desc: {
        zh: "土耳其、印度、阿根廷区最便宜（约 US$3-5/月）；美区最贵（$22.99/月 Premium）。但注册需当区礼品卡 + IP + 地址证明。",
        en: "Turkey/India/Argentina cheapest (~$3-5). US highest ($22.99 Premium). Signup needs regional gift card + IP + proof of address.",
        ar: "تركيا/الهند/الأرجنتين الأرخص (~$3-5). US الأغلى ($22.99).",
      },
    },
    {
      icon: "📺",
      title: { zh: "4K 需 Premium + 硬件解码", en: "4K needs Premium + hardware decode", ar: "4K يحتاج Premium + فك تشفير أجهزة" },
      desc: {
        zh: "Netflix 4K 只在 Premium Plan（$22.99/月）+ 支持 HDCP 2.2 的设备/浏览器上可用。Chrome + Windows 只能 720p，Edge + Windows 才能 4K。",
        en: "Netflix 4K needs Premium + HDCP 2.2 device. Chrome+Windows caps at 720p; use Edge+Windows for 4K.",
        ar: "Netflix 4K يحتاج Premium + HDCP 2.2. Chrome+Windows حد 720p؛ استخدم Edge.",
      },
    },
    {
      icon: "🚫",
      title: { zh: "封号会牵连支付账号", en: "Ban may follow payment account", ar: "الحظر قد يتبع حساب الدفع" },
      desc: {
        zh: "同一张信用卡如果开过被封的 Netflix 账号，再注册可能被自动关联封号。安全做法是不同区用不同虚拟卡。",
        en: "Same credit card used on banned account may auto-flag new signups. Use different virtual cards per region.",
        ar: "نفس البطاقة قد تُوسم حسابات جديدة. استخدم بطاقات مختلفة لكل منطقة.",
      },
    },
  ],
  github: [
    {
      icon: "🐌",
      title: { zh: "git clone 慢/超时", en: "git clone slow/timeout", ar: "git clone بطيء/انتهاء المهلة" },
      desc: {
        zh: "GitHub 国内直连时快时慢。三种方案：1）SSH 走机场（推荐云图 IPLC）；2）用 gitclone.com/github.com/x/y 加速；3）配置 git config --global http.proxy。",
        en: "GitHub in China is inconsistent. Options: 1) SSH via airport (YunTu IPLC); 2) gitclone.com mirror; 3) git http.proxy.",
        ar: "GitHub غير متسق. الخيارات: 1) SSH عبر airport؛ 2) gitclone.com؛ 3) git http.proxy.",
      },
    },
    {
      icon: "🔐",
      title: { zh: "SSH 端口 22 被封", en: "SSH port 22 blocked", ar: "منفذ SSH 22 محجوب" },
      desc: {
        zh: "部分企业/校园网封 SSH 22 端口。切换到 GitHub HTTPS 上的 SSH（端口 443）即可：ssh -T -p 443 git@ssh.github.com。",
        en: "Some networks block SSH port 22. Use GitHub HTTPS-SSH port 443: `ssh -T -p 443 git@ssh.github.com`.",
        ar: "بعض الشبكات تحجب منفذ SSH 22. استخدم منفذ 443.",
      },
    },
    {
      icon: "🎨",
      title: { zh: "Copilot 订阅国内拒付", en: "Copilot subscription rejects China cards", ar: "اشتراك Copilot يرفض بطاقات صينية" },
      desc: {
        zh: "GitHub Copilot $10/月，国内卡拒付。走 WildCard 或团队 Copilot Business（$19/月/席）用海外主体支付。",
        en: "Copilot $10/mo rejects China cards. Use WildCard or Copilot Business ($19/seat/mo) via overseas entity.",
        ar: "Copilot $10 يرفض بطاقات صينية. استخدم WildCard.",
      },
    },
    {
      icon: "🚫",
      title: { zh: "Actions IP 被 npm/pypi 限速", en: "Actions IP rate-limited by npm/pypi", ar: "IP Actions محدد المعدل" },
      desc: {
        zh: "GitHub Actions 默认走美国 IP，跑 npm install 有时被 npmjs 限速。方案：用国内镜像（淘宝 npm），或自建 self-hosted runner。",
        en: "GH Actions default US IPs get npm-rate-limited. Use Taobao npm mirror or self-hosted runners.",
        ar: "Actions يُقيَّد من npmjs. استخدم Taobao npm أو runners مستضافة ذاتياً.",
      },
    },
  ],
  youtube: [
    {
      icon: "📺",
      title: { zh: "4K 需 Premium + 稳带宽", en: "4K needs Premium + stable bandwidth", ar: "4K يحتاج Premium + نطاق ثابت" },
      desc: {
        zh: "YouTube 4K 免费也能看，但 60fps 4K 峰值 45 Mbps。普通中转机场晚高峰跑不满，必须 IPLC 100Mbps+ 节点。",
        en: "YT 4K is free but 60fps peaks at 45 Mbps. Generic transit airports can't sustain — need IPLC 100Mbps+.",
        ar: "YT 4K مجاني لكن 60fps يبلغ 45 Mbps. تحتاج IPLC 100Mbps+.",
      },
    },
    {
      icon: "🚫",
      title: { zh: "Premium 广告拦截被封", en: "Premium ad-block detection ban", ar: "حظر منع الإعلانات في Premium" },
      desc: {
        zh: "YouTube 从 2024 起严打广告拦截插件。已订阅 Premium 的用户也需要关闭 uBlock 等插件，避免账号被临时冻结。",
        en: "YT cracks down on ad blockers since 2024. Even Premium subs should disable uBlock etc. to avoid temp freezes.",
        ar: "YT يقمع محجبات الإعلانات منذ 2024. عطّل uBlock حتى مع Premium.",
      },
    },
    {
      icon: "🌍",
      title: { zh: "地区限制内容常见", en: "Region-locked content common", ar: "محتوى مقيد إقليمياً شائع" },
      desc: {
        zh: "音乐 MV、体育直播、部分频道有地区限制。切换到内容所在区（美/英/日）的节点访问，云图/奶昔机场都有专门的原生 IP 节点。",
        en: "Music videos, sports live, some channels are geo-locked. Switch to region-native nodes — YunTu/Nexitally offer these.",
        ar: "فيديو موسيقى، بث رياضي مقيد. بدّل إلى عقد إقليمية.",
      },
    },
    {
      icon: "💳",
      title: { zh: "Premium Family 需海外地址", en: "Premium Family needs overseas address", ar: "Premium Family يحتاج عنوان خارجي" },
      desc: {
        zh: "YT Premium Family（$22.99/月/6 人）要求所有成员共享一个地址。海外账号池组队需注意 Google 会不定期抽查地址。",
        en: "YT Premium Family ($22.99/6 people) requires shared address. Google spot-checks — overseas account pools beware.",
        ar: "Premium Family يتطلب عنواناً مشتركاً. Google يفحص.",
      },
    },
  ],
  shopify: [
    {
      icon: "🌐",
      title: { zh: "Shopify 后台国内加载慢", en: "Shopify admin loads slow in China", ar: "لوحة Shopify بطيئة في الصين" },
      desc: {
        zh: "admin.shopify.com 走全球 CDN 但国内仍慢。用美国 IPLC 节点（云图/WgetCloud）跳板，管理后台响应 <500ms。",
        en: "Shopify admin's CDN is slow from China. Use US IPLC (YunTu/WgetCloud) — admin <500ms.",
        ar: "لوحة Shopify بطيئة. استخدم US IPLC.",
      },
    },
    {
      icon: "💳",
      title: { zh: "Shopify Payments 拒中国主体", en: "Shopify Payments rejects China entities", ar: "Shopify Payments يرفض الكيانات الصينية" },
      desc: {
        zh: "Shopify Payments 只支持约 20 个国家/地区，不含中国大陆。国内卖家用 PayPal + Stripe（需美国/香港公司主体）。",
        en: "Shopify Payments supports ~20 countries, not mainland China. Use PayPal + Stripe (via US/HK entity).",
        ar: "Shopify Payments يدعم ~20 دولة، ليس الصين. استخدم PayPal + Stripe.",
      },
    },
    {
      icon: "🚚",
      title: { zh: "跨境物流关税坑", en: "Cross-border duty traps", ar: "فخاخ رسوم عبر الحدود" },
      desc: {
        zh: "美国 T86 免税额度已改。US$800 以下也可能被抽查，建议用 DDP 条款 + 关税自负说明。欧盟 IOSS 需注册。",
        en: "US T86 rules changed. Use DDP + duty-included pricing. EU IOSS registration required.",
        ar: "قواعد US T86 تغيرت. استخدم DDP.",
      },
    },
    {
      icon: "🎨",
      title: { zh: "主题模板中文支持差", en: "Themes have poor Chinese support", ar: "القوالب دعم صيني ضعيف" },
      desc: {
        zh: "多数付费主题字体默认无中文回退，中文用户看着丑。用 Dawn 官方主题 + 自定义 font-family: PingFang SC 修复。",
        en: "Most themes lack Chinese font fallback. Use Dawn + custom font-family: PingFang SC.",
        ar: "معظم القوالب تفتقد الخط الصيني.",
      },
    },
  ],
};

/** 查询函数：优先返回工具特定踩坑，否则返回分类默认踩坑 */
export function getPitfallsFor(toolSlug: string, category: Category): Pitfall[] {
  return TOOL_PITFALLS_OVERRIDE[toolSlug] ?? CATEGORY_PITFALLS[category];
}
