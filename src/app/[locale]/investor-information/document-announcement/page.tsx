
import {
  DocumentAnnouncementPage
} from '@/features/investorRelations/pages/DocumentAnnouncementPage/DocumentAnnouncementPage'
import { fetchStoryblokStory } from '@/utils/storyblok'

export default async function DocumentAnnouncement({
                                                     params,
                                                   }: {
  params: { locale: string }
}) {

  const { locale } = params

  const response = await fetchStoryblokStory(
    'invrester-relartion/ed6b6179-86fc-473f-8188-81827cb9b1e8',
    locale,
    'draft'
  )

  return <DocumentAnnouncementPage  data={response} />
}
