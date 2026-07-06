import React from 'react'
import Image from 'next/image'

import { ResponsibilityScopeContent } from './ResponsibilityScopeContent'

export default function ResponsibilityScope() {
  return (
    <section>
      <Image
        className='mb-5 rounded-md'
        src='/infrastructure-containers/new/instrution-regarding-1-4.webp'
        alt='instrution-regarding-4'
        width={720}
        height={328}
      />
      <ResponsibilityScopeContent />
    </section>
  )
}
