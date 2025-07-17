
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
import {
  withPerformanceReportPage
} from '@/features/investorRelations/pages/PerformanceReportPage/withPerformanceReportPage'
import { PerformanceReportPage } from '@/features/investorRelations/pages/PerformanceReportPage/PerformanceReportPage'


const Connected = withPerformanceReportPage(PerformanceReportPage)

export { Connected as ShareHolderPage }
