import Link from "next/link";
import { type Lang } from "@/data/i18n";
import { AIRPORT_LINK, AIRPORT_NAME, UI_TEXT } from "@/data/i18n";
import { TOOLS, CATEGORIES } from "@/data/tools";

interface Props {
  lang: Lang;
}

export default function Footer({ lang }: Props) {
  const t = UI_TEXT[lang];
  const catGroups = CATEGORIES.filter((c) => c.id !== "all").slice(0, 6);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div>
            <div className="footer-brand-logo">
              <div className="footer-brand-icon">🌐</div>
              <span className="footer-brand-name">
                {lang === "zh" ? "出海工具箱" : lang === "en" ? "Overseas Toolkit" : "صندوق أدوات المغتربين"}
              </span>
            </div>
            <p className="footer-desc">{t.footer.description}</p>
            <a
              href={AIRPORT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-airport-link"
              id="footer-airport-cta"
            >
              🚀 {lang === "zh" ? "推荐：瞬云机场" : lang === "en" ? "Recommended: ShunYun VPN" : "موصى به: ShunYun VPN"}
            </a>
          </div>

          {/* Categories */}
          <div>
            <p className="footer-col-title">{t.footer.categories}</p>
            <nav className="footer-links">
              {catGroups.map((cat) => (
                <Link key={cat.id} href={`/${lang}?cat=${cat.id}`}>
                  {cat.icon} {cat.label[lang]}
                </Link>
              ))}
            </nav>
          </div>

          {/* Quick Links */}
          <div>
            <p className="footer-col-title">{t.footer.quickLinks}</p>
            <nav className="footer-links">
              {TOOLS.slice(0, 6).map((tool) => (
                <Link key={tool.slug} href={`/${lang}/tools/${tool.slug}`}>
                  {tool.name[lang]}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">{t.footer.copyright}</p>
          <div className="footer-bottom-links">
            <Link href={`/${lang}/about`}>{t.footer.about}</Link>
            <Link href={`/${lang}/privacy`}>{t.footer.privacy}</Link>
            <a href="mailto:contact@hytuijian.com">{t.footer.contact}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
