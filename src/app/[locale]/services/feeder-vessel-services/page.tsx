import { FeederVesselServicesPage } from '@/features/services/pages/FeederVesselServicesPage'
import { getTranslations } from 'next-intl/server'

export default function FeederVesselServices() {
  return <FeederVesselServicesPage />
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
          url: `${process.env.DOMAIN_NAME}/seo/service/service-meta-img-${locale}.png`,
          width: 800,
          height: 600,
          alt: 'sahathai-service-meta-image',
        },
      ],
    },
  }
}
