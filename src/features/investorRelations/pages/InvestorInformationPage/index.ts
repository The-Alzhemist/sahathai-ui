import { InvestorInformationPage } from './InvestorInformationPage'
import { withInvestorInformationPage } from './withInvestorInformationPage'

const ConnectedInvestorInformationPage = withInvestorInformationPage(
  InvestorInformationPage
)

export { ConnectedInvestorInformationPage as InvestorInformationPage }
