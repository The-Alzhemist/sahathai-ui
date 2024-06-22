import { FunctionComponentType } from '@/models/FunctionComponentType'

export function withPortFacilitiesPage(
  Component: React.FC<FunctionComponentType>
) {
  function WithPortFacilitiesPage() {
    return <Component />
  }

  return WithPortFacilitiesPage
}
