import { ShareHolderMeetingPage } from '@/features/investorRelations/pages/ShareHolderMeetingPage/ShareHolderMeetingPage'
import { fetchStoryblokStory } from '@/libs/storyblok/accordionsQuery'
import { getTranslations } from 'next-intl/server'

export default async function ShareHolderMeeting({
  params,
}: {
  params: { locale: string }
}) {
  const { locale } = params

  const response = await fetchStoryblokStory(
    'investor-relations/90ee2b39-0565-41ce-bdb4-dad2425245a4',
    locale,
    'published'
  )

  return <ShareHolderMeetingPage shareHolderMeetingData={response} />
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
          url: `https://sahathai-ui.vercel.app/seo/investor/investor-meta-img-${locale}.png`,
          width: 800,
          height: 600,
          alt: 'sahathai-investor-meta-image',
        },
      ],
    },
  }
}
