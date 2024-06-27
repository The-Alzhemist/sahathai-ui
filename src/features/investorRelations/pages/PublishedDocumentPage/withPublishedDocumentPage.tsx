import { FunctionComponentType } from '@/models/FunctionComponentType'

export function withPublishedDocumentPage(
  Component: React.FC<FunctionComponentType>
) {
  function WithPublishedDocumentPage() {
    return <Component />
  }

  return WithPublishedDocumentPage
}
