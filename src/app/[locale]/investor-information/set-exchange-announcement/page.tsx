import { SetExchangeAnnouncementPage } from '@/features/investorRelations/pages/SetExchangeAnnouncementPage/SetExchangeAnnouncementPage'
import { getSetAnnouncements } from '@/libs/strapi/setAnnouncement'
import { getTranslations } from 'next-intl/server'

export default async function SetExchangeAnnouncement({
  params,
}: {
  params: { locale: string }
}) {
  const { locale } = params

  const response = await getSetAnnouncements(locale)

  return <SetExchangeAnnouncementPage data={response.data} />
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
    title: t('SetExchangeAnnouncement.Title'),
    description: t('SetExchangeAnnouncement.Description'),
    openGraph: {
      title: t('SetExchangeAnnouncement.Title'),
      description: t('SetExchangeAnnouncement.Description'),
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
