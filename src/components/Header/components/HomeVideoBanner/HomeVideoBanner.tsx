'use client'

import HLSVideo from '@/components/Header/components/HomeVideoBanner/HLSVideo'

export default function HomeVideoBanner() {
  return (
    <section className='relative w-full h-[825px]'>
      <div className='relative w-full h-full'>
        {/* Mobile */}
        <div className='block md:hidden w-full h-full'>
          <HLSVideo
            src='/video/720/index.m3u8'
            className='w-full h-full object-cover'
          />
        </div>

        {/* Desktop */}
        <div className='hidden md:block w-full h-full'>
          <HLSVideo
            src='/video/720/index.m3u8'
            className='w-full h-full object-cover md:rounded-b-[60px]'
          />
        </div>
      </div>
    </section>
  )
}
