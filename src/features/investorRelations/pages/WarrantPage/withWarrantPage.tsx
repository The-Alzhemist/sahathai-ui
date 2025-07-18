import { FunctionComponentType } from '@/models/FunctionComponentType'

export function withWarrantPage(
  Component: React.FC<FunctionComponentType>
) {
  function withShareHolder() {
    return <Component />
  }

  return withShareHolder
}
