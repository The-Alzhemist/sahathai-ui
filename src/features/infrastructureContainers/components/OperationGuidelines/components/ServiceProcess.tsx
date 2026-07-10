import React from 'react'
import Image from 'next/image'

import { ServiceProcessContent } from './ServiceProcessContent'

export default function ServiceProcess() {
  return (
    <section>
      <Image
        className='mb-5 rounded-md'
        src='/infrastructure-containers/new/instrution-regarding-1-11.webp'
        alt='instrution-regarding-1-11'
        width={720}
        height={328}
      />
      <ServiceProcessContent />
    </section>
  )
}
