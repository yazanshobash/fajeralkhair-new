import ImageSlider from '@/components/sections/imageSlider.jsx';
import Slider from '@/components/sections/slider';
import WaterAwarenessSection from '@/components/sections/video';
import Navbar from '@/components/shared/Navbar.jsx';
import React from 'react';
import Text from '@/components/sections/text';
import Footer from '@/components/shared/Footer';

export const metadata = {
  title: "فجر الخير | مشاريع حفر الآبار وسقيا الماء في آسيا وأفريقيا",
  description:
    "جمعية فجر الخير متخصّصة في تنفيذ مشاريع حفر الآبار وسقيا الماء في آسيا وأفريقيا. تبرّع لآبار ارتوازية وسطحية وكهربائية، وكن سببًا في الصدقة الجارية التي تروي العطاش وتُنقذ الأرواح.",
  alternates: { canonical: "https://www.fajeralkhair.com/" },
  keywords: [
    "فجر الخير","مشاريع حفر الآبار","سقيا الماء","جمعية خيرية","تبرع",
    "الآبار الارتوازية","الآبار السطحية","الصدقة الجارية","آسيا","أفريقيا",
  ],
  openGraph: {
    url: "https://www.fajeralkhair.com/",
    type: "website",
    locale: "ar_AR",
    title: "فجر الخير | مشاريع حفر الآبار وسقيا الماء في آسيا وأفريقيا",
    description: "شارك في مشاريع فجر الخير لحفر الآبار وسقيا الماء في الدول المحتاجة. آلاف المستفيدين في آسيا وأفريقيا بفضل تبرعاتكم.",
    siteName: "فجر الخير",
    images: [{ url: "https://www.fajeralkhair.com/og-image.webp", width: 1200, height: 630, alt: "جمعية فجر الخير - مشاريع حفر الآبار وسقيا الماء" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "فجر الخير | مشاريع حفر الآبار وسقيا الماء",
    description: "ساهم في سقيا الماء وحفر الآبار في آسيا وأفريقيا مع جمعية فجر الخير. تبرع الآن وكن سببًا في صدقة جارية دائمة.",
    images: ["https://www.fajeralkhair.com/og-image.webp"],
  },
};

// ✅ GA4
import Script from 'next/script';
// ✅ مكوّن عميل وسيط (لا dynamic هنا)
import WhatsAppWrapper from '@/components/WhatsAppWrapper.jsx';

const GA_MEASUREMENT_ID = 'G-4DE50EK29H';

export default function Page() {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="ga4-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments)}
            window.gtag = gtag; // ✅ هذا السطر يعرّف gtag على window ليستعمله مكوّن واتساب
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', { page_path: window.location.pathname });
          `,
        }}
      />

      <Navbar />
      <ImageSlider />
      <WaterAwarenessSection />
      <Slider />
      <Text />
      <Footer />

      {/* زر ودردشة واتساب عبر مكوّن عميل */}
      <WhatsAppWrapper />
    </>
  );
}
