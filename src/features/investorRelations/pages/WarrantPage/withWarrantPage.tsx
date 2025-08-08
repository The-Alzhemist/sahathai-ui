import { FunctionComponentType } from '@/models/FunctionComponentType'
import { GoodCorporatePageProps } from '@/features/investorRelations/pages/GoodCorporatePage/interface'
import { WarrantPageProps } from '@/features/investorRelations/pages/WarrantPage/interface'

export function withWarrantPage(
  Component: React.FC<WarrantPageProps>
) {
  function withWarrant(props:WarrantPageProps) {
    return <Component {...props} />
  }

  return withWarrant
}
