import { FunctionComponentType } from '@/models/FunctionComponentType'

export function withAnnualReportPage(
  Component: React.FC<FunctionComponentType>
) {
  function WithAnnualReportPage() {
    return <Component />
  }

  return WithAnnualReportPage
}
