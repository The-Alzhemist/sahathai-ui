import React from 'react'
import Image from 'next/image'
import { useLocale } from 'next-intl'

import { OperatingHoursContent } from './OperatingHoursContent'

export default function OperatingHours() {
  const locale = useLocale()
  return (
    <section>
      {
        <Image
          className='mb-5'
          src='/infrastructure-containers/new/instrution-regarding-2-2x.webp'
          alt='instrution-regarding-2'
          width={720}
          height={328}
        />
      }
      <OperatingHoursContent />
    </section>
  )
}
