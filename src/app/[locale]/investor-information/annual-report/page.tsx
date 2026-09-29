import { getTranslations } from 'next-intl/server'

import { AnnualReportPage } from '@/features/investorRelations/pages/AnnualReportPage/AnnualReportPage'

export default async function AnnualReport() {
  return <AnnualReportPage />
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
    title: t('AnnualReport.Title'),
    description: t('AnnualReport.Description'),
    openGraph: {
      title: t('AnnualReport.Title'),
      description: t('AnnualReport.Description'),
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
