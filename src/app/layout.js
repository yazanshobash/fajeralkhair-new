import { Cairo } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Suspense } from "react";
import AnalyticsTracker from "@/components/shared/AnalyticsTracker"; // مكوّن عميل لتتبّع تغيّر المسار
import WhatsAppWrapper from "@/components/WhatsAppWrapper.jsx";    // زر/دردشة واتساب (عميل)

const SITE_URL = "https://www.fajeralkhair.com";
const APP_NAME = "فجر الخير";
const APP_DESC = "فجر الخير | جمعية حفر الآبار والأعمال الخيرية";
const OG_IMAGE = "/shap-logo.png";
const GA_MEASUREMENT_ID = "G-4DE50EK29H";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: APP_NAME, template: `%s | ${APP_NAME}` },
  description: APP_DESC,
  icons: {
    icon: "/favicon-180x180.png",
    shortcut: "/shap-logo.png",
    apple: "/shap-logo.png",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: APP_NAME,
    title: APP_NAME,
    description: APP_DESC,
    images: [{ url: OG_IMAGE, width: 900, height: 900, alt: "شعار فجر الخير" }],
  },
  twitter: {
    card: "summary_large_image",
    title: APP_NAME,
    description: APP_DESC,
    images: [OG_IMAGE],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        {/* ✅ Google Analytics */}
        <Script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
        <Script id="ga4-init">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', { send_page_view: false });
          `}
        </Script>

        {/* ✅ Microsoft Clarity */}
        <Script id="ms-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "tyaryn2dsa");
          `}
        </Script>
      </head>

      <body className={`${cairo.variable} font-sans`}>
        {/* محتوى الصفحات */}
        <Suspense fallback={null}>{children}</Suspense>

        {/* زر/دردشة واتساب */}
        <Suspense fallback={null}>
          <WhatsAppWrapper />
        </Suspense>

        {/* تتبّع تغيّر المسارات وإرسال pageview */}
        <Suspense fallback={null}>
          <AnalyticsTracker />
        </Suspense>

        {/* سكيما المنظمة (NGO) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NGO",
              name: APP_NAME,
              url: SITE_URL,
              logo: `${SITE_URL}/shap-logo.png`,
              sameAs: [
                "https://www.facebook.com/fajer.al5er",
                "https://www.instagram.com/fajer__alkhair",
                "https://www.youtube.com/@fajer.alkhair",
                "https://www.tiktok.com/@fajer.alkhair",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
