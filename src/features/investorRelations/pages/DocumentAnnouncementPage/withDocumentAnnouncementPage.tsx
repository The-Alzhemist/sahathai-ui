import { FunctionComponentType } from '@/models/FunctionComponentType'

export function withDocumentAnnouncementPage(
  Component: React.FC<FunctionComponentType>
) {
  function withShareHolder() {
    return <Component />
  }

  return withShareHolder
}
