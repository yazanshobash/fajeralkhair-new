import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import CookiesPolicy from "@/components/sections/CookiesPolicy";

export const metadata = {
  title: "سياسة ملفات الارتباط (Cookies) | فجر الخير",
  description:
    "نستخدم ملفات الارتباط لتحسين تجربة المستخدم وتحليل الأداء في موقع فجر الخير لإدارة المشاريع.",
  alternates: { canonical: "https://www.fajeralkhair.com/cookies-policy" },
  openGraph: {
    url: "https://www.fajeralkhair.com/cookies-policy",
    title: "سياسة ملفات الارتباط (Cookies) | فجر الخير",
    description:
      "تعرف على كيفية استخدام ملفات الارتباط (Cookies) في موقع فجر الخير وكيفية إدارتها من إعدادات المتصفح.",
  },
};

function Page() {
  return (
    <>
      <Navbar />
      <CookiesPolicy />
      <Footer />
    </>
  );
}

export default Page;
