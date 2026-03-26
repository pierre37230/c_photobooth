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
