import { EServicePageProps } from '@/app/[locale]/e-service/interface'
import { FunctionComponentType } from '@/models/FunctionComponentType'

export function withEServicePage(Component: React.FC<EServicePageProps>) {
  function WithEServicePage(props: EServicePageProps) {
    return <Component {...props} />
  }

  return WithEServicePage
}
