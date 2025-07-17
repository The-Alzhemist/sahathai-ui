
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
import {
  withSustainableDevelopmentPage
} from '@/features/investorRelations/pages/SustainableDevelopmentPage/withSustainableDevelopmentPage'
import {
  SustainableDevelopmentPage
} from '@/features/investorRelations/pages/SustainableDevelopmentPage/SustainableDevelopmentPage'


const Connected = withSustainableDevelopmentPage(SustainableDevelopmentPage)

export { Connected as ShareHolderPage }
