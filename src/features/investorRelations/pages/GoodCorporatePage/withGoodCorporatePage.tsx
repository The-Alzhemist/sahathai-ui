import { FunctionComponentType } from '@/models/FunctionComponentType'

export function withGoodCorporatePage(
  Component: React.FC<FunctionComponentType>
) {
  function withShareHolder() {
    return <Component />
  }

  return withShareHolder
}
