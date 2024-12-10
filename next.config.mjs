import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    })

    return config
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sahathaiterminal.com',
      },
      {
        protocol: 'https',
        hostname: 'swiperjs.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com', // Your image's domain
        pathname: '/**', // Matches all paths under the domain
      },
    ],
  },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
}

export default withNextIntl(nextConfig)
