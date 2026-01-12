import Image from 'next/image'
import React from 'react'

interface BannerImageProps {
  imageSrc: string
  mobileImageSrc?: string
  alt?: string
}

export default function BannerImage({
  imageSrc,
  mobileImageSrc,
  alt = 'Banner image',
}: BannerImageProps) {
  return (
    <section className='relative z-0 -mt-[50px] w-full'>
      {/* Desktop */}
      <div className='relative hidden h-[605px] w-full md:flex'>
        <Image
          src={imageSrc}
          alt={alt}
          fill
          priority
          className='object-cover md:rounded-b-[60px]'
        />
      </div>

      {/* Mobile */}
      <div className='relative h-[230px] w-full md:hidden mt-12'>
        <Image
          src={mobileImageSrc || imageSrc}
          alt={alt}
          fill
          priority
          className='object-cover'
        />
      </div>
    </section>
  )
}
