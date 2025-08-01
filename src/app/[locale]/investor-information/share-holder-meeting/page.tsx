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
    'invrester-relartion/shareholdermeetingpage',
    locale,
    'draft'
  )


  return <ShareHolderMeetingPage shareHolderMeetingData={response} />
}
