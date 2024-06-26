import { FunctionComponentType } from '@/models/FunctionComponentType'

export function withServiceForm(Component: React.FC<FunctionComponentType>) {
  function WithServiceForm() {
    return <Component />
  }

  return WithServiceForm
}
