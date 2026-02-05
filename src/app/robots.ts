import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.DOMAIN_NAME || 'https://sahathai-ui.vercel.app'

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: [`${baseUrl}/sitemap.xml`],
  }
}
