import { CardProps } from './interface'

export function Card({ title, description }: CardProps) {
  return (
    <div className='p-[16px] shadow-2 rounded-[8px] max-w-[282.67px] w-full'>
      <h3 className='headline-4 text-blue-400'>{title}</h3>
      <p className='mt-[24px] body-1 text-black-60'>{description}</p>
    </div>
  )
}
