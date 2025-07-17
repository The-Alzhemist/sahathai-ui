import { FunctionComponentType } from '@/models/FunctionComponentType'

export function withSustainableDevelopmentPage(
  Component: React.FC<FunctionComponentType>
) {
  function withShareHolder() {
    return <Component />
  }

  return withShareHolder
}
