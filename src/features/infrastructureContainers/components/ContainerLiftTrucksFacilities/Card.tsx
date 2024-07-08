import Image from 'next/image'
import { CardProps } from './interface'

export function Card({ title, description, imageUrl }: CardProps) {
  return (
    <div className='rounded-[8px] overflow-hidden max-w-[405.5px] w-full shadow-2'>
      <div className='relative w-full'>
        <div className='relative pt-[71.52%] w-full'>
          <Image src={imageUrl} fill alt='' />
        </div>
        <div className='absolute left-[15px] bottom-[13px] p-[4px] bg-white'>
          <Image src='/logo.png' width={43.4} height={10.31} alt='' />
        </div>
      </div>
      <div className='w-full mt-[24px] p-[16px]'>
        <h3 className='headline-4 text-blue-300 underline'>{title}</h3>
        <p className='mt-[16px] body-1 text-black-60'>{description}</p>
      </div>
    </div>
  )
}
