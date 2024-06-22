import { FunctionComponentType } from '@/models/FunctionComponentType'

export function withVisionMissionValuesPage(
  Component: React.FC<FunctionComponentType>
) {
  function WithVisionMissionValuesPage() {
    return <Component />
  }

  return WithVisionMissionValuesPage
}
