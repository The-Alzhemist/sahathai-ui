import {
  InvestorInformationPageAcceptProps,
  InvestorInformationPageProps,
} from '@/features/investorRelations/pages/InvestorInformationPage/interface'
export function withInvestorInformationPage(
  Component: React.FC<InvestorInformationPageProps>
) {
  function WithInvestorInformationPage({
    stockData,
    annualReportData,
  }: InvestorInformationPageAcceptProps) {
    const props = {
      stockData,
      annualReportData,
    }

    return <Component {...props} />
  }

  return WithInvestorInformationPage
}
