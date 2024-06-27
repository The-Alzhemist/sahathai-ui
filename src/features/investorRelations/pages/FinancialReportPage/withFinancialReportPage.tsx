import { FunctionComponentType } from '@/models/FunctionComponentType'

export function withFinancialReportPage(
  Component: React.FC<FunctionComponentType>
) {
  function WithFinancialReportPage() {
    return <Component />
  }

  return WithFinancialReportPage
}
