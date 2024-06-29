import { FunctionComponentType } from '@/models/FunctionComponentType'

export function withInvestorInformationPage(
  Component: React.FC<FunctionComponentType>
) {
  function WithInvestorInformationPage() {
    return <Component />
  }

  return WithInvestorInformationPage
}
