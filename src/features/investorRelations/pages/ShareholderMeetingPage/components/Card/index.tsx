import { CardProps } from './interface'

export function Card({ title }: CardProps) {
  return (
    <div className='max-w-[308px] w-full border border-white-2'>
      <div className='bg-dark h-[220px] w-full' />
      <div className='px-[16px] py-[24px] font-[700] text-[20px] leading-[22px] border-t border-white-2'>
        {title}
      </div>
    </div>
  )
}
