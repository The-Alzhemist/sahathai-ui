import { useState, useEffect, useRef } from 'react'
import { cn } from '@/libs/util'

export function useMobileSidebarAnimation(isVisible: boolean) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [animationClassName, setAnimationClassName] = useState(
    'transition-all opacity-0 duration-300'
  )

  useEffect(() => {
    if (isVisible) {
      setAnimationClassName(cn('transition-all opacity-100 duration-500'))
    } else {
      setAnimationClassName(cn('transition-all opacity-0 duration-500'))
    }
  }, [isVisible])

  return { ref, animationClassName }
}
