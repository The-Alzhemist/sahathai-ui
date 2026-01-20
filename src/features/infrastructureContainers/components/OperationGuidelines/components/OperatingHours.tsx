import React from 'react'
import Image from 'next/image'
import { useLocale } from 'next-intl'

export default function OperatingHours() {
  const locale = useLocale()
  return (
    <section>
      {
        <Image
          className='mb-5'
          src='/infrastructure-containers/new/instrution-regarding-2-2x.webp'
          alt='instrution-regarding-2'
          width={666}
          height={328}
        />
      }
      {locale === 'th' && <OperatingHoursInfoTH />}
      {locale === 'en' && <OperatingHoursInfoEN />}
      {locale === 'cn' && <OperatingHoursInfoCN />}
    </section>
  )
}

const OperatingHoursInfoTH = () => {
  return (
    <>
      <ul className='flex flex-col gap-y-5 list-disc px-5'>
        <li className='text-gray-600 text-sm'>
          วันทำการ: จันทร์-เสาร์ เวลาทำการ: 08:00-17:00 น.
        </li>

        <li className='text-gray-600 text-sm'>
          ตู้คอนเทนเนอร์ทั่วไปที่ขนส่งด้วยรถบรรทุก: 24
          ชั่วโมงก่อนเวลาเข้าเทียบท่า (ATB)
        </li>

        <li className='text-gray-600 text-sm'>
          ตู้สินค้าเย็น (สินค้าประเภทผลไม้): 1 ชั่วโมงก่อน ATB
        </li>

        <li className='text-gray-600 text-sm'>
          สินค้าอันตราย ประเภทที่ 2 (DG GROUP2): ขนส่งตรงจากเรือ/แชสซี ไปยัง
          แชสซี/เรือ
        </li>

        <li className='text-gray-600 text-sm'>
          สินค้าอันตราย ประเภทที่ 3 (DG GROUP3):
          สามารถจัดเก็บสินค้าไว้ที่ท่าเรือได้สูงสุด 48
          ชั่วโมงหลังจากโหลดสินค้าลงจากเรือขนส่งสินค้า (หรือ) 48
          ชั่วโมงก่อนเวลาปฏิบัติการของสถานีบรรจุหรือส่งมอบสินค้าที่ต้นทาง (CFS)
        </li>

        <li className='text-red-600 text-sm'>
          หากมีความประสงค์ในการทำงานล่วงเวลา จำเป็นต้องแจ้งก่อนเวลา 16.00 น.
          ในวันทำการ
        </li>

        <li className='text-red-600 text-sm'>
          เวลาปิดรับสินค้าประเภท CFS: 6 ชั่วโมง ก่อนเวลาปิดรับสินค้าของ CY
        </li>
      </ul>
    </>
  )
}

const OperatingHoursInfoEN = () => {
  return (
    <>
      <ul className='flex flex-col gap-y-5 list-disc px-5'>
        <li className='text-gray-600 text-sm'>
          Working days: Monday to Saturday | Working hours: 08:00–17:00 HR
        </li>

        <li className='text-gray-600 text-sm'>
          General containers by truck: 24 hrs before ATB (Actual Time of Berth)
        </li>

        <li className='text-gray-600 text-sm'>
          Reefers (fruit): 1 hr before ATB
        </li>

        <li className='text-gray-600 text-sm'>
          Reefers (other): 12 hrs before ATB
        </li>

        <li className='text-gray-600 text-sm'>
          DG GROUP2: Direct from ship/chassis onto chassis/ship
        </li>

        <li className='text-gray-600 text-sm'>
          DG GROUP3: Can be stored inside port area up to maximum of 48 hours
          after discharging from vessel (or) 48 hours before loading Hours of
          Operation for CFS (Container Freight Station)
        </li>

        <li className='text-red-600 text-sm'>
          ** Requests for overtime operation must be made before 16:00 on a
          working day
        </li>

        <li className='text-red-600 text-sm'>
          ** Closing time for CFS cargo: 6 hours before CY cutoff time
        </li>
      </ul>
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
