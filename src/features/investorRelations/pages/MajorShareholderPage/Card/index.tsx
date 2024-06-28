import { CardProps, ItemProps } from './interface'

export function Card({ children, title }: CardProps) {
  return (
    <div className='max-w-[623.5px] w-full'>
      <div className='p-[12px] bg-dark-80 font-[500] text-[20] leading-[24px]'>
        {title}
      </div>
      <div>{children}</div>
    </div>
  )
}

Card.Item = function Item({ title, value }: ItemProps) {
  return (
    <div className='px-[40px] py-[24px] flex items-center justify-between gap-[16px] border-x border-b border-dark-60'>
      <div className='text-[18px] leading-[28px]'>{title}</div>
      <div className='font-[500] leading-[24px]'>{value}</div>
    </div>
  )
}
