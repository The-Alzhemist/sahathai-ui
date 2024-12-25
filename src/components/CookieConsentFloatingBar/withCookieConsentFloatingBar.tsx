import { LOCAL_STORAGE_PDPA_KEY } from '@/components/CookieConsentFloatingBar/config'
import { CookieConsentFloatingBarProps } from '@/components/CookieConsentFloatingBar/interface'
import React, { useEffect, useState } from 'react'
import { addDays, format, isAfter, startOfDay } from 'date-fns'
import TagManager from 'react-gtm-module'
import { GTM_STAGING } from '@/config/environtment'

const withCookieConsentFloatingBar = (
  Component: React.FC<CookieConsentFloatingBarProps>
) => {
  const Hoc = () => {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
      setIsOpen(hasConsentExpired())
    }, [])

    const handleOnClickAccept = (isClickAccept: boolean) => {
      setIsOpen(false)

      if (isClickAccept) {
        // Set expiration date to today + 30 days
        const today = new Date()
        const expirationDate = addDays(today, 30)
        const cookieConsentData = JSON.stringify({
          value: 'true',
          expires: expirationDate,
        })

        localStorage.setItem(LOCAL_STORAGE_PDPA_KEY, cookieConsentData)
        TagManager.initialize({ gtmId: GTM_STAGING })
      }
    }

    const hasConsentExpired = () => {
      const consentData = localStorage.getItem(LOCAL_STORAGE_PDPA_KEY)
      if (!consentData) return true

      const { expires } = JSON.parse(consentData)
      const currentDate = startOfDay(new Date())
      const expirationDate = startOfDay(new Date(expires))

      // console.log('Current Date:', format(currentDate, 'yyyy-MM-dd'))
      // console.log('Expiration Date:', format(expirationDate, 'yyyy-MM-dd'))

      // Check if the current date is after the expiration date
      return isAfter(currentDate, expirationDate)
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
