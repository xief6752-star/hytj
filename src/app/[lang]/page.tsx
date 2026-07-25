import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { TOOLS } from "@/data/tools";
import { UI_TEXT, type Lang } from "@/data/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AirportBanner from "@/components/AirportBanner";
import ToolsSection from "@/components/ToolsSection";

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
  const t = UI_TEXT[lang as Lang];
  return {
    title: t.siteTitle,
    description: t.siteDescription,
    alternates: {
      canonical: `https://hytuijian.com/${lang}`,
      languages: {
        "zh-CN": "https://hytuijian.com/zh",
        "en-US": "https://hytuijian.com/en",
        "ar": "https://hytuijian.com/ar",
      },
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (lang !== "zh" && lang !== "en" && lang !== "ar") notFound();
  const l = lang as Lang;
  const t = UI_TEXT[l];

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: l === "zh" ? "出海必备工具目录" : l === "en" ? "Overseas Toolkit Directory" : "دليل أدوات المغتربين",
    description: l === "zh" ? "精选全球出海必备工具，包含 AI、社交、开发、视频、办公、电商、学习等分类" : l === "en" ? "Curated directory of essential tools for going global, covering AI, social, dev, video, office, e-commerce, and learning" : "دليل منسق لأفضل الأدوات العالمية يشمل الذكاء الاصطناعي والتواصل الاجتماعي والتطوير والتعليم والتجارة الإلكترونية",
    numberOfItems: TOOLS.length,
    itemListElement: TOOLS.map((tool, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: tool.name[l],
      url: `https://hytuijian.com/${l}/tools/${tool.slug}`,
      description: tool.description[l],
    })),
  };

  return (
    <div dir={l === "ar" ? "rtl" : "ltr"}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <Header lang={l} t={t as any} />
      <main id="main-content">
        <ToolsSection lang={l} tools={TOOLS} />
        <div className="container">
          <AirportBanner lang={l} variant="banner" />
        </div>
      </main>
      <Footer lang={l} />
    </div>
  );
}
