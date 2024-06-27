import { PerformanceReportPage } from './PerformanceReportPage'
import { withPerformanceReportPage } from './withPerformanceReportPage'

const ConnectedPerformanceReportPage = withPerformanceReportPage(
  PerformanceReportPage
)

export { ConnectedPerformanceReportPage as PerformanceReportPage }
