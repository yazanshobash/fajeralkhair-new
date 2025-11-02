import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import AboutUs from "@/components/sections/aboutus";
import IssuesSection from "@/components/sections/IssuesSection";
import OrganizationJsonLd from "@/components/OrganizationJsonLd";
import { Suspense } from "react"; // 👈 أضِف هذا

export const metadata = {
  title: "من نحن | فجر الخير — حفر الآبار وسقيا الماء",
  description:
    "تعرف على فجر الخير: رسالتنا ورؤيتنا وقصتنا في مشاريع حفر الآبار وسقيا الماء بآسيا وأفريقيا، مع التزام بالجودة والأثر الملموس.",
  alternates: {
    canonical: "https://www.fajeralkhair.com/aboutus",
  },
  keywords: [
    "فجر الخير",
    "من نحن",
    "حفر الآبار",
    "سقيا الماء",
    "جودة التنفيذ",
    "الأثر",
    "آسيا",
    "أفريقيا",
  ],
  openGraph: {
    url: "https://www.fajeralkhair.com/aboutus",
    type: "website",
    locale: "ar_AR",
    siteName: "فجر الخير",
    title: "من نحن | فجر الخير — حفر الآبار وسقيا الماء",
    description:
      "لمحة عن رسالتنا ورؤيتنا وأثر مشاريعنا في توفير الماء الآمن للمجتمعات.",
    images: [
      {
        url: "https://www.fajeralkhair.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "فجر الخير — من نحن",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "من نحن | فجر الخير — حفر الآبار وسقيا الماء",
    description:
      "تعرف على الرسالة والرؤية وأثر مشاريع فجر الخير في آسيا وأفريقيا.",
    images: ["https://www.fajeralkhair.com/og-image.jpg"],
  },
};

export default function Page() {
  const stats = {
    wells: 1240,
    beneficiaries: 350000,
    countries: 9,
    projectsPerYear: 180,
  };

  return (
    <>
      {/* لفّ أي كومبوننت قد يستخدم useSearchParams/usePathname داخل Suspense */}
      <Suspense fallback={null}>
        <Navbar />
      </Suspense>

      <OrganizationJsonLd />

      {/* JSON-LD بسيط للأثر (اختياري) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: "Impact Metrics",
            about: "Water well and clean water projects",
            creator: { "@type": "Organization", name: "Fajer AlKhair" },
            metrics: [
              { "@type": "QuantitativeValue", name: "Wells Completed", value: stats.wells },
              { "@type": "QuantitativeValue", name: "Beneficiaries", value: stats.beneficiaries },
              { "@type": "QuantitativeValue", name: "Countries", value: stats.countries },
              { "@type": "QuantitativeValue", name: "Projects Per Year", value: stats.projectsPerYear },
            ],
          }),
        }}
      />

      <main className="container mx-auto px-4 py-6">
        {/* لو AboutUs أو IssuesSection إحداهما يستخدم الهوكات، لفّهما أيضًا */}
        <Suspense fallback={null}>
          <AboutUs />
        </Suspense>

        <Suspense fallback={null}>
          <IssuesSection />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}
