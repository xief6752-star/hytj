import Link from "next/link";
import { AIRPORT_LINK, UI_TEXT } from "@/data/i18n";
import type { Lang } from "@/data/i18n";

interface Props {
  lang: Lang;
  variant?: "banner" | "sidebar";
}

export default function AirportBanner({ lang, variant = "banner" }: Props) {
  const t = UI_TEXT[lang].airport;

  if (variant === "sidebar") {
    return (
      <aside className="airport-sidebar" aria-label="瞬云机场推荐">
        <div className="airport-sidebar-inner">
          <span className="airport-sidebar-icon">✈️</span>
          <div className="airport-sidebar-badge">{t.badge}</div>
          <h3 className="airport-sidebar-title">
            {lang === "zh" ? "瞬云机场" : "ShunYun VPN"}
          </h3>
          <p className="airport-sidebar-subtitle">{t.subtitle}</p>
          <ul className="airport-sidebar-features" role="list">
            {t.features.map((f, i) => (
              <li key={i} className="airport-sidebar-feature">
                <span className="airport-sidebar-feature-check" aria-hidden="true">✓</span>
                {f}
              </li>
            ))}
          </ul>
          <a
            href={AIRPORT_LINK}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="btn-airport-sidebar"
            id="sidebar-airport-cta"
          >
            {t.cta}
          </a>
          <p className="airport-sidebar-note">{t.ctaSub}</p>
          <p className="airport-sidebar-note" style={{ marginTop: 6 }}>
            {t.noAds}
          </p>
        </div>
      </aside>
    );
  }

  return (
    <section className="airport-banner" aria-label="瞬云机场推荐">
      <div className="airport-banner-grid" aria-hidden="true" />
      <div className="airport-banner-inner">
        <div className="airport-banner-content">
          <div className="airport-banner-badge">{t.badge}</div>
          <h2 className="airport-banner-title">{t.title}</h2>
          <p className="airport-banner-subtitle">{t.subtitle}</p>
          <ul className="airport-banner-features" role="list">
            {t.features.map((f, i) => (
              <li key={i} className="airport-feature-tag">
                {f}
              </li>
            ))}
          </ul>
          <div className="airport-banner-cta">
            <a
              href={AIRPORT_LINK}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="btn-airport-primary"
              id="banner-airport-cta"
            >
              {t.cta}
              <span className="btn-arrow" aria-hidden="true">→</span>
            </a>
            <span className="airport-cta-note">{t.ctaSub}</span>
          </div>
          <p className="airport-no-ads">{t.noAds}</p>
        </div>
        <div className="airport-banner-visual" aria-hidden="true">
          <div className="airport-visual-circle">✈️</div>
          <p className="airport-visual-label">
            {lang === "zh" ? "瞬云机场" : "ShunYun VPN"}
          </p>
        </div>
      </div>
    </section>
  );
}
