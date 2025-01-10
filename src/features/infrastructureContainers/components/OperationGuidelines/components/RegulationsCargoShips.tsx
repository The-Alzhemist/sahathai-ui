import React from 'react'
import Image from 'next/image'
import { useLocale } from 'next-intl'

export default function RegulationsCargoShips() {
  const locale = useLocale()
  return (
    <section>
      <Image
        className='mb-5 border rounded-md'
        src='/infrastructure-containers/nsw-tos.png'
        alt=''
        width={666}
        height={328}
      />
      {locale === 'th' && <RegulationsCargoShipsInfoTH />}
      {locale === 'en' && <RegulationsCargoShipsInfoEN />}
      {locale === 'cn' && <RegulationsCargoShipsInfoCN />}
    </section>
  )
}

const RegulationsCargoShipsInfoTH = () => {
  return (
    <>
      <ul className='text-gray-800 text-sm mb-3 flex flex-col gap-2'>
        <li>1.รับส่งตู้สินค้าผ่านระบบ NSW TOS</li>
        <li>2.Matching</li>
        <li>3.Mobile X-Ray Machinem</li>
      </ul>
    </>
  )
}

const RegulationsCargoShipsInfoEN = () => {
  return (
    <>
      <>
        <ul className='text-gray-800 text-sm mb-3 flex flex-col gap-2'>
          <li>
            1.Receive and dispatch cargo containers through the NSW TOS system.
          </li>
          <li>2.Matching</li>
          <li>3.Mobile X-Ray Machinem</li>
        </ul>
      </>
    </>
  )
}

const RegulationsCargoShipsInfoCN = () => {
  return (
    <>
      <>
        <ul className='text-gray-800 text-sm mb-3 flex flex-col gap-2'>
          <li>1.通过NSW TOS系统接收和发运货物集装箱。</li>
          <li>2.匹配。</li>
          <li>3.移动X射线机器。</li>
        </ul>
      </>
    </>
  )
}
