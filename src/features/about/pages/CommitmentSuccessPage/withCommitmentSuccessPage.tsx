import { FunctionComponentType } from '@/models/FunctionComponentType'

export function withCommitmentSuccessPage(
  Component: React.FC<FunctionComponentType>
) {
  function WithCommitmentSuccessPage() {
    return <Component />
  }

  return WithCommitmentSuccessPage
}
