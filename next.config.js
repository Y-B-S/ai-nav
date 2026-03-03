/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        // aicurate.org → /en/* routes
        {
          source: '/:path*',
          has: [{ type: 'host', value: 'aicurate.org' }],
          destination: '/en/:path*',
        },
        {
          source: '/',
          has: [{ type: 'host', value: 'aicurate.org' }],
          destination: '/en',
        },
      ],
    }
  },
}

module.exports = nextConfig
