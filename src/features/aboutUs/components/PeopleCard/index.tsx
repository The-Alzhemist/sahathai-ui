import Image from 'next/image'

import { cn } from '@/libs/util'
import { Animation } from '@/components/Animation'
import { PeopleCardProps } from './interface'

export function PeopleCard({
  imageUrl,
  name,
  jobTitle,
  imageClassName,
}: PeopleCardProps) {
  return (
    <Animation className='relative rounded-[8px] overflow-hidden w-[206px] h-[319.41px] shadow-2'>
      <div className={cn('absolute', imageClassName)}>
        <div className='relative pt-[100%] w-full'>
          <Image src={imageUrl} fill alt='' />
        </div>
      </div>

      <div className='absolute bottom-0 p-[8px] space-y-[8px] h-[128px] mt-auto bg-white w-full'>
        <h3 className='subtitle-1 text-blue-400'>{name}</h3>
        <hr className='w-[28px] border-t-[4px] border-t-blue-300' />
        <p className='text-black-60 whitespace-pre-wrap sarabun text-[10px] leading-[13px] tracking-[0.25px] line-clamp-5'>
          {jobTitle}
        </p>
      </div>
    </Animation>
  )
}
