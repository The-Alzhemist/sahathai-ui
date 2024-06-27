import { FinancialReportsPage } from './FinancialReportsPage'
import { withFinancialReportsPage } from './withFinancialReportsPage'

const ConnectedFinancialReportsPage =
  withFinancialReportsPage(FinancialReportsPage)

export { ConnectedFinancialReportsPage as FinancialReportsPage }
