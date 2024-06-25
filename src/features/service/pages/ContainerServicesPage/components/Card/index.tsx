import { cn } from '@/libs/util'
import { CardProps } from './interface'

export function Card({ className, title, description }: CardProps) {
  return (
    <div
      className={cn(
        'max-w-[1200px] mx-auto flex flex-wrap gap-[62px]',
        className
      )}
    >
      <div className='max-w-[569px] w-full h-[337px] bg-dark' />
      <div className='max-w-[569px] w-full'>
        <h2 className='font-[700] text-[36px] leading-[44px]'>{title}</h2>
        <p className='mt-[40px] text-[18px] leading-[28px] sarabun'>
          {description}
        </p>
      </div>
    </div>
  )
}
