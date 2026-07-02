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
  type: 'contact-form' | 'fraud-complaint-form'
}

export interface ContactUsFormProps {
  hideContactForm?: boolean
}
