/** @type {import('next').NextConfig} */

// Liste de toutes les villes (extraite de cities.ts)
const cities = require('./src/data/seo/cities.json').map(city => city.slug);

const nextConfig = {
  turbopack: { root: process.cwd() },
  images: {
    unoptimized: false,
    formats: ['image/webp'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  compress: true,
  poweredByHeader: false,

  async headers() {
    return [{ source: '/:path*', headers: [
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
      { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
    ] }];
  },
  async redirects() {
    const cityRedirects = cities.map(city => ({
      source: `/photobooth/${city}`,
      destination: `/photobooth-${city}`,
      permanent: true,
    }));

    return [
      { source: '/photobooth-saint-georges-sur-cher', destination: '/photobooth-tours', permanent: true },
      { source: '/photobooth/saint-georges-sur-cher', destination: '/photobooth-tours', permanent: true },
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
