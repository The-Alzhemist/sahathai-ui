import { FunctionComponentType } from '@/models/FunctionComponentType'

export function withFinancialReportsPage(
  Component: React.FC<FunctionComponentType>
) {
  function WithFinancialReportsPage() {
    return <Component />
  }

  return WithFinancialReportsPage
}
