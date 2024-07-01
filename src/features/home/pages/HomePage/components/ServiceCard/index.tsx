import { CheckCircleIcon } from '@/components/icons/CheckCircleIcon'
import { cn } from '@/libs/util'
import { ServiceCardProps } from './interface'

export function ServiceCard({
  title,
  description,
  className,
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        'grid grid-cols-[1fr_24px] gap-[8px] items-center pb-[24px]',
        className
      )}
    >
      <div className='w-full'>
        <h3 className='headline-4 text-blue-400'>{title}</h3>
        <p className='mt-[9px] body-2 text-black-60'>{description}</p>
      </div>
      <CheckCircleIcon width='24' height='24' />
    </div>
  )
}
