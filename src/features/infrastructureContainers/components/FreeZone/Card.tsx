import { CardProps } from './interface'

export function Card({ children, description }: CardProps) {
  return (
    <div className='w-[194px] h-[164px] flex flex-col justify-between'>
      <div>
        {children}
        <p className='body-1 text-black-60 mt-[16px]'>{description}</p>
      </div>
      <hr className='w-[48px] border-t-[4px] border-t-blue-300 mt-auto' />
    </div>
  )
}
