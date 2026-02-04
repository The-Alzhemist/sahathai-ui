'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { BannerStoryblok } from '@/types/storyblok'

export default function BannerPopupContent({ data }: any) {
  const [open, setOpen] = useState(true)

  const isShowBannerConfig = data.story.content.body[0].isShowBanner

  const handleClose = () => {
    setOpen(false)
  }

  if (!open || !isShowBannerConfig) {
    return null
  }

  const bannerData = data?.story?.content?.body?.[0] as
    | BannerStoryblok
    | undefined

  if (!bannerData || !bannerData.bannerImage) {
    return null
  }

  return (
    <section className='fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4'>
      <div className='relative w-fit max-w-[800px] h-fit'>
        <Image
          src={bannerData.bannerImage.filename}
          alt={bannerData.bannerImage.alt || 'Banner Popup'}
          width={800}
          height={800}
          className='block w-auto h-auto max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl'
        />

        <div
          onClick={handleClose}
          className='absolute top-3 right-3 z-10 
                 flex items-center justify-center
                 w-8 h-8 rounded-full 
                 bg-black/60 hover:bg-black/80 text-white 
                 cursor-pointer transition-all shadow-md'
        >
          <span className='text-xl leading-none'>✕</span>
        </div>
      </div>
    </section>
  )
}
