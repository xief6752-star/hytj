export type Category = "ai" | "social" | "dev" | "video" | "office" | "ecommerce" | "learning";

export type I18n = { zh: string; en: string; ar: string };

export interface Feature {
  icon: string;
  title: I18n;
  desc: I18n;
}

export interface Step {
  title: I18n;
  desc: I18n;
}

export interface FAQ {
  q: I18n;
  a: I18n;
}

export interface Tool {
  slug: string;
  category: Category;
  logo: string;
  color: string;
  officialUrl: string;
  founded: string;
  founder: string;
  headquarter: string;
  name: I18n;
  tagline: I18n;
  description: I18n;
  longDescription: I18n;
  history: I18n;
  features: Feature[];
  howToUse: Step[];
  faqs: FAQ[];
}

export interface CategoryInfo {
  id: string;
  label: I18n;
  icon: string;
}

export const TOOLS: Tool[] = [
  {
    slug: "chatgpt",
    category: "ai",
    logo: "🤖",
    color: "#10a37f",
    officialUrl: "https://chat.openai.com",
    founded: "2022-11-30",
    founder: "Sam Altman, Greg Brockman, Ilya Sutskever",
    headquarter: "San Francisco, CA, USA",
    name: { zh: "ChatGPT", en: "ChatGPT", ar: "ChatGPT" },
    tagline: { zh: "全球最强 AI 对话助手", en: "The World's Leading AI Conversation Assistant", ar: "مساعد الذكاء الاصطناعي الرائد في العالم" },
    description: { zh: "由 OpenAI 开发的大型语言模型对话工具，可用于写作、编程、分析、翻译等各种任务。", en: "A large language model chat tool developed by OpenAI, useful for writing, coding, analysis, translation and virtually any text-based task.", ar: "أداة محادثة متطورة تعتمد على الذكاء الاصطناعي من تطوير OpenAI للكتابة والبرمجة والتحليل والترجمة والمهام النصية." },
    longDescription: { zh: "ChatGPT 是 OpenAI 于 2022 年 11 月推出的对话式 AI，基于 GPT-4 大语言模型。它能够理解并生成自然语言，帮助用户完成写作、代码、数据分析、翻译、问答等几乎所有文字相关任务，已成为全球最广泛使用的 AI 工具之一，注册用户超过 2 亿。", en: "ChatGPT is a conversational AI launched by OpenAI in November 2022, powered by the GPT-4 large language model. It understands and generates natural language to help users with writing, coding, data analysis, translation, Q&A, and nearly any text-based task. It has become one of the world's most widely used AI tools, with over 200 million registered users.", ar: "ChatGPT هو تطبيق محادثة ذكاء اصطناعي تفاعلي تم إطلاقه بواسطة شركة OpenAI في نوفمبر 2022. يعتمد على نماذج GPT اللغوية الكبيرة. يمكنه فهم وتوليد اللغة الطبيعية لمساعدة المستخدمين في الكتابة والبرمجة وتحليل البيانات والترجمة والإجابة على الأسئلة، وأصبح أحد أكثر أدوات الويب انتشاراً في العالم مع أكثر من 200 مليون مستخدم نشط." },
    history: { zh: "ChatGPT 由 OpenAI 于 2022 年 11 月 30 日正式发布。OpenAI 成立于 2015 年，由 Sam Altman、Elon Musk（后退出）、Greg Brockman 等人共同创立，初始使命是确保 AI 造福全人类。ChatGPT 发布后 5 天内用户突破 100 万，2 个月内突破 1 亿，创造了互联网历史上增长最快产品的记录。2023 年微软向 OpenAI 注资约 100 亿美元，将 ChatGPT 技术集成到 Bing 和 Office 产品中。目前 ChatGPT 已成为全球最广泛使用的 AI 工具。", en: "ChatGPT was launched by OpenAI on November 30, 2022. OpenAI was founded in 2015 as a non-profit AI research lab by Sam Altman, Elon Musk, Greg Brockman, and others, with a mission to ensure AGI benefits all of humanity. ChatGPT reached 1 million users within 5 days of launch and 100 million monthly active users in 2 months, making it the fastest-growing consumer application in history. In 2023, Microsoft invested $10 billion, integrating OpenAI technology into Bing and Microsoft 365, sparking the modern AI revolution.", ar: "تم إطلاق ChatGPT بواسطة OpenAI في 30 نوفمبر 2022. تأسست OpenAI في عام 2015 كمنظمة بحثية غير ربحية بواسطة سام ألتمان، إيلون ماسك، غريغ بروكمان وآخرين، بهدف ضمان أن يفيد الذكاء الاصطناعي العام البشرية جمعاء. حقق ChatGPT انتشاراً غير مسبوق حيث وصل إلى مليون مستخدم في 5 أيام، و100 مليون مستخدم في غضون شهرين. في عام 2023، استثمرت مايكروسوفت حوالي 10 مليارات دولار في OpenAI ودمجت تقنياتها في محرك بحث Bing وحزمة Office." },
    features: [
      {
        icon: "✍️",
        title: { zh: "智能写作", en: "Smart Writing", ar: "كتابة ذكية" },
        desc: { zh: "撰写文章、邮件、报告、脚本，支持各种风格和语气", en: "Write articles, emails, reports, scripts in various styles and tones", ar: "كتابة المقالات ورسائل البريد الإلكتروني والتقارير والسيناريوهات بمختلف الأساليب" },
      },
      {
        icon: "💻",
        title: { zh: "代码助手", en: "Code Assistant", ar: "مساعد البرمجة" },
        desc: { zh: "生成、调试、解释代码，支持 Python、JavaScript 等数十种语言", en: "Generate, debug and explain code in 50+ programming languages", ar: "توليد وتصحيح وشرح الأكواد البرمجية بأكثر من 50 لغة مختلفة" },
      },
      {
        icon: "🔍",
        title: { zh: "深度分析", en: "Deep Analysis", ar: "تحليل عميق" },
        desc: { zh: "分析数据、文件、图片，给出专业建议", en: "Analyze data, documents, and images with professional-grade insights", ar: "تحليل البيانات والمستندات والصور بتقديم رؤى احترافية" },
      },
      {
        icon: "🌐",
        title: { zh: "多语言翻译", en: "Translation", ar: "ترجمة فورية" },
        desc: { zh: "支持 100+ 种语言的高质量翻译", en: "High-quality translation across 100+ languages", ar: "ترجمة عالية الجودة تدعم أكثر من 100 لغة حول العالم" },
      },
      {
        icon: "🎨",
        title: { zh: "图像生成", en: "Image Generation", ar: "توليد الصور" },
        desc: { zh: "通过 DALL-E 3 生成高质量 AI 图像（Plus 用户）", en: "Create stunning AI images via DALL-E 3 (Plus subscribers)", ar: "إنشاء صور فنية مذهلة باستخدام DALL-E 3 (لمشتركي Plus)" },
      },
      {
        icon: "🔌",
        title: { zh: "插件生态", en: "Plugin Ecosystem", ar: "منظومة الإضافات" },
        desc: { zh: "丰富的 GPT 插件和自定义 GPTs 生态系统", en: "Extensive GPT plugins and customizable GPTs ecosystem", ar: "إضافات GPT المتنوعة ونظام GPTs المخصص لتلبية احتياجاتك" },
      },
    ],
    howToUse: [
      {
        title: { zh: "注册账号", en: "Sign Up", ar: "إنشاء حساب" },
        desc: { zh: "访问 chat.openai.com，使用邮箱或 Google/Microsoft 账号注册，需要科学上网", en: "Visit chat.openai.com and register with your email or Google/Microsoft account. A VPN is required.", ar: "قم بزيارة chat.openai.com والتسجيل عبر البريد الإلكتروني أو حساب Google/Microsoft (يتطلب VPN)" },
      },
      {
        title: { zh: "选择模型", en: "Choose a Plan", ar: "اختيار النموذج" },
        desc: { zh: "免费用户可使用 GPT-4o mini，付费 Plus 用户（$20/月）可使用 GPT-4o", en: "Start with the free version or upgrade to ChatGPT Plus ($20/month) for advanced features.", ar: "النسخة المجانية تدعم GPT-4o mini، وتوفر Plus (بقيمة $20 شهرياً) نموذج GPT-4o الأقوى" },
      },
      {
        title: { zh: "开始对话", en: "Enter Prompts", ar: "بدء المحادثة" },
        desc: { zh: "在输入框输入你的问题或需求，按 Enter 发送", en: "Type your query or task into the chatbox and press Enter to receive a response.", ar: "اكتب سؤالك أو طلبك في مربع الإدخال واضغط على زر الإرسال أو Enter" },
      },
      {
        title: { zh: "优化提示词", en: "Iterate and Refine", ar: "تحسين الأوامر" },
        desc: { zh: "使用更具体、结构化的提示词可获得更好的回答质量", en: "Ask follow-up questions or request modifications to get the perfect result.", ar: "استخدم أوامر (Prompts) محددة ومنظمة للحصول على أفضل إجابة" },
      },
    ],
    faqs: [
      {
        q: { zh: "ChatGPT 在国内能用吗？", en: "Do I need a VPN to access ChatGPT?", ar: "هل يتطلب الوصول شبكة VPN؟" },
        a: { zh: "ChatGPT 官网在中国大陆无法直接访问，需要科学上网工具才能使用。", en: "Yes, if you are in a geo-blocked region (like mainland China), you must use a VPN to register and use the service.", ar: "نعم، إذا كنت في منطقة محجوبة جغرافيًا، يجب عليك استخدام VPN للتسجيل واستخدام الخدمة." },
      },
      {
        q: { zh: "ChatGPT 免费版和付费版区别？", en: "Is ChatGPT free?", ar: "هل الخدمة مجانية؟" },
        a: { zh: "免费版可使用 GPT-4o mini；Plus（$20/月）可使用 GPT-4o，享有更多 token 限额和插件功能。", en: "Yes, the basic version using GPT-4o mini is completely free. The Plus plan costs $20/month.", ar: "نعم، النسخة الأساسية التي تستخدم GPT-4o mini مجانية تماماً. باقة Plus تكلف 20 دولاراً شهرياً." },
      },
      {
        q: { zh: "ChatGPT 的数据安全吗？", en: "Is my ChatGPT data secure?", ar: "هل بيانات ChatGPT الخاصة بي آمنة؟" },
        a: { zh: "默认情况下 OpenAI 会使用对话数据训练模型，可在设置中关闭对话历史来保护隐私。", en: "By default, OpenAI uses your conversations to train its models. You can disable chat history in Settings to protect your privacy, and this also prevents that data from being used for training.", ar: "افتراضياً، تستخدم OpenAI محادثاتك لتدريب نماذجها. يمكنك تعطيل سجل المحادثات من الإعدادات لحماية خصوصيتك، مما يمنع أيضاً استخدام تلك البيانات في التدريب." },
      },
    ],
  },
  {
    slug: "claude",
    category: "ai",
    logo: "🧠",
    color: "#cc785c",
    officialUrl: "https://claude.ai",
    founded: "2023-03-14",
    founder: "Dario Amodei, Daniela Amodei",
    headquarter: "San Francisco, CA, USA",
    name: { zh: "Claude", en: "Claude", ar: "Claude" },
    tagline: { zh: "最安全、最聪明的 AI 助手", en: "The Safest, Smartest AI Assistant", ar: "الذكاء الاصطناعي الأكثر أماناً وذكاءً" },
    description: { zh: "由 Anthropic 开发的 AI 助手，以超长上下文、安全性和高质量写作著称，是 ChatGPT 的强力竞争者。", en: "An AI assistant by Anthropic renowned for its ultra-long context, safety, and high-quality writing — a powerful ChatGPT alternative.", ar: "مساعد ذكاء اصطناعي من تطوير شركة Anthropic يشتهر بسياق الفهم الطويل والأمان وجودة الكتابة الاستثنائية، وهو بديل قوي لـ ChatGPT." },
    longDescription: { zh: "Claude 是由 Anthropic 公司研发的 AI 助手，以\"Constitutional AI\"安全训练方法著称。Claude 3.5 系列拥有 200K token 超长上下文窗口，可处理整本书的内容。在代码、推理和创意写作方面表现优异，被许多专业用户视为最强的 AI 写作助手。", en: "Claude is an AI assistant developed by Anthropic, known for its focus on safety through 'Constitutional AI'. The Claude 3.5 family features a 200K token context window capable of processing entire books. It excels at coding, logical reasoning, and creative writing, making it a favorite among professional writers and developers.", ar: "Claude هو مساعد ذكاء اصطناعي تم تطويره بواسطة شركة Anthropic، ومعروف بتركيزه على الأمان من خلال منهجية 'Constitutional AI'. تتميز عائلة Claude 3.5 بنافذة سياق فهم تصل إلى 200 ألف رمز (Token) قادرة على معالجة كتب كاملة. وهو يتفوق بشكل خاص في البرمجة والتفكير المنطقي والكتابة الإبداعية." },
    history: { zh: "Anthropic 由前 OpenAI 核心团队成员 Dario Amodei 和 Daniela Amodei 兄妹于 2021 年创立，专注于 AI 安全研究。Claude 于 2023 年 3 月发布。Anthropic 提出的\"Constitutional AI\"方法通过让 AI 自自我批判来提升安全性。公司已获得 Google、Amazon 等科技巨头超过 70 亿美元的投资。Claude 3.5 Sonnet 在多个基准测试中超越 GPT-4o。", en: "Anthropic was founded in 2021 by siblings Dario and Daniela Amodei, both former VP-level researchers at OpenAI, along with other OpenAI pioneers. Dismayed by the commercial shift of OpenAI, they founded Anthropic as a Public Benefit Corporation to study AI safety. They launched Claude in March 2023. Backed by billions in investments from Google and Amazon, Anthropic has established Claude as the premier developer-centric and safety-first alternative to ChatGPT.", ar: "تأسست شركة Anthropic في عام 2021 من قبل الأشقاء داريو ودانييلا أمودي، وكلاهما من الباحثين السابقين في OpenAI، إلى جانب رواد آخرين. تأسست Anthropic كشركة للمنفعة العامة لدراسة أمان الذكاء الاصطناعي. أطلقوا Claude في مارس 2023. وبدعم من مليارات الاستثمارات من Google وAmazon، رسخت Anthropic مكانة Claude كبديل رئيسي لـ ChatGPT." },
    features: [
      {
        icon: "📄",
        title: { zh: "超长上下文", en: "Long Context", ar: "سياق فهم طويل جداً" },
        desc: { zh: "支持 200K token 上下文，可分析整本书或大型代码库", en: "200K token context window to read books or large code repositories", ar: "يدعم سياق فهم يصل إلى 200K رمز لتحليل الكتب وقواعد البيانات الضخمة" },
      },
      {
        icon: "🛡️",
        title: { zh: "安全可靠", en: "Safety & Ethics", ar: "الأمان والأخلاقيات" },
        desc: { zh: "Constitutional AI 训练，更安全、更少幻觉", en: "Trained using Constitutional AI for safer, less hallucinated outputs", ar: "تدريب دستوري آمن للذكاء الاصطناعي لتقليل الأخطاء والاستجابات الضارة" },
      },
      {
        icon: "✍️",
        title: { zh: "卓越写作", en: "Creative Writing", ar: "كتابة متفوقة" },
        desc: { zh: "高质量、自然流畅的长文写作能力", en: "Renowned for high-quality, natural-sounding copy and prose", ar: "قدرات كتابة نصوص طويلة بجودة عالية وبشكل طبيعي وسلس" },
      },
      {
        icon: "💻",
        title: { zh: "代码能力", en: "Code Intelligence", ar: "قوة برمجية" },
        desc: { zh: "代码生成和调试能力极强，支持 Claude Code CLI", en: "Exceptional code generation, translation, and debugging capabilities", ar: "توليد وتصحيح الأكواد بشكل ممتاز مع دعم واجهة سطر الأوامر Claude Code" },
      },
      {
        icon: "🔬",
        title: { zh: "深度推理", en: "Logical Reasoning", ar: "تفكير منطقي عميق" },
        desc: { zh: "复杂问题的逻辑推理和分析能力出色", en: "Solves complex math, logic, and scientific queries with precision", ar: "قدرات استثنائية في التحليل والتفكير المنطقي للمسائل المعقدة" },
      },
      {
        icon: "🖼️",
        title: { zh: "视觉理解", en: "Visual Processing", ar: "رؤية كمبيوترية" },
        desc: { zh: "支持图片、PDF 等多模态输入分析", en: "Excellent understanding of graphs, charts, diagrams, and PDF files", ar: "تحليل الصور وملفات PDF والمدخلات متعددة الوسائط بذكاء" },
      },
    ],
    howToUse: [
      {
        title: { zh: "访问官网", en: "Sign Up", ar: "زيارة الموقع" },
        desc: { zh: "访问 claude.ai，需要科学上网，使用邮箱注册", en: "Create an account at claude.ai using your email or Google account (VPN needed in China).", ar: "توجه إلى موقع claude.ai (يتطلب VPN) وسجل عبر بريد الإلكتروني" },
      },
      {
        title: { zh: "选择套餐", en: "Understand Limits", ar: "فهم حدود الاستخدام" },
        desc: { zh: "免费版每日有限制，Pro 版（$20/月）无限使用 Claude 3.5 Sonnet", en: "Free tier offers access to Claude 3.5 Sonnet with message limits that reset daily.", ar: "النسخة المجانية لها حدود يومية؛ باقة Pro بقيمة 20 دولاراً توفر استخداماً غير محدود" },
      },
      {
        title: { zh: "上传文件", en: "Upload Context", ar: "رفع الملفات" },
        desc: { zh: "可上传 PDF、代码文件、图片进行分析", en: "Upload PDFs, code files, or spreadsheets directly to the prompt bar.", ar: "يمكنك رفع ملفات PDF أو أكواد برمجية أو صور لتحليلها بعمق" },
      },
      {
        title: { zh: "利用长上下文", en: "Write Prompt", ar: "استغلال السياق الطويل" },
        desc: { zh: "将大段文本或代码粘贴进来，Claude 可处理极长的输入", en: "Instruct Claude on what to analyze or write. Use clear constraints for best results.", ar: "قم بلصق نصوص أو قواعد بيانات ضخمة، حيث يمكن لـ Claude التعامل مع مدخلات طويلة للغاية" },
      },
    ],
    faqs: [
      {
        q: { zh: "Claude 和 ChatGPT 哪个更好？", en: "Do I need a VPN to access Claude?", ar: "هل يتطلب الوصول شبكة VPN؟" },
        a: { zh: "各有优劣。Claude 在长文写作、大文档分析方面更强；ChatGPT 在插件生态和图像生成方面更丰富。", en: "Yes, Claude is restricted in mainland China and some other regions. A VPN is required to sign up and log in.", ar: "نعم، إذا كنت في منطقة محجوبة جغرافيًا، يجب عليك استخدام VPN للتسجيل واستخدام الخدمة." },
      },
      {
        q: { zh: "Claude 免费吗？", en: "Can Claude generate images?", ar: "هل يستطيع Claude توليد صور؟" },
        a: { zh: "有免费版，每天有使用限额。Pro 版 $20/月，Max 版 $100/月。", en: "No, unlike ChatGPT, Claude is purely text-and-code focused and cannot generate images directly, but it can read them.", ar: "لا، على عكس ChatGPT، يركز Claude على النصوص والأكواد البرمجية فقط ولا يمكنه إنشاء صور مباشرة، ولكن يمكنه تحليلها وفهمها." },
      },
    ],
  },
  {
    slug: "youtube",
    category: "video",
    logo: "🎬",
    color: "#ff0000",
    officialUrl: "https://www.youtube.com",
    founded: "2005-02-14",
    founder: "Chad Hurley, Steve Chen, Jawed Karim",
    headquarter: "San Bruno, CA, USA",
    name: { zh: "YouTube", en: "YouTube", ar: "YouTube" },
    tagline: { zh: "全球最大视频分享与播放平台", en: "The World's Largest Video Sharing Platform", ar: "أكبر منصة لمشاركة الفيديوهات في العالم" },
    description: { zh: "全球最受欢迎的视频网站，拥有数以亿计的短视频、长影音、直播及音乐资源，任何人都可以上传并分享内容。", en: "The most popular video sharing site globally, hosting billions of videos, streams, and music tracks, where anyone can upload and share content.", ar: "الموقع الأكثر شعبية لمشاركة مقاطع الفيديو عالمياً، واستضافة مليارات المقاطع والبث المباشر والموسيقى، حيث يمكن للجميع مشاركة المحتوى." },
    longDescription: { zh: "YouTube（优兔）是全球最大的视频分享平台，由前 PayPal 员工于 2005 年创立，2006 年被 Google 以 16.5 亿美元收购。目前全球月活跃用户超过 25 亿。YouTube 拥有极其丰富的影音内容生态，包括音乐、游戏、教育、新闻、生活分享等，是全球创作者通过广告分成（YPP）变现的重要平台。", en: "YouTube is the world's leading video platform, founded in 2005 by three former PayPal employees and acquired by Google in 2006 for $1.65 billion. Today, it has over 2.5 billion monthly active users. It acts as a massive media ecosystem, providing gaming, music, education, news, and entertainment, and driving a vast creator economy via its Partner Program (YPP).", ar: "يوتيوب (YouTube) هو المنصة الرائدة عالمياً في مشاركة مقاطع الفيديو، تأسست في عام 2005 من قبل ثلاثة موظفين سابقين في PayPal واستحوذت عليها Google في عام 2006 مقابل 1.65 مليار دولار. واليوم، تضم المنصة أكثر من 2.5 مليار مستخدم نشط شهرياً، وتدعم منظومة ضخمة لاقتصاد منشئي المحتوى عبر برنامج الشركاء." },
    history: { zh: "YouTube 由前 PayPal 员工查德·贺利、陈士骏、贾德·卡林于 2005 年情人节共同创立。第一支视频《我在动物园》由贾德于 2005 年 4 月上传。随着视频上传量的爆发式增长，YouTube 迅速引起了 Google 的关注。2006 年 11 月，Google 以 16.5 亿美元收购了 YouTube。在 Google 的技术和广告生态支持下，YouTube 迅速跃升为全球最大的音视频平台，深刻改变了人们获取媒体资讯、学习知识和进行娱乐的方式。", en: "YouTube was founded on February 14, 2005, by Chad Hurley, Steve Chen, and Jawed Karim, who were early employees at PayPal. The first video, 'Me at the zoo', was uploaded by Jawed Karim on April 23, 2005. Growing rapidly, the site was acquired by Google in November 2006 for $1.65 billion. Today, YouTube operates as a Google subsidiary, generating billions of dollars in ad revenue annually and acting as the dominant online video hosting platform globally.", ar: "تأسست يوتيوب في 14 فبراير 2005 من قبل تشاد هيرلي، ستيف تشين، وجاود كريم، وكانوا من موظفي PayPal الأوائل. تم تحميل أول فيديو 'أنا في حديقة الحيوان' بواسطة جاود كريم في 23 أبريل 2005. وحقق الموقع نمواً هائلاً مما دفع Google للاستحواذ عليه في نوفمبر 2006 مقابل 1.65 مليار دولار، وأصبح منذ ذلك الحين المنصة المهيمنة لمقاطع الفيديو عالمياً." },
    features: [
      {
        icon: "📺",
        title: { zh: "海量视频", en: "Massive Library", ar: "مكتبة ضخمة" },
        desc: { zh: "无限量观看各种类型的高清及 4K 视频", en: "Unlimited stream of HD & 4K video content across various genres", ar: "مشاهدة غير محدودة لمقاطع الفيديو عالية الدقة 4K في مختلف المجالات" },
      },
      {
        icon: "📡",
        title: { zh: "在线直播", en: "Live Streaming", ar: "بث مباشر" },
        desc: { zh: "实时观看并参与全球各种事件、赛事、游戏直播", en: "Broadcast your own live stream or watch others interact in real-time", ar: "مشاهدة الأحداث والأنشطة والبث المباشر والتفاعل مع الدردشة فورياً" },
      },
      {
        icon: "💵",
        title: { zh: "创作者变现", en: "Creator Monetization", ar: "أرباح المنشئين" },
        desc: { zh: "通过 YouTube 合作伙伴计划（YPP）获取广告收益", en: "Earn revenue via the YouTube Partner Program (YPP) through advertisements", ar: "كسب الإيرادات عبر برنامج شركاء YouTube (YPP) من خلال الإعلانات" },
      },
      {
        icon: "🎵",
        title: { zh: "YouTube Music", en: "YouTube Music", ar: "يوتيوب موسيقى" },
        desc: { zh: "海量正版音乐及 MV，支持后台播放", en: "Dedicated music streaming service integrated with music videos", ar: "ملايين الأغاني ومقاطع الفيديو الموسيقية المدمجة" },
      },
      {
        icon: "📱",
        title: { zh: "Shorts 短视频", en: "YouTube Shorts", ar: "Shorts القصيرة" },
        desc: { zh: "全新的竖屏短视频版块，快速浏览创意内容", en: "Short-form vertical video segment designed to challenge TikTok", ar: "مقاطع فيديو قصيرة عمودية تتيح تصفح محتوى إبداعي سريع" },
      },
      {
        icon: "💎",
        title: { zh: "Premium 免广告", en: "Premium Services", ar: "اشتراك Premium" },
        desc: { zh: "订阅 Premium 可享受免广告、离线下载和后台播放", en: "Remove ads, download videos offline, and play audio in the background", ar: "مشاهدة خالية من الإعلانات، تنزيل للمشاهدة بدون إنترنت وتشغيل في الخلفية" },
      },
    ],
    howToUse: [
      {
        title: { zh: "访问平台", en: "Visit YouTube", ar: "الوصول للمنصة" },
        desc: { zh: "通过浏览器或客户端访问，国内需要科学上网", en: "Access the platform via browser or install the mobile app (VPN needed in China).", ar: "زر موقع youtube.com أو افتح التطبيق (يتطلب VPN في الدول المحجوبة)" },
      },
      {
        title: { zh: "登录账号", en: "Login/Register", ar: "تسجيل الدخول" },
        desc: { zh: "使用 Google 账号登录可保存播放记录和订阅频道", en: "Sign in using a Google account to subscribe, like, and compile custom playlists.", ar: "سجل باستخدام حساب Google لحفظ السجل والاشتراك في القنوات والتعليق" },
      },
      {
        title: { zh: "搜索与订阅", en: "Search Videos", ar: "البحث والاشتراك" },
        desc: { zh: "通过顶部搜索栏查找内容，点击订阅保存喜欢的频道", en: "Use keywords in the search bar or explore personalized home recommendations.", ar: "استخدم شريط البحث العلوي للعثور على المحتوى، وانقر على 'اشتراك' لمتابعة القنوات" },
      },
      {
        title: { zh: "上传视频", en: "Engage", ar: "المشاركة والتفاعل" },
        desc: { zh: "点击右上角“创建”，即可上传视频成为创作者", en: "Like, comment, share, and hit the notification bell for your favorite channels.", ar: "الإعجاب بالفيديو، التعليق، والمشاركة، وتفعيل جرس التنبيه للمتابعة" },
      },
    ],
    faqs: [
      {
        q: { zh: "国内直接能看YouTube吗？", en: "Why is YouTube not loading?", ar: "لماذا لا يعمل يوتيوب؟" },
        a: { zh: "不能，YouTube 在中国大陆被屏蔽，必须使用科学上网工具才能访问。", en: "YouTube is blocked in mainland China. You need a VPN (e.g. ShunYun) to bypass the firewall and access it.", ar: "يوتيوب محجوب في الصين القارية وبعض الدول الأخرى. تحتاج لاستخدام VPN لتخطي الحجب." },
      },
      {
        q: { zh: "YouTube 怎么免广告？", en: "Is YouTube Premium worth it?", ar: "هل اشتراك Premium يستحق؟" },
        a: { zh: "可以订阅 YouTube Premium，或者使用支持广告拦截功能的浏览器/插件。", en: "Yes, if you watch frequently, it removes all ads, supports background playback on mobile, and includes YouTube Music.", ar: "نعم، إذا كنت تستخدم المنصة بكثرة، فهو يلغي الإعلانات ويدعم التشغيل في الخلفية ويتضمن تطبيق YouTube Music." },
      },
    ],
  },
  {
    slug: "twitter-x",
    category: "social",
    logo: "🐦",
    color: "#1da1f2",
    officialUrl: "https://x.com",
    founded: "2006-03-21",
    founder: "Jack Dorsey, Noah Glass, Biz Stone, Evan Williams",
    headquarter: "San Francisco, CA, USA",
    name: { zh: "Twitter / X", en: "Twitter / X", ar: "Twitter / X" },
    tagline: { zh: "全球实时社交媒体与资讯平台", en: "Global Real-Time Social & Information Network", ar: "شبكة التواصل الاجتماعي والأخبار العاجلة في الوقت الفعلي" },
    description: { zh: "全球最受欢迎的微博社交平台，是获取突发新闻、公共舆论、科技动态的实时社交网络。", en: "The premier microblogging and social networking platform, acting as a real-time network for breaking news, public opinion, and industry insights.", ar: "المنصة الرائدة في التدوين المصغر والتواصل الاجتماعي، وتعمل كشبكة فورية للأخبار العاجلة والآراء العامة ورؤى الصناعة." },
    longDescription: { zh: "Twitter (推特，现更名为 X) 是全球著名的社交媒体平台。2022 年被马斯克（Elon Musk）以 440 亿美元收购并更名为 X，旨在打造“全能超级应用（Everything App）”。X 是突发新闻、行业观点、加密货币、政治和娱乐等资讯传播最快的平台，支持短文字、图文、长文章以及视频分享。", en: "Twitter (now rebranded as X) is a massive social networking service. Acquired by Elon Musk in 2022 for $44 billion, it is transforming into an 'Everything App'. X remains the fastest medium for news propagation, containing communities for tech, business, gaming, politics, and pop culture.", ar: "تويتر (تغير اسمه الآن إلى X) هو موقع تواصل اجتماعي عالمي بارز. استحوذ عليه إيلون ماسك في عام 2022 مقابل 44 مليار دولار، بهدف تحويله إلى 'تطبيق كل شيء (Everything App)'. تظل المنصة أسرع وسيلة لنشر الأخبار والتفاعل مع الأحداث الجارية لحظة بلحظة." },
    history: { zh: "Twitter 由杰克·多西等人于 2006 年创立，最初主打 140 字符的短微博，快速成为了全球政商名流和普通用户发表即时言论的首选地。2022 年 10 月，特斯拉 CEO 埃隆·马斯克以 440 亿美元完成对推特的收购，私有化退市。随后马斯克对公司进行了大规模改革，裁员近 80%，并在 2023 年 7 月将 Twitter 品牌彻底升级为 X，致力于建设一个支持支付、通信、视频等全方位服务的超级大平台。", en: "Twitter was created by Jack Dorsey, Noah Glass, Biz Stone, and Evan Williams in March 2006, launching publicly in July that year. It grew into one of the largest social networks, famous for its 140-character constraint (later expanded to 280). In October 2022, Elon Musk acquired Twitter for $44 billion and restructured the company. In July 2023, he officially retired the Twitter name and bird logo, rebranding the platform to 'X' as part of his vision to create a super-app.", ar: "تم إنشاء تويتر في مارس 2006 بواسطة جاك دورسي وآخرين، وأطلق رسمياً في يوليو من نفس العام. نمت لتصبح واحدة من أكبر الشبكات الاجتماعية، واشتهرت بحد أقصى 140 حرفاً للتدوينة. في أكتوبر 2022، استحوذ إيلون ماسك على تويتر مقابل 44 مليار دولار، وقام بإصلاحات واسعة. في يوليو 2023، قام رسمياً بتغيير الاسم والشعار إلى 'X'." },
    features: [
      {
        icon: "📝",
        title: { zh: "实时推文", en: "Instant Posting", ar: "تغريدات لحظية" },
        desc: { zh: "发送短文本、图片、视频，分享你的即时想法", en: "Share short text messages, images, links and videos instantly", ar: "نشر نصوص قصيرة وصور وفيديوهات لمشاركة أفكارك فوراً" },
      },
      {
        icon: "🔥",
        title: { zh: "热门趋势", en: "Trends & Hashtags", ar: "الوسوم المتداولة" },
        desc: { zh: "查看全球及本地最受关注的热点话题和标签", en: "Real-time list of what topics are trending globally or locally", ar: "متابعة أكثر المواضيع والهاشتاجات الساخنة عالمياً ومحلياً" },
      },
      {
        icon: "💬",
        title: { zh: "Spaces 语音空间", en: "Spaces Audio", ar: "مساحات صوتية Spaces" },
        desc: { zh: "加入或主持实时多人在线语音讨论", en: "Join or host live, multi-participant interactive audio discussions", ar: "الانضمام أو استضافة محادثات صوتية جماعية مباشرة مع الآخرين" },
      },
      {
        icon: "🛡️",
        title: { zh: "社区附注", en: "Community Notes", ar: "ملاحظات المجتمع" },
        desc: { zh: "通过众包事实核查，减少虚假信息的传播", en: "Crowdsourced verification to combat misinformation on the platform", ar: "تدقيق الحقائق جماعياً لتقليل انتشار الأخبار الكاذبة والمضللة" },
      },
      {
        icon: "✉️",
        title: { zh: "私信互动", en: "Direct Messaging", ar: "الرسائل الخاصة DMs" },
        desc: { zh: "与全球任何用户进行加密的端到端私信聊天", en: "Private communication channel supporting group chats and calls", ar: "إرسال رسائل خاصة مشفرة والتفاعل مع أي مستخدم في العالم" },
      },
      {
        icon: "🌟",
        title: { zh: "X Premium 认证", en: "X Premium Benefits", ar: "اشتراك Premium" },
        desc: { zh: "订阅 Premium 获取蓝色复选标记，并享受长推文及修改特权", en: "Subscribers get verification marks, edit privileges, and longer text limits", ar: "الحصول على علامة التوثيق الزرقاء، إمكانية تعديل التغريدات ونشر نصوص أطول" },
      },
    ],
    howToUse: [
      {
        title: { zh: "注册登录", en: "Register", ar: "إنشاء حساب" },
        desc: { zh: "使用邮箱或手机号注册账号，国内需要科学上网", en: "Sign up via x.com or download the app (VPN needed in China).", ar: "سجل حساباً عبر البريد الإلكتروني أو الهاتف (يتطلب VPN في الدول المحجوبة)" },
      },
      {
        title: { zh: "关注用户", en: "Follow Accounts", ar: "متابعة الحسابات" },
        desc: { zh: "关注你感兴趣的人、媒体或科技领袖，构建你的时间线", en: "Build your feed by following news outlets, influencers, and politicians.", ar: "تابع الحسابات والشخصيات المؤثرة لبناء جدولك الزمني المخصص" },
      },
      {
        title: { zh: "发布首条推文", en: "Create a Post", ar: "نشر أول تغريدة" },
        desc: { zh: "点击“发布”按钮，分享你的第一条动态", en: "Type in the editor box (up to 280 chars for free users) and hit Post.", ar: "انقر على زر 'تغريد' لمشاركة أفكارك أو صورك أو الروابط مع العالم" },
      },
      {
        title: { zh: "参与互动", en: "Interact", ar: "التفاعل والمشاركة" },
        desc: { zh: "通过转发、点赞、回复参与全球性的话题探讨", en: "Engage with other posts by Reposting, Liking, Bookmarking or Replying.", ar: "تفاعل بإعادة التغريد (Retweet) أو الإعجاب أو الرد على المحادثات" },
      },
    ],
    faqs: [
      {
        q: { zh: "推特在国内怎么用？", en: "Is X accessible in China?", ar: "هل موقع X محجوب في الصين؟" },
        a: { zh: "必须使用科学上网工具才能访问 X（前 Twitter）。推荐使用瞬云等高速机场。", en: "No, X is blocked. You need a VPN connection to access it.", ar: "نعم، موقع X محجوب في الصين القارية وبعض الدول الأخرى. تحتاج لاستخدام VPN للوصول إليه." },
      },
      {
        q: { zh: "X Premium 是必须的吗？", en: "Is X free to use?", ar: "هل X مجاني؟" },
        a: { zh: "不是。普通用户可以免费阅读和发推，Premium 适合需要官方认证或发布长文的专业创作者。", en: "Yes, posting and browsing are free. Extra privileges like the blue checkmark require X Premium.", ar: "نعم، الاستخدام الأساسي مجاني تماماً. باقة Premium توفر ميزات إضافية وعلامة التوثيق فقط." },
      },
    ],
  },
  {
    slug: "instagram",
    category: "social",
    logo: "📸",
    color: "#e1306c",
    officialUrl: "https://www.instagram.com",
    founded: "2010-10-06",
    founder: "Kevin Systrom, Mike Krieger",
    headquarter: "Menlo Park, CA, USA",
    name: { zh: "Instagram", en: "Instagram", ar: "Instagram" },
    tagline: { zh: "全球最大的图文视觉社交平台", en: "The World's Premier Visual Social Platform", ar: "المنصة الرائدة عالمياً في مشاركة الصور والفيديوهات البصرية" },
    description: { zh: "以分享图片和短视频（Reels）为核心的视觉社交媒体，是全球潮流风尚、网红经济的中心枢纽。", en: "A visually-driven social media centered on sharing photos, stories, and short vertical videos (Reels) — the global hub of creator culture.", ar: "شبكة اجتماعية تركز على المحتوى البصري من صور وقصص وفيديوهات قصيرة (Reels)، وتعد مركزاً لثقافة المؤثرين." },
    longDescription: { zh: "Instagram（因斯达格拉姆，简称 Ins）是一个以图文视觉分享为特色的全球社交平台。2012 年被 Facebook (现 Meta) 以 10 亿美元收购，目前月活跃用户已超过 20 亿。Instagram 深受全球年轻群体的喜爱，其推出的 Story（故事）和 Reels（短视频）深刻塑造了当今的网红文化和视觉审美标准。", en: "Instagram is a global photo and video sharing platform. Acquired by Facebook (now Meta) in 2012 for $1 billion, it has grown to over 2 billion monthly active users. Famously popular among youth, it shapes modern aesthetic trends via Stories and Reels.", ar: "إنستغرام (Instagram) هو منصة اجتماعية تركز على المحتوى البصري. استحوذت عليها فيسبوك (المعروفة الآن باسم Meta) في عام 2012 مقابل مليار دولار، وتضم الآن أكثر من 2 مليار مستخدم نشط شهرياً. وهي شائعة جداً بين الشباب وتشكل ثقافة الموضة والجمال البصري." },
    history: { zh: "Instagram 由凯文·斯特罗姆和麦克·克瑞格于 2010 年底发布，最初专注于正方形照片的滤镜分享。上线仅几个月便在苹果商店大火。2012 年 4 月，Facebook（现 Meta）出资 10 亿美元收购了仅有 13 名员工的 Instagram，成为科技史上最成功的收购案之一。随着 2016 年 Story 故事功能和 2020 年 Reels 短视频的上线，Instagram 稳固了其作为全球最大视觉社交平台的霸主地位。", en: "Instagram was created by Kevin Systrom and Mike Krieger, launching on iOS in October 2010. It quickly captured millions of users due to its elegant square-formatted photography focus. In April 2012, Facebook bought the company for $1 billion in cash and stock, a visionary purchase as the platform had no revenue and just 13 employees at the time. With the introduction of Stories in 2016 and Reels in 2020, Instagram established itself as a leading visual network.", ar: "تم إطلاق إنستغرام بواسطة كيفن سيستروم ومايك كريجر في أكتوبر 2010 على نظام التشغيل iOS. وفي عام 2012، استحوذت شركة فيسبوك على المنصة مقابل مليار دولار، وكانت خطوة ذكية للغاية حيث كان يعمل بالمنصة 13 موظفاً فقط. مع تقديم القصص في عام 2016 ومقاطع Reels في عام 2020، عززت المنصة مكانتها الرائدة." },
    features: [
      {
        icon: "🖼️",
        title: { zh: "图文发布", en: "Photo & Video Posts", ar: "مشاركة الصور والفيديو" },
        desc: { zh: "通过精美滤镜修饰图片，分享生活中的精彩瞬间", en: "Apply artistic filters and edits before posting photos or videos", ar: "تطبيق فلاتر وتعديلات فنية ونشر الصور والفيديوهات بجمالية عالية" },
      },
      {
        icon: "⏳",
        title: { zh: "Story 故事", en: "Stories Features", ar: "القصص Stories" },
        desc: { zh: "发布 24 小时后自动消失的日常随拍，更真实无压力", en: "Vertical content that automatically vanishes from view after 24 hours", ar: "محتوى عمودي يختفي تلقائياً بعد مرور 24 ساعة من نشره" },
      },
      {
        icon: "🎞️",
        title: { zh: "Reels 短视频", en: "Instagram Reels", ar: "مقاطع Reels" },
        desc: { zh: "快速浏览、剪辑并发布搭配动感音乐的短视频", en: "Short, engaging multi-clip videos set to music and sound effects", ar: "فيديوهات قصيرة جذابة مع دمج المؤثرات الصوتية والموسيقى" },
      },
      {
        icon: "🛍️",
        title: { zh: "商业购物", en: "Shopping Portal", ar: "بوابة التسوق" },
        desc: { zh: "支持品牌商展示商品，用户可直接点击购买", en: "Find, explore, and purchase goods directly inside the Instagram interface", ar: "استكشاف وشراء المنتجات مباشرة من داخل واجهة التطبيق" },
      },
      {
        icon: "🎨",
        title: { zh: "AR 滤镜", en: "Filters & Effects", ar: "الفلاتر والمؤثرات" },
        desc: { zh: "丰富有趣的动态增强现实滤镜，提升互动趣味", en: "Interactive AR face masks and scenery filters for camera capture", ar: "أقنعة وجه تفاعلية وتأثيرات واقع معزز لتصوير القصص" },
      },
      {
        icon: "✉️",
        title: { zh: "Direct 私聊", en: "Direct Messages", ar: "الرسائل الخاصة DMs" },
        desc: { zh: "发送文字、语音、临时图片与好友私密畅聊", en: "Send texts, media, voice notes, and make video calls privately", ar: "الدردشة الخاصة ومشاركة المنشورات وإرسال رسائل صوتية ومكالمات فيديو" },
      },
    ],
    howToUse: [
      {
        title: { zh: "注册账号", en: "Sign Up", ar: "إنشاء حساب" },
        desc: { zh: "使用邮箱或手机号注册账号，国内需要科学上网", en: "Register a handle using email or login through Facebook (VPN needed in China).", ar: "سجل حساباً عبر البريد الإلكتروني أو الهاتف (يتطلب VPN في الدول المحجوبة)" },
      },
      {
        title: { zh: "完善个人资料", en: "Follow Accounts", ar: "متابعة الحسابات" },
        desc: { zh: "上传头像，撰写个性签名（Bio），向他人介绍自己", en: "Connect with friends or follow celebrities and creators to fill your feed.", ar: "تابع الحسابات والشخصيات المؤثرة لبناء جدولك الزمني المخصص" },
      },
      {
        title: { zh: "开始探索", en: "Create Post", ar: "نشر محتوى" },
        desc: { zh: "使用“发现”页面，关注全球明星、创作者或你的亲友", en: "Tap the central '+' icon, choose your media, write a caption, and share.", ar: "انقر على أيقونة '+'، واختر الصور، وطبق الفلاتر، واكتب وصفاً ثم انشر" },
      },
      {
        title: { zh: "发布动态", en: "Engage Feed", ar: "التفاعل والمشاركة" },
        desc: { zh: "点击底部“+”号，选择照片、编写文案、添加标签并发布", en: "Double-tap to like, leave comments, and send posts to friends via DM.", ar: "تفاعل بإعادة التغير، الإعجاب بالمنشورات، وترك تعليقات لجهات اتصالك" },
      },
    ],
    faqs: [
      {
        q: { zh: "Ins在国内需要加速器吗？", en: "Is Instagram banned in China?", ar: "هل إنستغرام محجوب في الصين؟" },
        a: { zh: "需要，Instagram 官网及客户端在中国大陆无法直接使用，需要科学上网工具。", en: "Yes, the firewall blocks Meta servers. A VPN is mandatory to upload or browse.", ar: "نعم، خوادم Meta محجوبة في الصين القارية. يجب عليك استخدام VPN لتخطي الحجب." },
      },
      {
        q: { zh: "Instagram 能下载别人发的视频吗？", en: "Can I save pictures to my phone?", ar: "هل يمكنني تنزيل الصور؟" },
        a: { zh: "官方客户端不支持直接保存他人的图文或 Reels，需使用第三方下载工具或网页端扩展。", en: "The official app doesn't allow saving others' posts. Use screenshots or online browser down tools.", ar: "التطبيق الرسمي لا يدعم تنزيل الصور بشكل مباشر. يمكنك أخذ لقطات شاشة أو استخدام مواقع تنزيل خارجية." },
      },
    ],
  },
  {
    slug: "github",
    category: "dev",
    logo: "💻",
    color: "#24292e",
    officialUrl: "https://github.com",
    founded: "2008-04-10",
    founder: "Tom Preston-Werner, Chris Wanstrath, P. J. Hyett",
    headquarter: "San Francisco, CA, USA",
    name: { zh: "GitHub", en: "GitHub", ar: "GitHub" },
    tagline: { zh: "全球最大开源软件开发协作平台", en: "The World's Largest Code Hosting & Collaboration Platform", ar: "أكبر منصة لاستضافة وتطوير البرمجيات والتعاون البرمجي" },
    description: { zh: "程序员和开源社区的“圣地”，基于 Git 提供代码托管、版本控制、协作开发以及 CI/CD 自动化服务。", en: "The sanctuary of developers and the open-source community, providing Git repository hosting, version control, and CI/CD pipeline automation.", ar: "ملتقى المبرمجين والمجتمعات المفتوحة المصدر، يوفر استضافة مستودعات Git وإدارة الإصدارات وأتمتة العمليات." },
    longDescription: { zh: "GitHub 是全球最大的软件项目托管平台与开发者社区。2018 年被微软以 75 亿美元收购。GitHub 基于 Git 版本控制系统，为全球超过 1 亿名开发者提供开源代码托管、协同开发、Pull Request 代码评审、GitHub Actions 自动化构建等一站式 DevOps 服务，承载了人类绝大多数核心开源项目。", en: "GitHub is the world's leading platform for hosting software development and version control using Git. Acquired by Microsoft in 2018 for $7.5 billion, it serves over 100 million developers. GitHub hosts a vast majority of the world's open-source projects, offering code review, project management, and automated workflow integrations.", ar: "جيتهاب (GitHub) هو المنصة الرائدة عالمياً لاستضافة وتطوير البرمجيات وإدارة إصداراتها باستخدام Git. استحوذت عليها مايكروسوفت في عام 2018 مقابل 7.5 مليار دولار، وتخدم أكثر من 100 مليون مطور حول العالم، وتستضيف الغالبية العظمى من المشاريع مفتوحة المصدر." },
    history: { zh: "GitHub 由汤姆·普雷斯顿-维尔纳、克里斯·万斯特拉思及 PJ 海耶特于 2008 年共同创立，最初基于 Ruby on Rails 开发。凭借便捷的代码协同机制，迅速击败了 SourceForge 等老牌代码托管网站。2018 年 6 月，微软出资 75 亿美元完成对 GitHub 的收购。被微软收购后，GitHub 推出了免费的私有仓库，并在 2021 年与 OpenAI 联合发布了具有里程碑意义的 AI 编程助手 GitHub Copilot，持续引领软件开发范式的革新。", en: "GitHub was launched in April 2008 by Tom Preston-Werner, Chris Wanstrath, and PJ Hyett as a web portal for hosting Git repositories. It became the dominant hosting provider, beating competitors like SourceForge. Microsoft acquired GitHub in June 2018 for $7.5 billion. Microsoft maintained its neutral operations while lowering pricing and introducing free private repositories. In 2021, GitHub partnered with OpenAI to launch Copilot, spearheading the modern AI software development movement.", ar: "تم إطلاق GitHub في أبريل 2008 بواسطة توم بريستون-ويرنر، كريس وانسترات، وبي جي هييت كبوابة ويب لاستضافة مستودعات Git. أصبح الموقع المنصة المهيمنة للتطوير. في يونيو 2018، استحوذت شركة Microsoft على المنصة مقابل 7.5 مليار دولار وحافظت على استقلالية عملياتها مع إطلاق مستودعات خاصة مجانية. وفي عام 2021، أطلقوا Copilot بالتعاون مع OpenAI." },
    features: [
      {
        icon: "📦",
        title: { zh: "代码托管", en: "Git Repository Hosting", ar: "استضافة مستودعات Git" },
        desc: { zh: "安全可靠的代码版本管理，支持私有和公开代码库", en: "Safely store code in the cloud with full version history tracking", ar: "حفظ وتخزين الأكواد البرمجية في السحاب مع تتبع كامل لتاريخ التعديلات" },
      },
      {
        icon: "🤝",
        title: { zh: "协作开发", en: "Pull Request & Review", ar: "مراجعة ودمج الأكواد" },
        desc: { zh: "通过 Pull Request 和 Issue 系统高效评审并合并代码", en: "Discuss code, review diffs, and merge branches with team review tools", ar: "مناقشة الأكواد وتعديلها ودمج الفروع مع أدوات مراجعة الفريق" },
      },
      {
        icon: "🤖",
        title: { zh: "GitHub Actions", en: "GitHub Actions CI/CD", ar: "الأتمتة عبر Actions" },
        desc: { zh: "强大的 CI/CD 工作流，自动编译、测试和部署代码", en: "Build, test, and deploy code directly within repository actions", ar: "أتمتة بناء واختبار ونشر التطبيقات مباشرة من مستودع الأكواد" },
      },
      {
        icon: "🌟",
        title: { zh: "开源生态", en: "Open Source Communities", ar: "مستودعات مفتوحة المصدر" },
        desc: { zh: "关注、打星（Star）并参与全球数百万开源项目", en: "Explore, star, and fork millions of active open-source software libraries", ar: "استكشاف ونسخ والمساهمة في ملايين المشاريع البرمجية المفتوحة عالمياً" },
      },
      {
        icon: "🛡️",
        title: { zh: "安全扫描", en: "Vulnerability Scanning", ar: "فحص الثغرات البرمجية" },
        desc: { zh: "自动检测代码中的敏感泄漏、安全漏洞与依赖更新", en: "Scans repository dependencies for security flaws and updates", ar: "فحص التبعيات البرمجية تلقائياً للبحث عن الأخطاء والثغرات الأمنية وتحديثها" },
      },
      {
        icon: "🤖",
        title: { zh: "GitHub Copilot", en: "GitHub Copilot", ar: "المساعد الذكي Copilot" },
        desc: { zh: "微软与 GitHub 联合开发的 AI 代码编写辅助插件", en: "AI-driven peer programmer recommending code snippets in your IDE", ar: "مساعد برمجة ذكي يقترح أسطر برمجية وحلولاً مباشرة داخل بيئة التطوير" },
      },
    ],
    howToUse: [
      {
        title: { zh: "注册账号", en: "Create Account", ar: "إنشاء حساب" },
        desc: { zh: "访问 github.com 免费注册账号，国内可直接访问（部分地区有波动）", en: "Sign up at github.com using a username and personal email.", ar: "سجل مجاناً في موقع github.com باستخدام اسم مستخدم وبريد إلكتروني" },
      },
      {
        title: { zh: "创建代码库", en: "New Repository", ar: "إنشاء مستودع جديد" },
        desc: { zh: "点击右上角“New Repository”，新建一个代码托管项目", en: "Click the '+' menu, select 'New repository', set it to public or private.", ar: "انقر على أيقونة '+' واختر 'مستودع جديد' وحدد عاماً أو خاصاً" },
      },
      {
        title: { zh: "提交与同步", en: "Push Code", ar: "رفع الكود" },
        desc: { zh: "通过本地 Git 工具将本地写好的代码 push（推送）到 GitHub", en: "Initialize Git locally, stage files, commit, and push to GitHub remote server.", ar: "قم بإعداد Git محلياً على جهازك، والتزم بالملفات ثم ارفعها إلى الخادم" },
      },
      {
        title: { zh: "参与贡献", en: "Create PR", ar: "طلب دمج PR" },
        desc: { zh: "Fork 他人项目，修改后通过 Pull Request 发起合并申请", en: "To suggest changes to a codebase, open a branch, push edits, and start a PR.", ar: "لتقديم تغييرات على مشروع، قم بإنشاء فرع وتعديله ثم افتح طلب دمج" },
      },
    ],
    faqs: [
      {
        q: { zh: "GitHub 国内可以直接访问吗？", en: "Is GitHub blocked in China?", ar: "هل GitHub محجوب في الصين؟" },
        a: { zh: "可以访问，但是部分省市对 GitHub 的连接限制较为严重，加载缓慢或无法拉取代码，推荐使用加速器或科学上网工具。", en: "Usually no, but access is slow due to firewalls. A VPN makes Git cloning and browsing stable.", ar: "في الغالب لا، ولكن التصفح بطيء. استخدام VPN يجعل سحب الأكواد وتنزيلها مستقراً." },
      },
      {
        q: { zh: "GitHub 是免费的吗？", en: "Can I host private repositories for free?", ar: "هل المستودعات الخاصة مجانية؟" },
        a: { zh: "是的。个人创建公开和私有仓库都是完全免费的，高级的企业团队功能及 AI 助手（Copilot）需付费使用。", en: "Yes, free tier allows unlimited private repositories with up to 3 collaborators.", ar: "نعم، الخطة المجانية تدعم مستودعات خاصة غير محدودة لعدد محدد من المشاركين." },
      },
    ],
  },
  {
    slug: "notion",
    category: "office",
    logo: "📓",
    color: "#000000",
    officialUrl: "https://www.notion.so",
    founded: "2016-03-01",
    founder: "Ivan Zhao, Simon Last",
    headquarter: "San Francisco, CA, USA",
    name: { zh: "Notion", en: "Notion", ar: "Notion" },
    tagline: { zh: "极简全能的知识库与项目协作平台", en: "The Connected Workspace for Notes, Wikis, and Tasks", ar: "مساحة العمل المتكاملة للملاحظات وقواعد المعرفة والمهام" },
    description: { zh: "将文档、任务、知识库、数据库无缝整合的多功能笔记办公软件，是构建个人知识体系与团队协作的利器。", en: "An all-in-one productivity app that seamlessly blends documents, tasks, wikis, and databases into a flexible workspace.", ar: "تطبيق إنتاجية متكامل يدمج بسلاسة المستندات والمهام وقواعد المعرفة وقواعد البيانات في مساحة عمل مرنة." },
    longDescription: { zh: "Notion 是一款打破传统软件壁垒的集成式笔记协同办公应用。它以“Block（块）”为最小概念，用户可以通过拖拽，自由拼装出笔记、文档、看板、数据库、甘特图等各种页面。Notion 支持极强的多平台数据同步、团队多人实时协同协作，并已深度融合 AI 写作与查询助手，是全球生产力软件领域最杰出的代表之一。", en: "Notion is a single space where you can write, plan, collaborate, and get organized. It introduces 'blocks' as the granular base, allowing users to drag and drop text, lists, code, databases, and media. Highly customizable and cross-platform, it is a leading player in productivity and workspace software.", ar: "نوشن (Notion) هو مساحة عمل موحدة تتيح لك الكتابة والتخطيط والتعاون والتنظيم. يعتمد التطبيق على مفهوم 'الكتل' (blocks) كقاعدة أساسية، مما يسمح للمستخدمين بسحب وإفلات النصوص والقوائم وقواعد البيانات والوسائط المتعددة." },
    history: { zh: "Notion 由华人创始人赵海（Ivan Zhao）于 2013 年在旧金山创立。早期由于系统定位不明确，公司曾濒临倒闭。2016 年赵海与 Simon Last 对软件进行了彻底重构，推出了 Notion 2.0，将核心定位于“Block（块）”的无限自由拼接。由于极高的自由度与精美的极简设计，Notion 迅速在全球极客与学生群体中走红。2021 年 Notion 完成了新一轮融资，估值突破 100 亿美元，彻底奠定了其在现代化协作办公领域的霸主地位。", en: "Notion Labs Inc. was founded in San Francisco in 2013 by Ivan Zhao and Simon Last. The startup struggled for years, prompting Ivan Zhao to lay off staff and relocate to Kyoto, Japan, to rewrite the app. In 2016, they released Notion 2.0, focusing on blocks and databases. The clean aesthetic and customization went viral on TikTok and Twitter. In October 2021, Notion raised funding at a $10 billion valuation, establishing itself as the premier collaborative workspace tool globally.", ar: "تأسست شركة Notion Labs في سان فرانسيسكو عام 2013 بواسطة إيفان تشاو وسايمون لاست. واجهت الشركة صعوبات في بداياتها، مما دفع إيفان تشاو لتقليص حجم الموظفين والانتقال مؤقتاً إلى كيوتو في اليابان لإعادة بناء التطبيق بالكامل. في عام 2016، أطلقوا Notion 2.0 الذي يركز على الكتل وقواعد البيانات، وحقق نجاحاً هائلاً. في أكتوبر 2021، بلغت قيمة نوشن التقديرية 10 مليارات دولار." },
    features: [
      {
        icon: "📝",
        title: { zh: "多功能文档", en: "Flexible Block Editor", ar: "محرر الكتل المرن" },
        desc: { zh: "支持文本、数学公式、代码块、网页内嵌等多区块编辑", en: "Drag and drop text, headings, to-do lists, videos, and math equations", ar: "سحب وإفلات النصوص، العناوين، قوائم المهام، الفيديوهات والمعادلات الرياضية" },
      },
      {
        icon: "🗄️",
        title: { zh: "强大的数据库", en: "Customizable Databases", ar: "قواعد بيانات مخصصة" },
        desc: { zh: "同一套数据可在表格、看板、日历、画廊等视图间自由切换", en: "Organize files with tables, kanban boards, calendars, and timelines", ar: "تنظيم الملفات والمشاريع باستخدام الجداول ولوحات كانبان والتقاويم" },
      },
      {
        icon: "🤝",
        title: { zh: "团队协同", en: "Team Collaboration", ar: "التعاون الجماعي الفوري" },
        desc: { zh: "支持多人实时共同在线编写、评论，精细控制文档权限", en: "Work together in real-time with comments, mentions, and shared workspaces", ar: "العمل معاً في الوقت الفعلي مع التعليقات والإشارات ومساحات العمل المشتركة" },
      },
      {
        icon: "🤖",
        title: { zh: "Notion AI", en: "Notion AI Integration", ar: "تكامل Notion AI" },
        desc: { zh: "一键润色文本、生成摘要、解答内容问题、自动整理表格", en: "Autofill tables, summarize articles, translate text, and write copy", ar: "تعبئة الجداول تلقائياً، تلخيص المقالات، ترجمة النصوص وكتابة المحتوى" },
      },
      {
        icon: "🔌",
        title: { zh: "第三方集成", en: "App Connections", ar: "اتصالات التطبيقات" },
        desc: { zh: "无缝嵌入 Slack、Figma、GitHub、Google Drive 等工具内容", en: "Connects with Jira, GitHub, Slack, Figma, and Google Drive", ar: "الربط مع تطبيقات Jira و GitHub و Slack و Figma و Google Drive" },
      },
      {
        icon: "🎨",
        title: { zh: "海量模板", en: "Template Gallery", ar: "معرض القوالب" },
        desc: { zh: "提供数十万个官方及社区模板，即装即用快速搭建系统", en: "Thousands of community-built templates to start tracking projects instantly", ar: "آلاف القوالب المصممة من قبل المجتمع لبدء إدارة المشاريع فوراً" },
      },
    ],
    howToUse: [
      {
        title: { zh: "创建账号", en: "Sign Up", ar: "إنشاء حساب" },
        desc: { zh: "使用邮箱注册，国内可直接使用，网页端及客户端均支持", en: "Visit notion.so, sign up for free using your email or Google account.", ar: "سجل مجاناً في موقع notion.so باستخدام بريدك الإلكتروني أو حساب Google" },
      },
      {
        title: { zh: "创建首张页面", en: "Create a Page", ar: "إنشاء صفحة جديدة" },
        desc: { zh: "点击“Add a Page”，按“/”输入命令开始写字或插入版块", en: "Click 'Add a page' in the sidebar. Start typing or use '/' to insert blocks.", ar: "انقر على 'إضافة صفحة' في القائمة الجانبية، واكتب رمز '/' لإدراج الكتل" },
      },
      {
        title: { zh: "搭建数据库", en: "Create Database", ar: "إنشاء قاعدة بيانات" },
        desc: { zh: "新建“Database”，管理待办事项、项目进度或个人日记", en: "Create tables, boards, or calendar databases by typing '/database'.", ar: "أنشئ جدولاً أو لوحة أو تقويماً لكتابة المهام والمشاريع عبر كتابة '/database'" },
      },
      {
        title: { zh: "套用模板", en: "Explore Templates", ar: "استكشاف القوالب" },
        desc: { zh: "在“Templates”栏寻找适合的个人模板，一键导入使用", en: "Click 'Templates' in the left menu, choose one that fits your task, and import it.", ar: "انقر على 'Templates' في القائمة اليسرى، واختر القالب المناسب وقم باستيراده" },
      },
    ],
    faqs: [
      {
        q: { zh: "Notion 在国内能用吗？是否需要科学上网？", en: "Do I need a VPN for Notion?", ar: "هل أحتاج لشبكة VPN لتشغيل Notion؟" },
        a: { zh: "在国内可以直接访问和使用，不需要科学上网。不过如果需要极速上传大文件，科学上网体验会更佳。", en: "No, Notion is not blocked in mainland China, though a VPN may speed up heavy assets sync.", ar: "لا، نوشن غير محجوب ويمكن استخدامه مباشرة، استخدام VPN قد يساعد فقط في تسريع مزامنة الملفات الكبيرة." },
      },
      {
        q: { zh: "Notion 是免费的吗？", en: "Is Notion free for individuals?", ar: "هل نوشن مجاني؟" },
        a: { zh: "是的。个人免费版支持无限页面和 Block 数量，限制上传最大单文件为 5MB；高级协同和 Notion AI 功能需要订阅付费。", en: "Yes, Notion's Free Plan offers unlimited pages and blocks. The limit is 5MB for single file uploads.", ar: "نعم، الخطة المجانية توفر صفحات وكتل غير محدودة للعمل الفردي. الحد الأقصى للملف الواحد هو 5 ميجابايت." },
      },
    ],
  },
  {
    slug: "midjourney",
    category: "ai",
    logo: "🎨",
    color: "#4a3c8c",
    officialUrl: "https://www.midjourney.com",
    founded: "2022-07-12",
    founder: "David Holz",
    headquarter: "San Francisco, CA, USA",
    name: { zh: "Midjourney", en: "Midjourney", ar: "Midjourney" },
    tagline: { zh: "最顶尖的 AI 图像与艺术生成工具", en: "The Leading AI Image & Art Generation Service", ar: "الأداة الأكثر تميزاً في توليد الصور واللوحات الفنية الرقمية" },
    description: { zh: "运行在 Discord 社区之上的 AI 图像生成工具，凭借极高艺术美感、逼真的光影细节，在创意绘画领域冠绝群雄。", en: "An AI image generator hosted entirely on Discord, widely praised for its high artistic value, complex lighting details, and painterly styling.", ar: "برنامج ذكاء اصطناعي لتوليد الصور من الأوصاف النصية، يتم تشغيله بالكامل عبر تطبيق Discord وتشتهر لوحاته بلمستها الفنية الفائقة." },
    longDescription: { zh: "Midjourney 是一款在全球创意界声名大噪的 AI 文本生成图像服务。由 Leap Motion 联合创始人 David Holz 于 2022 年创立。与大多数 AI 工具不同，Midjourney 没有独立网页客户端，而是完全依托 Discord 聊天频道。用户通过向机器人输入文字提示词（Prompt），即可在 1 分钟内生成四张极具艺术感、电影光影级或照片级写实度的惊艳画作。", en: "Midjourney is an independent research lab producing a proprietary artificial intelligence program under the same name. Run entirely via Discord commands, it translates text prompts into stunning creative artwork, graphic designs, and photorealistic rendering.", ar: "ميدجورني (Midjourney) هو مختبر أبحاث مستقل يركز على الذكاء الاصطناعي التوليدي للصور. يعمل بالكامل عبر خادم Discord الخاص به. يقوم بترجمة الأوامر النصية إلى لوحات فنية رقمية ورسومات وتصاميم واقعية مذهلة في أقل من دقيقة." },
    history: { zh: "Midjourney 由 David Holz 于 2021 年成立。David 曾是知名手势识别硬件公司 Leap Motion 的创始人，在将公司售出后，他独自注资成立了 Midjourney，且没有接受任何外部风险投资。Midjourney 在 2022 年 7 月进入公开测试阶段，正值生成式 AI 爆发前夕。依靠极富感染力的美学调教和极快的版本更迭，迅速霸占了 AI 创意绘画的核心阵地，成为了极少数未获融资但年利润过亿美元的独立明星创业公司。", en: "Midjourney was founded in 2021 by David Holz, the co-founder of the hardware interface company Leap Motion. Operating as a self-funded venture without venture capital, the company launched its open beta in July 2022. By leveraging Discord's chat interface instead of building a dedicated web portal, Midjourney saved significant UI overhead while creating a viral community. It is one of the most profitable independent AI businesses in the world, generating over $100 million in annual revenue.", ar: "تأسست Midjourney في عام 2021 بواسطة ديفيد هولتز، الشريك المؤسس لشركة Leap Motion الشهيرة. تعمل كمشروع بتمويل ذاتي بدون رأس مال مغامر، وأطلقت نسختها التجريبية في يوليو 2022. من خلال الاعتماد على واجهة Discord، حقق انتشاراً فيروسياً مذهلاً وتعتبر حالياً من أكثر شركات الذكاء الاصطناعي ربحية في العالم." },
    features: [
      {
        icon: "🎨",
        title: { zh: "高艺术美感", en: "High Aesthetic Value", ar: "جمالية فنية استثنائية" },
        desc: { zh: "生成图片在色彩、光影、构图上具有极高的艺术审美水平", en: "Stunning output quality focusing on deep color, shadows, and mood", ar: "صور توليدية تتميز بدقة عالية في توزيع الإضاءة والظلال والألوان المنسجمة" },
      },
      {
        icon: "⚡",
        title: { zh: "超速渲染", en: "Rapid Rendering", ar: "سرعة الإنتاج" },
        desc: { zh: "在短短 1 分钟内，即可输出 4 张高质量候选画作", en: "Computes and displays four candidate images in under 60 seconds", ar: "توليد 4 خيارات من الصور عالية الدقة في أقل من 60 ثانية" },
      },
      {
        icon: "💬",
        title: { zh: "Discord 社区", en: "Discord Ecosystem", ar: "العمل عبر Discord" },
        desc: { zh: "依托 Discord 聊天群组操作，方便观摩并学习其他用户的创作", en: "Operates through text chats in Discord servers, allowing group learning", ar: "توليد الرسوم عبر قنوات المحادثة في خادم Discord والتعلم من المجتمع" },
      },
      {
        icon: "🔍",
        title: { zh: "无级缩放与微调", en: "Pan & Zoom", ar: "التوسيع والتعديل الجزئي" },
        desc: { zh: "支持将图像局部重画、向四周扩图（Zoom）及分辨率提升", en: "Expand coordinates of an image or regenerate sections using inpainting", ar: "تكبير الصورة وإعادة توليد أجزاء معينة منها بنقرات بسيطة" },
      },
      {
        icon: "📸",
        title: { zh: "超写实照片", en: "Photorealism Model", ar: "واقعية فوتوغرافية فائقة" },
        desc: { zh: "V6 等新版本可生成细节极其逼真、难以区分真伪的人像及景物", en: "Generates high fidelity people, textures, and landscapes with the V6 engine", ar: "توليد تفاصيل بشرية ومناظر طبيعية دقيقة للغاية ومبهرة بفضل محرك V6" },
      },
      {
        icon: "✏️",
        title: { zh: "提示词解析", en: "Stylization Parameters", ar: "تعدد الأنماط والأنواع" },
        desc: { zh: "智能解析文字语义，精准展现各种艺术风格、笔触和胶片质感", en: "Apply complex flags to adjust style, chaos, and output aspect ratios", ar: "دعم مئات الأساليب الفنية من الرسوم المتحركة إلى اللوحات الزيتية الكلاسيكية" },
      },
    ],
    howToUse: [
      {
        title: { zh: "加入 Discord", en: "Join Discord", ar: "الانضمام إلى Discord" },
        desc: { zh: "访问 Discord 并注册，国内需要科学上网", en: "Sign up for a free Discord account via browser or app (VPN required in China).", ar: "أنشئ حساباً في تطبيق Discord (يتطلب VPN في الدول المحجوبة)" },
      },
      {
        title: { zh: "加入服务器", en: "Authorize Account", ar: "دخول خادم الأدوات" },
        desc: { zh: "接受 Midjourney 官网邀请，进入官方 Discord 服务器", en: "Visit midjourney.com, click 'Join the Beta', and join the official server.", ar: "زر موقع midjourney.com واقبل دعوة الانضمام لخادم Discord الرسمي" },
      },
      {
        title: { zh: "发送绘图命令", en: "Run /imagine", ar: "إرسال أمر الرسم" },
        desc: { zh: "在“newbies”频道输入“/imagine”，输入英文提示词", en: "Enter a newbies channel, type '/imagine', input your keywords, and press Enter.", ar: "ادخل إلى إحدى قنوات المبتدئين (newbies) واكتب '/imagine' متبوعاً بالوصف الإنجليزي" },
      },
      {
        title: { zh: "微调并导出", en: "Refine & Save", ar: "الترقية والتعديل" },
        desc: { zh: "使用 U 按钮放大图片，V 按钮做微调变化，右键保存大图", en: "Press 'U1-U4' to upscale an image, or 'V1-V4' to generate subtle variants.", ar: "استخدم زر 'U' لتكبير الصورة المفضلة وزر 'V' لتوليد تعديلات مشابهة لها" },
      },
    ],
    faqs: [
      {
        q: { zh: "国内直接能用 Midjourney 吗？", en: "Can I run Midjourney without a VPN?", ar: "هل يعمل بدون VPN؟" },
        a: { zh: "必须科学上网。由于 Midjourney 依赖 Discord，而后者在国内被完全屏蔽，所以需要使用加速器。", en: "No, Discord is blocked in China. You must use a VPN (e.g. ShunYun) to access the Discord workspace.", ar: "لا، خوادم Discord محجوبة في بعض المناطق. تحتاج لاستخدام VPN للوصول إلى بيئة التطبيق." },
      },
      {
        q: { zh: "Midjourney 是免费的吗？", en: "Does Midjourney have a free trial?", ar: "هل تتوفر فترة تجريبية مجانية؟" },
        a: { zh: "目前已经取消了免费试用额度，用户必须订阅付费计划才能使用（最低 $10/月）。", en: "No, free trials are currently disabled. Subscription plans start at $10/month.", ar: "لا، تم إيقاف الفترات التجريبية المجانية مؤقتاً. باقات الاشتراك تبدأ من 10 دولارات شهرياً." },
      },
    ],
  },
  {
    slug: "perplexity",
    category: "ai",
    logo: "🔍",
    color: "#22c55e",
    officialUrl: "https://www.perplexity.ai",
    founded: "2022-08-01",
    founder: "Aravind Srinivas, Denis Yarats, Johnny Ho",
    headquarter: "San Francisco, CA, USA",
    name: { zh: "Perplexity AI", en: "Perplexity AI", ar: "Perplexity AI" },
    tagline: { zh: "革新体验的 AI 智能搜索引擎", en: "The Next-Generation AI Search & Answer Engine", ar: "الجيل القادم من محركات البحث والتحليل الذكي بالذكاء الاصطناعي" },
    description: { zh: "将生成式 AI 与传统网络搜索结合，直接给出整理好的回答并附带参考链接来源，免去筛选网页链接的烦恼。", en: "An innovative AI-powered search tool that delivers synthesized summaries of web results with direct inline source citations.", ar: "أداة بحث مبتكرة مدعومة بالذكاء الاصطناعي، تقدم إجابات ملخصة وموثقة بالمصادر مباشرة بدلاً من سرد روابط الويب." },
    longDescription: { zh: "Perplexity AI 是一款颠覆传统搜索模式的“答案引擎”。由来自 Google AI、OpenAI 的科学家于 2022 年创立。与 Google 给出成千上万个超链接不同，Perplexity 会实时抓取全网最新资讯，通过 AI 进行整合提炼，直接为用户写出一段结构清晰的详实回答，并精准标注引用来源，极大地提高了学术研究和日常查询效率。", en: "Perplexity AI is a conversational search engine founded in 2022 by former researchers from Google, OpenAI, and Meta. Instead of serving list of hyperlinks, it reads web pages in real-time, compiles key findings, and writes structured answers with footnoted source links.", ar: "بيربليكسيتي (Perplexity AI) هو محرك بحث تفاعلي تم تأسيسه في عام 2022 من قبل باحثين سابقين من Google وOpenAI. بدلاً من عرض قائمة من الروابط التشعبية، يقوم المحرك بقراءة صفحات الويب بالوقت الفعلي وتلخيص النتائج وتوثيقها بمصادر مباشرة." },
    history: { zh: "Perplexity AI 于 2022 年由 Aravind Srinivas 等人联合创立。Aravind 曾是 OpenAI 的研究科学家以及 DeepMind 的实习生。公司团队旨在解决传统搜索引擎广告泛滥、搜索效率低下的痛点。Perplexity 凭借优异的体验获得行业顶尖大佬的背书和注资，包括亚马逊创始人贝索斯、NVIDIA 公司的投资。Perplexity 的估值在 2024 年迅速飙升突破 30 亿美元，被誉为下一代最具革命性的搜索引擎产品。", en: "Perplexity AI was founded in August 2022 by Aravind Srinivas, Denis Yarats, Johnny Ho, and Andy Konwinski. Aravind previously worked at OpenAI, while Denis Yarats was a research scientist at Meta. Designed to combat the ad-heavy and link-stuffed environment of modern search engines, Perplexity gained early investments from Amazon founder Jeff Bezos and NVIDIA. By early 2024, the company was valued at over $3 billion, standing out as the chief pioneer of AI-driven search.", ar: "تأسست شركة Perplexity AI في أغسطس 2022 بواسطة أرافيند سرينيفاس ودينيس ياراتس وجوني هو. كان أرافيند يعمل سابقاً كباحث في OpenAI، ودينيس كان باحثاً في Meta. صمم المحرك لمكافحة بيئة البحث التقليدية المزدحمة بالإعلانات. حظيت الشركة باستثمارات مبكرة من جيف بيزوس ونفيديا، وفي عام 2024 تجاوزت قيمتها التقديرية 3 مليارات دولار." },
    features: [
      {
        icon: "🔍",
        title: { zh: "直达答案", en: "Synthesized Answers", ar: "إجابات ملخصة" },
        desc: { zh: "实时网页检索整理，直接给出完整答案而非链接列表", en: "Reads and summarizes multiple web sources directly to save time", ar: "قراءة وتلخيص مصادر الويب المتعددة مباشرة لتوفير وقت البحث" },
      },
      {
        icon: "🔗",
        title: { zh: "附带来源引用", en: "Inline Citations", ar: "توثيق هوامش المصادر" },
        desc: { zh: "句末标注数字引角标，可一键点击核实参考网页来源", en: "Numbered footnotes pointing to original web sources for easy verification", ar: "هوامش مرقمة تشير إلى الروابط الأصلية لسهولة التحقق من الدقة والصدق" },
      },
      {
        icon: "🧩",
        title: { zh: "Copilot 引导搜索", en: "Guided Search", ar: "بحث Copilot التفاعلي" },
        desc: { zh: "智能引导追问，层层深入精确拆解用户的模糊意图", en: "Interactive Copilot that asks clarifying questions to detail your queries", ar: "مساعد تفاعلي يطرح أسئلة توضيحية لتحديد وتخصيص استعلاماتك بدقة" },
      },
      {
        icon: "📂",
        title: { zh: "分栏整理 (Pages)", en: "Pages Creator", ar: "إنشاء صفحات معرفية" },
        desc: { zh: "支持将搜索整理的结果一键生成精美的独立知识卡片或网页", en: "Generate standalone public articles from your research queries instantly", ar: "توليد مقالات عامة ومنسقة استناداً إلى أسئلة وأبحاث المستخدمين فورياً" },
      },
      {
        icon: "🤖",
        title: { zh: "多模型切换", en: "Model Switching", ar: "تغيير النماذج الذكية" },
        desc: { zh: "付费版支持自由切换 GPT-4o、Claude 3.5 Sonnet 等顶尖模型", en: "Pro users can swap between models like Claude 3.5 Sonnet and GPT-4o", ar: "يتيح لمشتركي Pro التبديل بين نماذج GPT-4o و Claude 3.5 Sonnet وغيرها" },
      },
      {
        icon: "📄",
        title: { zh: "文档分析", en: "File Upload Analysis", ar: "تحليل المستندات المرفوعة" },
        desc: { zh: "支持上传 PDF、文本或代码，结合网络搜索进行复合深度分析", en: "Upload document files and ask questions using real-time search context", ar: "رفع ملفات PDF والمستندات وطرح الأسئلة بمساعدة نتائج الويب الحية" },
      },
    ],
    howToUse: [
      {
        title: { zh: "访问平台", en: "Open Portal", ar: "زيارة الموقع" },
        desc: { zh: "访问 perplexity.ai，国内需要科学上网，支持邮箱注册登录", en: "Go to perplexity.ai. A VPN is required if accessing from China.", ar: "توجه إلى perplexity.ai (يتطلب VPN في الدول المحجوبة) وسجل عبر بريد الإلكتروني" },
      },
      {
        title: { zh: "输入搜索词", en: "Ask Question", ar: "كتابة السؤال" },
        desc: { zh: "在对话框中输入你想要了解的问题，可用中/英等多国语言", en: "Type in your question in natural language and press the search arrow.", ar: "اكتب سؤالك بلغة طبيعية بسيطة (يدعم العديد من اللغات)" },
      },
      {
        title: { zh: "阅读并核实", en: "Verify Sources", ar: "مراجعة المصادر" },
        desc: { zh: "阅读 AI 整合出的答案，注意查看标注的参考引用链接", en: "Check the top grid or click inline footnotes to visit source websites.", ar: "اقرأ الإجابة المولدة وتحقق من صحتها بالرجوع إلى هوامش الروابط المرفقة" },
      },
      {
        title: { zh: "继续追问", en: "Ask Follow-up", ar: "متابعة الاستفسار" },
        desc: { zh: "在底部的追问框继续深化提问，Perplexity 会保留上下文", en: "Use the bottom dialog bar to ask follow-up questions in the same thread.", ar: "اكتب سؤالاً إضافياً في صندوق المتابعة لمواصلة البحث في نفس السياق" },
      },
    ],
    faqs: [
      {
        q: { zh: "Perplexity 可以直接代替谷歌搜索吗？", en: "Do I need a VPN to use Perplexity?", ar: "هل يتطلب استخدام VPN؟" },
        a: { zh: "在进行知识检索、资料调研时可以完全代替，并且效率更高；但对于普通的特定网站导航，谷歌依旧有其优势。", en: "Yes, in mainland China, Perplexity servers are unreachable without a VPN.", ar: "نعم، خوادم Perplexity محجوبة في الصين القارية وتتطلب استخدام VPN للوصول." },
      },
      {
        q: { zh: "Perplexity 免费吗？有哪些限制？", en: "Is Perplexity free to use?", ar: "هل الخدمة مجانية؟" },
        a: { zh: "基础搜索完全免费，不限次数。每日限制 Copilot 引导搜索次数。Pro 会员（$20/月）解锁无限 Copilot 及最强 AI 模型。", en: "Yes, the basic quick search is free. Perplexity Pro (using advanced models) is $20/month.", ar: "نعم، البحث السريع الأساسي مجاني تماماً. اشتراك Pro يوفر النماذج المتقدمة مقابل 20 دولاراً شهرياً." },
      },
    ],
  },
  {
    slug: "discord",
    category: "social",
    logo: "💬",
    color: "#5865f2",
    officialUrl: "https://discord.com",
    founded: "2015-05-13",
    founder: "Jason Citron, Stan Vishnevskiy",
    headquarter: "San Francisco, CA, USA",
    name: { zh: "Discord", en: "Discord", ar: "Discord" },
    tagline: { zh: "最受欢迎的社区群组与语音社交工具", en: "The Leading Communication Platform for Communities", ar: "منصة التواصل المفضلة للمجتمعات والمجموعات المختلفة" },
    description: { zh: "专为玩家、技术社群和 AI 创作者设计的通讯工具，支持语音、文字、视频聊天，以强大的机器人和频道管理著称。", en: "An instant messaging and voice chat platform designed for gamers, developer clubs, and AI creators, featuring rich bot ecosystems.", ar: "تطبيق للمحادثات الفورية والصوتية صمم لمجتمعات المطورين واللاعبين ومنشئي الذكاء الاصطناعي، ويتميز بروبوتاته التفاعلية." },
    longDescription: { zh: "Discord 是一款风靡全球的社区通讯与协作软件。最初专为游戏玩家设计，提供超低延迟的在线语音通话。如今它已演变为包含区块链项目、开源技术、AI 创作（如 Midjourney）等各领域社群的综合阵地。用户可以在服务器中创建不同的子频道，使用极其丰富的机器人（Bot）实现各种自动管理与互动。", en: "Discord is a free communications service where users chat via voice, video, and text. Originally created for gamers to coordinate during multiplayer gaming, it has evolved into a general-purpose community hub for developers, crypto projects, and AI groups.", ar: "ديسكورد (Discord) هو خدمة اتصال فوري وصوتي مجانية تتيح للمستخدمين الدردشة الصوتية والمرئية والنصية. تأسس خصيصاً للاعبين لتنسيق اللعب، ولكنه تطور ليصبح منصة مجتمعية عامة تضم المطورين ومشاريع العملات المشفرة ومجموعات الذكاء الاصطناعي." },
    history: { zh: "Discord 由杰森·希特伦和斯坦·维什涅夫斯基共同创立，于 2015 年 5 月正式上线。他们此前开发的游戏社交软件不温不火，转而研发超低延迟的在线语音系统。随着《堡垒之夜》等多人竞技游戏的走红，Discord 凭借出色的语音通话质量快速席卷游戏界。从 2020 年起，Discord 彻底去掉了“专为玩家设计”的标签，拥抱更广泛的社区，包括以 Midjourney 为首的 AI 浪潮，奠定了其作为全球最重要极客社群的大本营地位。", en: "Discord was launched in May 2015 by Jason Citron and Stan Vishnevskiy. Having struggled to popularize their mobile multiplayer games, they pivoted to build a gaming-centric voice-over-IP tool with extremely low latency. The service exploded with the release of games like Fortnite. In 2020, Discord shifted its slogan from 'Chat for Gamers' to 'Chat for Communities', embracing schools, art circles, and tech startups. Today, it hosts major AI communities like Midjourney.", ar: "تم إطلاق ديسكورد في مايو 2015 بواسطة جيسون سيترون وستان فيشنيفسكي. بعد فشل محاولاتهما لتطوير ألعاب للهواتف المحمولة، ركزا على نظام VoIP منخفض التأخير للألعاب. ومع انتشار ألعاب مثل Fortnite حقق الموقع نمواً هائلاً. في عام 2020، تغير شعارهم ليرحب بكافة المجتمعات، بما في ذلك مجتمعات الذكاء الاصطناعي مثل Midjourney." },
    features: [
      {
        icon: "📡",
        title: { zh: "高音质语音", en: "Low-latency Voice Chat", ar: "صوت منخفض التأخير" },
        desc: { zh: "超低延迟的语音通话，支持降噪与语音活动检测", en: "Crisp voice channels with automatic background noise reduction", ar: "قنوات دردشة صوتية بجودة عالية وتقنيات متقدمة لإلغاء الضوضاء" },
      },
      {
        icon: "📁",
        title: { zh: "服务器频道", en: "Server Channels Grid", ar: "تصنيف قنوات الخادم" },
        desc: { zh: "自由划分不同文字及语音子频道，有序管理社群讨论", en: "Group text and voice rooms into organized categories for discussions", ar: "تنظيم المجتمعات في قنوات نصية وصوتية مخصصة لترتيب المناقشات" },
      },
      {
        icon: "🤖",
        title: { zh: "丰富的机器人", en: "Community Bots", ar: "روبوتات خادم ذكية Bots" },
        desc: { zh: "支持导入各种 AI、游戏、音乐和管理辅助机器人", en: "Add moderation, game companion, or music player bots to your servers", ar: "دمج روبوتات قوية للموسيقى أو الرقابة التلقائية أو الألعاب أو الذكاء الاصطناعي" },
      },
      {
        icon: "🎥",
        title: { zh: "屏幕共享与直播", en: "Go Live Streams", ar: "البث المباشر والمشاركة" },
        desc: { zh: "支持高清屏幕分享及视频连麦，适合游戏直播或团队开会", en: "Share screens or stream gaming sessions to friends in high quality", ar: "بث الألعاب أو تقديم العروض التوضيحية للمجموعات بدقة عالية" },
      },
      {
        icon: "🎮",
        title: { zh: "游戏状态集成", en: "Rich Presence Status", ar: "ربط حالة النشاط" },
        desc: { zh: "实时在个人头像旁展示你当前正在游玩的游戏或听的歌", en: "Let friends see what game you are playing or what Spotify song you listen to", ar: "عرض اللعبة التي تلعبها حالياً أو أغنية Spotify لجهات اتصالك تلقائياً" },
      },
      {
        icon: "💎",
        title: { zh: "Nitro 会员", en: "Discord Nitro Features", ar: "ميزات Nitro الخاصة" },
        desc: { zh: "订阅 Nitro 获取更大文件上传限制、超清画质及全服动态表情", en: "Subscribers get custom emojis, larger file uploads, and profile badges", ar: "فتح ميزات رفع ملفات أكبر، تعبيرات مخصصة، وبث بدقة عالية عبر Nitro" },
      },
    ],
    howToUse: [
      {
        title: { zh: "注册与登录", en: "Create Profile", ar: "إنشاء حساب" },
        desc: { zh: "通过浏览器或客户端注册账号，国内需要科学上网", en: "Download the client or open discord.com and sign up with email (VPN needed).", ar: "سجل حساباً في موقع Discord أو التطبيق (يتطلب VPN في الدول المحجوبة)" },
      },
      {
        title: { zh: "创建或加入服务器", en: "Create/Join Servers", ar: "دخول الخوادم" },
        desc: { zh: "点击左侧“+”号创建专属服务器，或通过好友邀请链接加入", en: "Create a new server for free or use invite links to join existing ones.", ar: "انقر على رمز '+' لبناء خادمك الخاص أو أدخل رابط دعوة للانضمام" },
      },
      {
        title: { zh: "使用语音频道", en: "Join Voice Room", ar: "المحادثة الصوتية" },
        desc: { zh: "点击左侧任意带有扬声器图标的频道，即可直接进入麦克风通话", en: "Click any voice channel with a speaker icon to instantly enter the chat.", ar: "انقر على أي قناة تحمل أيقونة سماعة للاتصال والتحدث بصوتك فوراً" },
      },
      {
        title: { zh: "配置社区机器人", en: "Add Helpers", ar: "دعوة الروبوتات" },
        desc: { zh: "在服务器设置中导入音乐或管理机器人，提升服务器活跃度", en: "Go to bot libraries, select your bot, log in, and invite it to your server.", ar: "زر مواقع قوائم الروبوتات وانقر على 'دعوة' لربط الروبوت بخادمك" },
      },
    ],
    faqs: [
      {
        q: { zh: "Discord在国内必须翻墙吗？", en: "Why won't Discord connect?", ar: "لماذا لا يعمل ديسكورد؟" },
        a: { zh: "必须。Discord 官网及聊天服务在中国大陆被完全封锁，需要使用科学上网加速器。", en: "Discord servers are blocked by the Chinese firewall. A VPN is mandatory to connect.", ar: "خوادم ديسكورد محجوبة في الصين وبعض الدول الأخرى لأسباب رقابية، ويجب استخدام VPN للاتصال." },
      },
      {
        q: { zh: "创建 Discord 服务器要钱吗？", en: "Is hosting a server free?", ar: "هل إنشاء الخوادم مجاني؟" },
        a: { zh: "完全免费。创建服务器、划分频道、导入机器人都是免费的，只有 Nitro 会员及服务器增压（Boost）需要付费。", en: "Yes, you can create servers, add custom channels, and invite bots for free.", ar: "نعم، إنشاء خادم مخصص وتهيئة القنوات ودعوة الروبوتات مجاني تماماً بالكامل." },
      },
    ],
  },
  {
    slug: "netflix",
    category: "video",
    logo: "🍿",
    color: "#e50914",
    officialUrl: "https://www.netflix.com",
    founded: "1997-08-29",
    founder: "Reed Hastings, Marc Randolph",
    headquarter: "Los Gatos, CA, USA",
    name: { zh: "Netflix", en: "Netflix", ar: "Netflix" },
    tagline: { zh: "全球流媒体影视巨头", en: "The Undisputed King of Global Video Streaming", ar: "المنصة الرائدة عالمياً في بث الأفلام والمسلسلات الترفيهية" },
    description: { zh: "全球最受欢迎的订阅制正版电影与电视剧播放网站，拥有大量高品质自制原创影视内容。", en: "The premier subscription video-on-demand service hosting thousands of movies, TV dramas, anime, and award-winning originals.", ar: "الخدمة الأولى عالمياً لبث الفيديو والمحتوى الترفيهي حسب الطلب، وتضم آلاف الأفلام والمسلسلات والأعمال الأصلية." },
    longDescription: { zh: "Netflix (网飞) 是全球最大的订阅制流媒体影视平台。最初以邮寄 DVD 租借业务起家，2007 年正式推出在线流媒体视频服务。目前在全球拥有超过 2.6 亿订阅会员。Netflix 依靠《纸牌屋》、《怪奇物语》、《鱿鱼游戏》等海量自制高质量原创剧集，彻底改变了全球观众看剧的习惯。", en: "Netflix is the world's leading streaming entertainment service, starting in 1997 as a DVD mail rental firm and launching online streaming in 2007. Operating in over 190 countries, Netflix produces iconic original content like Stranger Things, House of Cards, and Squid Game.", ar: "نتفلكس (Netflix) هي منصة الترفيه الرائدة عالمياً في بث المحتوى الرقمي. تأسست في عام 1997 كشركة لتأجير أقراص DVD عبر البريد، وأطلقت خدمة البث عبر الإنترنت في عام 2007. تعمل اليوم في أكثر من 190 دولة وتنتج أعمالاً أصلية شهيرة مثل Stranger Things و Squid Game." },
    history: { zh: "Netflix 由里德·哈斯廷斯和马克·兰多夫于 1997 年创立。起初是一家在线 DVD 租借邮寄公司，凭借“无逾期费”的订阅制模式击败了当时的巨头 Blockbuster。2007 年，网飞推出了在线流媒体播放服务，敏锐地捕捉到了宽带普及的浪潮。2013 年，网飞首部高成本自制政治剧《纸牌屋》一炮而红，拉开了全球流媒体大战的序幕。目前网飞已是流媒体领域无可争议的龙头老大。", en: "Netflix was founded by Reed Hastings and Marc Randolph on August 29, 1997, as an online DVD rental service that disrupted traditional video stores like Blockbuster with its no-late-fees subscription model. Netflix launched its streaming service in 2007 and produced its first original series, House of Cards, in 2013. Today, Netflix operates in over 190 countries with more than 300 million subscribers and invests over $17 billion annually in content. It is the undisputed leader of the global streaming wars.", ar: "تأسست شركة Netflix في 29 أغسطس 1997 بواسطة ريد هاستينغز ومارك راندولف كخدمة لتأجير أقراص DVD عبر الإنترنت. هزمت الشركة منافستها Blockbuster بنظام الاشتراكات المرن. أطلقت نتفلكس خدمة البث عبر الإنترنت في عام 2007، وأنتجت أول مسلسل أصلي لها House of Cards في عام 2013، وهي اليوم رائدة سوق البث في العالم." },
    features: [
      {
        icon: "🎬",
        title: { zh: "海量正版资源", en: "Massive Streaming Library", ar: "مكتبة بث ضخمة" },
        desc: { zh: "数万部高清/4K电影、电视剧、纪录片及动漫资源", en: "Stream thousands of movies, series, documentaries and anime in Ultra HD", ar: "بث آلاف الأفلام والمسلسلات والوثائقيات والأنمي بدقة Ultra HD عالية الجودة" },
      },
      {
        icon: "🌟",
        title: { zh: "自制原创剧集", en: "Netflix Originals", ar: "أعمال نتفلكس الأصلية" },
        desc: { zh: "投资百亿美元打造独家优质原创内容", en: "Exclusive, award-winning original dramas and movies available only here", ar: "مسلسلات وأفلام أصلية وحصرية حائزة على جوائز ولا تتوفر في أي مكان آخر" },
      },
      {
        icon: "🤖",
        title: { zh: "智能算法推荐", en: "Algorithmic Suggestion", ar: "توصيات ذكية خوارزمية" },
        desc: { zh: "精准分析用户口味，推荐符合偏好的影视作品", en: "Advanced neural recommendations tailored to your exact viewing histories", ar: "توصيات متطورة مقترحة لتناسب ذوقك واهتماماتك استناداً لتاريخ مشاهداتك" },
      },
      {
        icon: "📱",
        title: { zh: "多设备支持", en: "Cross-platform Streaming", ar: "البث عبر الأجهزة المختلفة" },
        desc: { zh: "支持手机、电视、平板及电脑网页端无缝续播", en: "Install on smart TVs, mobiles, tablets, and play on multiple screens", ar: "التثبيت على التلفزيون الذكي والهاتف الذكي والأجهزة اللوحية والمشاهدة على شاشات متعددة" },
      },
      {
        icon: "📥",
        title: { zh: "离线缓存下载", en: "Offline Storage Downloads", ar: "التنزيل للمشاهدة بدون إنترنت" },
        desc: { zh: "支持将喜欢的影视内容下载至本地，在无网时观看", en: "Save films and episodes to your phone device storage for plane rides", ar: "تنزيل الأفلام والحلقات التلفزيونية في ذاكرة جهازك لمشاهدتها في أي مكان" },
      },
      {
        icon: "👦",
        title: { zh: "儿童专属面板", en: "Kids Profiles", ar: "ملفات الأطفال الخاصة" },
        desc: { zh: "提供独立的儿童账户，配合家长度控制提供安全的观看环境", en: "Safe, moderated environment for children with explicit parental filters", ar: "بيئة ترفيهية آمنة ومخصصة للأطفال مع فلاتر تحكم أبوية صارمة" },
      },
    ],
    howToUse: [
      {
        title: { zh: "访问平台", en: "Connect via VPN", ar: "الاتصال عبر VPN" },
        desc: { zh: "通过浏览器或客户端访问，国内需要科学上网且选择支持解锁的节点", en: "Netflix is unavailable in mainland China. Connect to a VPN server in another country to access it.", ar: "نتفلكس غير متاحة في الصين القارية. يجب عليك استخدام VPN يدعم فك حجب البث للوصول إليها." },
      },
      {
        title: { zh: "订阅付费计划", en: "Choose a Subscription", ar: "اشتراك الحساب" },
        desc: { zh: "选择适合自己的订阅方案（如标准或高级套餐），绑定双币信用卡付费", en: "Select Standard ($15.49/month) or Premium ($22.99/month) for 4K and multiple simultaneous streams.", ar: "سجل حساباً واختر الباقة المناسبة (القياسية، أو المميزة لدعم دقة 4K والبث المتزامن)" },
      },
      {
        title: { zh: "切换VPN地区", en: "Pick Your Region", ar: "تحديد المنطقة" },
        desc: { zh: "不同地区的 Netflix 拥有不同的版权资源库，可切换 VPN 国家查看不同内容", en: "Different countries have different content libraries — connect your VPN to different regions to access more content.", ar: "تمتلك الدول المختلفة مكتبات محتوى متنوعة؛ اتصل بخادم VPN في دول أخرى لرؤية محتوى أكثر" },
      },
      {
        title: { zh: "开始播放", en: "Start Watching", ar: "بدء المشاهدة" },
        desc: { zh: "创建个人用户 Profile，直接点击开始流畅观看影视", en: "Search for titles or browse Netflix's recommendations. Create a watchlist to save shows for later.", ar: "ابحث عن الأفلام أو تصفح توصيات نتفلكس، وأضف العروض لقائمتك المفضلة" },
      },
    ],
    faqs: [
      {
        q: { zh: "国内怎么看网飞？是否需要科学上网？", en: "Is Netflix available in China?", ar: "هل نتفلكس متاحة في الصين؟" },
        a: { zh: "Netflix 未在中国大陆提供服务，因此必须使用科学上网。且由于网飞对 VPN 的屏蔽极严，必须使用支持网飞解锁的高速原生节点。", en: "Netflix has no official service in mainland China. A VPN is required to connect to another country's Netflix library.", ar: "نتفلكس لا توفر خدماتها في الصين القارية. تحتاج لـ VPN يحتوي على خوادم فك حجب البث للوصول." },
      },
      {
        q: { zh: "Netflix 一个账号可以多人共享吗？", en: "Can Netflix detect VPN usage?", ar: "هل يتم حظر حسابي عند استخدام VPN؟" },
        a: { zh: "高级套餐支持 4 台设备同时播放。不过网飞近年来在严格限制非同住人账号共享行为，推荐开通子账户或购买单人位。", en: "Netflix actively detects and blocks many VPN IP addresses. Use a streaming-optimized VPN service for the most reliable experience.", ar: "قد تقوم نتفلكس باكتشاف وحجب بعض عناوين IP الخاصة بـ VPN. يفضل استخدام VPN مخصص لتشغيل البث المستقر." },
      },
    ],
  },
  {
    slug: "spotify",
    category: "video",
    logo: "🎵",
    color: "#1db954",
    officialUrl: "https://www.spotify.com",
    founded: "2006-04-23",
    founder: "Daniel Ek, Martin Lorentzon",
    headquarter: "Stockholm, Sweden",
    name: { zh: "Spotify", en: "Spotify", ar: "Spotify" },
    tagline: { zh: "全球最大的正版音乐流媒体平台", en: "The World's Largest Music Streaming Platform", ar: "أكبر منصة عالمية للبث الموسيقي المرخص" },
    description: { zh: "总部位于瑞典斯德哥尔摩的音乐流媒体巨头，收录超过 1 亿首正版曲目和数百万播客，支持个性化推荐与跨设备无缝切换。", en: "The Stockholm-based music streaming giant featuring over 100 million licensed tracks and millions of podcasts, with personalized recommendations and seamless cross-device playback.", ar: "عملاق البث الموسيقي ومقره ستوكهولم، يضم أكثر من 100 مليون مقطع موسيقي مرخص وملايين البودكاست، مع توصيات مخصصة وتشغيل سلس عبر الأجهزة." },
    longDescription: { zh: "Spotify（声破天）是全球最大的正版音乐流媒体平台，由丹尼尔·埃克和马丁·洛伦佐松于 2006 年在瑞典创立，2008 年正式上线。截至 2025 年，Spotify 拥有超过 6 亿月活跃用户和 2.3 亿付费订阅用户，覆盖 180 多个国家。其曲库包含超 1 亿首正版音乐和 600 万档播客节目。Spotify 以其精准的算法推荐（如 Discover Weekly 每周发现、Release Radar 新歌雷达）和 Wrapped 年度总结闻名，深刻改变了人们消费音乐的方式。", en: "Spotify is the world's largest music streaming platform, founded in Sweden in 2006 by Daniel Ek and Martin Lorentzon, and publicly launched in 2008. As of 2025, it has over 600 million monthly active users and 230 million paying subscribers across 180+ countries. Its library holds over 100 million licensed songs and 6 million podcast titles. Spotify is famous for its precise algorithmic recommendations — such as Discover Weekly and Release Radar — and its year-end Wrapped feature, which has fundamentally reshaped how people consume music.", ar: "Spotify هي أكبر منصة بث موسيقي في العالم، تأسست في السويد عام 2006 على يد دانيال إك ومارتن لورينتزون، وأُطلقت رسمياً في 2008. بحلول عام 2025، أصبح لديها أكثر من 600 مليون مستخدم نشط شهرياً و230 مليون مشترك مدفوع في أكثر من 180 دولة. تحتوي مكتبتها على أكثر من 100 مليون أغنية مرخصة و6 ملايين قناة بودكاست. تشتهر Spotify بتوصياتها الخوارزمية الدقيقة مثل Discover Weekly وRelease Radar، وميزة Wrapped السنوية التي غيرت طريقة استهلاك الموسيقى." },
    history: { zh: "2006 年，瑞典创业者丹尼尔·埃克和马丁·洛伦佐松因不满当时猖獗的音乐盗版（Napster 时代），决心打造一个既能让用户合法免费听音乐、又能让唱片公司获得收益的平台。经过与三大唱片公司艰难的版权谈判，Spotify 于 2008 年 10 月在欧洲正式上线，采取免费+广告与付费订阅（Premium）双模式。2011 年进军美国市场，2013 年推出移动免费版彻底击败了 Pandora。2018 年 Spotify 通过直接上市登陆纽交所，估值近 300 亿美元。此后公司大举投入播客领域，收购了 Anchor、Gimlet、Joe Rogan 独家节目等，将业务从音乐延伸到全音频生态。", en: "In 2006, Swedish entrepreneurs Daniel Ek and Martin Lorentzon, frustrated by rampant music piracy in the Napster era, set out to build a platform that would let users legally stream music for free while ensuring record labels got paid. After grueling licensing negotiations with the three major labels, Spotify launched in Europe in October 2008 with a dual free-with-ads and paid Premium model. It entered the US in 2011, and in 2013 released a free mobile tier that decisively defeated Pandora. Spotify went public on the NYSE via direct listing in 2018 at a valuation near $30 billion. Since then it has aggressively invested in podcasting, acquiring Anchor, Gimlet, and exclusive shows like Joe Rogan, expanding from music into a full audio ecosystem.", ar: "في عام 2006، شعر رائدا الأعمال السويديان دانيال إك ومارتن لورينتزون بالإحباط من انتشار قرصنة الموسيقى في عصر Napster، وقررا بناء منصة تتيح للمستخدمين الاستماع للموسيقى بشكل قانوني ومجاني، مع ضمان دفع حقوق شركات التسجيل. بعد مفاوضات ترخيص شاقة مع شركات التسجيل الكبرى الثلاث، انطلقت Spotify في أوروبا في أكتوبر 2008 بنموذج مزدوج: مجاني مع إعلانات ومدفوع (Premium). دخلت السوق الأمريكي عام 2011، وأطلقت في 2013 إصدار الجوال المجاني الذي هزم Pandora بشكل حاسم. طُرحت أسهم Spotify في بورصة نيويورك عبر الإدراج المباشر عام 2018 بتقييم يقارب 30 مليار دولار. ومنذ ذلك الحين، استثمرت الشركة بقوة في البودكاست، فاستحوذت على Anchor وGimlet وحصلت على البرامج الحصرية مثل Joe Rogan، لتتوسع من الموسيقى إلى منظومة صوتية شاملة." },
    features: [
      {
        icon: "🎼",
        title: { zh: "海量曲库", en: "Massive Music Library", ar: "مكتبة موسيقية ضخمة" },
        desc: { zh: "收录超过 1 亿首正版音乐，覆盖全球所有主流艺人及独立音乐人", en: "Over 100 million licensed tracks spanning every major artist and countless indie musicians worldwide", ar: "أكثر من 100 مليون مقطع موسيقي مرخص يغطي جميع الفنانين الرئيسيين والفنانين المستقلين حول العالم" },
      },
      {
        icon: "🧠",
        title: { zh: "智能推荐", en: "Smart Recommendations", ar: "توصيات ذكية" },
        desc: { zh: "Discover Weekly 每周为你精选 30 首新歌，Release Radar 追踪你喜欢艺人的新作", en: "Discover Weekly delivers 30 personalized new tracks every Monday; Release Radar tracks new releases from artists you follow", ar: "قائمة Discover Weekly تقدم لك 30 أغنية جديدة مخصصة كل أسبوع، وRelease Radar يتابع إصدارات فنانيك المفضلين" },
      },
      {
        icon: "🎙️",
        title: { zh: "播客生态", en: "Podcast Ecosystem", ar: "منظومة البودكاست" },
        desc: { zh: "超过 600 万档播客节目，含 Joe Rogan 等独家内容，支持视频播客", en: "6+ million podcast shows including exclusives like The Joe Rogan Experience, with video podcast support", ar: "أكثر من 6 ملايين برنامج بودكاست بما فيها الحصريات مثل Joe Rogan، مع دعم للبودكاست المرئي" },
      },
      {
        icon: "📱",
        title: { zh: "Spotify Connect", en: "Spotify Connect", ar: "Spotify Connect" },
        desc: { zh: "在手机、电脑、音响、汽车、智能音箱间无缝切换播放，音乐不间断", en: "Seamlessly hand off playback between your phone, computer, speaker, car, and smart devices without interruption", ar: "التنقل السلس للتشغيل بين هاتفك وحاسوبك ومكبر الصوت والسيارة والأجهزة الذكية دون انقطاع" },
      },
      {
        icon: "🎁",
        title: { zh: "Wrapped 年度总结", en: "Spotify Wrapped", ar: "ملخص Wrapped السنوي" },
        desc: { zh: "每年 12 月推出的现象级功能，用可视化数据展现你一年的音乐品味", en: "The viral December feature that visualizes your listening habits and top tracks of the year", ar: "الميزة الفيروسية التي تُطلق كل ديسمبر لتصور عاداتك في الاستماع وأفضل مقاطعك خلال العام" },
      },
      {
        icon: "⬇️",
        title: { zh: "离线下载", en: "Offline Downloads", ar: "التنزيل للاستماع بدون إنترنت" },
        desc: { zh: "Premium 用户可将歌曲、专辑或播放列表下载到设备，无网络也能收听", en: "Premium subscribers can download songs, albums, or entire playlists for listening without an internet connection", ar: "يستطيع مشتركو Premium تنزيل الأغاني والألبومات وقوائم التشغيل كاملة للاستماع دون اتصال بالإنترنت" },
      },
    ],
    howToUse: [
      {
        title: { zh: "注册账号", en: "Sign Up", ar: "إنشاء حساب" },
        desc: { zh: "访问 spotify.com，使用邮箱、Facebook 或 Apple 账号注册。国内用户建议使用科学上网确保稳定访问客户端", en: "Visit spotify.com and sign up with email, Facebook, or Apple ID. A VPN is recommended in mainland China for stable client access", ar: "زُر spotify.com وسجل عبر البريد الإلكتروني أو حساب Facebook أو Apple ID. يُنصح باستخدام VPN في الصين لضمان اتصال مستقر بالتطبيق" },
      },
      {
        title: { zh: "选择订阅方案", en: "Choose Your Plan", ar: "اختيار الباقة" },
        desc: { zh: "免费版含广告并有随机播放限制，Premium 个人版 $10.99/月，家庭版 $16.99/月最多 6 人，学生版 $5.99/月", en: "Free tier includes ads and shuffle-only mobile playback; Premium Individual is $10.99/mo, Family (up to 6 members) is $16.99/mo, Student is $5.99/mo", ar: "الإصدار المجاني يحتوي على إعلانات وتشغيل عشوائي فقط للجوال؛ Premium الفردي بـ 10.99$ شهرياً، والعائلي (حتى 6 أعضاء) بـ 16.99$ شهرياً، والطلابي بـ 5.99$ شهرياً" },
      },
      {
        title: { zh: "构建你的音乐库", en: "Build Your Library", ar: "بناء مكتبتك الموسيقية" },
        desc: { zh: "搜索并保存喜欢的艺人、专辑与歌曲，创建播放列表，让算法学习你的口味", en: "Search and save your favorite artists, albums, and tracks. Create playlists to let the algorithm learn your taste", ar: "ابحث واحفظ فنانيك وألبوماتك وأغانيك المفضلة. أنشئ قوائم تشغيل ليتعلم الخوارزم ذوقك" },
      },
      {
        title: { zh: "探索个性化推荐", en: "Explore Recommendations", ar: "استكشاف التوصيات المخصصة" },
        desc: { zh: "在“为你推荐”板块查看 Discover Weekly、Daily Mix、Release Radar 等由 AI 定制的每日播放列表", en: "Check the 'Made For You' section for AI-curated daily mixes including Discover Weekly, Daily Mix, and Release Radar", ar: "تصفح قسم 'مخصص لك' للاطلاع على قوائم التشغيل اليومية المخصصة مثل Discover Weekly وDaily Mix وRelease Radar" },
      },
    ],
    faqs: [
      {
        q: { zh: "Spotify 在国内能用吗？", en: "Can I use Spotify in China?", ar: "هل يمكن استخدام Spotify في الصين؟" },
        a: { zh: "Spotify 未在中国大陆正式开通服务，网页版有时可加载，但客户端和支付功能受限。建议使用瞬云等科学上网工具连接海外节点，并使用境外区 App Store 下载客户端。", en: "Spotify is not officially available in mainland China. The web player sometimes loads, but the mobile app and payment system are restricted. Use a VPN like ShunYun to connect to an overseas server and download the client from a non-Chinese App Store region.", ar: "Spotify غير متوفر رسمياً في الصين القارية. مشغل الويب يعمل أحياناً، لكن التطبيق ونظام الدفع مقيدان. استخدم VPN مثل ShunYun للاتصال بخادم خارجي، ونزّل التطبيق من متجر App Store لمنطقة غير صينية." },
      },
      {
        q: { zh: "免费版和 Premium 有什么区别？", en: "What's the difference between Free and Premium?", ar: "ما الفرق بين الإصدار المجاني وPremium؟" },
        a: { zh: "免费版有音频广告、手机端只能随机播放歌单、无法离线下载，且音质较低。Premium 无广告、可任意点播、支持离线下载和最高 320kbps 音质，还包含 Spotify Connect 等所有高级功能。", en: "The Free tier includes audio ads, mobile shuffle-only playback, no offline downloads, and lower audio quality. Premium removes ads, unlocks on-demand playback, offline downloads, up to 320kbps audio, and all advanced features like Spotify Connect.", ar: "الإصدار المجاني يحتوي على إعلانات صوتية وتشغيل عشوائي فقط على الجوال ولا يدعم التنزيل، مع جودة صوت أقل. أما Premium فبدون إعلانات، ويدعم التشغيل حسب الطلب والتنزيل وجودة تصل إلى 320 كيلوبت/ثانية، ومزايا متقدمة كـ Spotify Connect." },
      },
      {
        q: { zh: "Spotify 有中文歌吗？", en: "Does Spotify have Chinese music?", ar: "هل تحتوي Spotify على أغاني صينية؟" },
        a: { zh: "有的。Spotify 收录了大量华语歌手作品，包括周杰伦、林俊杰、五月天、邓紫棋等主流艺人。但受版权和区域限制影响，部分歌曲在某些区域可能不可用。", en: "Yes. Spotify has a large catalog of Chinese-language music from major artists like Jay Chou, JJ Lin, Mayday, and G.E.M. However, some tracks may be region-locked due to licensing agreements.", ar: "نعم. تضم Spotify مجموعة كبيرة من الموسيقى باللغة الصينية لفنانين بارزين مثل Jay Chou وJJ Lin وMayday وG.E.M. لكن بعض المقاطع قد تكون مقيدة إقليمياً بسبب اتفاقيات الترخيص." },
      },
    ],
  },
];

export const CATEGORIES: CategoryInfo[] = [
  { id: "all", label: { zh: "全部", en: "All", ar: "الكل" }, icon: "🌐" },
  { id: "ai", label: { zh: "AI 工具", en: "AI Tools", ar: "أدوات الذكاء الاصطناعي" }, icon: "🤖" },
  { id: "social", label: { zh: "社交媒体", en: "Social Media", ar: "وسائل التواصل" }, icon: "💬" },
  { id: "dev", label: { zh: "开发工具", en: "Dev Tools", ar: "أدوات التطوير" }, icon: "💻" },
  { id: "video", label: { zh: "视频平台", en: "Video Platforms", ar: "منصات الفيديو" }, icon: "🎬" },
  { id: "office", label: { zh: "办公协作", en: "Office & Collab", ar: "العمل والتعاون" }, icon: "📋" },
  { id: "ecommerce", label: { zh: "电商金融", en: "E-Commerce", ar: "التجارة الإلكترونية" }, icon: "🛍️" },
  { id: "learning", label: { zh: "学习资源", en: "Learning", ar: "مصادر التعلم" }, icon: "📚" },
];
