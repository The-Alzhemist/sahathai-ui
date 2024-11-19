import { FunctionComponentType } from '@/models/FunctionComponentType'

export function withGroundContainerTransportationServicesPage(
  Component: React.FC<FunctionComponentType>
) {
  function Hoc() {
    return <Component />
  }

  return Hoc
}
