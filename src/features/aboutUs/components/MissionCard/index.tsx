import { Animation } from '@/components/Animation'
import { MissionCardProps } from './interface'
import Image from 'next/image'

export function MissionCard({ imageUrl, title, content }: MissionCardProps) {
  return (
    <Animation className='max-w-[440px] w-full bg-white shadow-3 rounded-[15px] overflow-hidden'>
      <div className='relative w-full'>
        <div className='relative pt-[45.45%] w-full'>
          <Image src={imageUrl} fill alt='' />
        </div>
        <Image
          className='absolute bottom-[5px] left-[13px]'
          src='/logo.png'
          width={52}
          height={40}
          alt=''
        />
      </div>
      <div className='py-[22px] px-[24px]'>
        <h3 className='headline-4 !font-[500] text-navy'>{title}</h3>
        <p className='mt-[10px] body-2 text-black-6'>{content}</p>
      </div>
    </Animation>
  )
}
