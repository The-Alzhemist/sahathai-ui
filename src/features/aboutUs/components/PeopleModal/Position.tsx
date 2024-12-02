import Image from 'next/image'

import { PositionProps } from './interface'

export function Position({ imageUrl, fullName, positions }: PositionProps) {
  return (
    <div className='flex flex-col md:flex-row gap-x-[13px] items-center'>
      <div className='max-w-[90%] md:max-w-[309px] w-full overflow-hidden'>
        <div className='relative pt-[100%] w-full'>
          <div className='absolute inset-0 w-full h-full'>
            <div className='w-full md:w-[365px]'>
              <div className='relative pt-[100%] w-full'>
                <Image src={imageUrl} fill alt='' />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className='text-xl md:text-[32px] leading-[48.38px] text-navy px-5 md:px-0'>
          {fullName}
        </div>
        <ul className='mt-[20px] text-black-6 max-w-[389px] w-full px-5 md:px-0 mb-5 md:mb-0'>
          {positions.map(position => (
            <li key={position} className='grid grid-cols-[30px_1fr]'>
              <span className='text-center'>&bull;</span>
              {position}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
