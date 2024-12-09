import { boolean } from 'yup'

export interface CookieConsentFloatingBarProps {
  handleOnClickAccept: (isClickAccept: boolean) => void
  isOpen: boolean
}
