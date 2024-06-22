import { FunctionComponentType } from '@/models/FunctionComponentType'

export function withBoardAndExecutivesPage(
  Component: React.FC<FunctionComponentType>
) {
  function WithBoardAndExecutivesPage() {
    return <Component />
  }

  return WithBoardAndExecutivesPage
}
