import { cn } from '@/libs/util'
import { ShareholderCardProps, ItemProps } from './interface'

export function ShareholderCard({
  className,
  children,
  title,
}: ShareholderCardProps) {
  return (
    <div className={cn('w-full', className)}>
      <div className='p-[12px] bg-blue-400 text-white font-[500] text-[20] leading-[24px] rounded-t-[8px]'>
        {title}
      </div>
      <div>{children}</div>
    </div>
  )
}

ShareholderCard.Item = function Item({ title, value }: ItemProps) {
  return (
    <div className='px-[40px] py-[24px] flex items-center justify-between gap-[16px] border-x border-b border-dark-60'>
      <div className='body-1 text-dark'>{title}</div>
      <div className='subtitle-1'>{value}</div>
    </div>
  )
}
