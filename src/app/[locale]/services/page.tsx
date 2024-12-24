import { ServicesPage } from '@/features/services/pages/ServicesPage'
import { getTranslations } from 'next-intl/server'

export default function Services() {
  return <ServicesPage />
}

export async function generateMetadata({
  params: { locale },
}: {
  params: {
    locale: string
  }
}) {
  const t = await getTranslations('MetaData')

  return {
    title: t('Service.Title'),
    description: t('Service.Description'),
    openGraph: {
      title: t('Service.Title'),
      description: t('Service.Description'),
      images: [
        {
          url: 'https://sahathai-ui.vercel.app' + '/seo/meta-image-service.jpg',
          width: 800,
          height: 600,
          alt: 'sahathai-service-meta-image',
        },
        {
          url: 'https://sahathai-ui.vercel.app' + '/seo/meta-image-service.jpg',
          width: 1800,
          height: 1600,
          alt: 'sahathai-service-meta-image',
        },
      ],
    },
    type: 'website',
  }
}
