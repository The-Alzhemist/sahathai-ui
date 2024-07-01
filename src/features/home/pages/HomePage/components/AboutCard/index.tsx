import Image from 'next/image'
import { AboutCardProps } from './interface'

export function AboutCard({ title, description, imageUrl }: AboutCardProps) {
  return (
    <div className='max-w-[283px] w-full'>
      <div className='rounded-[8px] overflow-hidden'>
        <div className='relative pt-[85.51%] w-full'>
          <Image src={imageUrl} fill alt='' />
        </div>
      </div>
      <h2 className='headline-4 mt-[16px] text-blue-400'>{title}</h2>
      <p className='mt-[8px] body-1 text-black-60'>{description}</p>
    </div>
  )
}
