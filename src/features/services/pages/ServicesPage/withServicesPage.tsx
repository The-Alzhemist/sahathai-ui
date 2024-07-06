import { FunctionComponentType } from '@/models/FunctionComponentType'

export function withServicesPage(Component: React.FC<FunctionComponentType>) {
  function WithServicesPage() {
    return <Component />
  }

  return WithServicesPage
}
