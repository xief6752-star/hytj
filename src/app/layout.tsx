import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hytuijian.com"),
  title: {
    default: "出海工具箱 2026 — AI/开发/社交/科学上网工具推荐榜",
    template: "%s | 出海工具箱 2026",
  },
  description:
    "2026 出海工具箱 + 机场推荐评测榜：收录 ChatGPT、Claude、Gemini、YouTube、GitHub、Shopify 等 28+ 款出海必备工具，提供国内使用教程、注册指南、加速方案，并附 2026 稳定/便宜/专线机场（魔法梯子）推荐与云图机场评测。",
  keywords: [
    "出海工具箱",
    "2026 出海工具推荐",
    "2026 科学上网",
    "出海必备工具",
    // 机场 / 梯子长尾（对标勇哥博客、机场查等站）
    "机场推荐",
    "机场评测",
    "2026 机场推荐",
    "2026 机场评测",
    "梯子推荐",
    "2026 梯子推荐",
    "魔法梯子",
    "魔法上网",
    "翻墙梯子",
    "稳定机场推荐",
    "便宜机场推荐",
    "专线机场推荐",
    "IPLC 机场",
    "IEPL 专线机场",
    "Clash 机场",
    "小火箭机场",
    "云图机场",
    "云图机场评测",
    "云图机场怎么样",
    // 机场品牌长尾（对标勇哥博客/机场查等 SEO 关键词）
    "机场测评",
    "机场测评榜",
    "2026 机场测评",
    "瞬云机场",
    "瞬云机场评测",
    "瞬云机场怎么样",
    "寰宇云机场",
    "寰宇云评测",
    "BGP 三网优化机场",
    "wgetcloud",
    "WgetCloud 机场",
    "极速 Cloud",
    "GaCloud",
    "tag机场",
    "TAG VPN",
    "tag机场评测",
    "一元机场",
    "一元机场怎么样",
    "1 元机场",
    "飞鸟机场",
    "奶昔机场",
    "奶昔机场评测",
    "Nexitally",
    "Nexitally 评测",
    "一分机场",
    "一分机场怎么样",
    "1 分机场",
    "低价机场推荐",
    "飞鸟机场评测",
    "flyingbird",
    "nexitally",
    "奶昔机场",
    "一分机场",
    // 工具长尾
    "ChatGPT国内使用教程",
    "ChatGPT怎么用 2026",
    "GPT怎么用",
    "GPT-4 怎么用",
    "ai怎么用",
    "AI 工具怎么用",
    "AI 使用教程",
    "Google Gemini使用教程",
    "Claude AI怎么用",
    // 漫剧 / 短剧出海长尾
    "漫剧怎么弄",
    "海外漫剧",
    "漫剧下载",
    "漫剧app推荐",
    "短剧出海",
    "海外短剧APP",
    "ReelShort下载",
    "DramaBox下载",
    "海外看漫剧",
    "YouTube国内访问",
    "GitHub加速",
    "Midjourney使用教程",
    "Telegram使用教程",
    "LinkedIn国内使用",
    "Figma使用教程",
    "Shopify开店教程",
    "PayPal注册教程",
    "Coursera课程推荐",
    "Duolingo学语言",
    "出海工具大全",
    "VPN推荐",
  ],
  authors: [{ name: "出海工具箱", url: "https://hytuijian.com" }],
  creator: "出海工具箱",
  openGraph: {
    type: "website",
    locale: "zh_CN",
    alternateLocale: "en_US",
    url: "https://hytuijian.com",
    siteName: "出海工具箱",
    title: "出海工具箱 2026 — AI/开发/社交/科学上网工具推荐榜 + 机场评测",
    description:
      "2026 出海工具 + 机场推荐榜：ChatGPT、Claude、Gemini、GitHub、Shopify 等 28+ 工具国内使用教程，稳定/便宜/专线机场（魔法梯子）评测与云图机场推荐。",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "出海工具箱 2026 — 出海必备工具与机场推荐榜",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "出海工具箱 2026 — AI/开发/社交/科学上网工具推荐榜 + 机场评测",
    description: "2026 出海工具 + 机场推荐榜：ChatGPT、Claude、Gemini、GitHub、Shopify 等 28+ 工具国内使用教程，稳定/便宜/专线机场评测与云图机场推荐。",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://hytuijian.com",
    languages: {
      "zh-CN": "https://hytuijian.com/zh",
      "en-US": "https://hytuijian.com/en",
      "ar": "https://hytuijian.com/ar",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          as="style"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://hytuijian.com/#website",
                  name: "出海工具箱",
                  alternateName: ["Overseas Toolkit", "Chuhai Tools", "出海工具推荐"],
                  url: "https://hytuijian.com",
                  description: "出海工具箱 - 全球出海必备工具推荐站，提供 ChatGPT、Claude、Gemini、YouTube、GitHub、Shopify 等工具的详细注册教程和使用指南。",
                  inLanguage: ["zh-CN", "en", "ar"],
                  potentialAction: {
                    "@type": "SearchAction",
                    target: { "@type": "EntryPoint", urlTemplate: "https://hytuijian.com/zh?search={search_term_string}" },
                    "query-input": "required name=search_term_string",
                  },
                },
                {
                  "@type": "Organization",
                  "@id": "https://hytuijian.com/#organization",
                  name: "出海工具箱",
                  alternateName: "Overseas Toolkit",
                  url: "https://hytuijian.com",
                  description: "专注于为中文用户提供全球出海工具的使用教程、注册指南与科学上网攻略的权威导航站。收录 ChatGPT、Claude、Gemini、YouTube、GitHub、Shopify、Duolingo 等 20+ 款主流工具，支持中文、英文、阿拉伯文三语。",
                  knowsAbout: ["AI工具", "社交媒体", "开发工具", "视频平台", "办公协作", "电商金融", "学习资源", "科学上网"],
                },
              ],
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
