'use client'

import HLSVideo from '@/components/Header/components/HomeVideoBanner/HLSVideo'

export default function HomeVideoBanner() {
  return (
    <section className='relative w-full h-[825px]'>
      <div className='relative w-full h-full'>
        {/* Mobile */}
        <div className='block md:hidden w-full h-full'>
          <HLSVideo
            src='https://res.cloudinary.com/dyv2lnq0u/video/upload/sp_auto,w_854/v1765854012/sahathai-full-hd_qivsgg.m3u8'
            className='w-full h-full object-cover'
          />
        </div>

        {/* Desktop */}
        <div className='hidden md:block w-full h-full'>
          <HLSVideo
            src='https://res.cloudinary.com/dyv2lnq0u/video/upload/sp_auto/v1765854012/sahathai-full-hd_qivsgg.m3u8'
            className='w-full h-full object-cover md:rounded-b-[60px]'
          />
        </div>
      </div>
    </section>
  )
}
