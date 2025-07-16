import { useEffect, useState } from 'react'


export const useHideOnScroll = (): boolean => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
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

  return isVisible
}