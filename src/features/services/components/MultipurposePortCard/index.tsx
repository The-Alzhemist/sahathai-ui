import { Animation } from '@/components/Animation'
import { cn } from '@/libs/util'
import { MultipurposePortCardProps } from './interface'

export function MultipurposePortCard({
  className,
  children,
}: MultipurposePortCardProps) {
  return (
    <Animation
      className={cn(
        'flex flex-wrap gap-[38px] p-[24px] shadow-6 rounded-[8px]',
        className
      )}
    >
      {children}
    </Animation>
  )
}
