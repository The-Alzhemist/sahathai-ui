import { FunctionComponentType } from '@/models/FunctionComponentType'

export function withSustainabilityManagementPage(
  Component: React.FC<FunctionComponentType>
) {
  function WithSustainabilityManagementPage() {
    return <Component />
  }

  return WithSustainabilityManagementPage
}
