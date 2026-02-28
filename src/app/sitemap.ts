import { MetadataRoute } from 'next';
import { cities } from '@/data/seo/cities';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.cphotobooth.fr';

  // Pages statiques EXISTANTES uniquement
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/tarifs`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/galerie`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/mentions-legales`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/politique-confidentialite`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // Pages piliers EXISTANTES
  const pillarPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/photobooth-tours`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/photobooth-mariage-tours`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/photobooth-entreprise-tours`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/prix-photobooth-tours`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.95,
    },
  ];

  // Pages villes dynamiques
  const cityPages: MetadataRoute.Sitemap = cities.map(city => ({
    url: `${baseUrl}/photobooth-${city.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [
    ...staticPages,
    ...pillarPages,
    ...cityPages,
  ];
}