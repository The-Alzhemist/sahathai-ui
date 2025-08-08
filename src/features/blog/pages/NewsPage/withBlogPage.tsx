import { FunctionComponentType } from '@/models/FunctionComponentType'

export function withBlogPage(Component: React.FC<FunctionComponentType>) {
  function WithBlogPage() {
    return <Component />
  }

  return WithBlogPage
}
