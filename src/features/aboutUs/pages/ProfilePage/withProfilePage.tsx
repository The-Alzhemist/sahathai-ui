import { FunctionComponentType } from '@/models/FunctionComponentType'

export function withProfilePage(Component: React.FC<FunctionComponentType>) {
  function WithProfilePage() {
    return <Component />
  }

  return WithProfilePage
}
