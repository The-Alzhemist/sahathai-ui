import { CardProps } from './interface'

export function Card({ icon, title, description }: CardProps) {
  return (
    <div className='grid grid-cols-[40px_1fr] gap-[16px] items-center py-[16px]'>
      <div className='w-[40px] h-[40px] rounded-full bg-blue-400 flex items-center justify-center text-white'>
        {icon}
      </div>
      <div>
        <div className='subtitle-1 text-black'>{title}</div>
        <div className='mt-[4px] body-1 text-black-60'>{description}</div>
      </div>
    </div>
  )
}
