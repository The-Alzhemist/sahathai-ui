import React from 'react'
import Image from 'next/image'

import { CfsGoodsContent } from './CfsGoodsContent'

export default function CfsGoods() {
  return (
    <section>
      <Image
        className='mb-5 rounded-md'
        src='/infrastructure-containers/new/instrution-regarding-3.webp'
        alt='instrution-regarding-3'
        width={720}
        height={328}
      />
      <CfsGoodsContent />
    </section>
  )
}
