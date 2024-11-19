'use client'
import { useAnimation } from '@/hooks/useAnimation'
import { cn } from '@/libs/util'
import { AnimationProps } from './interface'

export function Animation({ children, className, onClick }: AnimationProps) {
  const { ref, animationClassName } = useAnimation()

  return (
    <section
      ref={ref}
      className={cn(className, animationClassName)}
      onClick={onClick}
    >
      {children}
    </section>
  )
}
