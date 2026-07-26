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
    slug: "claude-4-opus-release-2026",
    tag: "ai",
    date: "2026-07-15",
    coverEmoji: "🧠",
    source: "Anthropic Blog",
    sourceUrl: "https://anthropic.com/news",
    title: {
      zh: "Anthropic 发布 Claude 4：编程与推理能力大幅跃升",
      en: "Anthropic Launches Claude 4: Major Leap in Coding and Reasoning",
      ar: "Anthropic تطلق Claude 4: قفزة كبيرة في البرمجة والاستدلال",
    },
    summary: {
      zh: "Anthropic 正式发布 Claude 4 系列，包括 Opus 4 和 Sonnet 4，在代码生成、长上下文理解和安全性方面全面超越上代，成为开发者首选 AI 工具。",
      en: "Anthropic officially released the Claude 4 family including Opus 4 and Sonnet 4, surpassing the previous generation in code generation, long-context understanding, and safety.",
      ar: "أطلقت Anthropic رسمياً عائلة Claude 4 بما فيها Opus 4 وSonnet 4، متفوقةً على الجيل السابق في توليد الأكواد وفهم السياق الطويل والأمان.",
    },
    content: {
      zh: `## Claude 4 正式发布

Anthropic 于 2026 年 7 月发布 Claude 4 系列，这是迄今为止最强大的 Claude 版本。

### 核心升级

**Claude Opus 4**
- 代码能力大幅提升：在 SWE-bench 编程基准上得分超过 72%，远超前代
- 200K token 上下文窗口，可处理整个代码库或超长合同文件
- 支持更复杂的多步骤 Agent 任务，能自主完成从需求到部署的全流程

**Claude Sonnet 4**
- 日常任务的最佳性价比选择
- 速度比 Opus 4 快 3-5 倍，适合高并发 API 调用
- 写作、分析、翻译能力全面提升

### 出海场景应用

对于出海工作者，Claude 4 特别适合：
- **合同翻译**：准确理解法律条款的细微差别
- **多语言内容创作**：中英阿三语内容同步生成
- **代码开发**：从需求描述自动生成完整功能模块
- **客服自动化**：理解复杂用户意图并给出精准回复

### 访问方式

- 网页版：claude.ai（需科学上网）
- API：通过 Anthropic API 接入
- Claude Code：命令行工具，适合开发者`,
      en: `## Claude 4 Official Launch

Anthropic released the Claude 4 series in July 2026, its most capable model family to date.

### Core Upgrades

**Claude Opus 4**
- Dramatically improved coding: scored over 72% on SWE-bench, far surpassing previous generations
- 200K token context window for processing entire codebases or long contracts
- Supports complex multi-step Agent tasks, autonomously handling end-to-end workflows

**Claude Sonnet 4**
- Best price-to-performance for everyday tasks
- 3-5x faster than Opus 4, ideal for high-concurrency API calls
- Comprehensive improvements in writing, analysis, and translation

### Access

- Web: claude.ai (VPN required outside supported regions)
- API: via Anthropic API
- Claude Code: CLI tool for developers`,
      ar: `## الإطلاق الرسمي لـ Claude 4

أصدرت Anthropic عائلة Claude 4 في يوليو 2026، وهي الأكثر قدرة حتى الآن.

### الترقيات الجوهرية

**Claude Opus 4**
- تحسين جذري في البرمجة: تجاوز 72% في معيار SWE-bench
- نافذة سياق 200K رمز لمعالجة قواعد الأكواد الكاملة أو العقود الطويلة
- دعم مهام متعددة الخطوات بشكل مستقل

**Claude Sonnet 4**
- أفضل أداء مقابل تكلفة للمهام اليومية
- أسرع 3-5 مرات من Opus 4، مثالي لاستدعاءات API عالية التزامن

### طريقة الوصول

- الويب: claude.ai (يتطلب VPN خارج المناطق المدعومة)
- API: عبر Anthropic API`,
    },
  },
  {
    slug: "shopify-cross-border-guide-2026",
    tag: "ecommerce",
    date: "2026-07-08",
    coverEmoji: "🛍️",
    title: {
      zh: "2026年 Shopify 跨境开店完整攻略：从注册到首单",
      en: "2026 Complete Guide to Shopify Cross-Border Store: From Registration to First Sale",
      ar: "دليل شامل 2026 لفتح متجر Shopify عبر الحدود: من التسجيل إلى أول بيع",
    },
    summary: {
      zh: "详解国内卖家开设 Shopify 独立站的完整流程，涵盖注册、支付接入（PayPal/Stripe）、物流方案、SEO 引流和常见避坑指南。",
      en: "A complete walkthrough for Chinese sellers setting up a Shopify independent store, covering registration, payment integration, logistics, SEO, and common pitfalls.",
      ar: "دليل شامل للبائعين الصينيين لإنشاء متجر Shopify مستقل، يشمل التسجيل ودمج المدفوعات والشحن والـ SEO والأخطاء الشائعة.",
    },
    content: {
      zh: `## Shopify 跨境独立站2026完整指南

独立站是跨境电商的重要赛道，Shopify 是全球最主流的建站平台。本文提供最新的开店完整攻略。

### 第一步：注册 Shopify

1. 访问 shopify.com（需科学上网）
2. 填写邮箱，选择「Start free trial」，免费试用14天
3. 填写店铺名称和基本信息
4. 选择套餐：Basic（$39/月）适合新手起步

### 第二步：绑定支付方式

**推荐方案（国内卖家）：**
- **PayPal Business**：开通企业账户，收款最稳定
- **Stripe**：需要香港/美国公司主体，费率低（2.9% + $0.30）
- **PingPong / 连连国际**：专为跨境电商设计的收款工具

### 第三步：选品与上架

- 使用 Google Trends、Jungle Scout 验证需求
- 产品主图用白底图，描述避免翻译腔
- 设置 Metafields 存储自定义属性

### 第四步：物流方案

| 方案 | 时效 | 适合 |
|------|------|------|
| 小包（广州邮政/4PX） | 15-25天 | 低客单价，< $30 |
| 专线小包（云途/万邑通） | 7-15天 | 中客单价 |
| 海外仓（FBA/第三方） | 1-3天 | 高客单价，追求体验 |

### 第五步：SEO引流

- 安装 SEO Manager 或 Plug In SEO 插件
- 每个产品页写独特的 Meta Description
- 开设 Blog 发布行业内容，长期积累自然流量

### 避坑指南

- 不要用 Shopify 自带支付（国内无法开通）
- 避免一键翻译产品描述（影响转化率）
- 先做0美金广告测款，再加大投放`,
      en: `## 2026 Complete Shopify Cross-Border Store Guide

Independent stores are a major channel in cross-border e-commerce, and Shopify is the world's most popular platform. Here's the latest complete guide.

### Step 1: Register Shopify

1. Visit shopify.com (VPN recommended for stable access)
2. Enter your email, choose "Start free trial" (14-day free trial)
3. Fill in store name and basic info
4. Choose a plan: Basic ($39/month) is ideal for beginners

### Step 2: Set Up Payment

**Recommended for Chinese sellers:**
- **PayPal Business**: Most reliable for receiving payments
- **Stripe**: Requires HK/US entity; low rates (2.9% + $0.30)
- **PingPong / LianLian**: Designed specifically for cross-border e-commerce

### Step 3: Logistics Options

| Solution | Transit Time | Best For |
|----------|-------------|----------|
| Small parcel (GZ Post/4PX) | 15-25 days | Low AOV < $30 |
| Express small parcel (Yunexpress) | 7-15 days | Mid AOV |
| Overseas warehouse (FBA/3PL) | 1-3 days | High AOV, experience |

### Common Pitfalls

- Don't use Shopify Payments (unavailable for mainland China sellers)
- Avoid one-click translation for product descriptions (hurts conversion)
- Test products with $0 in ads first, then scale`,
      ar: `## دليل شامل لمتجر Shopify العابر للحدود 2026

المتاجر المستقلة قناة رئيسية في التجارة الإلكترونية العابرة للحدود، وShopify أكثر المنصات شيوعاً.

### الخطوة الأولى: تسجيل Shopify

1. زُر shopify.com (يُنصح بـ VPN للوصول المستقر)
2. أدخل بريدك وابدأ التجربة المجانية (14 يوماً)
3. اختر الخطة الأساسية ($39/شهر) للمبتدئين

### الخطوة الثانية: إعداد الدفع

**للبائعين الصينيين:**
- **PayPal Business**: الأكثر موثوقية لاستلام المدفوعات
- **Stripe**: يتطلب كياناً في هونغ كونغ أو الولايات المتحدة
- **PingPong / LianLian**: مصممة خصيصاً للتجارة الإلكترونية العابرة للحدود

### تجنب الأخطاء الشائعة

- لا تستخدم Shopify Payments (غير متاح للبائعين في الصين القارية)
- تجنب الترجمة الآلية لأوصاف المنتجات
- اختبر المنتجات بدون إعلانات أولاً ثم قَيِّس`,
    },
  },
  {
    slug: "telegram-overseas-community-2026",
    tag: "social",
    date: "2026-07-01",
    coverEmoji: "✈️",
    title: {
      zh: "出海必备：Telegram 社群运营完全指南 2026",
      en: "Essential for Going Global: Complete Telegram Community Guide 2026",
      ar: "ضروري للمغتربين: دليل شامل لإدارة مجتمع Telegram 2026",
    },
    summary: {
      zh: "Telegram 是出海运营者的核心工具之一，本文详解频道 vs 群组的选择策略、Bot 自动化配置、涨粉技巧及变现方式，助你快速搭建高活跃海外社群。",
      en: "Telegram is a core tool for overseas operators. This guide covers channel vs group strategy, Bot automation, growth tactics, and monetization to help you build a highly active global community.",
      ar: "Telegram أداة محورية للمشغلين في الخارج. يغطي هذا الدليل استراتيجية القناة مقابل المجموعة وأتمتة البوت وتكتيكات النمو والتحقيق الربحي.",
    },
    content: {
      zh: `## Telegram 出海运营指南 2026

Telegram 在中东、东欧、东南亚市场拥有极高渗透率，是出海运营不可忽视的平台。

### 频道 vs 群组：如何选择

| 类型 | 适合 | 特点 |
|------|------|------|
| **Channel（频道）** | 媒体、品牌公告 | 单向广播，成员不可发言，无上限 |
| **Group（群组）** | 社区、客服、互动 | 双向交流，最多 20 万成员 |
| **Supergroup** | 大型社区 | 群组升级版，支持话题分区 |

### Bot 自动化必备

**@Combot** - 群管机器人
- 欢迎新成员、反垃圾信息
- 数据统计：活跃度、消息量分析

**@MissRose_bot** - 多功能管理
- 关键词过滤、违禁词自动踢除
- 支持中文命令

**@Telegraph** - 长文发布
- 不受 4096 字符限制
- 适合发布详细教程和报告

### 涨粉策略

1. **跨平台引流**：在 YouTube/Twitter 内容末尾附 Telegram 链接
2. **内容差异化**：Telegram 发独家内容，不重复其他平台
3. **合作置换**：与同领域频道互推
4. **SEO 优化**：频道描述加入目标关键词，被 Telegram 内搜索发现

### 变现方式

- **付费频道**：通过 @PremiumBot 设置月付订阅
- **广告合作**：千人展示收费（CPM）
- **课程/工具销售**：作为流量出口引导购买

### 访问说明

Telegram 在国内需要科学上网，推荐使用支持UDP 协议的稳定机场节点。`,
      en: `## Telegram Overseas Operations Guide 2026

Telegram has extremely high penetration in the Middle East, Eastern Europe, and Southeast Asia — a platform no overseas operator can ignore.

### Channel vs Group: How to Choose

| Type | Best For | Features |
|------|----------|----------|
| **Channel** | Media, brand announcements | One-way broadcast, unlimited subscribers |
| **Group** | Community, support, interaction | Two-way, up to 200K members |
| **Supergroup** | Large communities | Upgraded group with topic sections |

### Essential Bots

**@Combot** — Group management bot
- Welcome new members, anti-spam
- Analytics: activity and message volume

**@MissRose_bot** — Multi-function management
- Keyword filtering and auto-ban
- Supports multiple languages

### Growth Strategies

1. **Cross-platform traffic**: Add Telegram link at the end of YouTube/Twitter content
2. **Content differentiation**: Post exclusive content on Telegram, not repeating other platforms
3. **Cross-promotion**: Partner with same-niche channels for mutual promotion
4. **SEO optimization**: Add target keywords in channel description to appear in Telegram search

### Monetization

- **Paid channel**: Set up monthly subscription via @PremiumBot
- **Advertising**: CPM-based ad placements
- **Course/tool sales**: Use as a funnel to direct purchases`,
      ar: `## دليل عمليات Telegram للمغتربين 2026

يتمتع Telegram بانتشار واسع في الشرق الأوسط وأوروبا الشرقية وجنوب شرق آسيا.

### القناة مقابل المجموعة

| النوع | الأنسب لـ | الميزات |
|-------|----------|---------|
| **القناة** | الإعلام والإعلانات | بث أحادي الاتجاه، مشتركون غير محدودين |
| **المجموعة** | المجتمع والدعم | تفاعل ثنائي، حتى 200 ألف عضو |

### البوتات الأساسية

**@Combot** — بوت إدارة المجموعات
- ترحيب بالأعضاء الجدد ومكافحة الرسائل المزعجة

**@MissRose_bot** — إدارة متعددة الوظائف
- فلترة الكلمات المفتاحية والحظر التلقائي

### استراتيجيات النمو

1. حركة مرور متعددة المنصات
2. محتوى حصري على Telegram
3. تعاون مع قنوات في نفس المجال
4. تحسين الوصف بالكلمات المفتاحية المستهدفة`,
    },
  },
  {
    slug: "duolingo-language-learning-2026",
    tag: "learning",
    date: "2026-06-20",
    coverEmoji: "🦉",
    source: "Duolingo Blog",
    sourceUrl: "https://blog.duolingo.com",
    title: {
      zh: "Duolingo 2026：AI 个性化课程让语言学习效率翻倍",
      en: "Duolingo 2026: AI Personalized Courses Double Language Learning Efficiency",
      ar: "Duolingo 2026: المناهج الشخصية بالذكاء الاصطناعي تضاعف كفاءة تعلم اللغات",
    },
    summary: {
      zh: "Duolingo 大规模引入 AI 个性化功能，根据每位学习者的薄弱点自动调整课程难度和复习频率，配合新增的视频通话口语练习，让语言学习效率大幅提升。",
      en: "Duolingo has massively integrated AI personalization, automatically adjusting course difficulty and review frequency based on each learner's weak points, alongside new video call speaking practice.",
      ar: "دمج Duolingo التخصيص بالذكاء الاصطناعي على نطاق واسع، يضبط تلقائياً صعوبة الدورة ومراجعة تكرارية بناءً على نقاط ضعف كل متعلم.",
    },
    content: {
      zh: `## Duolingo 2026 年新功能全览

Duolingo 在 2026 年迎来了重大产品升级，AI 能力全面融入学习体验。

### 核心新功能

**AI 个性化学习路径**
- 系统持续分析你的错误模式，自动调整下一单元的重点
- 薄弱词汇在 24 小时黄金遗忘周期前自动复现
- 每日学习时间建议根据你的记忆曲线动态生成

**Lily 视频通话练习**（新增）
- 与 AI 角色进行真实场景模拟对话（订餐、问路、面试等）
- 实时发音纠正，标注具体音节问题
- 目前支持英语、西班牙语、法语、日语、韩语

**课程重构**
- 英语课程新增商务英语和学术英语专项模块
- 日语/韩语补充大量日常实用口语课
- 中文课程完善声调和成语教学

### 出海者使用建议

**目标：英语工作交流**
- 学习路径：General English → Business English
- 每日30分钟，配合 Lily 对话练习，预计6个月达到日常工作水平

**目标：了解当地语言（东南亚/中东市场）**
- 优先选泰语、印尼语、阿拉伯语基础课
- 达到「打招呼 + 基础交易」水平即可满足大多数出海场景

### 价格

- **免费版**：含广告，每日可学完整课程，有心跳次数限制
- **Super Duolingo**：$9.99/月，无广告、无限心跳
- **Duolingo Max**：$29.99/月，解锁所有 AI 对话功能`,
      en: `## Duolingo 2026 New Features Overview

Duolingo underwent a major product upgrade in 2026 with AI capabilities fully integrated into the learning experience.

### Core New Features

**AI Personalized Learning Path**
- System continuously analyzes your error patterns and adjusts the next unit's focus
- Weak vocabulary automatically resurfaces before the 24-hour forgetting curve peak
- Daily study time recommendations generated dynamically based on your memory curve

**Lily Video Call Practice** (new)
- Real-scenario simulated conversations with AI characters (ordering food, asking directions, job interviews)
- Real-time pronunciation correction with specific syllable feedback
- Currently supports English, Spanish, French, Japanese, Korean

**Course Overhaul**
- English courses now include Business English and Academic English modules
- Japanese/Korean courses expanded with daily conversational content

### Recommendations for Overseas Workers

**Goal: English for work**
- Path: General English → Business English
- 30 min/day + Lily conversation practice → workable business English in ~6 months

**Goal: Local language basics (SEA/Middle East)**
- Priority: Thai, Indonesian, or Arabic beginner courses
- Reaching "greetings + basic transactions" level covers most overseas scenarios

### Pricing

- **Free**: With ads, full daily lessons, limited hearts
- **Super Duolingo**: $9.99/month, no ads, unlimited hearts
- **Duolingo Max**: $29.99/month, all AI conversation features unlocked`,
      ar: `## نظرة عامة على مميزات Duolingo الجديدة 2026

خضع Duolingo لترقية منتج كبيرة في 2026 مع دمج قدرات الذكاء الاصطناعي بالكامل في تجربة التعلم.

### الميزات الجديدة الرئيسية

**مسار تعلم شخصي بالذكاء الاصطناعي**
- يحلل النظام باستمرار أنماط أخطائك ويضبط تركيز الوحدة التالية
- تعاود المفردات الضعيفة الظهور تلقائياً قبل ذروة منحنى النسيان (24 ساعة)
- توصيات وقت الدراسة اليومية تتولد ديناميكياً

**ممارسة مكالمات الفيديو مع Lily** (جديد)
- محادثات محاكاة في مشاهد حقيقية مع شخصيات ذكاء اصطناعي
- تصحيح النطق في الوقت الفعلي مع تغذية راجعة محددة للمقاطع

### الأسعار

- **مجاني**: مع إعلانات، دروس يومية كاملة، قلوب محدودة
- **Super Duolingo**: 9.99$/شهر، بدون إعلانات، قلوب غير محدودة
- **Duolingo Max**: 29.99$/شهر، جميع مميزات محادثات الذكاء الاصطناعي`,
    },
  },
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
