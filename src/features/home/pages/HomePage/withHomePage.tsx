import { FunctionComponentType } from '@/models/FunctionComponentType'

export function withHomePage(Component: React.FC<FunctionComponentType>) {
  function WithHomePage() {
    const newProps = {}
    return <Component {...newProps} />
  }

  return WithHomePage
}


