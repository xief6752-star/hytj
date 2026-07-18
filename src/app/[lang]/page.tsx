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

  return (
    <div dir={l === "ar" ? "rtl" : "ltr"}>
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
