import { FunctionComponentType } from '@/models/FunctionComponentType'

export function withActivityPage(
  Component: React.FC<FunctionComponentType>
) {
  function withShareHolder() {
    return <Component />
  }

  return withShareHolder
}
