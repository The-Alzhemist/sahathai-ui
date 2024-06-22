import { FunctionComponentType } from '@/models/FunctionComponentType'

export function withAntiCorruptionPolicyPage(
  Component: React.FC<FunctionComponentType>
) {
  function WithAntiCorruptionPolicyPage() {
    return <Component />
  }

  return WithAntiCorruptionPolicyPage
}
