import { FunctionComponentType } from '@/models/FunctionComponentType'

export function witContainerServicesPage(
  Component: React.FC<FunctionComponentType>
) {
  function Hoc() {
    return <Component />
  }

  return Hoc
}
