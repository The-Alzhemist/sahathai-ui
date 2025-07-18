
import {
  withShareHolderMeetingPage
} from '@/features/investorRelations/pages/ShareHolderMeetingPage/withShareHolderMeetingPage'
import {
  ShareHolderMeetingPage
} from '@/features/investorRelations/pages/ShareHolderMeetingPage/ShareHolderMeetingPage'
import {
  withFinancialInformationPage
} from '@/features/investorRelations/pages/FinancialInformationPage/withFinancialInformationPage'
import {
  FinancialInformationPage
} from '@/features/investorRelations/pages/FinancialInformationPage/FinancialInformationPage'


const Connected = withFinancialInformationPage(FinancialInformationPage)

export { Connected as ShareHolderPage }
