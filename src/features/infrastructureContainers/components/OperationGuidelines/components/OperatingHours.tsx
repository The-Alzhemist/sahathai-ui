import React from 'react'
import Image from 'next/image'
import { useLocale } from 'next-intl'

export default function OperatingHours() {
  const locale = useLocale()
  return (
    <section>
      {/* <Image
        className='mb-5'
        src='/infrastructure-containers/docking.png'
        alt=''
        width={666}
        height={328}
      /> */}
      {locale === 'th' && <OperatingHoursInfoTH />}
      {locale === 'en' && <OperatingHoursInfoEN />}
      {locale === 'cn' && <OperatingHoursInfoCN />}
    </section>
  )
}

const OperatingHoursInfoTH = () => {
  return (
    <>
      <p className='text-gray-800 text-sm mb-3'>
        แผนกปฏิบัติการทำงาน 7 วัน 24 ชม.
      </p>
    </>
  )
}

const OperatingHoursInfoEN = () => {
  return (
    <>
      <p className='text-gray-800 text-sm mb-3'>
        The operations department works 7 days a week, 24 hours a day.
      </p>
    </>
  )
}

const OperatingHoursInfoCN = () => {
  return (
    <>
      <p className='text-gray-800 text-sm mb-3'>
        运营部门每天24小时工作，每周7天。
      </p>
    </>
  )
}
