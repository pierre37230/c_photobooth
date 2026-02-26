/** @type {import('next').NextConfig} */
const nextConfig = {
  // Suppression de output: 'export' pour permettre les routes dynamiques
  images: {
    unoptimized: true,
    formats: ['image/webp'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  compress: true,
  poweredByHeader: false,
}

module.exports = nextConfig