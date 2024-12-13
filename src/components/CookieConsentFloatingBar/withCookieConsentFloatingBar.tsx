import { LOCAL_STORAGE_PDPA_KEY } from '@/components/CookieConsentFloatingBar/config'
import { CookieConsentFloatingBarProps } from '@/components/CookieConsentFloatingBar/interface'
import React, { useState } from 'react'

const withCookieConsentFloatingBar = (
  Component: React.FC<CookieConsentFloatingBarProps>
) => {
  const Hoc = () => {
    const [isOpen, setIsOpen] = useState(true)

    const handleOnClickAccept = (isClickAccept: boolean) => {
      setIsOpen(false)

      if (isClickAccept) {
        // expirationDate = 30 วัน
        const expirationDate = new Date()
        expirationDate.setDate(expirationDate.getDate() + 30)

        const cookieConsentData = JSON.stringify({
          value: 'true',
          expires: expirationDate.getTime(),
        })

        typeof window !== 'undefined' &&
          localStorage.setItem(LOCAL_STORAGE_PDPA_KEY, cookieConsentData)
      }
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
