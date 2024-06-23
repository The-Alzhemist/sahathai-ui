import { FunctionComponentType } from '@/models/FunctionComponentType'

export function withHarborOperatingSystemPage(
  Component: React.FC<FunctionComponentType>
) {
  function WithHarborOperatingSystemPage() {
    return <Component />
  }

  return WithHarborOperatingSystemPage
}
