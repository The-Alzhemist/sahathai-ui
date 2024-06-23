import { HarborOperatingSystemCardProps } from './interface'

export function HarborOperatingSystemCard({
  title,
  description,
}: HarborOperatingSystemCardProps) {
  return (
    <div className='max-w-[348px] h-[260px] p-[16px] rounded-[8px] bg-dark-60'>
      <h2 className='font-[700] text-[24px] leading-[44px] text-center'>
        {title}
      </h2>
      <p className='mt-[24px] leading-[24px] sarabun text-center'>
        {description}
      </p>
    </div>
  )
}
