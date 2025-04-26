/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable static exports
    output: 'standalone',
    // Configure images
    images: {
      domains: ['localhost'],
    },
    // Configure webpack
    webpack: (config) => {
      return config
    },
  }
  
  module.exports = nextConfig