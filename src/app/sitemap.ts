import { siteConfig } from "@/config/site";

export default function sitemap() {
  const base = siteConfig.domain ? `https://${siteConfig.domain}` : "http://localhost:3000";
  const routes = ["", "/tarifs", "/galerie", "/faq", "/contact", "/mentions-legales", "/politique-confidentialite"];

  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));
}
