import { REVALIDATE_TIME } from '@/config/environtment'
import { DocumentAnnouncementPage } from '@/features/investorRelations/pages/DocumentAnnouncementPage/DocumentAnnouncementPage'
import { fetchStoryblokStory } from '@/libs/storyblok/accordionsQuery'
import { StoryblokStoryResponse } from '@/libs/storyblok/types'
import { getTranslations } from 'next-intl/server'

export default async function DocumentAnnouncement({
  params,
}: {
  params: { locale: string }
}) {
  const { locale } = params

  const response: StoryblokStoryResponse = await fetchStoryblokStory(
    'investor-relations/ed6b6179-86fc-473f-8188-81827cb9b1e8',
    locale,
    'published',
    REVALIDATE_TIME,
    'document-announcement'
  )

  return <DocumentAnnouncementPage data={response} />
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
    title: t('DocumentAnnouncement.Title'),
    description: t('DocumentAnnouncement.Description'),
    openGraph: {
      title: t('DocumentAnnouncement.Title'),
      description: t('DocumentAnnouncement.Description'),
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
