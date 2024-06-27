import { FunctionComponentType } from '@/models/FunctionComponentType'

export function withAboutUsVideoPage(
  Component: React.FC<FunctionComponentType>
) {
  function WithAboutUsVideoPage() {
    return <Component />
  }

  return WithAboutUsVideoPage
}
