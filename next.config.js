/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  eslint: {
    dirs: ['pages', 'components', 'lib', 'utils']
  },
  images: {
    domains: ['cdn.sanity.io'],
  },
}

module.exports = nextConfig 