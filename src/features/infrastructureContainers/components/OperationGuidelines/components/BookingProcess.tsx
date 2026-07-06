import React from 'react'
import Image from 'next/image'
import { useLocale } from 'next-intl'
import { BookingProcessContent } from './BookingProcessContent'

export default function BookingProcess() {
  const locale = useLocale()
  return (
    <section>
      <Image
        className='mb-5 rounded-md'
        src='/infrastructure-containers/new/instrution-regarding-8.webp'
        alt='instrution-regarding-8'
        width={720}
        height={328}
      />
      <BookingProcessContent />
    </section>
  )
}
