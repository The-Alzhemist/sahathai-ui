import {
  ContactUsAcceptProps,
  ContactUsProps,
} from '@/components/ContactUs/interface'

import { useRouter } from '@/libs/intl/navigation'

const withContactUs = (Component: React.FC<ContactUsProps>) => {
  const Hoc = ({ className, isShowMenuBar }: ContactUsAcceptProps) => {
    useRouter()

    const newProps: ContactUsProps = {
      className,
      isShowMenuBar,
    }
    return <Component {...newProps} />
  }

  return Hoc
}
export default withContactUs
