import { Animation } from '@/components/Animation'
import { MissionCardProps } from './interface'
import Image from 'next/image'
import { BuildingIcon } from '@/components/icons/AboutUsBuildingIcon'

export function MissionCard({ imageUrl, title, content }: MissionCardProps) {
  return (
    <Animation className='max-w-[440px] w-full bg-white shadow-3 rounded-[25px] overflow-hidden'>
      <div className='relative w-full pb-[40px]'>
        <div className='relative pt-[45.45%] w-full'>
          <Image src={imageUrl} fill alt='' />
        </div>
        <div className='absolute -translate-y-1/2 left-[13px] w-[70px] h-[70px] rounded-full flex justify-center items-center bg-white'>
          <div className='flex items-center justify-center bg-background w-[60px] h-[60px] rounded-full bg-mainGradient'>
            <BuildingIcon width={'30'} height='30' />
          </div>
        </div>
      </div>
      <div className='pb-[22px] px-[24px]'>
        <h3 className='headline-4 !font-[500] text-navy'>{title}</h3>
        <p className='mt-[10px] body-2 text-black-6'>{content}</p>
      </div>
    </Animation>
  )
}
