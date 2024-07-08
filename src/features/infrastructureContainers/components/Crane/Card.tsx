import { CardContentProps, CardProps } from './interface'

export function Card({ children }: CardProps) {
  return <div className='flex flex-wrap gap-[26px]'>{children}</div>
}

Card.Content = function Content({ title, description }: CardContentProps) {
  return (
    <div className='max-w-[434px] w-full py-[16px]'>
      <h3 className='headline-4 text-blue-300 underline'>{title}</h3>
      <p className='mt-[16px] body-1 text-black-60'>{description}</p>
    </div>
  )
}
