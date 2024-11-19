import { FunctionComponentType } from '@/models/FunctionComponentType'

export function withCommercialDockPage(
  Component: React.FC<FunctionComponentType>
) {
  function Hoc() {
    return <Component />
  }

  return Hoc
}
