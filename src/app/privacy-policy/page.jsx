import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import PrivacyPolicy from "@/components/sections/PrivacyPolicy";

export const metadata = {
  title: "سياسة الخصوصية | فجر الخير",
  description:
    "تعرف على كيفية جمع واستخدام وحماية بيانات المستخدمين في موقع فجر الخير لإدارة المشاريع.",
  alternates: { canonical: "https://www.fajeralkhair.com/privacy-policy" },
  openGraph: {
    url: "https://www.fajeralkhair.com/privacy-policy",
    title: "سياسة الخصوصية | فجر الخير",
    description:
      "نلتزم بحماية خصوصية زوار موقع فجر الخير وضمان أمان بياناتهم وفق القوانين المعمول بها في دولة الإمارات العربية المتحدة.",
  },
};

function Page() {
  return (
    <>
      <Navbar />
      <PrivacyPolicy />
      <Footer />
    </>
  );
}

export default Page;
