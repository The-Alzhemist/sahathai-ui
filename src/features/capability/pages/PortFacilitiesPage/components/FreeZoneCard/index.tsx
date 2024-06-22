import { StoreIcon } from '@/components/icons/StoreIcon'
import { FreeZoneCardProps } from './interface'

export function FreeZoneCard({ description }: FreeZoneCardProps) {
  return (
    <div className='max-w-[288px] w-full'>
      <StoreIcon width='48' height='48' />
      <p className='mt-[16px]'>{description}</p>
    </div>
  )
}
