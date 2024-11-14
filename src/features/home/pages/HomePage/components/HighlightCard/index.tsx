import Image from 'next/image'

import { HighlightCardProps } from './interface'

export function HighlightCard({
  title,
  description,
  imageUrl,
  imageSize,
}: HighlightCardProps) {
  return (
    <div className='max-w-[266px] w-full p-[24px] rounded-[8px] shadow-5'>
      <Image
        className='mx-auto'
        src={imageUrl}
        width={imageSize}
        height={imageSize}
        alt=''
      />
      <h3 className='mt-[28px] text-center headline-4 text-navy !font-[500]'>
        {title}
      </h3>
      <p className='mt-[15px] body-2 text-black-6'>{description}</p>
    </div>
  )
}
