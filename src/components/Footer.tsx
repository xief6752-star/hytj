import Link from "next/link";
import { type Lang } from "@/data/i18n";
import { AIRPORT_GO, UI_TEXT, FRIEND_LINKS } from "@/data/i18n";
import { CATEGORIES } from "@/data/tools";
import { BRANDS } from "@/data/brands";

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
              href={AIRPORT_GO}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="footer-airport-link"
              id="footer-airport-cta"
            >
              🚀 {lang === "zh" ? "推荐：云图机场" : lang === "en" ? "Recommended: YunTu VPN" : "موصى به: YunTu VPN"}
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

          {/* 9 机场品牌评测 */}
          <div>
            <p className="footer-col-title">
              {lang === "zh" ? "机场评测" : lang === "en" ? "Airport Reviews" : "تقييمات المطارات"}
            </p>
            <nav className="footer-links">
              {BRANDS.map((b) => (
                <Link key={b.slug} href={`/${lang}/brands/${b.slug}`}>
                  {b.name[lang]}
                </Link>
              ))}
            </nav>
          </div>

          {/* 友情链接 / Friend Links — 用于和勇哥博客等同垂类站互链 */}
          <div>
            <p className="footer-col-title">
              {lang === "zh" ? "友情链接" : lang === "en" ? "Friends" : "روابط صديقة"}
            </p>
            <nav className="footer-links">
              {FRIEND_LINKS.map((f) => (
                <a
                  key={f.url}
                  href={f.url}
                  target="_blank"
                  rel="noopener noreferrer external"
                  title={f.note?.[lang] ?? ""}
                >
                  {f.name[lang]}
                </a>
              ))}
            </nav>
            <p style={{ fontSize: 11, color: "var(--text-muted)", marginTop: 8, lineHeight: 1.5 }}>
              {lang === "zh"
                ? "欢迎同垂类站点互换友链：contact@hytuijian.com"
                : lang === "en"
                ? "Link exchange welcome: contact@hytuijian.com"
                : "نرحب بتبادل الروابط: contact@hytuijian.com"}
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">{t.footer.copyright}</p>
          <div className="footer-bottom-links">
            <Link href={`/${lang}/topics`}>{lang === "zh" ? "专题" : lang === "en" ? "Topics" : "المواضيع"}</Link>
            <Link href={`/${lang}/brands`}>{lang === "zh" ? "机场测评" : lang === "en" ? "Airports" : "المطارات"}</Link>
            <Link href={`/${lang}/faq`}>{lang === "zh" ? "问题库" : lang === "en" ? "FAQ" : "الأسئلة"}</Link>
            <Link href={`/${lang}/sitemap`}>{lang === "zh" ? "网站地图" : lang === "en" ? "Sitemap" : "خريطة الموقع"}</Link>
            <Link href={`/${lang}/news`}>{lang === "zh" ? "出海资讯" : lang === "en" ? "News" : "الأخبار"}</Link>
            <Link href={`/${lang}/about`}>{t.footer.about}</Link>
            <Link href={`/${lang}/privacy`}>{t.footer.privacy}</Link>
            <a href="mailto:contact@hytuijian.com">{t.footer.contact}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
