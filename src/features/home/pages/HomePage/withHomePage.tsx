import { FunctionComponentType } from '@/models/FunctionComponentType'

export function withHomePage(Component: React.FC<FunctionComponentType>) {
  function WithHomePage() {
    return <Component />
  }

  return WithHomePage
}
