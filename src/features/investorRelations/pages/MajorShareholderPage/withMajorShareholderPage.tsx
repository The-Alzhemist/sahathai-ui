import { FunctionComponentType } from '@/models/FunctionComponentType'

export function withMajorShareholderPage(
  Component: React.FC<FunctionComponentType>
) {
  function WithMajorShareholderPage() {
    return <Component />
  }

  return WithMajorShareholderPage
}
