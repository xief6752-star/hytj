"use client";
import { useState } from "react";
import Link from "next/link";
import { type Lang } from "@/data/i18n";
import { AIRPORT_LINK } from "@/data/i18n";

interface Props {
  lang: Lang;
  t: {
    siteTitle: string;
    nav: { home: string; tools: string; about: string; langSwitch: string };
    airport: { badge: string; cta: string };
  };
}

export default function Header({ lang, t }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-inner">
        {/* Logo */}
        <Link href={`/${lang}`} className="header-logo">
          <img
            src="/logo.svg"
            alt="出海工具箱 logo"
            width={36}
            height={36}
            style={{ borderRadius: 8, flexShrink: 0 }}
          />
          <span className="header-logo-text">
            {lang === "zh" ? "出海工具箱" : lang === "en" ? "Overseas Toolkit" : "صندوق الأدوات"}
          </span>
        </Link>

        {/* Nav */}
        <nav className={`header-nav${menuOpen ? " open" : ""}`} role="navigation">
          <Link href={`/${lang}`} onClick={() => setMenuOpen(false)}>
            {t.nav.home}
          </Link>
          <Link href={`/${lang}#tools`} onClick={() => setMenuOpen(false)}>
            {t.nav.tools}
          </Link>
          <Link href={`/${lang}/news`} onClick={() => setMenuOpen(false)}>
            {lang === "zh" ? "出海资讯" : lang === "en" ? "News" : "الأخبار"}
          </Link>
          <Link href={`/${lang}/about`} onClick={() => setMenuOpen(false)}>
            {t.nav.about}
          </Link>
        </nav>

        {/* Actions */}
        <div className="header-actions">
          <div className="header-langs" style={{ display: "flex", gap: "8px", marginRight: "12px" }}>
            {lang !== "zh" && (
              <Link href="/zh" className="btn-lang" style={{ fontSize: "14px", padding: "6px 10px" }}>
                中
              </Link>
            )}
            {lang !== "en" && (
              <Link href="/en" className="btn-lang" style={{ fontSize: "14px", padding: "6px 10px" }}>
                EN
              </Link>
            )}
            {lang !== "ar" && (
              <Link href="/ar" className="btn-lang" style={{ fontSize: "14px", padding: "6px 10px" }}>
                عربي
              </Link>
            )}
          </div>
          <a
            href={AIRPORT_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-airport-header"
            id="header-airport-cta"
          >
            {t.airport.badge} {lang === "zh" ? "瞬云机场" : "ShunYun VPN"}
          </a>
          <button
            className="header-menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>
    </header>
  );
}
