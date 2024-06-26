import { FunctionComponentType } from '@/models/FunctionComponentType'

export function withNewsPage(Component: React.FC<FunctionComponentType>) {
  function WithNewPage() {
    return <Component />
  }

  return WithNewPage
}
