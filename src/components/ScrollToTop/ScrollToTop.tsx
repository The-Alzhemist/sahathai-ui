'use client'

import { ArrowUpWhiteIcon } from '@/components/icons/ArrowUpWhiteIcon'
import { useEffect, useState } from 'react'

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  if (!visible) return null

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-20 right-5 z-10 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-red-300 text-white shadow-lg transition`}
      aria-label='Scroll to top'
    >
      <ArrowUpWhiteIcon />
    </button>
  )
}
