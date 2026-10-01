import { FinancialInformationPage } from '@/features/investorRelations/pages/FinancialInformationPage/FinancialInformationPage'
import { getFinancialInfos } from '@/libs/strapi/financialInfo'
import { getTranslations } from 'next-intl/server'

export default async function FinancialInformation({
  params,
}: {
  params: { locale: string }
}) {
  const { locale } = params

  const response = await getFinancialInfos(locale)

  return <FinancialInformationPage financialInformationData={response.data} />
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
    title: t('FinancialInformation.Title'),
    description: t('FinancialInformation.Description'),
    openGraph: {
      title: t('FinancialInformation.Title'),
      description: t('FinancialInformation.Description'),
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
