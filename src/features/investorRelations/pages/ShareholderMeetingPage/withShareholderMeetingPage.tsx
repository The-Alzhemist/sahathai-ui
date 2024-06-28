import { FunctionComponentType } from '@/models/FunctionComponentType'

export function withShareholderMeetingPage(
  Component: React.FC<FunctionComponentType>
) {
  function WithShareholderMeetingPage() {
    return <Component />
  }

  return WithShareholderMeetingPage
}
