import { ActivityPage } from '@/features/investorRelations/pages/ActivityPage/ActivityPage'
import { getInvestorActivities } from '@/libs/strapi/investorActivity'
import { getTranslations } from 'next-intl/server'

export default async function Activity({
  params,
}: {
  params: { locale: string }
}) {
  const { locale } = params

  const response = await getInvestorActivities(locale)

  return <ActivityPage data={response.data} />
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
    title: t('Activity.Title'),
    description: t('Activity.Description'),
    openGraph: {
      title: t('Activity.Title'),
      description: t('Activity.Description'),
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
