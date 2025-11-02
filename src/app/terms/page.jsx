import Navbar from '@/components/shared/Navbar.jsx';
import React from 'react';
import Footer from '@/components/shared/Footer';
import Terms from '@/components/sections/terms.jsx'; // ✅ استيراد صفحة الشروط والأحكام الصحيحة

export const metadata = {
  title: "الشروط والأحكام | فجر الخير",
  description:
    "الشروط والأحكام الخاصة باستخدام موقع فجر الخير. يرجى قراءة هذه الشروط قبل استخدام الموقع.",
  alternates: { canonical: "https://www.fajeralkhair.com/terms" },
  keywords: [
    "الشروط والأحكام",
    "فجر الخير",
    "سياسة الاستخدام",
    "جمعية خيرية",
    "تبرع",
  ],
  openGraph: {
    url: "https://www.fajeralkhair.com/terms",
    type: "article",
    locale: "ar_AR",
    title: "الشروط والأحكام | فجر الخير",
    description:
      "تعرف على الشروط والأحكام الخاصة باستخدام موقع فجر الخير وخدماته.",
    siteName: "فجر الخير",
    images: [
      {
        url: "https://www.fajeralkhair.com/og-image.webp",
        width: 1200,
        height: 630,
        alt: "الشروط والأحكام - جمعية فجر الخير",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "الشروط والأحكام | فجر الخير",
    description:
      "تعرف على الشروط والأحكام الخاصة باستخدام موقع فجر الخير وخدماته.",
    images: ["https://www.fajeralkhair.com/og-image.webp"],
  },
};

export default function Page() {
  return (
    <>
      <Navbar />
      <Terms />  {/* ✅ عرض مكون الشروط والأحكام بدلاً من الصفحة الرئيسية */}
      <Footer />
    </>
  );
}
