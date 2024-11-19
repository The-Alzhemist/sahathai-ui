import { FunctionComponentType } from '@/models/FunctionComponentType'

export function withBargeServicesPage(
  Component: React.FC<FunctionComponentType>
) {
  function Hoc() {
    return <Component />
  }

  return Hoc
}
