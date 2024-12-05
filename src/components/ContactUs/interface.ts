import { IconProps } from '../icons/interface'

export interface ContactUsProps {
  className?: string
  handleOnSubmitForm: (value: ContactUsForm) => void
}

export interface ContactUsAcceptProps {
  className?: string
}

export interface CardProps {
  Icon: React.FC<IconProps>
  title: string
  description: string
}

export interface ContactUsForm {
  name: string
  email: string
  phone: string
  message: string
  type: string
}
