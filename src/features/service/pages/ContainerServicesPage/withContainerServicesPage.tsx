import { FunctionComponentType } from '@/models/FunctionComponentType'

export function withContainerServicesPage(
  Component: React.FC<FunctionComponentType>
) {
  function WithContainerServicesPage() {
    return <Component />
  }

  return WithContainerServicesPage
}
