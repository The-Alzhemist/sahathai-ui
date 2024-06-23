import { FunctionComponentType } from '@/models/FunctionComponentType'

export function withOperationGuidelinesPage(
  Component: React.FC<FunctionComponentType>
) {
  function WithOperationGuidelinesPage() {
    return <Component />
  }

  return WithOperationGuidelinesPage
}
