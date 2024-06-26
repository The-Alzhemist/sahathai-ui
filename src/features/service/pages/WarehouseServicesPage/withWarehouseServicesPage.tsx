import { FunctionComponentType } from '@/models/FunctionComponentType'

export function withWarehouseServicesPage(
  Component: React.FC<FunctionComponentType>
) {
  function WithWarehouseServicesPage() {
    return <Component />
  }

  return WithWarehouseServicesPage
}
