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
    ],
  },
}

export default withNextIntl(nextConfig)
