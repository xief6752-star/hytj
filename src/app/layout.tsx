import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hytuijian.com"),
  title: {
    default: "出海工具箱 | 出海必备工具推荐与使用指南",
    template: "%s | 出海工具箱",
  },
  description:
    "出海工具箱收录全球最受欢迎的出海必备工具，提供详细功能介绍、注册教程和使用指南。ChatGPT、YouTube、GitHub、Midjourney、Discord 等工具一站式中文指南。",
  keywords: [
    "出海工具箱",
    "出海工具推荐",
    "出海必备工具",
    "科学上网工具",
    "ChatGPT怎么用",
    "ChatGPT国内使用教程",
    "Google Gemini使用教程",
    "Claude AI怎么用",
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
    "机场推荐",
  ],
  authors: [{ name: "出海工具箱", url: "https://hytuijian.com" }],
  creator: "出海工具箱",
  openGraph: {
    type: "website",
    locale: "zh_CN",
    alternateLocale: "en_US",
    url: "https://hytuijian.com",
    siteName: "出海工具箱",
    title: "出海工具箱 | 出海必备工具推荐与使用指南",
    description:
      "精选全球出海必备工具，提供详细注册教程、使用指南与科学上网攻略。",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "出海工具箱 - 出海必备工具推荐与使用指南",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "出海工具箱 | 出海必备工具推荐与使用指南",
    description: "精选全球出海必备工具，提供详细注册教程、使用指南与科学上网攻略。",
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
