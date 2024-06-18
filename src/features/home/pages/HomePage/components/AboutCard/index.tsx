import { AboutCardProps } from './interface'

export function AboutCard({ title, description }: AboutCardProps) {
  return (
    <div className='p-[10px] w-[340px] h-[430px]'>
      <div className='w-[320px] h-[242px] bg-dark-80 rounded-[8px]' />
      <h2 className='text-[24px] font-[700] leading-[44px] line-clamp-1 mt-[21px]'>
        {title}
      </h2>
      <p className='mt-[11px] line-clamp-3 text-[18px] leading-[28px]'>
        {description}
      </p>
    </div>
  )
}
