'use client'

import { createContext, useContext, useEffect, useState } from 'react'

const ScrollVisibleContext = createContext({
  isVisible: true,
})

export const ScrollVisibleProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (!window) return
    let lastScrollY = window.scrollY
    const controlNavbar = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      lastScrollY = currentScrollY
    }
    window.addEventListener('scroll', controlNavbar, { passive: true })

    return () => window.removeEventListener('scroll', controlNavbar)
  }, [])

  return (
    <ScrollVisibleContext.Provider
      value={{
        isVisible,
      }}
    >
      {children}
    </ScrollVisibleContext.Provider>
  )
}
export const useScrollVisible = () => useContext(ScrollVisibleContext)
