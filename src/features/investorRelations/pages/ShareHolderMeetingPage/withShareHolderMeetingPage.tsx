import { FunctionComponentType } from '@/models/FunctionComponentType'

export function withShareHolderMeetingPage(
  Component: React.FC<FunctionComponentType>
) {
  function withShareHolder() {
    return <Component />
  }

  return withShareHolder
}
