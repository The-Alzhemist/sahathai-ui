import { useInView } from 'framer-motion'
import { useRef } from 'react'

import { cn } from '@/libs/util'

export function useAnimation() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return {
    ref,
    animationClassName: cn('transition-all opacity-0 duration-1000', {
      'opacity-100': isInView,
    }),
  }
}
