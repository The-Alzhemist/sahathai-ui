import { FunctionComponentType } from '@/models/FunctionComponentType'

import { useRouter } from '@/libs/intl/navigation'
export function withInfrastructureContainersPage(
  Component: React.FC<FunctionComponentType>
) {
  function WithInfrastructureContainersPage() {
    const router = useRouter()
    return <Component />
  }

  return WithInfrastructureContainersPage
}
