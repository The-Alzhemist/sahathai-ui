import { StoreIcon } from '@/components/icons/StoreIcon'
import { GeneralWarehouseCardProps } from './interface'

export function GeneralWarehouseCard({
  title,
  description,
}: GeneralWarehouseCardProps) {
  return (
    <div className='p-[16px_16px_20px] border border-white-2 rounded-[8px] max-w-[302px] w-full'>
      <StoreIcon className='text-dark-100 mx-auto' width='48' height='48' />
      <h3 className='mt-[16px] font-[500] text-[20px] leading-[24px] text-center'>
        {title}
      </h3>
      <p className='leading-[22px] text-center'>{description}</p>
    </div>
  )
}
