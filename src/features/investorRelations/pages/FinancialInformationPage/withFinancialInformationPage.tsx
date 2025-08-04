import { FunctionComponentType } from '@/models/FunctionComponentType'
import { FinancialInformationPageProps } from '@/features/investorRelations/pages/FinancialInformationPage/interface'

export function withFinancialInformationPage(
  Component: React.FC<FinancialInformationPageProps>
) {
  function withShareHolder(props:FinancialInformationPageProps) {
    return <Component {...props} />
  }

  return withShareHolder
}
