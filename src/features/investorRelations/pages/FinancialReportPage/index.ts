import { FinancialReportPage } from './FinancialReportPage'
import { withFinancialReportPage } from './withFinancialReportPage'

const ConnectedFinancialReportPage =
  withFinancialReportPage(FinancialReportPage)

export { ConnectedFinancialReportPage as FinancialReportPage }
