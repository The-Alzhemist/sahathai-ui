import { FunctionComponentType } from '@/models/FunctionComponentType'

export function withCodeConductPage(
  Component: React.FC<FunctionComponentType>
) {
  function WithCodeConductPage() {
    return <Component />
  }

  return WithCodeConductPage
}
