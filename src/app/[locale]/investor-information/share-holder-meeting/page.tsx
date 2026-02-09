import { REVALIDATE_TIME } from '@/config/environtment'
import { RevalidateTag } from '@/enums/CacheEnum'
import { ShareHolderMeetingPage } from '@/features/investorRelations/pages/ShareHolderMeetingPage/ShareHolderMeetingPage'
import { fetchStoryblokStory } from '@/libs/storyblok/accordionsQuery'
import { StoryblokStoryResponse } from '@/libs/storyblok/types'
import { getTranslations } from 'next-intl/server'

export default async function ShareHolderMeeting({
  params,
}: {
  params: { locale: string }
}) {
  const { locale } = params

  const response: StoryblokStoryResponse = await fetchStoryblokStory(
    'investor-relations/90ee2b39-0565-41ce-bdb4-dad2425245a4',
    locale,
    'published',
    REVALIDATE_TIME,
    RevalidateTag.SHARE_HOLDER_MEETING
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
          url: `${process.env.DOMAIN_NAME}/seo/investor/investor-meta-img-${locale}.png`,
          width: 800,
          height: 600,
          alt: 'sahathai-investor-meta-image',
        },
      ],
    },
  }
}
