import { FunctionComponentType } from '@/models/FunctionComponentType'

export function withAboutUsPage(Component: React.FC<FunctionComponentType>) {
  function WithAboutUsPage() {
    return <Component />
  }

  return WithAboutUsPage
}
