import { FunctionComponentType } from '@/models/FunctionComponentType'
import { FinancialInformationPageProps } from '@/features/investorRelations/pages/FinancialInformationPage/interface'
import { GoodCorporatePageProps } from '@/features/investorRelations/pages/GoodCorporatePage/interface'

export function withGoodCorporatePage(
  Component: React.FC<GoodCorporatePageProps>
) {
  function withShareHolder(props:GoodCorporatePageProps) {
    return <Component {...props} />
  }


  return withShareHolder
}
