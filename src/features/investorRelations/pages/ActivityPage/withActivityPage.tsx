import { FunctionComponentType } from '@/models/FunctionComponentType'
import { GoodCorporatePageProps } from '@/features/investorRelations/pages/GoodCorporatePage/interface'
import { ActivityPageProps } from '@/features/investorRelations/pages/ActivityPage/interface'

export function withActivityPage(
  Component: React.FC<ActivityPageProps>
) {
  function withShareHolder(props:ActivityPageProps) {
    return <Component {...props} />
  }

  return withShareHolder
}
