import { HighlightCardProps } from './interface'

export function HighlightCard({
  title,
  description,
  children,
}: HighlightCardProps) {
  return (
    <div className='max-w-[348px] w-full p-[16px] rounded-[8px] bg-dark-60'>
      <div className='p-[26px] rounded-full bg-dark w-[100px] h-[100px] mx-auto'>
        {children}
      </div>
      <div className='mt-[24px] text-center font-[700] text-[24px] leading-[44px]'>
        {title}
      </div>
      <div className='mt-[12px] text-center sarabun text-[16px] leading-[24px] text-dark-300'>
        {description}
      </div>
    </div>
  )
}
