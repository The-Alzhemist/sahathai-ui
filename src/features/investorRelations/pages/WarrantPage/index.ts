
import {
  withShareHolderMeetingPage
} from '@/features/investorRelations/pages/ShareHolderMeetingPage/withShareHolderMeetingPage'
import {
  ShareHolderMeetingPage
} from '@/features/investorRelations/pages/ShareHolderMeetingPage/ShareHolderMeetingPage'
import { withWarrantPage } from '@/features/investorRelations/pages/WarrantPage/withWarrantPage'
import { WarrantPage } from '@/features/investorRelations/pages/WarrantPage/WarrantPage'


const Connected = withWarrantPage(WarrantPage)

export { Connected as ShareHolderPage }
