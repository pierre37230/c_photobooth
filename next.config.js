/** @type {import('next').NextConfig} */
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
}

module.exports = nextConfig