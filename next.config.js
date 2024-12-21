/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // Allow Stripe webhook route to receive raw body
        source: '/api/webhook',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/json',
          },
        ],
      },
    ];
  },
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