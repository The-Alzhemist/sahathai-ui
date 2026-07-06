import React from 'react'
import Image from 'next/image'

import { DockingInfoContent } from './DockingInfoContent'

export default function DockingInfo() {
  return (
    <section>
      <Image
        className='mb-5 rounded-md'
        src='/infrastructure-containers/new/instrution-regarding-1.webp'
        alt=''
        width={720}
        height={328}
      />
      <DockingInfoContent />
    </section>
  )
}
