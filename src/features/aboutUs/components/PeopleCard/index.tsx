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
      className='max-w-[250px] w-full cursor-pointer '
      onClick={onClick}
    >
      <div className='relative w-full overflow-hidden rounded-[15px] shadow-8  '>
        <div className='relative aspect-square w-full'>
          <div className={cn('', imageClassName)}>
            {imageUrl ? (
              <div className='relative '>
                <Image src={imageUrl} width={250} height={250} alt=''  />
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
        <ul className='list-disc pl-5 whitespace-pre-wrap caption-mini leading-5'>
          {jobTitle?.map((title:string, index:number) => (
            <li key={index} className=''>
             {title}
            </li>
          ))}
        </ul>
      </div>
    </Animation>
  )
}
