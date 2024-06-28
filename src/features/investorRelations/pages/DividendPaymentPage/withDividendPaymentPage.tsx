import { FunctionComponentType } from '@/models/FunctionComponentType'

export function withDividendPaymentPage(
  Component: React.FC<FunctionComponentType>
) {
  function WithDividendPaymentPage() {
    return <Component />
  }

  return WithDividendPaymentPage
}
