import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import ProjectsSection from "@/components/sections/projects";

export const metadata = {
  title: "مشاريع حفر الآبار في آسيا | فجر الخير للأعمال الخيرية",
  description:
    "ساهم في مشاريع فجر الخير لحفر الآبار الارتوازية والسطحية والكهربائية في آسيا (باكستان، الهند، نيبال). وفر الماء الصالح للشرب للمحتاجين واجعلها صدقة جارية لك أو لوالديك.",
  keywords: [
    "حفر الآبار",
    "مشاريع الآبار",
    "آبار ارتوازية",
    "آبار سطحية",
    "بئر خيري",
    "الصدقة الجارية",
    "فجر الخير",
    "مشاريع المياه",
    "حفر بئر في آسيا",
    "تبرع لحفر بئر",
    "حفر الآبار في باكستان",
    "حفر الآبار في الهند",
    "حفر الآبار في نيبال",
  ],
  alternates: { canonical: "https://www.fajeralkhair.com/project" },
  openGraph: {
    url: "https://www.fajeralkhair.com/project",
    title: "مشاريع حفر الآبار في آسيا | فجر الخير",
    description:
      "تعرف على مشاريع فجر الخير لحفر الآبار الارتوازية والسطحية في آسيا، وساهم في تبرع لحفر بئر صدقة جارية يوفر الماء للمحتاجين.",
    type: "website",
    locale: "ar",
    siteName: "فجر الخير",
    images: [
      {
        url: "https://www.fajeralkhair.com/og-image.webp",
        width: 1200,
        height: 630,
        alt: "مشاريع حفر الآبار - فجر الخير",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "مشاريع حفر الآبار | فجر الخير",
    description:
      "ساهم في حفر بئر خيري يوفر الماء النقي في آسيا مع فجر الخير للأعمال الخيرية.",
    images: ["https://www.fajeralkhair.com/og-image.webp"],
  },
};


const Page = () => {
  return (
    <>
      <Navbar />
     
        <ProjectsSection />

      <Footer />
    </>
  );
};

export default Page;
