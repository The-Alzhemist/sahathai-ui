import React from 'react'
import Image from 'next/image'
import { useLocale } from 'next-intl'

export default function ResponsibilityScope() {
  const locale = useLocale()
  return (
    <section>
      <Image
        className='mb-5 rounded-md'
        src='/infrastructure-containers/new/instrution-regarding-1-4.webp'
        alt='instrution-regarding-4'
        width={666}
        height={328}
      />
      {locale === 'th' && <ResponsibilityScopeTH />}
      {locale === 'en' && <ResponsibilityScopeEN />}
      {locale === 'cn' && <ResponsibilityScopeCN />}
    </section>
  )
}

export const ResponsibilityScopeTH = () => {
  return (
    <>
      <div className='text-sm text-gray-600 px-5'>
        <ul className='flex flex-col gap-y-5 list-disc mb-7'>
          <li className=''>
            ในกรณีที่สินค้าได้รับความเสียหายระหว่างทำการบรรจุสินค้าในตู้คอนเทนเนอร์และระหว่างที่นำสินค้าออกจากตู้คอนเทนเนอร์
            ภายใต้ความรับผิดชอบของ สหไทย เทอร์มินอล เช่น
            ระหว่างการยกขนด้วยรถฟอร์คลิฟต์ เพื่อขนถ่ายไปบนรถบรรทุก
            รวมทั้งความเสียหายใดๆ ที่เกิดขึ้นจาก สหไทย เทอร์มินอล ทาง สหไทย
            เทอร์มินอล จะเป็นผู้รับผิดชอบให้กับเจ้าของสินค้าหรือผู้รับสินค้า
            (consignee) ในมูลค่าไม่เกิน 50,000 บาทต่อสินค้าหนึ่งชิ้น และ/หรือ
            500,000 บาทต่อตู้คอนเทนเนอร์หนึ่งตู้
          </li>

          <li className=''>
            ในกรณีที่สินค้าได้รับความเสียหายและ/หรือสูญหาย
            ก่อนจะอยู่ในความรับผิดชอบของสหไทย เทอร์มินอล ทางสหไทย เทอร์มินอล
            ขอสงวนสิทธิ์ในการไม่รับผิดชอบไม่ว่าในกรณีใดๆ ทั้งสิ้น
          </li>

          <li className=''>
            เมื่อสหไทย เทอร์มินอล
            ส่งมอบสินค้าในสภาพสมบูรณ์และครบถ้วนเรียบร้อยแล้ว สหไทย
            เทอร์มินอลจะไม่มีส่วนรับผิดชอบต่อความเสียหายใดๆ
            ที่เกิดขึ้นภายหลังการส่งมอบ
          </li>

          <li className=''>
            บุคคลใดที่ลงนามในแบบฟอร์มการส่งมอบในนามของลูกค้าถือว่าเป็นผู้รับ
            และเป็นผู้รับผิดชอบในนามของลูกค้า ทางสหไทย เทอร์มินอล
            จะไม่มีส่วนรับผิดชอบในกรณีที่สินค้าเกิดการสูญเสียหรือเกิดความเสียหายต่อสินค้า
            ภายหลังการส่งมอบสินค้าให้แก่ผู้รับแล้ว
          </li>
        </ul>
      </div>

      <div className='flex flex-wrap gap-2 border rounded-md items-center px-3 py-2 mb-5'>
        <span className='text-sm text-gray-600'>สามารถยื่นคำร้องผ่าน</span>

        <span className='text-primary-1'>claim.stt@sahathai.com</span>
      </div>
    </>
  )
}

export const ResponsibilityScopeEN = () => {
  return (
    <>
      <div className='text-sm text-gray-600 px-5'>
        <h3 className='text-sm text-gray-800 mb-5 underline'>
          STT Cargo Damage and Liability Policy
        </h3>

        <ul className='flex flex-col gap-y-5 list-disc'>
          <li>
            In the event that cargo is damaged during stuffing and un-stuffing
            by STT, including during lifting onto the truck, and the damage has
            clearly been caused by STT, STT will be liable to the cargo owner or
            consignee in an amount not exceeding 50,000 baht per cargo and/or
            500,000 baht per container.
          </li>
          <li>
            If cargo is damaged and/or lost before being in the custody of STT,
            then STT will not be liable in any case. Once STT has delivered
            cargo in full and satisfactory condition, STT will not be liable for
            any damages detected after the delivery.
          </li>
          <li>
            Any person who signs a delivery form on behalf of the customer is
            deemed to be the receiver and acting on behalf of the customer. STT
            will not be liable for loss or damage that occurs after delivery to
            the receiver.
          </li>
          <li>
            Email us here to file a claim at
            <a
              href='mailto:claim.stt@sahathai.com'
              className='text-black underline'
            >
              claim.stt@sahathai.com
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}

export const ResponsibilityScopeCN = () => {
  return (
    <>
      <div className='text-sm text-gray-600 px-5'>
        <h3 className='text-sm text-gray-800 mb-5 underline'>
          STT Cargo Damage and Liability Policy
        </h3>

        <ul className='flex flex-col gap-y-5 list-disc'>
          <li>
            In the event that cargo is damaged during stuffing and un-stuffing
            by STT, including during lifting onto the truck, and the damage has
            clearly been caused by STT, STT will be liable to the cargo owner or
            consignee in an amount not exceeding 50,000 baht per cargo and/or
            500,000 baht per container.
          </li>
          <li>
            If cargo is damaged and/or lost before being in the custody of STT,
            then STT will not be liable in any case. Once STT has delivered
            cargo in full and satisfactory condition, STT will not be liable for
            any damages detected after the delivery.
          </li>
          <li>
            Any person who signs a delivery form on behalf of the customer is
            deemed to be the receiver and acting on behalf of the customer. STT
            will not be liable for loss or damage that occurs after delivery to
            the receiver.
          </li>
          <li>
            Email us here to file a claim at
            <a
              href='mailto:claim.stt@sahathai.com'
              className='text-black underline'
            >
              claim.stt@sahathai.com
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
