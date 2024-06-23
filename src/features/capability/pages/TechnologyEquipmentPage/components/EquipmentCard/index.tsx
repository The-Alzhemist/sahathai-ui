import { cn } from '@/libs/util'
import { EquipmentCardProps } from './interface'

export function EquipmentCard({
  title,
  description,
  orientation,
}: EquipmentCardProps) {
  return (
    <div
      className={cn('w-full flex gap-x-[68px] gap-y-[24px]', {
        'flex-wrap items-center': orientation === 'horizontal',
        'flex-col max-w-[572px]': orientation === 'vertical',
      })}
    >
      <div
        className={cn('bg-dark-80 max-w-[565px] w-full h-[242px]', {
          'max-w-none': orientation === 'vertical',
        })}
      />
      <div
        className={cn('max-w-[596px] w-full', {
          'max-w-none': orientation === 'vertical',
        })}
      >
        <h2 className='font-[700] text-[24px] leading-[44px]'>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}
