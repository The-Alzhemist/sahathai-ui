import Image from 'next/image'

import { cn } from '@/libs/util'
import { Animation } from '@/components/Animation'
import { Line } from '@/components/Line'
import { PeopleCardProps } from './interface'
import { NoPhotoIcon } from '@/components/icons/NoPhotoIcon'

export function PeopleCard({
  imageUrl,
  name,
  jobTitle,
  imageClassName,
  onClick,
}: PeopleCardProps) {
  return (
    <Animation
      className='max-w-[202px] w-full cursor-pointer'
      onClick={onClick}
    >
      <div className='relative w-full overflow-hidden rounded-[15px] overflow-hidden shadow-8 bg-white'>
        <div className='relative pt-[108.91%] w-full'>
          <div className={cn('absolute', imageClassName)}>
            {imageUrl ? (
              <div className='relative pt-[100%] w-full'>
                <Image src={imageUrl} fill alt='' />
              </div>
            ) : null}
          </div>
        </div>
        {!imageUrl ? (
          <NoPhotoIcon
            className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white-2'
            width='96'
            height='96'
          />
        ) : null}
      </div>

      <div className='py-[8px] px-[5px] space-y-[18px] min-h-[165px] mt-[15px] w-full text-white'>
        <h3 className='subtitle-1'>{name}</h3>
        <Line />
        <p className='whitespace-pre-wrap caption-mini'>{jobTitle}</p>
      </div>
    </Animation>
  )
}
