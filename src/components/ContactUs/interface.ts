import { IconProps } from '../icons/interface'

export interface ContactUsProps {
  className?: string
}

export interface CardProps {
  Icon: React.FC<IconProps>
  title: string
  description: string
}
