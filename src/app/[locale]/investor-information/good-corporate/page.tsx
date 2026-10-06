import { GoodCorporatePage } from '@/features/investorRelations/pages/GoodCorporatePage/GoodCorporatePage'
import { getCorporateGovernance } from '@/libs/strapi/corporateGovernance'
import { getTranslations } from 'next-intl/server'

export default async function GoodCorporate({
  params,
}: {
  params: { locale: string }
}) {
  const { locale } = params

  const response = await getCorporateGovernance(locale)

  return <GoodCorporatePage data={response.data} />
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
    title: t('GoodCorporate.Title'),
    description: t('GoodCorporate.Description'),
    openGraph: {
      title: t('GoodCorporate.Title'),
      description: t('GoodCorporate.Description'),
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
