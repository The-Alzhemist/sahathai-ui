import { FunctionComponentType } from '@/models/FunctionComponentType'

export function withInfrastructureContainersPage(
  Component: React.FC<FunctionComponentType>
) {
  function WithInfrastructureContainersPage() {
    return <Component />
  }

  return WithInfrastructureContainersPage
}
