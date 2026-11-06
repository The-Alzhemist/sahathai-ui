import Image from 'next/image'
import { CardProps } from './interface'
import { cn } from '@/libs/util'

export function Card({ title, imageUrl, contents }: CardProps) {
  return (
    <div className='mt-[22px] p-[30px] rounded-[15px] shadow-8 bg-white'>
      <div className='max-w-[980px] w-full rounded-[10px] overflow-hidden'>
        <Image
          src={imageUrl}
          alt=''
          width={980}
          height={622}
          sizes='(max-width: 1040px) 100vw, 980px'
          className='w-full h-auto'
        />
      </div>
      {title && <h2 className='font-[500] text-navy mt-[25px]'>{title}</h2>}
      {contents.map((content, index) => (
        <p
          className={cn('body-1 text-black-6 mt-[8px] indent-8', {
            'mt-[25px]': !title && index === 0,
          })}
          key={index}
        >
          {content}
        </p>
      ))}
    </div>
  )
}
