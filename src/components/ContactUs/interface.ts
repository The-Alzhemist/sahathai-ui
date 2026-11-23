import { ContactUsTypeEnum } from '@/enums/ContactUsEnum'
import { IconProps } from '../icons/interface'

export interface ContactUsProps {
  className?: string
  isShowMenuBar?: boolean
}

export interface ContactUsAcceptProps {
  className?: string
  isShowMenuBar?: boolean
}

export interface CardProps {
  Icon: React.FC<IconProps>
  title: string
  description: string
  contactUsType: string
}

export interface ContactUsFormType {
  name: string
  email: string
  phone: string
  message: string
  type: ContactUsTypeEnum
}

export type ContactUsFormVariant =
  | 'default'
  | 'complaint'
  | 'ir'
  | 'companySecretary'

export interface ContactUsFormProps {
  variant?: ContactUsFormVariant
}
