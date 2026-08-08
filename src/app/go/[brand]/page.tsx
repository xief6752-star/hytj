import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BRAND_LINKS } from "@/data/i18n";

export const dynamic = "force-static";

export function generateStaticParams() {
  return Object.keys(BRAND_LINKS).map((brand) => ({ brand }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ brand: string }>;
}): Promise<Metadata> {
  const { brand } = await params;
  const info = BRAND_LINKS[brand];
  return {
    title: `Redirecting to ${info?.label ?? brand}`,
    description: `Redirecting to ${info?.label ?? brand}`,
    robots: {
      index: false,
      follow: false,
      nocache: true,
      googleBot: { index: false, follow: false },
    },
    alternates: { canonical: null },
  };
}

export default async function GoBrandPage({
  params,
}: {
  params: Promise<{ brand: string }>;
}) {
  const { brand } = await params;
  const info = BRAND_LINKS[brand];
  if (!info) notFound();

  const target = info.url;

  return (
    <>
      {/* JS redirect */}
      <script
        dangerouslySetInnerHTML={{
          __html: `window.location.replace(${JSON.stringify(target)});`,
        }}
      />
      <div
        style={{
          minHeight: "60vh",
          display: "grid",
          placeItems: "center",
          padding: "40px 24px",
          fontFamily: "system-ui, -apple-system, 'PingFang SC', sans-serif",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 480 }}>
          <div style={{ fontSize: 40, marginBottom: 16 }}>✈️</div>
          <h1 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>
            正在跳转到 {info.label}…
          </h1>
          <p style={{ color: "#666", fontSize: 15, lineHeight: 1.7 }}>
            若数秒后未自动跳转，请
            <a
              href={target}
              rel="nofollow sponsored noopener noreferrer"
              style={{ color: "#f97316", fontWeight: 600 }}
            >
              点击这里
            </a>
            继续访问 {info.label}。
          </p>
        </div>
      </div>
    </>
  );
}
