/** @type {import('next').NextConfig} */

// Liste de toutes les villes (extraite de cities.ts)
const cities = require('./src/data/seo/cities.json').map(city => city.slug);

const nextConfig = {
  images: {
    unoptimized: false,
    formats: ['image/webp'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  compress: true,
  poweredByHeader: false,

  async redirects() {
    const cityRedirects = cities.map(city => ({
      source: `/photobooth/${city}`,
      destination: `/photobooth-${city}`,
      permanent: true,
    }));

    return [
      // Redirection permanente non-www → www
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'cphotobooth.fr',
          },
        ],
        destination: 'https://www.cphotobooth.fr/:path*',
        permanent: true,
      },
      // Redirection /prix-photobooth-tours → /tarifs
      {
        source: '/prix-photobooth-tours',
        destination: '/tarifs',
        permanent: true,
      },
      // Redirection /photobooth-anniversaire-tours → /photobooth-tours
      {
        source: '/photobooth-anniversaire-tours',
        destination: '/photobooth-tours',
        permanent: true,
      },
      // Redirections /photobooth/:city → /photobooth-:city
      ...cityRedirects,
    ];
  },

  async rewrites() {
    // Rewrites internes pour le rendu des pages villes
    // (le routing public passe par les redirections ci-dessus)
    const cityRewrites = cities.map(city => ({
      source: `/photobooth-${city}`,
      destination: `/photobooth/${city}`,
    }));

    return cityRewrites;
  },
};

module.exports = nextConfig;
