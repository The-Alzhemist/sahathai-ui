import { FunctionComponentType } from '@/models/FunctionComponentType'

export function withJoinUsPage(Component: React.FC<FunctionComponentType>) {
  function WithJoinUsPage() {
    return <Component />
  }

  return WithJoinUsPage
}
