import { FunctionComponentType } from '@/models/FunctionComponentType'

export function withEServicePage(Component: React.FC<FunctionComponentType>) {
  function WithEServicePage() {
    return <Component />
  }

  return WithEServicePage
}
