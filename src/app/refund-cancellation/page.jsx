import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import RefundCancellation from "@/components/sections/RefundCancellation";

export const metadata = {
  title: "سياسة الاسترداد والإلغاء | فجر الخير",
  description:
    "تعرّف على سياسة فجر الخير الخاصة باسترداد الأموال وإلغاء الخدمات وفق المعايير المصرفية في دولة الإمارات.",
  alternates: { canonical: "https://www.fajeralkhair.com/refund-cancellation" },
  openGraph: {
    url: "https://www.fajeralkhair.com/refund-cancellation",
    title: "سياسة الاسترداد والإلغاء | فجر الخير",
    description:
      "اطّلع على تفاصيل سياسة الاسترداد والإلغاء المعتمدة في موقع فجر الخير لإدارة المشاريع.",
  },
};

function Page() {
  return (
    <>
      <Navbar />
      <RefundCancellation />
      <Footer />
    </>
  );
}

export default Page;
