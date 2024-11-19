import { FunctionComponentType } from '@/models/FunctionComponentType'

export function withContainerMaintenancePage(
  Component: React.FC<FunctionComponentType>
) {
  function Hoc() {
    return <Component />
  }

  return Hoc
}
