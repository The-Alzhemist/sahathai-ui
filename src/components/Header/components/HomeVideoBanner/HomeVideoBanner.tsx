'use client'

import HLSVideo from '@/components/Header/components/HomeVideoBanner/HLSVideo'

export default function HomeVideoBanner() {
  return (
    <section className='relative w-full h-screen max-h-[800px]'>
      {/* Mobile */}
      <div className='md:hidden absolute inset-0'>
        <HLSVideo
          src='/video/720/index.m3u8'
          className='w-full h-full object-cover'
        />
      </div>

      {/* Desktop */}
      <div className='hidden md:block absolute inset-0'>
        <HLSVideo
          src='/video/720/index.m3u8'
          className='w-full h-full object-cover md:rounded-b-[60px]'
        />
      </div>
    </section>
  )
}
