/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/',
        has: [
          {
            type: 'host',
            value: 'seeingthealgorithm.com',
          },
        ],
        destination: 'http://seeingthealgorithm.com/',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
