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
      // Add a rule to handle Tailwind CSS
      config.module.rules.push({
        test: /\.css$/,
        use: [
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [
                  'tailwindcss',
                  'autoprefixer',
                ],
              },
            },
          },
        ],
      })
      return config
    },
  }
  
  module.exports = nextConfig