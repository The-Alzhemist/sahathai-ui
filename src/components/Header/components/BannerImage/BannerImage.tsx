import Image from 'next/image'
import React from 'react'

interface BannerImageProps {
  imageSrc: string
  mobileImageSrc?: string
  alt?: string
  children?: React.ReactNode
  overlayClassName?: string
}

export default function BannerImage({
  imageSrc,
  mobileImageSrc,
  alt = 'Banner image',
  children,
  overlayClassName = 'absolute inset-0 z-10 flex items-center justify-center px-6 text-center md:px-12',
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
        {children ? <div className={overlayClassName}>{children}</div> : null}
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
        {children ? <div className={overlayClassName}>{children}</div> : null}
      </div>
    </section>
  )
}
