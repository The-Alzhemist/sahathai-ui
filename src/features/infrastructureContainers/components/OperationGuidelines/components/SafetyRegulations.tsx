import React from 'react'
import Image from 'next/image'

import { SafetyRegulationsContent } from './SafetyRegulationsContent'

export default function SafetyRegulations() {
  return (
    <section>
      <Image
        className='mb-5 rounded-md'
        src='/infrastructure-containers/new/instrution-regarding-1-6-2x.webp'
        alt='instrution-regarding-4'
        width={720}
        height={328}
      />
      <SafetyRegulationsContent />
    </section>
  )
}
