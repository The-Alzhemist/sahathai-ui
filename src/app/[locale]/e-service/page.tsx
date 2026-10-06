import { EServicePage } from '@/features/investorRelations/pages/EServicePage'
import { getEServices } from '@/libs/strapi/eService'
import { getTranslations } from 'next-intl/server'

export default async function EService({
  params,
}: {
  params: { locale: string }
}) {
  const locale = params.locale

  const response = await getEServices(locale)

  return <EServicePage data={response.data} />
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
    title: t('EService.Title'),
    description: t('EService.Description'),
    openGraph: {
      title: t('EService.Title'),
      description: t('EService.Description'),
      images: [
        {
          url: `${process.env.DOMAIN_NAME}/seo/e-service/e-service-meta-img-${locale}.png`,
          width: 800,
          height: 600,
          alt: 'sahathai-contact-us-meta-image',
        },
      ],
    },
  }
}
