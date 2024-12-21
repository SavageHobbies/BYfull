/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_STATIC_ENV: 'false'
  },
  compiler: {
    styledComponents: true,
    emotion: true
  },
  experimental: {
    serverActions: true,
  }
}

module.exports = nextConfig