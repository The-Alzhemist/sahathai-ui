import { getTranslations } from 'next-intl/server'
import { ServiceProviderImportExportPage } from '@/features/services/pages/ServiceProviderImportExportPage'

export default function ServiceProviderImportExport() {
  return <ServiceProviderImportExportPage />
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
