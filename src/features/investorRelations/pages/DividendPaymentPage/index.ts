import { DividendPaymentPage } from './DividendPaymentPage'
import { withDividendPaymentPage } from './withDividendPaymentPage'

const ConnectedDividendPaymentPage =
  withDividendPaymentPage(DividendPaymentPage)

export { ConnectedDividendPaymentPage as DividendPaymentPage }
