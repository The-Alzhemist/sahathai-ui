import { FunctionComponentType } from '@/models/FunctionComponentType'

export function withPerformanceReportPage(
  Component: React.FC<FunctionComponentType>
) {
  function withShareHolder() {
    return <Component />
  }

  return withShareHolder
}
