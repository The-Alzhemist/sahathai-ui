import { CardProps } from './interface'

export function Card({ title, description }: CardProps) {
  return (
    <div className='max-w-[400px] w-full'>
      <h2 className='headline-4 text-blue-300 text-center'>{title}</h2>
      <p className='body-1 text-black-60 mt-[16px] text-center'>
        {description}
      </p>
    </div>
  )
}
