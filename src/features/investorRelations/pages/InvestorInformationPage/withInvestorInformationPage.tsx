import {
  InvestorInformationPageAcceptProps,
  InvestorInformationPageProps,
} from '@/features/investorRelations/pages/InvestorInformationPage/interface'
export function withInvestorInformationPage(
  Component: React.FC<InvestorInformationPageProps>
) {
  function WithInvestorInformationPage({
    stockData,
  }: InvestorInformationPageAcceptProps) {
    const props = {
      stockData,
    }

    return <Component {...props} />
  }

  return WithInvestorInformationPage
}
