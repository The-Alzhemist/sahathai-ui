import Image from 'next/image'

import { LicenseCardProps } from './interface'

export function LicenseCard({
  imageUrl,
  content,
  width,
  height,
}: LicenseCardProps) {
  return (
    <div className='flex flex-col items-center bg-white border-t-[10px] border-background py-[16px] px-[4px] shadow-4 w-[160px]'>
      <div className='grid items-center h-[90px]'>
        <Image src={imageUrl} width={width} height={height} alt={content} />
      </div>
      <p className='text-black-6 caption text-center mx-auto mt-[6px]'>
        {content}
      </p>
    </div>
  )
}
