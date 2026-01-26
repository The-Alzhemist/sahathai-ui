'use client'

import { LOCAL_STORAGE_PDPA_KEY } from '@/components/CookieConsentFloatingBar/config'
import { CookieConsentFloatingBarProps } from './interface'
import { useEffect, useState } from 'react'
import { addDays, isAfter, startOfDay } from 'date-fns'
import { updateGtmConsent } from '@/utils/gtmConsent'

const withCookieConsentFloatingBar = (
  Component: React.FC<CookieConsentFloatingBarProps>
) => {
  const Hoc = () => {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
      const expired = hasConsentExpired()
      setIsOpen(expired)

      //if expired = false, means you accept
      updateGtmConsent(!expired)
    }, [])

    const handleOnClickAccept = (isClickAccept: boolean) => {
      setIsOpen(false)

      if (isClickAccept) {
        const expirationDate = addDays(new Date(), 30)

        localStorage.setItem(
          LOCAL_STORAGE_PDPA_KEY,
          JSON.stringify({
            value: 'true',
            expires: expirationDate,
          })
        )

        updateGtmConsent(true)
      } else {
        updateGtmConsent(false)
      }
    }

    const hasConsentExpired = () => {
      const consentData = localStorage.getItem(LOCAL_STORAGE_PDPA_KEY)
      if (!consentData) return true

      const { expires } = JSON.parse(consentData)
      return isAfter(startOfDay(new Date()), startOfDay(new Date(expires)))
    }

    return (
      <Component isOpen={isOpen} handleOnClickAccept={handleOnClickAccept} />
    )
  }

  return Hoc
}

export default withCookieConsentFloatingBar
