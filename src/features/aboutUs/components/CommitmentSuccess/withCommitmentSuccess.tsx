import { FunctionComponentType } from '@/models/FunctionComponentType'

export function withCommitmentSuccess(
  Component: React.FC<FunctionComponentType>
) {
  function WithCommitmentSuccess() {
    return <Component />
  }

  return WithCommitmentSuccess
}
