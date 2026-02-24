import { MetadataRoute } from 'next';
import { cities } from '@/data/seo/cities';
import { services } from '@/data/seo/services';
import { blogPosts } from '@/data/seo/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.cphotobooth.fr';

  // Pages statiques principales
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
  ];

  // Pages piliers
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
      url: `${baseUrl}/photobooth-anniversaire-tours`,
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

  // Pages villes
  const cityPages: MetadataRoute.Sitemap = cities.map(city => ({
    url: `${baseUrl}/photobooth-${city.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // Pages services/intentionnelles
  const servicePages: MetadataRoute.Sitemap = services
    .filter(s => s.category === 'intent')
    .map(service => ({
      url: `${baseUrl}/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.75,
    }));

  // Articles blog
  const blogPages: MetadataRoute.Sitemap = blogPosts.map(post => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishDate),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...pillarPages,
    ...cityPages,
    ...servicePages,
    ...blogPages,
  ];
}