import { FunctionComponentType } from '@/models/FunctionComponentType'

export function withPerformanceReportPage(
  Component: React.FC<FunctionComponentType>
) {
  function WithPerformanceReportPage() {
    return <Component />
  }

  return WithPerformanceReportPage
}
