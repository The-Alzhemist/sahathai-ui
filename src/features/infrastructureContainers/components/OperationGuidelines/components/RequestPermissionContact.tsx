import React from 'react'
import Image from 'next/image'
import { RequestPermissionContactContent } from './RequestPermissionContactContent'

export default function RequestPermissionContact() {
  return (
    <section>
      <Image
        className='mb-5 rounded-md'
        src='/infrastructure-containers/new/instrution-regarding-6.webp'
        alt='instrution-regarding-6'
        width={720}
        height={328}
      />
      <RequestPermissionContactContent />
    </section>
  )
}
