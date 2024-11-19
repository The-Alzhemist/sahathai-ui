import Image from 'next/image'

import { MiniCardProps } from './interface'

export function MiniCard({ imageUrl, content }: MiniCardProps) {
  return (
    <div className='w-[200px] h-[285px]'>
      <div className='w-[200px] p-[30px] bg-white rounded-[15px]'>
        <div className='relative pt-[100%] w-full'>
          <Image src={imageUrl} fill alt='' />
        </div>
      </div>
      <p className='mt-[30px] leading-[24px] font-[300] text-center'>
        {content}
      </p>
    </div>
  )
}
