import Image from 'next/image'

import { cn } from '@/libs/util'
import { ServiceCardProps } from './interface'

export function ServiceCard({
  title,
  content,
  className,
  imageUrl,
  imageSize,
}: ServiceCardProps) {
  return (
    <div
      className={cn(
        'relative p-[40px_24px_24px] w-[330px] border-[2px] border-white',
        className
      )}
    >
      <div className='absolute top-0 -translate-y-1/2 px-[20px] bg-modellBgDark'>
        <Image src={imageUrl} width={imageSize} height={imageSize} alt='' />
      </div>
      <h3 className='headline-4 text-white'>{title}</h3>
      <p className='mt-[15px] body-2 text-border'>{content}</p>
    </div>
  )
}
