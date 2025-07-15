import { FunctionComponentType } from '@/models/FunctionComponentType'

export function withShareHolderPage(
  Component: React.FC<FunctionComponentType>
) {
  function withShareHolder() {
    return <Component />
  }

  return withShareHolder
}
