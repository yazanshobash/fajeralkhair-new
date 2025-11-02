import ContactUs from "@/components/sections/contactUs";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

export const metadata = {
  title: "تواصل معنا | فجر الخير",
  description:
    "تواصل مع جمعية فجر الخير للاستفسارات والتبرعات بخصوص مشاريع حفر الآبار وسقيا الماء في آسيا. اتصل بنا عبر الهاتف أو البريد الإلكتروني أو النموذج الإلكتروني.",
  keywords: [
    "تواصل فجر الخير",
    "اتصال الجمعية",
    "استفسار حفر الآبار",
    "تبرع سقيا الماء",
    "اتصال صدقة جارية",
    "فجر الخير آسيا"
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: { canonical: "https://www.fajeralkhair.com/contact" },
  openGraph: {
    url: "https://www.fajeralkhair.com/contact",
    title: "تواصل معنا | فجر الخير",
    description:
      "جميع طرق التواصل مع جمعية فجر الخير: 00962781607560، info@fajeralkhair.com.",
    type: "website",
    siteName: "فجر الخير",
    locale: "ar",
    images: [
      {
        url: "https://www.fajeralkhair.com/images/fajeralkhair.png", 
        width: 1200,
        height: 630,
        alt: "تواصل مع جمعية فجر الخير",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "تواصل معنا | فجر الخير",
    description:
      "هل لديك استفسار حول مشاريع حفر الآبار وسقيا الماء؟ تواصل معنا الآن.",
    images: ["https://www.fajeralkhair.com/images/fajeralkhair.png"],
  },
};



export default function Page() {
  return (
    <>
      <Navbar />
      
       
        <ContactUs />

      <Footer />
    </>
  );
}
