"use client";
import Script from "next/script";

export default function OrganizationJsonLd({
  name = "فجر الخير",
  url = "https://www.fajeralkhair.com",
  logo = "/shap-logo.png",
  sameAs = [],
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "NGO", 
    name,
    url,
    logo,
    ...(sameAs.length ? { sameAs } : {}),
  };
  return (
    <Script
      id="org-jsonld"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
