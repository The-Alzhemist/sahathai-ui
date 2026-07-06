import React from 'react'
import Image from 'next/image'
import { useLocale } from 'next-intl'
import { RegulationsCargoShipsContent } from './RegulationsCargoShipsContent'

export default function RegulationsCargoShips() {
  const locale = useLocale()
  return (
    <section>
      <Image
        className='mb-5 border rounded-md'
        src='/infrastructure-containers/new/instrution-regarding-4-2x.webp'
        alt='instrution-regarding-4'
        width={720}
        height={328}
      />
      <RegulationsCargoShipsContent />
    </section>
  )
}
