import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sahathai-ui.vercel.app'
  const languages = ['th', 'en', 'cn']

  const pages = [
    '',
    '/about-us',
    '/services',
    '/infrastructure-containers',
    '/news',
    '/e-service',
    '/investor-information',
    '/sustainability-management',
    '/investor-information/share-holder',
    '/code-of-conduct',
    '/investor-information/share-holder-meeting',
    '/investor-information/financial-information',
    '/investor-information/performance-report',
    '/investor-information/document-announcement',
    '/investor-information/good-corporate',
    '/investor-information/activity',
    '/investor-information/warrant',
  ]

  return pages.flatMap(page => {
    return languages.map(lang => ({
      url: `${baseUrl}/${lang}${page}`,
      lastModified: new Date(),
      alternates: {
        // บอก search engine ว่า 1 หน้า มีหลายภาษานะ
        languages: {
          th: `${baseUrl}/th${page}`,
          en: `${baseUrl}/en${page}`,
          cn: `${baseUrl}/cn${page}`,
        },
      },
    }))
  })
}
