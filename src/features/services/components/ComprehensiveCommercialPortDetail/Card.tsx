import Image from 'next/image'
import { CardProps } from './interface'
import { cn } from '@/libs/util'

export function Card({ title, imageUrl, content }: CardProps) {
  return (
    <div className='mt-[22px] p-[30px] rounded-[15px] shadow-8 bg-white'>
      <div className='max-w-[980px] w-full rounded-[10px] overflow-hidden'>
        <div className='relative pt-[63.47%] w-full'>
          <Image src={imageUrl} alt='' fill />
        </div>
      </div>
      {title && <h2 className='font-[500] text-navy mt-[25px]'>{title}</h2>}
      <p
        className={cn('body-1 text-black-6 mt-[8px]', { 'mt-[25px]': !title })}
      >
        {content}
      </p>
    </div>
  )
}
