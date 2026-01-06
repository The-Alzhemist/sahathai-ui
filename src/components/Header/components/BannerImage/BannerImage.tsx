import Image from 'next/image'
import React from 'react'

interface BannerImageProps {
  imageSrc: string
  alt?: string
}

export default function BannerImage({ imageSrc, alt }: BannerImageProps) {
  return (
    <section className='relative z-0 -mt-[50px] h-[605px] w-full'>
      <div className='relative h-full w-full'>
        <Image
          src={imageSrc}
          alt={alt ?? imageSrc}
          fill
          priority
          className='object-cover md:rounded-b-[60px]'
        />
      </div>
    </section>
  )
}
