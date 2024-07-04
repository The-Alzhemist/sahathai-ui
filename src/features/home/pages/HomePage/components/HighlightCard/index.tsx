import { HighlightCardProps } from './interface'

export function HighlightCard({
  title,
  description,
  children,
}: HighlightCardProps) {
  return (
    <div className='max-w-[283px] min-h-[356px] w-full p-[16px] rounded-[8px] shadow-6'>
      <div className='p-[26px] rounded-full bg-blue-400 w-[100px] h-[100px] mx-auto'>
        {children}
      </div>
      <h3 className='mt-[24px] text-center headline-4 text-blue-400'>
        {title}
      </h3>
      <p className='mt-[12px] text-center body-1 text-black-60'>
        {description}
      </p>
    </div>
  )
}
