import { FunctionComponentType } from '@/models/FunctionComponentType'

export function withTechnologyEquipmentPage(
  Component: React.FC<FunctionComponentType>
) {
  function WithTechnologyEquipmentPage() {
    return <Component />
  }

  return WithTechnologyEquipmentPage
}
