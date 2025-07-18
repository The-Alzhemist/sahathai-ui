
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
import { withGoodCorporatePage } from '@/features/investorRelations/pages/GoodCorporatePage/withGoodCorporatePage'
import { GoodCorporatePage } from '@/features/investorRelations/pages/GoodCorporatePage/GoodCorporatePage'


const Connected = withGoodCorporatePage(GoodCorporatePage)

export { Connected as ShareHolderPage }
