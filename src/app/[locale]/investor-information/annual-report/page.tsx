import { getTranslations } from 'next-intl/server'

import { AnnualReportPage } from '@/features/investorRelations/pages/AnnualReportPage/AnnualReportPage'
import { getAnnualReports } from '@/libs/strapi/annualReport'

export default async function AnnualReport({
  params,
}: {
  params: { locale: string }
}) {
  const { locale } = params
  const response = await getAnnualReports(locale)

  return <AnnualReportPage data={response.data} />
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
