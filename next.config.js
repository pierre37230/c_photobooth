/** @type {import('next').NextConfig} */

// Liste de toutes les villes (extraite de cities.ts)
const cities = [
  'joue-les-tours',
  'saint-avertin',
  'chambray-les-tours',
  'la-riche',
  'saint-cyr-sur-loire',
  'saint-pierre-des-corps',
  'ballan-mire',
  'fondettes',
  'vouvray',
  'amboise',
  'azay-le-rideau',
  'chinon',
  'loches',
  'langeais',
  'montbazon',
  'sainte-maure-de-touraine',
];

const nextConfig = {
  images: {
    unoptimized: true,
    formats: ['image/webp'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  compress: true,
  poweredByHeader: false,
  
  async redirects() {
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
    ];
  },

  async rewrites() {
    // Créer un rewrite pour chaque ville
    const cityRewrites = cities.map(city => ({
      source: `/photobooth-${city}`,
      destination: `/photobooth/${city}`,
    }));

    return cityRewrites;
  },
}

module.exports = nextConfig