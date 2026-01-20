import React from 'react'
import Image from 'next/image'
import { useLocale } from 'next-intl'

export default function SafetyRegulations() {
  const locale = useLocale()
  return (
    <section>
      <Image
        className='mb-5 rounded-md'
        src='/infrastructure-containers/new/instrution-regarding-1-6-2x.webp'
        alt='instrution-regarding-4'
        width={666}
        height={328}
      />
      {locale === 'th' && <SafetyRegulationsInfoTH />}
      {locale === 'en' && <SafetyRegulationsInfoEN />}
      {locale === 'cn' && <SafetyRegulationsInfoCN />}
    </section>
  )
}

const SafetyRegulationsInfoTH = () => {
  return (
    <>
      <div className='text-sm text-gray-600 px-5'>
        <ul className='flex flex-col gap-y-5 list-disc mb-5'>
          <li className='text-gray-600 text-sm'>
            ผู้มาติดต่อห้ามเข้าไปในพื้นที่ท่าเรือ
            หากไม่ได้รับอนุญาตจากเจ้าหน้าที่ของสหไทย เทอร์มินอลที่มีอำนาจ
          </li>

          <li className='text-gray-600 text-sm'>
            {' '}
            ผู้มาติดต่อต้องติดต่อสำนักงาน Terminal Service (TMS)
            เพื่อรับเครื่องแต่งกายและเปลี่ยนเครื่องแต่งกายให้เหมาะสม ตามที่สหไทย
            เทอร์มินอล จัดเตรียมให้ ทั้งนี้
            เพื่อความปลอดภัยและเพื่อให้มั่นใจว่าผู้มาติดต่อได้ทำการสวมเครื่องแต่งกายที่สามารถเห็นได้ชัดเจน
          </li>

          <li className='text-gray-600 text-sm'>
            ผู้มาติดต่อต้องปฏิบัติตามป้ายห้าม คำสั่ง และคำเตือนทั้งหมด
            รวมทั้งต้องสวมหมวกนิรภัยตลอดเวลา
          </li>

          <li className='text-gray-600 text-sm'>
            ผู้มาติดต่อที่เข้าไปในบริเวณท่าเรือผ่านทางลานจอดรถและ/หรือขึ้นเรือขนส่งสินค้าต้องใช้ทางเดินเท้าตลอดรั้วของท่าเรือ
            และห้ามเดินลัดผ่านลานวางตู้คอนเทนเนอร์
          </li>

          <li className='text-gray-600 text-sm'>
            ห้ามบันทึกภาพและวิดีโอภายในพื้นที่ท่าเรือโดยไม่ได้รับอนุญาตจากบุคลากรของสหไทย
            เทอร์มินอล ที่มีอำนาจ
          </li>

          <li className='text-gray-600 text-sm'>
            {' '}
            พาหนะทุกประเภทที่ขับขี่ในพื้นที่ตู้คอนเทนเนอร์
            ต้องใช้ความเร็วไม่เกิน 20 กม./ชม. ในวันทำการ
          </li>

          <li className='text-gray-600 text-sm'>
            พนักงานขับรถทุกคนภายในพื้นที่ท่าเรือจะต้องปฏิบัติตามกฎการจราจรและข้อบังคับด้านความปลอดภัย
            และห้ามจอดพาหนะทิ้งไว้โดยไม่ได้รับอนุญาต
          </li>

          <li className='text-gray-600 text-sm'>
            ห้ามจอดพาหนะทุกประเภทที่อาจขัดขวางการสัญจรภายในพื้นที่ปฏิบัติงาน
          </li>

          <li className='text-gray-600 text-sm'>
            บุคลากรทุกคนจำเป็นต้องแจ้งสหไทย เทอร์มินอล โดยทันที
            หากพบเจอการกระทำใดที่อาจส่งผลต่อความปลอดภัยภายในท่าเรือ
            หรือการกระทำใดที่อาจส่งผลกระทบต่อโครงสร้างพื้นฐานภายในท่าเรือและความปลอดภัยภายในท่าเรือตามที่ระบุไว้ในประมวลข้อบังคับว่าด้วยการรักษาความปลอดภัยของเรือและท่าเรือระหว่างประเทศ
            (International Ship and Port Facility Security)
          </li>

          <li className='text-gray-600 text-sm'>
            หากมีการละเมิดระเบียบที่กำหนดจะถูกยกเลิกใบอนุญาตเรือขนส่งสินค้า
          </li>
        </ul>

        <div className='flex flex-wrap gap-2 border rounded-md items-center px-3 py-2 mb-5'>
          <span className='text-sm text-gray-600'>
            ส่งอีเมล์ให้แก่สำนักงาน SSHE ที่
          </span>

          <span className='text-primary-1'> sshe.stt@sahathai.com</span>
        </div>
      </div>
    </>
  )
}

const SafetyRegulationsInfoEN = () => {
  return (
    <>
      <div className='text-sm text-gray-600 px-5'>
        <ul className='flex flex-col gap-y-5 list-disc'>
          <li>
            Visitors are prohibited from entering the port area without the
            permission of authorized STT personnel.
          </li>
          <li>
            Visitors are required to contact the Terminal Service (TMS) Office
            to obtain clothing that will ensure visibility.
          </li>
          <li>
            Visitors are required to comply with all PROHIBITED, MANDATORY and
            WARNING signs, and wear a safety helmet at all times.
          </li>
          <li>
            Visitors who enter the port area via the apron site and/or onboard a
            vessel are required to use the pedestrian walkways along the
            terminal fence and not take short-cuts through the container yard.
          </li>
          <li>
            Photography and video recording within the port area are prohibited
            without the permission of authorized STT personnel.
          </li>
          <li>
            The speed of all vehicles in the container area is not to exceed 20
            km/hr.
          </li>
          <li>
            All vehicle drivers inside the port area are to comply with traffic
            and safety rules and are not to leave the vehicles without
            permission.
          </li>
          <li>
            Vehicles are not to be parked on equipment travel routes and
            operations areas.
          </li>
          <li>
            It is the responsibility of everyone to provide STT personnel with
            any information that may affect port security or be of significance
            to the port facility and shipping security as specified in the ISPS
            (International Ship and Port Facility Security) Code.
          </li>
          <li>
            Violation of regulations will lead to the termination of the
            vessel’s access pass.
          </li>
          <li>
            To contact us at the SSHE Office, email:
            <a
              href='mailto:sshe.stt@sahathai.com'
              className='text-black underline'
            >
              sshe.stt@sahathai.com
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

const SafetyRegulationsInfoCN = () => {
  return (
    <>
      <div className='text-sm text-gray-600 px-5'>
        <ul className='flex flex-col gap-y-5 list-disc'>
          <li>
            Visitors are prohibited from entering the port area without the
            permission of authorized STT personnel.
          </li>
          <li>
            Visitors are required to contact the Terminal Service (TMS) Office
            to obtain clothing that will ensure visibility.
          </li>
          <li>
            Visitors are required to comply with all PROHIBITED, MANDATORY and
            WARNING signs, and wear a safety helmet at all times.
          </li>
          <li>
            Visitors who enter the port area via the apron site and/or onboard a
            vessel are required to use the pedestrian walkways along the
            terminal fence and not take short-cuts through the container yard.
          </li>
          <li>
            Photography and video recording within the port area are prohibited
            without the permission of authorized STT personnel.
          </li>
          <li>
            The speed of all vehicles in the container area is not to exceed 20
            km/hr.
          </li>
          <li>
            All vehicle drivers inside the port area are to comply with traffic
            and safety rules and are not to leave the vehicles without
            permission.
          </li>
          <li>
            Vehicles are not to be parked on equipment travel routes and
            operations areas.
          </li>
          <li>
            It is the responsibility of everyone to provide STT personnel with
            any information that may affect port security or be of significance
            to the port facility and shipping security as specified in the ISPS
            (International Ship and Port Facility Security) Code.
          </li>
          <li>
            Violation of regulations will lead to the termination of the
            vessel’s access pass.
          </li>
          <li>
            To contact us at the SSHE Office, email:
            <a
              href='mailto:sshe.stt@sahathai.com'
              className='text-black underline'
            >
              sshe.stt@sahathai.com
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
