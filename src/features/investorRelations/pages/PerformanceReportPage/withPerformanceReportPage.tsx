import { FunctionComponentType } from '@/models/FunctionComponentType'
import { ShareHolderMeetingPageProps } from '@/features/investorRelations/pages/ShareHolderMeetingPage/interface'
import { PerformanceReportPageProps } from '@/features/investorRelations/pages/PerformanceReportPage/interface'

export function withPerformanceReportPage(
  Component: React.FC<PerformanceReportPageProps>
) {
  function WithPerformanceReport(props: PerformanceReportPageProps) {
    return <Component {...props} />
  }

  return WithPerformanceReport
}
