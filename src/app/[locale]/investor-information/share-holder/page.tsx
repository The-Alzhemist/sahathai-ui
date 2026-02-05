import { ShareHolderPage } from '@/features/investorRelations/pages/ShareHolderPage'
import { getTranslations } from 'next-intl/server'

export default async function ShareHolder() {
  return <ShareHolderPage />
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
    title: t('PerformanceReport.Title'),
    description: t('PerformanceReport.Description'),
    openGraph: {
      title: t('PerformanceReport.Title'),
      description: t('PerformanceReport.Description'),
      images: [
        {
          url: `${process.env.DOMAIN_NAME}/seo/investor/investor-meta-img-${locale}.png`,
          width: 800,
          height: 600,
          alt: 'sahathai-investor-meta-image',
        },
      ],
    },
  }
}
