import { ShareHolderMeetingPageProps } from './interface'

export function withShareHolderMeetingPage(
  Component: React.FC<ShareHolderMeetingPageProps>
) {
  function WithShareHolderMeeting(props: ShareHolderMeetingPageProps) {
    return <Component {...props} />
  }

  return WithShareHolderMeeting
}
