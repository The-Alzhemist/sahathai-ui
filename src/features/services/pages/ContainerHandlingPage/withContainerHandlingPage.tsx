import { FunctionComponentType } from '@/models/FunctionComponentType'

export function withContainerHandlingPage(
  Component: React.FC<FunctionComponentType>
) {
  function Hoc() {
    return <Component />
  }

  return Hoc
}
