import { useRouter } from '@/libs/intl/navigation'
import { FunctionComponentType } from '@/models/FunctionComponentType'

export function withJoinUsPage(Component: React.FC<FunctionComponentType>) {
  function WithJoinUsPage() {
    useRouter()
    return <Component />
  }

  return WithJoinUsPage
}
