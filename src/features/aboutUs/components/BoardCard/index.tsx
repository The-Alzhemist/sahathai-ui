import Image from 'next/image'

import { Animation } from '@/components/Animation'
import { Line } from '@/components/Line'

import { NoPhotoIcon } from '@/components/icons/NoPhotoIcon'
import { BoardCardProps } from '@/features/aboutUs/components/BoardCard/interface'

export function BoardCard({
  imageUrl,
  name,
  jobTitle,
  imageClassName,
  onClick,
}: BoardCardProps) {
  return (
    <Animation className='w-[202px] cursor-pointer  ' onClick={onClick}>
      <div className='relative w-full overflow-hidden rounded-[15px] shadow-8  '>
        <div className='relative aspect-square w-full'>
          {imageUrl ? (
            <Image
              src={imageUrl}
              width={220}
              height={220}
              alt=''
              className={imageClassName}
            />
          ) : null}
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
      </div>
    </Animation>
  )
}
