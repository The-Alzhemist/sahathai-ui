import { Animation } from '@/components/Animation'
import { cn } from '@/libs/util'
import { ContainerServicesCardProps } from './interface'

export function ContainerServicesCard({
  children,
  className,
}: ContainerServicesCardProps) {
  return (
    <Animation
      className={cn(
        'space-y-[40px] p-[24px] rounded-[8px] shadow-6',
        className
      )}
    >
      {children}
    </Animation>
  )
}
