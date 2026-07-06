import React from 'react'
import Image from 'next/image'

import { HazardousGoodsContent } from './HazardousGoodsContent'

export default function HazardousGoods() {
  return (
    <section>
      <Image
        className='mb-5'
        src='/infrastructure-containers/new/instrution-regarding-5.webp'
        alt='instrution-regarding-5'
        width={720}
        height={328}
      />
      <HazardousGoodsContent />
    </section>
  )
}
