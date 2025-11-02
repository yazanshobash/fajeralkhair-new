import Navbar from '@/components/shared/Navbar';
import Questions from '@/components/sections/questions';
import Footer from '@/components/shared/Footer';
import Script from 'next/script';

export const metadata = {
  metadataBase: new URL('https://www.fajeralkhair.com'),
  title: "الأسئلة الشائعة عن حفر الآبار في آسيا | فجر الخير",
  description:
    "كل ما تحتاج معرفته عن مشاريع حفر الآبار في آسيا: الأنواع (ارتوازي/سطحي)، مدة التنفيذ، الدول التي نعمل بها (باكستان، الهند، نيبال)، وضمان الجودة والمتابعة والصيانة.",
  keywords: [
    "الأسئلة الشائعة حفر الآبار",
    "بئر ارتوازي",
    "بئر سطحي",
    "مشاريع المياه آسيا",
    "فجر الخير",
    "التبرع لحفر بئر",
    "سقيا الماء",
    "باكستان",
    "الهند",
    "نيبال"
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://www.fajeralkhair.com/questions" },
  openGraph: {
    url: "https://www.fajeralkhair.com/questions",
    title: "الأسئلة الشائعة عن حفر الآبار في آسيا | فجر الخير",
    description: "إجابات واضحة حول تكلفة ومدة وآلية تنفيذ مشاريع الآبار وضمانات الجودة والصيانة.",
    type: "website",
    siteName: "فجر الخير",
    locale: "ar",
    images: [
      {
        url: "https://www.fajeralkhair.com/fajeralkhair.png",
        width: 1200,
        height: 630,
        alt: "الأسئلة الشائعة عن مشاريع حفر الآبار في آسيا - فجر الخير"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "الأسئلة الشائعة | فجر الخير",
    description:
      "تعرف على تفاصيل مشاريع حفر الآبار في آسيا: الأنواع، المدة، الدول، الضمانات والصيانة.",
    images: ["https://www.fajeralkhair.com/fajeralkhair.png"]
  }
};

const Page = () => {
  const faqs = [
    {
      q: "ما الفرق بين البئر الارتوازي والسطحي؟",
      a: "البئر الارتوازي أعمق وأكثر استدامة ويخدم عددًا أكبر من العائلات، بينما السطحي أقل عمقًا واستدامته أقصر ويخدم عددًا أقل."
    },
    {
      q: "في أي دول تُنفَّذ المشاريع؟",
      a: "في آسيا: باكستان، الهند، نيبال."
    },
    {
      q: "ما هي المناطق الأكثر احتياجًا؟",
      a: "نُحدّد الأولويات داخل آسيا وفق تقييمات ميدانية لشدّة الحاجة وشُحّ مصادر المياه، مع تركيز على المناطق الأشد عطشًا."
    },
    {
      q: "كم المدة التي يستغرقها حفر البئر؟",
      a: "تستغرق عملية الحفر عادةً من 10 إلى 30 يومًا، وقد تختلف بحسب نوع البئر، وطبيعة التربة، وتوفّر المواد، وظروف الموقع."
    }
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a }
    }))
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "الرئيسية", item: "https://www.fajeralkhair.com/" },
      { "@type": "ListItem", position: 2, name: "الأسئلة الشائعة" }
    ]
  };

  return (
    <>
      <Navbar />
      <Questions faqs={faqs} />
      <Footer />

      <Script
        id="faq-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Script
        id="breadcrumb-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
    </>
  );
};

export default Page;
