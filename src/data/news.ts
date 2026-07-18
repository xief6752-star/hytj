export type NewsTag = "ai" | "social" | "dev" | "video" | "office" | "ecommerce" | "learning" | "vpn";

export interface NewsArticle {
  slug: string;
  tag: NewsTag;
  date: string;          // YYYY-MM-DD
  coverEmoji: string;
  source?: string;       // 转载来源
  sourceUrl?: string;
  title: { zh: string; en: string; ar: string };
  summary: { zh: string; en: string; ar: string };
  content: { zh: string; en: string; ar: string };  // Markdown
}

export const NEWS: NewsArticle[] = [
  {
    slug: "chatgpt-o3-release-2025",
    tag: "ai",
    date: "2025-07-10",
    coverEmoji: "🤖",
    source: "OpenAI Blog",
    sourceUrl: "https://openai.com/blog",
    title: {
      zh: "OpenAI 正式发布 o3 模型，推理能力大幅提升",
      en: "OpenAI Officially Releases o3 Model with Major Reasoning Upgrades",
      ar: "OpenAI تطلق رسمياً نموذج o3 بقفزة كبيرة في قدرات التفكير المنطقي",
    },
    summary: {
      zh: "OpenAI 发布新一代推理模型 o3，在数学、编程和科学推理基准上全面超越前代模型，Pro 用户率先获得访问权限。",
      en: "OpenAI's new o3 reasoning model sets new benchmarks in math, coding, and scientific reasoning, initially available to Pro subscribers.",
      ar: "يُحقق نموذج التفكير المنطقي الجديد o3 من OpenAI معايير قياسية جديدة في الرياضيات والبرمجة والاستدلال العلمي.",
    },
    content: {
      zh: `## OpenAI o3 正式发布

OpenAI 于 2025 年正式推出 o3 模型，这是其「思考模型」系列的重大升级。

### 核心亮点

- **数学能力**：在 AIME 2024 数学竞赛中得分提升至 96.7%，远超 o1 的 83.3%
- **编程能力**：Codeforces 竞技编程评分达到 2727，接近国际大师级别
- **科学推理**：在 GPQA Diamond 科学问答中达到 87.7%，首次超越人类专家水平
- **安全性**：通过全新的「deliberate alignment」训练方法大幅提升安全性

### 如何使用

目前 o3 模型通过 ChatGPT Pro（$200/月）和 API 开放访问。国内用户需要使用科学上网工具才能访问。

### 对出海工作者的意义

o3 的强大推理能力特别适合：
- 复杂合同翻译与法律文件分析
- 跨境电商的多语言客服自动化
- 技术文档的精准理解与生成`,
      en: `## OpenAI o3 Official Release

OpenAI officially launched the o3 model in 2025, a major upgrade to its "thinking model" series.

### Key Highlights

- **Math**: Scored 96.7% on AIME 2024, far surpassing o1's 83.3%
- **Coding**: Achieved a Codeforces rating of 2727, near International Master level
- **Science**: Scored 87.7% on GPQA Diamond, first to surpass human expert performance
- **Safety**: Dramatically improved through new "deliberate alignment" training

### How to Access

o3 is currently available via ChatGPT Pro ($200/month) and the API. A VPN is required to access from mainland China.

### Why It Matters

o3's reasoning capability is especially useful for:
- Complex contract translation and legal document analysis
- Multilingual customer service automation for cross-border e-commerce
- Precise understanding and generation of technical documentation`,
      ar: `## الإطلاق الرسمي لنموذج o3 من OpenAI

أطلقت OpenAI رسمياً نموذج o3 في عام 2025، وهو ترقية كبيرة لسلسلة "نماذج التفكير" الخاصة بها.

### أبرز الميزات

- **الرياضيات**: حصل على 96.7% في مسابقة AIME 2024، متفوقاً بشكل كبير على o1 بنسبة 83.3%
- **البرمجة**: حقق تقييم Codeforces بـ 2727، قريب من مستوى الأستاذ الدولي
- **العلوم**: حصل على 87.7% في GPQA Diamond، متجاوزاً أداء الخبراء البشريين لأول مرة
- **الأمان**: تحسين جذري من خلال منهجية "deliberate alignment" الجديدة

### طريقة الوصول

نموذج o3 متاح حالياً عبر ChatGPT Pro (200$/شهر) والـ API. يتطلب VPN للوصول من الصين.`,
    },
  },
  {
    slug: "midjourney-v7-features",
    tag: "ai",
    date: "2025-07-05",
    coverEmoji: "🎨",
    source: "Midjourney",
    sourceUrl: "https://midjourney.com",
    title: {
      zh: "Midjourney V7 发布：一致性与真实感再上新台阶",
      en: "Midjourney V7 Released: Better Consistency and Photorealism",
      ar: "إصدار Midjourney V7: تحسينات في الاتساق والواقعية الفوتوغرافية",
    },
    summary: {
      zh: "Midjourney 最新版本 V7 带来了角色一致性功能增强、更精准的提示词理解和突破性的超写实图像效果。",
      en: "Midjourney V7 introduces enhanced character consistency, better prompt understanding, and breakthrough photorealistic image quality.",
      ar: "يقدم Midjourney V7 تحسينات في اتساق الشخصيات وفهم الأوامر وجودة الصور الفوتوغرافية الخارقة.",
    },
    content: {
      zh: `## Midjourney V7 正式发布

Midjourney 发布了其旗舰 AI 绘图模型的第七代版本，在多个关键维度取得突破。

### 主要更新

**角色一致性（Character Consistency）**
- 跨图像保持人物面部特征、服装和风格的高度一致性
- 支持将自定义角色应用到不同场景

**提示词理解**
- 对复杂、多层次的英文描述理解更精准
- 支持更细粒度的风格控制参数

**超写实效果**
- 皮肤纹理、头发细节、光影效果全面提升
- 建筑和产品渲染接近商业级摄影质量

### 价格

V7 对所有付费用户（Basic $10/月起）开放。新用户已无法使用免费试用，需要直接订阅。

### 使用提示

在 Discord 中使用 \`/imagine\` 命令，结尾加上 \`--v 7\` 即可切换到最新版本。`,
      en: `## Midjourney V7 Official Release

Midjourney released the seventh generation of its flagship AI image model with breakthroughs in several key areas.

### Key Updates

**Character Consistency**
- Maintains facial features, clothing, and style consistency across multiple images
- Apply custom characters to different scenes

**Prompt Understanding**
- More precise interpretation of complex, multi-layered English descriptions
- Finer style control parameters

**Photorealism**
- Major improvements in skin texture, hair detail, and lighting effects
- Architectural and product renders approaching commercial photography quality

### Pricing

V7 is available to all paid subscribers (Basic plan from $10/month). Free trials are no longer available for new users.

### Usage Tip

In Discord, use the \`/imagine\` command and append \`--v 7\` to switch to the latest version.`,
      ar: `## الإصدار الرسمي لـ Midjourney V7

أصدر Midjourney الجيل السابع من نموذج الصور الذكية الرائد مع إنجازات في عدة مجالات.

### التحديثات الرئيسية

**اتساق الشخصيات**
- الحفاظ على سمات الوجه والملابس والأسلوب عبر صور متعددة
- تطبيق شخصيات مخصصة على مشاهد مختلفة

**فهم الأوامر**
- تفسير أدق للأوصاف الإنجليزية المعقدة ومتعددة الطبقات

**الواقعية الفوتوغرافية**
- تحسينات كبيرة في ملمس البشرة وتفاصيل الشعر وتأثيرات الإضاءة

### الأسعار

V7 متاح لجميع المشتركين المدفوعين (الخطة الأساسية من 10$/شهر).`,
    },
  },
  {
    slug: "github-copilot-agent-mode",
    tag: "dev",
    date: "2025-07-01",
    coverEmoji: "💻",
    source: "GitHub Blog",
    sourceUrl: "https://github.blog",
    title: {
      zh: "GitHub Copilot 推出 Agent 模式，自动完成整个开发任务",
      en: "GitHub Copilot Launches Agent Mode for Fully Automated Dev Tasks",
      ar: "GitHub Copilot يطلق وضع الوكيل لأتمتة مهام التطوير بالكامل",
    },
    summary: {
      zh: "GitHub Copilot 新增「Agent 模式」，能够自动规划、编写、测试并修复代码，完成完整的开发任务，无需开发者逐步干预。",
      en: "GitHub Copilot's new Agent Mode can autonomously plan, write, test, and fix code to complete full development tasks without step-by-step developer intervention.",
      ar: "يستطيع وضع الوكيل الجديد في GitHub Copilot التخطيط وكتابة الأكواد واختبارها وإصلاحها تلقائياً لإنجاز مهام التطوير الكاملة.",
    },
    content: {
      zh: `## GitHub Copilot Agent 模式

GitHub 正式推出 Copilot 的「Agent 模式」，将 AI 编程助手从「代码补全工具」升级为能够自主完成开发任务的「AI 工程师」。

### 什么是 Agent 模式

Agent 模式允许 Copilot：
1. **理解任务**：分析你的需求描述，制定开发计划
2. **编写代码**：自动生成多个相关文件的代码
3. **运行测试**：执行测试套件并分析结果
4. **自动修复**：遇到错误时自动调试和修复
5. **迭代完善**：不断改进直到任务完成

### 支持的 IDE

- VS Code（主要支持）
- JetBrains 系列
- GitHub.com 网页端

### 价格

Agent 模式包含在 GitHub Copilot Individual（$10/月）和 Business（$19/月）计划中。

### 对开发效率的影响

早期测试用户报告，对于中等复杂度的功能开发，Agent 模式可将开发时间缩短 40%-60%。`,
      en: `## GitHub Copilot Agent Mode

GitHub officially launched Copilot's "Agent Mode," upgrading the AI coding assistant from a code completion tool to an autonomous AI engineer.

### What is Agent Mode

Agent Mode allows Copilot to:
1. **Understand tasks**: Analyze your requirements and create a development plan
2. **Write code**: Automatically generate code across multiple related files
3. **Run tests**: Execute test suites and analyze results
4. **Auto-fix**: Automatically debug and fix errors as they arise
5. **Iterate**: Continuously improve until the task is complete

### Supported IDEs

- VS Code (primary support)
- JetBrains IDEs
- GitHub.com web interface

### Pricing

Agent Mode is included in GitHub Copilot Individual ($10/month) and Business ($19/month) plans.

### Impact on Development Productivity

Early testers report that Agent Mode can reduce development time by 40-60% for medium-complexity feature development.`,
      ar: `## وضع الوكيل في GitHub Copilot

أطلقت GitHub رسمياً "وضع الوكيل" في Copilot، مُرقّياً المساعد البرمجي الذكي من أداة إكمال الأكواد إلى مهندس ذكاء اصطناعي مستقل.

### ما هو وضع الوكيل

يتيح وضع الوكيل لـ Copilot:
1. **فهم المهام**: تحليل متطلباتك وإنشاء خطة تطوير
2. **كتابة الأكواد**: توليد أكواد تلقائياً عبر ملفات متعددة
3. **تشغيل الاختبارات**: تنفيذ مجموعات الاختبار وتحليل النتائج
4. **الإصلاح التلقائي**: تصحيح الأخطاء تلقائياً
5. **التحسين المستمر**: التطوير المستمر حتى اكتمال المهمة

### الأسعار

وضع الوكيل مضمّن في خطط GitHub Copilot الفردية (10$/شهر) والتجارية (19$/شهر).`,
    },
  },
  {
    slug: "perplexity-deep-research-launch",
    tag: "ai",
    date: "2025-06-28",
    coverEmoji: "🔍",
    source: "Perplexity AI",
    sourceUrl: "https://perplexity.ai",
    title: {
      zh: "Perplexity 上线「深度研究」功能，媲美专业调研报告",
      en: "Perplexity Launches Deep Research, Producing Professional-Grade Reports",
      ar: "Perplexity تطلق ميزة البحث العميق لإنتاج تقارير بمستوى احترافي",
    },
    summary: {
      zh: "Perplexity 新推出的「深度研究（Deep Research）」功能可以自主搜索数十个来源，在数分钟内生成详尽的专业调研报告，支持引用溯源。",
      en: "Perplexity's new Deep Research feature autonomously searches dozens of sources and generates detailed professional reports in minutes with full source citations.",
      ar: "تبحث ميزة البحث العميق الجديدة من Perplexity تلقائياً في عشرات المصادر وتولد تقارير احترافية مفصلة في دقائق مع استشهادات كاملة.",
    },
    content: {
      zh: `## Perplexity 深度研究功能

Perplexity AI 推出了「Deep Research（深度研究）」功能，将 AI 搜索能力提升到全新层次。

### 功能特点

- **多轮搜索**：自动执行数十次搜索查询，覆盖话题的多个维度
- **结构化输出**：生成带有目录、章节、数据图表的完整报告
- **来源引用**：每个论点都有明确的网页来源标注
- **平均时长**：生成一份报告约需 2-5 分钟

### 适用场景

1. 市场调研报告（竞品分析、市场规模）
2. 行业动态追踪（科技趋势、政策变化）
3. 学术文献综述
4. 投资尽职调查辅助

### 使用方式

在 Perplexity 搜索框中输入问题，点击「Deep Research」按钮（需要 Pro 会员，$20/月）。

### 与 ChatGPT Deep Research 的区别

Perplexity 的版本更注重实时网络信息，引用来源更透明；ChatGPT 版本则在文字组织和深度分析上更有优势。`,
      en: `## Perplexity Deep Research Feature

Perplexity AI launched its "Deep Research" feature, elevating AI search to a new level.

### Key Features

- **Multi-round search**: Automatically executes dozens of search queries across multiple angles of a topic
- **Structured output**: Generates complete reports with table of contents, sections, and data references
- **Source citations**: Every claim comes with explicit web source links
- **Generation time**: Approximately 2-5 minutes per report

### Best Use Cases

1. Market research reports (competitive analysis, market sizing)
2. Industry trend tracking (tech trends, policy changes)
3. Academic literature reviews
4. Investment due diligence assistance

### How to Use

In Perplexity's search bar, enter your question and click the "Deep Research" button (requires Pro subscription at $20/month).

### vs ChatGPT Deep Research

Perplexity's version prioritizes real-time web information with more transparent sourcing; ChatGPT's version has an edge in prose organization and deeper analysis.`,
      ar: `## ميزة البحث العميق في Perplexity

أطلقت Perplexity AI ميزة "البحث العميق" لترفع قدرات البحث الذكي إلى مستوى جديد.

### الميزات الرئيسية

- **بحث متعدد الجولات**: تنفيذ عشرات استعلامات البحث تلقائياً من زوايا متعددة
- **مخرجات منظمة**: توليد تقارير كاملة مع فهرس وأقسام ومراجع
- **استشهادات المصادر**: كل ادعاء يأتي مع روابط مصادر ويب صريحة
- **وقت التوليد**: حوالي 2-5 دقائق لكل تقرير

### كيفية الاستخدام

في شريط بحث Perplexity، أدخل سؤالك وانقر على زر "Deep Research" (يتطلب اشتراك Pro بـ 20$/شهر).`,
    },
  },
  {
    slug: "spotify-ai-playlist-2025",
    tag: "video",
    date: "2025-06-20",
    coverEmoji: "🎵",
    source: "Spotify Newsroom",
    sourceUrl: "https://newsroom.spotify.com",
    title: {
      zh: "Spotify 推出 AI DJ 2.0，实现全天候个性化音乐直播",
      en: "Spotify Launches AI DJ 2.0 for 24/7 Personalized Music Streaming",
      ar: "Spotify تطلق AI DJ 2.0 للبث الموسيقي الشخصي على مدار الساعة",
    },
    summary: {
      zh: "Spotify 升级 AI DJ 功能，新版本能够根据用户实时情绪和活动场景动态调整音乐风格，并用 AI 语音播报介绍曲目背景。",
      en: "Spotify's upgraded AI DJ dynamically adjusts music style based on the user's real-time mood and activity, with AI voice commentary introducing track backgrounds.",
      ar: "يقوم الـ DJ الذكي المحدّث من Spotify بضبط أسلوب الموسيقى ديناميكياً بناءً على مزاج المستخدم ونشاطه في الوقت الفعلي.",
    },
    content: {
      zh: `## Spotify AI DJ 2.0

Spotify 大幅升级了其 AI DJ 功能，让个性化音乐体验进入全新维度。

### 新功能

**情景感知播放**
- 根据一天中的时间段（早晨/通勤/工作/运动/放松）自动切换音乐风格
- 结合用户历史听歌数据进行实时调整

**AI 语音主持**
- 真实感更强的 AI 语音介绍艺人背景和曲目故事
- 支持英语、西班牙语、法语、葡萄牙语四种语言

**互动反馈**
- 用户可以对推荐说「喜欢」「不喜欢」「换一种风格」
- AI 实时学习并调整后续推荐

### 可用性

目前在美国、英国、加拿大、澳大利亚开放，Premium 用户专属。`,
      en: `## Spotify AI DJ 2.0

Spotify significantly upgraded its AI DJ feature, taking personalized music to a new dimension.

### New Features

**Context-aware playback**
- Automatically switches music style based on time of day (morning/commute/work/workout/relax)
- Real-time adjustments based on user listening history

**AI Voice Host**
- More realistic AI voice introducing artist backgrounds and track stories
- Available in English, Spanish, French, and Portuguese

**Interactive feedback**
- Users can say "love it," "not for me," or "switch the vibe"
- AI learns in real-time and adjusts subsequent recommendations

### Availability

Currently available in the US, UK, Canada, and Australia for Premium subscribers.`,
      ar: `## Spotify AI DJ 2.0

طورت Spotify بشكل كبير ميزة AI DJ لرفع تجربة الموسيقى الشخصية إلى بعد جديد.

### الميزات الجديدة

**تشغيل واعٍ بالسياق**
- تبديل أسلوب الموسيقى تلقائياً بناءً على وقت اليوم (صباح/تنقل/عمل/تمرين/راحة)
- تعديلات في الوقت الفعلي بناءً على سجل الاستماع

**مقدم صوتي بالذكاء الاصطناعي**
- صوت أكثر واقعية لتقديم خلفيات الفنانين وقصص المقاطع
- متاح بالإنجليزية والإسبانية والفرنسية والبرتغالية

### التوفر

متاح حالياً في الولايات المتحدة والمملكة المتحدة وكندا وأستراليا لمشتركي Premium.`,
    },
  },
];

export const NEWS_TAG_LABELS: Record<NewsTag, { zh: string; en: string; ar: string; icon: string }> = {
  ai:        { zh: "AI 工具",   en: "AI Tools",      ar: "أدوات الذكاء الاصطناعي", icon: "🤖" },
  social:    { zh: "社交媒体",  en: "Social Media",  ar: "وسائل التواصل",           icon: "💬" },
  dev:       { zh: "开发工具",  en: "Dev Tools",     ar: "أدوات التطوير",           icon: "💻" },
  video:     { zh: "视频音乐",  en: "Video & Music", ar: "الفيديو والموسيقى",        icon: "🎬" },
  office:    { zh: "办公协作",  en: "Office",        ar: "العمل والتعاون",           icon: "📋" },
  ecommerce: { zh: "电商金融",  en: "E-Commerce",    ar: "التجارة الإلكترونية",      icon: "🛍️" },
  learning:  { zh: "学习资源",  en: "Learning",      ar: "مصادر التعلم",             icon: "📚" },
  vpn:       { zh: "科学上网",  en: "VPN & Access",  ar: "الوصول والـ VPN",          icon: "🔒" },
};
