import React from 'react'
import Image from 'next/image'
import { useLocale } from 'next-intl'

export default function CfsGoods() {
  const locale = useLocale()
  return (
    <section>
      <Image
        className='mb-5 rounded-md'
        src='/infrastructure-containers/new/instrution-regarding-3.webp'
        alt='instrution-regarding-3'
        width={720}
        height={328}
      />
      {locale === 'th' && <CfsGoodsInfoTH />}
      {locale === 'en' && <CfsGoodsInfoEN />}
      {locale === 'cn' && <CfsGoodsInfoCN />}
    </section>
  )
}

const CfsGoodsInfoTH = () => {
  return (
    <>
      <div className='text-sm text-gray-600 px-5'>
        <h3 className='text-sm text-gray-800 mb-5 underline'>
          สหไทย เทอร์มินอล รับจัดการสินค้า CFS/LCL ดังต่อไปนี้
        </h3>

        <ul className='flex flex-col gap-y-5 list-disc mb-7'>
          <li>
            สินค้าที่ได้รับการบรรจุในบรรจุภัณฑ์หรือแพเล็ต และมีน้ำหนักไม่เกิน 2
            ตัน ซึ่งสามารถยกขนด้วยรถฟอร์คลิฟต์ได้
          </li>

          <li>
            สำหรับสินค้าที่ได้รับการบรรจุในบรรจุภัณฑ์หรือแพเล็ต และมีน้ำหนักเกิน
            2 ตัน สามารถติดต่อฝ่ายลูกค้าสัมพันธ์ของเรา เพื่อแจ้งความประสงค์
          </li>

          <li>
            ในกรณีที่จำเป็นต้องใช้เครื่องมือหรืออุปกรณ์จัดเก็บสินค้าพิเศษ
            จำเป็นต้องชำระค่าใช้จ่ายเพิ่มเติม
          </li>
        </ul>

        <h3 className='text-sm text-gray-800 mb-5 underline'>
          สหไทย เทอร์มินอล ไม่รับจัดการสินค้า CFS/LCL ดังต่อไปนี้
        </h3>

        <ul className='flex flex-col gap-y-5 list-disc mb-7'>
          <li>
            {' '}
            สินค้าที่อาจทำให้เกิดมลพิษบริเวณท่าเรือและคลังสินค้า อาทิ ผงแป้ง
            สารเคมีที่หลอมละลาย
          </li>

          <li>
            สินค้าที่ได้รับการสั่งห้ามจากองค์กรภาครัฐ อาทิ
            สินค้าอันตรายบางประเภท (DG)
          </li>
          <li>
            เครื่องมือที่มีน้ำหนักมาก สินค้าที่มีน้ำหนักไม่สมดุล
            และสินค้าประเภทอื่นๆ ที่ไม่สามารถยกขนด้วยรถฟอร์คลิฟต์ได้
            และ/หรือต้องการเครื่องมือพิเศษในการยกขน
          </li>
          <li>
            สหไทย เทอร์มินอล ขอสงวนสิทธิ์ที่จะจัดหาเครื่องมือและบุคลากรเพิ่มเติม
            สำหรับขนส่งสินค้าในกรณีพิเศษ
            เจ้าของสินค้าต้องเป็นฝ่ายจัดหาเครื่องมือยกขนและบุคลากรเอง
          </li>
        </ul>

        <h3 className='text-sm text-gray-800 mb-5 underline'>
          กฎระเบียบสำหรับสินค้าที่บรรจุในบรรจุภัณฑ์ที่ทำจากไม้ในประเทศปลายทาง
        </h3>

        <ul className='flex flex-col gap-y-5 list-disc'>
          <li>
            หากต้องมีการระบุกฎระเบียบเกี่ยวกับบรรจุภัณฑ์ที่ทำขึ้นจากไม้
            ลูกค้าต้องแจ้ง สหไทย เทอร์มินอล เมื่อทำการจอง
          </li>
        </ul>
      </div>
    </>
  )
}

const CfsGoodsInfoEN = () => {
  return (
    <>
      <div className='text-sm text-gray-600 px-5'>
        {/* --- Handles cargo --- */}
        <h3 className='text-sm text-gray-800 mb-5 underline'>
          STT handles the following CFS/LCL cargo:
        </h3>
        <ul className='flex flex-col gap-y-5 list-disc mb-7'>
          <li>
            Cargo packed in cases or on pallets weighing NOT more than 2 tonnes
            which can be moved by forklift.
          </li>
          <li>
            For cargo packed in cases or on pallets weighing MORE THAN 2 tonnes,
            please contact our customer service team to make an enquiry.
          </li>
          <li>
            In any cases where special equipment is required, a service charge
            will be levied according to the nature of the operation.
          </li>
        </ul>

        {/* --- Does not handle cargo --- */}
        <h3 className='text-sm text-gray-800 mb-5 underline'>
          STT does not handle the following CFS/LCL cargo:
        </h3>
        <ul className='flex flex-col gap-y-5 list-disc mb-7'>
          <li>
            Cargo that can cause pollution in terminal and warehouse areas such
            as loose powder, smelted chemicals, etc.
          </li>
          <li>
            Cargo that is prohibited by authorities such as certain types of
            dangerous goods (DG).
          </li>
          <li>
            Heavy equipment, cargo of unbalanced weight, and any other special
            cargo that cannot be moved by forklift, and/or requires special
            equipment.
          </li>
          <li>
            STT reserves the right to refuse the provision of equipment and
            labor for any specific cargo. In such cases, the cargo owner will
            supply their own equipment and labor.
          </li>
        </ul>

        {/* --- Regulations --- */}
        <h3 className='text-sm text-gray-800 mb-5 underline'>
          Regulation of Wood Packaging Material at Final Destination Countries:
        </h3>
        <ul className='flex flex-col gap-y-5 list-disc'>
          <li>
            If fumigated wood is required by wood packaging materials
            regulation, customers must inform STT at the time of booking.
          </li>
        </ul>
      </div>
    </>
  )
}

const CfsGoodsInfoCN = () => {
  return (
    <div className='text-sm text-gray-600 px-5'>
      {/* --- Handles cargo --- */}
      <h3 className='text-sm text-gray-800 mb-5 underline'>
        STT handles the following CFS/LCL cargo:
      </h3>
      <ul className='flex flex-col gap-y-5 list-disc mb-7'>
        <li>
          Cargo packed in cases or on pallets weighing NOT more than 2 tonnes
          which can be moved by forklift.
        </li>
        <li>
          For cargo packed in cases or on pallets weighing MORE THAN 2 tonnes,
          please contact our customer service team to make an enquiry.
        </li>
        <li>
          In any cases where special equipment is required, a service charge
          will be levied according to the nature of the operation.
        </li>
      </ul>

      {/* --- Does not handle cargo --- */}
      <h3 className='text-sm text-gray-800 mb-5 underline'>
        STT does not handle the following CFS/LCL cargo:
      </h3>
      <ul className='flex flex-col gap-y-5 list-disc mb-7'>
        <li>
          Cargo that can cause pollution in terminal and warehouse areas such as
          loose powder, smelted chemicals, etc.
        </li>
        <li>
          Cargo that is prohibited by authorities such as certain types of
          dangerous goods (DG).
        </li>
        <li>
          Heavy equipment, cargo of unbalanced weight, and any other special
          cargo that cannot be moved by forklift, and/or requires special
          equipment.
        </li>
        <li>
          STT reserves the right to refuse the provision of equipment and labor
          for any specific cargo. In such cases, the cargo owner will supply
          their own equipment and labor.
        </li>
      </ul>

      {/* --- Regulations --- */}
      <h3 className='text-sm text-gray-800 mb-5 underline'>
        Regulation of Wood Packaging Material at Final Destination Countries:
      </h3>
      <ul className='flex flex-col gap-y-5 list-disc'>
        <li>
          If fumigated wood is required by wood packaging materials regulation,
          customers must inform STT at the time of booking.
        </li>
      </ul>
    </div>
  )
}
