import { cn } from '@/libs/util'
import { BackgroundProps } from './interface'

export function Background({ children, className }: BackgroundProps) {
  return (
    <section
      className={cn(
        'bg-[url("/background.jpeg")] bg-center bg-cover',
        className
      )}
    >
      {children}
    </section>
  )
}
