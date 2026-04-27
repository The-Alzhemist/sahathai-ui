import { REVALIDATE_TIME } from '@/config/environtment'
import { RevalidateTag } from '@/enums/CacheEnum'
import { SetExchangeAnnouncementPage } from '@/features/investorRelations/pages/SetExchangeAnnouncementPage/SetExchangeAnnouncementPage'
import { fetchStoryblokStory } from '@/libs/storyblok/accordionsQuery'
import { StoryblokStoryResponse } from '@/libs/storyblok/types'
import { getTranslations } from 'next-intl/server'

export default async function SetExchangeAnnouncement({
  params,
}: {
  params: { locale: string }
}) {
  const { locale } = params

  const response: StoryblokStoryResponse = await fetchStoryblokStory(
    'investor-relations/a7763650-2514-4a2d-916a-c21512aea1a5',
    locale,
    'published',
    REVALIDATE_TIME,
    RevalidateTag.SET_EXCHANGE_ANNOUNCEMENT
  )
  return <SetExchangeAnnouncementPage data={response} />
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
