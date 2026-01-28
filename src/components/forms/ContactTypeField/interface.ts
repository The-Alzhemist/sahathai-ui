import { IconProps } from '@/components/icons/interface'
import { ContactUsTypeEnum } from '@/enums/ContactUsEnum'

export interface ContactTypeFieldProps
  extends React.HTMLProps<HTMLInputElement> {
  name: string
  className?: string
  text: React.ReactNode
  Icon: React.FC<IconProps>
  contactUsType: ContactUsTypeEnum
}
