import { DocumentAnnouncementPage } from '@/features/investorRelations/pages/DocumentAnnouncementPage/DocumentAnnouncementPage'
import { fetchStoryblokStory } from '@/libs/storyblok/accordionsQuery'
import { getTranslations } from 'next-intl/server'

export default async function DocumentAnnouncement({
  params,
}: {
  params: { locale: string }
}) {
  const { locale } = params

  const response = await fetchStoryblokStory(
    'investor-relations/ed6b6179-86fc-473f-8188-81827cb9b1e8',
    locale,
    'published'
  )

  return <DocumentAnnouncementPage data={response} />
}

export async function generateMetadata() {
  const t = await getTranslations('MetaData')

  return {
    title: t('DocumentAnnouncement.Title'),
    description: t('DocumentAnnouncement.Description'),
    openGraph: {
      title: t('DocumentAnnouncement.Title'),
      description: t('DocumentAnnouncement.Description'),
    },
  }
}
