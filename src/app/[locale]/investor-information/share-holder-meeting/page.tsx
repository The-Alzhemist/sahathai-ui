import {
  ShareHolderMeetingPage,
} from '@/features/investorRelations/pages/ShareHolderMeetingPage/ShareHolderMeetingPage'
import { fetchStoryblokStory } from '@/utils/storyblok'

export const revalidate = 300

export default async function ShareHolderMeeting({
                                                   params,
                                                 }: {
  params: { locale: string }
}) {
  const { locale } = params

  const response = await fetchStoryblokStory(
    'invrester-relartion/90ee2b39-0565-41ce-bdb4-dad2425245a4',
    locale,
    'draft'
  )


  return <ShareHolderMeetingPage shareHolderMeetingData={response} />
}
