import React from 'react'
import Image from 'next/image'

import { DocumentProcessContent } from './DocumentProcessContent'

export default function DocumentProcess() {
  return (
    <section>
      <Image
        className='mb-5 rounded-md'
        src='/infrastructure-containers/new/instrution-regarding-7.webp'
        alt='instrution-regarding-7'
        width={720}
        height={328}
      />
      <DocumentProcessContent />
    </section>
  )
}
