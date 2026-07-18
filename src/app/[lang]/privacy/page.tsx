import { notFound } from "next/navigation";
import type { Metadata } from "next";
import type { Lang } from "@/data/i18n";
import { UI_TEXT, SITE_URL } from "@/data/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
  
  return {
    title: lang === "zh" 
      ? "隐私政策 | 外网黄页" 
      : lang === "en" 
      ? "Privacy Policy | Web Tools Directory" 
      : "سياسة الخصوصية | دليل المواقع العالمية",
    description: lang === "zh"
      ? "外网黄页的隐私政策，详细说明我们如何收集、使用和保护您的个人信息。"
      : lang === "en"
      ? "Privacy Policy of Web Tools Directory, detailing how we collect, use, and protect your personal information."
      : "سياسة الخصوصية لدليل المواقع العالمية، توضح كيفية جمع واستخدام وحماية معلوماتك الشخصية.",
    alternates: {
      canonical: `${SITE_URL}/${lang}/privacy`,
    },
  };
}

export default async function PrivacyPage({
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
      <main style={{ paddingTop: 80, minHeight: "100vh" }}>
        <div className="tool-detail-hero" style={{ padding: "60px 0 48px" }}>
          <div className="container">
            <h1 className="hero-title gradient-text" style={{ fontSize: "clamp(32px, 5vw, 52px)" }}>
              {l === "zh" ? "隐私政策" : l === "en" ? "Privacy Policy" : "سياسة الخصوصية"}
            </h1>
            <p className="hero-subtitle" style={{ maxWidth: 640 }}>
              {l === "zh"
                ? "我们如何保护您的个人隐私和数据安全"
                : l === "en"
                ? "How we protect your personal privacy and data security"
                : "كيفية حماية خصوصيتك الشخصية وأمان بياناتك لدينا"}
            </p>
          </div>
        </div>
        <div className="container" style={{ padding: "48px 24px 80px" }}>
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <section className="detail-section">
              <h2 className="detail-section-title">
                <span className="detail-section-icon">🔒</span>
                {l === "zh" ? "信息收集" : l === "en" ? "Information Collection" : "جمع المعلومات"}
              </h2>
              <p className="overview-text">
                {l === "zh"
                  ? "外网黄页作为一个静态导航和信息展示网站，本身不设置用户注册，也不主动收集用户的个人身份信息（如姓名、电话、邮箱等）。我们仅使用标准的网站统计工具（如 Google Analytics）收集匿名访问数据（如访问量、页面停留时间、浏览器类型等），用于优化用户体验和改进网站内容。"
                  : l === "en"
                  ? "As a static directory and information portal, Web Tools Directory does not require user registration and does not actively collect any personal identifiable information (such as name, phone number, or email). We only use standard web analytics tools (like Google Analytics) to collect anonymous visitor data (such as page views, time on site, and browser type) to optimize user experience and improve content."
                  : "كدليل وموقع ملاحة ثابت، لا يطلب دليل المواقع العالمية تسجيل المستخدم ولا يقوم بجمع أي معلومات شخصية يمكن التعرف عليها (مثل الاسم أو الهاتف أو البريد الإلكتروني). نحن نستخدم فقط أدوات تحليل الويب القياسية (مثل Google Analytics) لجمع بيانات مجهولة عن الزوار لتحسين تجربة المستخدم وتطوير المحتوى."}
              </p>
            </section>
            <section className="detail-section">
              <h2 className="detail-section-title">
                <span className="detail-section-icon">🍪</span>
                {l === "zh" ? "Cookie 使用" : l === "en" ? "Use of Cookies" : "استخدام ملفات تعريف الارتباط (Cookies)"}
              </h2>
              <p className="overview-text">
                {l === "zh"
                  ? "为了提升网站的加载速度和保存您的语言偏好设置，我们或我们的第三方服务商（如 Cloudflare、Google Analytics）可能会在您的浏览器中存储 Cookie。您可以通过浏览器设置随时拒绝或删除这些 Cookie，这不会影响您对本站基本功能的使用。"
                  : l === "en"
                  ? "To improve loading speeds and save your language preferences, we or our third-party service providers (such as Cloudflare and Google Analytics) may store cookies on your browser. You can refuse or delete these cookies at any time through your browser settings, which will not affect your use of the basic functions of this site."
                  : "لتحسين سرعة تحميل الصفحة وحفظ إعدادات اللغة المفضلة لديك، قد نقوم نحن أو مقدمو الخدمات من الجهات الخارجية (مثل Cloudflare و Google Analytics) بتخزين ملفات تعريف الارتباط في متصفحك. يمكنك رفض أو حذف ملفات تعريف الارتباط هذه في أي وقت من إعدادات متصفحك دون التأثير على استخدامك للوظائف الأساسية للموقع."}
              </p>
            </section>
            <section className="detail-section">
              <h2 className="detail-section-title">
                <span className="detail-section-icon">🔗</span>
                {l === "zh" ? "第三方链接" : l === "en" ? "Third-Party Links" : "روابط الجهات الخارجية"}
              </h2>
              <p className="overview-text">
                {l === "zh"
                  ? "本站包含大量指向第三方网站的链接（包括工具官网和推荐的瞬云机场服务）。这些第三方网站拥有独立的隐私政策和条款，本站对其内容和隐私保护行为不承担任何责任。建议您在访问第三方网站时仔细阅读其隐私条款。"
                  : l === "en"
                  ? "This site contains numerous links to third-party websites (including official tool websites and the recommended ShunYun VPN service). These third-party sites have independent privacy policies and terms. We bear no responsibility for their content or privacy practices. We recommend carefully reading their privacy policies when visiting."
                  : "يحتوي هذا الموقع على العديد من الروابط الخارجية لمواقع طرف ثالث (بما في ذلك المواقع الرسمية للأدوات وخدمة ShunYun VPN الموصى بها). تمتلك هذه المواقع سياسات خصوصية مستقلة تماماً، ولا نتحمل أي مسؤولية عن محتواها أو ممارسات الخصوصية الخاصة بها. ننصحك بقراءة سياسة الخصوصية الخاصة بها بعناية عند زيارتها."}
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer lang={l} />
    </div>
  );
}
