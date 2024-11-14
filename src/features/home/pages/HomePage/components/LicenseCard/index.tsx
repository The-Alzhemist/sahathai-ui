import Image from 'next/image'

import { LicenseCardProps } from './interface'
import { cn } from '@/libs/util'

export function LicenseCard({
  contentClassName,
  imageUrl,
  content,
  width,
  height,
}: LicenseCardProps) {
  return (
    <div className='flex flex-col justify-end items-center bg-white border-t-[10px] border-background py-[16px] px-[4px] shadow-4 w-[160px]'>
      <Image src={imageUrl} width={width} height={height} alt='' />
      <p
        className={cn(
          'text-black-6 caption text-center max-w-[101px] mx-auto',
          contentClassName
        )}
      >
        {content}
      </p>
    </div>
  )
}
