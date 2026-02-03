import { EServicePageProps } from '@/app/[locale]/e-service/interface'
import { useRouter } from '@/libs/intl/navigation'

export function withEServicePage(Component: React.FC<EServicePageProps>) {
  function WithEServicePage(props: EServicePageProps) {
    const router = useRouter()
    return <Component {...props} />
  }

  return WithEServicePage
}
