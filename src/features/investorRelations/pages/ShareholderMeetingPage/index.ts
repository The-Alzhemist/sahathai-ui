import { ShareholderMeetingPage } from './ShareholderMeetingPage'
import { withShareholderMeetingPage } from './withShareholderMeetingPage'

const ConnectedShareholderMeetingPage = withShareholderMeetingPage(
  ShareholderMeetingPage
)

export { ConnectedShareholderMeetingPage as ShareholderMeetingPage }
