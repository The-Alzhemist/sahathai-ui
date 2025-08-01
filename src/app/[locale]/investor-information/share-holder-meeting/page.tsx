import {
  ShareHolderMeetingPage,
} from '@/features/investorRelations/pages/ShareHolderMeetingPage/ShareHolderMeetingPage'

export const revalidate = 300

export default async function ShareHolderMeeting({
                                                   params,
                                                 }: {
  params: { locale: string }
}) {
  const { locale } = params

  const res = await fetch(
    `https://api.storyblok.com/v2/cdn/stories/invrester-relartion/aaaaaa?version=draft&token=H1wfrTArHm3VE441H8WQ5wtt&language=${locale}`,
    {
      next: { revalidate },
    }
  )

  const data = await res.json()

  return <ShareHolderMeetingPage shareHolderMeetingData={data} />
}
