import { siteConfig } from "@/config/site";

export default function robots() {
  const base = siteConfig.domain ? `https://${siteConfig.domain}` : undefined;
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: base ? `${base}/sitemap.xml` : undefined,
  };
}
