import { FunctionComponentType } from '@/models/FunctionComponentType'
import { useRouter } from '@/libs/intl/navigation'
import { useSearchParams } from 'next/navigation'
export function withServicesPage(Component: React.FC<FunctionComponentType>) {
  function WithServicesPage() {
    useRouter() //NOTE:
    console.log('withServicesPage called')
    return <Component />
  }

  return WithServicesPage
}
