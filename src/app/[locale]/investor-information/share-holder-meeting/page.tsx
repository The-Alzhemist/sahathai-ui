import { ShareHolderMeetingPage } from '@/features/investorRelations/pages/ShareHolderMeetingPage/ShareHolderMeetingPage'
import { getShareHolderMeetings } from '@/libs/strapi/shareHolderMeeting'
import { getTranslations } from 'next-intl/server'

export default async function ShareHolderMeeting({
  params,
}: {
  params: { locale: string }
}) {
  const { locale } = params

  const response = await getShareHolderMeetings(locale)

  return <ShareHolderMeetingPage shareHolderMeetingData={response.data} />
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
    title: t('shareHolderMeeting.Title'),
    description: t('shareHolderMeeting.Description'),
    openGraph: {
      title: t('shareHolderMeeting.Title'),
      description: t('shareHolderMeeting.Description'),
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
