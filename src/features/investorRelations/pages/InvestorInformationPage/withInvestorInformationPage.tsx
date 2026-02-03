import {
  InvestorInformationPageAcceptProps,
  InvestorInformationPageProps,
} from '@/features/investorRelations/pages/InvestorInformationPage/interface'
import { useRouter } from '@/libs/intl/navigation'
export function withInvestorInformationPage(
  Component: React.FC<InvestorInformationPageProps>
) {
  function WithInvestorInformationPage({
    stockData,
  }: InvestorInformationPageAcceptProps) {
    const router = useRouter()

    const props = {
      stockData,
    }

    return <Component {...props} />
  }

  return WithInvestorInformationPage
}
