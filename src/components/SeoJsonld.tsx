import { siteConfig } from "@/config/site";

export function SeoJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.brandName,
    areaServed: siteConfig.zoneLabel,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.cityLabel,
      addressCountry: "FR",
    },
    url: siteConfig.domain ? `https://${siteConfig.domain}` : undefined,
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}
