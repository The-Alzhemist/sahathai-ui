import { FunctionComponentType } from '@/models/FunctionComponentType'

export function withValueAddedServicesPage(
  Component: React.FC<FunctionComponentType>
) {
  function WithValueAddedServicesPage() {
    return <Component />
  }

  return WithValueAddedServicesPage
}
