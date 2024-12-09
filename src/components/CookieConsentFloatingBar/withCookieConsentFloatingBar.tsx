import { CookieConsentFloatingBarProps } from '@/components/CookieConsentFloatingBar/interface'
import React, { useState } from 'react'

const withCookieConsentFloatingBar = (
  Component: React.FC<CookieConsentFloatingBarProps>
) => {
  const Hoc = () => {
    const [isOpen, setIsOpen] = useState(true)

    const handleOnClickAccept = (isClickAccept: boolean) => {
      setIsOpen(false)
    }

    const newProps: CookieConsentFloatingBarProps = {
      handleOnClickAccept,
      isOpen,
    }
    return <Component {...newProps} />
  }

  return Hoc
}
export default withCookieConsentFloatingBar
