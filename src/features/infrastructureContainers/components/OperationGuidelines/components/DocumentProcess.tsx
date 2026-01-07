import React from 'react'
import Image from 'next/image'
import { useLocale } from 'next-intl'

export default function DocumentProcess() {
  const locale = useLocale()
  return (
    <section>
      <Image
        className='mb-5 rounded-md'
        src='/infrastructure-containers/new/instrution-regarding-7.webp'
        alt='instrution-regarding-7'
        width={666}
        height={328}
      />
      {locale === 'th' && <DocumentProcessTH />}
      {locale === 'en' && <DocumentProcessEN />}
      {locale === 'cn' && <DocumentProcessCN />}
    </section>
  )
}

const DocumentProcessTH = () => {
  return (
    <div className='px-5'>
      <h3 className='text-sm text-gray-800 mb-2 underline'>
        ขั้นตอนการยื่นเอกสาร สำหรับเรือขาเข้า
      </h3>
      <p className='text-gray-600 text-sm mb-5'>
        สายการเดินเรือหรือตัวแทนสายการเดินเรือ จำเป็นต้องส่งข้อมูลผ่าน EDI
        (Baplie)/CASP และรายชื่อสินค้าพิเศษ ให้กับทางสหไทย เทอร์มินอล
        ก่อนเวลาเข้าเทียบท่าโดยประมาณ (ETA) ล่วงหน้า 12 ชั่วโมง
        สายการเดินเรือต้องส่งบัญชีสินค้าทางเรือ รายการตู้คอนเทนเนอร์ขาเข้า
        สินค้าอันตราย และสินค้าพิเศษ ให้กับสำนักงานดำเนินเอกสารของสหไทย
        เทอร์มินอล
      </p>

      <h3 className='text-sm text-gray-800 mb-2 underline'>
        ขั้นตอนการยื่นเอกสาร สำหรับเรือขาออก
      </h3>
      <ul className='flex flex-col gap-y-5 list-disc'>
        <li className='text-gray-600 text-sm'>
          สายการเดินเรือหรือตัวแทนสายการเดินเรือ จำเป็นต้องยื่น Document
          Forecast, Pre-loading Plan และ Special Stowage Instructions
          ให้กับทางสหไทย เทอร์มินอล ก่อนเวลาเข้าเทียบท่าโดยประมาณ (ETA) ล่วงหน้า
          12 ชั่วโมง
        </li>

        <li className='text-gray-600 text-sm'>
          สายการเดินเรือหรือตัวแทนสายการเดินเรือ จำเป็นต้องส่งรายชื่อ Final
          Loading List, Final Loading Summary และ Final Loading Plan (หากมี)
          ให้กับทางสหไทย เทอร์มินอล ก่อนเวลาเข้าเทียบท่าโดยประมาณ (ETA) ล่วงหน้า
          12 ชั่วโมง
        </li>

        <li className='text-gray-600 text-sm'>
          เมื่อถึงเวลาปิดรับสินค้าที่ลานวางตู้คอนเทนเนอร์
          สายการเดินเรือหรือตัวแทนสายการเดินเรือ
          จำเป็นต้องส่งเอกสารของตู้คอนเทนเนอร์ที่รอการขนถ่ายให้กับทางสหไทย
          เทอร์มินอลทันที เพื่อป้องกันความล่าช้า
        </li>

        <li className='text-gray-600 text-sm'>
          กรณีที่ท่าเทียบเรือมีการจองเต็มแล้ว
          สายการเดินเรือหรือตัวแทนสายการเดินเรือ
          จำเป็นต้องส่งเอกสารของตู้คอนเทนเนอร์ที่รอการขนถ่ายให้กับทางสหไทย
          เทอร์มินอล เพื่อป้องกันความล่าช้า
        </li>
      </ul>

      <div className='flex flex-wrap gap-2 border rounded-md items-center px-3 py-2 mt-5'>
        <span className='text-sm text-gray-600'>
          ส่งอีเมล์ไปยังสำนักงานจัดเตรียมเอกสาร ที่
        </span>
        <span className='text-primary-1'>cr.stt@sahathai.com</span>
      </div>

      <div className='flex flex-wrap gap-2 border rounded-md items-center px-3 py-2 mt-5'>
        <span className='text-sm text-gray-600'>
          ส่งอีเมล์ไปยังสำนักงานปฏิบัติการ STT ที่
        </span>
        <span className='text-primary-1'>planner.stt@sahathai.com</span>
      </div>
    </div>
  )
}

const DocumentProcessEN = () => {
  return (
    <>
      <div className='px-5 text-sm text-gray-600'>
        <h3 className='text-sm text-gray-800 mb-2 underline'>
          Ship Planning Procedures
        </h3>

        <h4 className='text-sm text-gray-800 mb-2 underline'>
          For Inbound Ship Planning
        </h4>
        <ul className='flex flex-col gap-y-5 list-disc mb-5'>
          <li>
            Not later than 12 hours prior to ETA, the shipping line or agent
            must submit the EDI (Electronic Data Interchange) (Baplie)/CASP and
            Special Cargo lists to the STT Planner.
          </li>
          <li>
            Shipping lines must submit the Manifest, Inward Container, DG and
            Special Cargo lists to STT’s Documentation Office.
          </li>
        </ul>

        <h4 className='text-sm text-gray-800 mb-2 underline'>
          For Outbound Ship Planning
        </h4>
        <ul className='flex flex-col gap-y-5 list-disc'>
          <li>
            Not later than 12 hours prior to ETA the shipping line or agent must
            submit the Booking Forecast, Pre-loading Plan and Special Stowage
            Instructions to the STT Planner.
          </li>
          <li>
            Not later than 12 hours prior to ETA, the shipping line or agent
            must submit the Final Loading List and Final Loading Summary to the
            STT Planner, in addition to the Final Loading Plan (if any).
          </li>
          <li>
            Soon after the CY (Container Yard) cutoff time, the shipping line or
            agent must confirm the Shut-Out Containers list with the STT
            Planner.
          </li>
          <li>
            In cases of full terminal booking, the shipping line or agent must
            submit to the STT Planner a waiting list of containers to avoid
            delays on shut-out decisions.
          </li>
        </ul>

        <div className='flex flex-wrap gap-2 border rounded-md items-center px-3 py-2 mt-5'>
          <span className='text-gray-600'>
            Email the Documentation Office at
          </span>
          <a
            href='mailto:cr.stt@sahathai.com'
            className='text-primary-1 underline'
          >
            cr.stt@sahathai.com
          </a>
        </div>

        <div className='flex flex-wrap gap-2 border rounded-md items-center px-3 py-2 mt-3'>
          <span className='text-gray-600'>
            Email the STT Operations Office at
          </span>
          <a
            href='mailto:planner.stt@sahathai.com'
            className='text-primary-1 underline'
          >
            planner.stt@sahathai.com
          </a>
        </div>
      </div>
    </>
  )
}

const DocumentProcessCN = () => {
  return (
    <>
      <div className='px-5 text-sm text-gray-600'>
        <h3 className='text-sm text-gray-800 mb-2 underline'>
          Ship Planning Procedures
        </h3>

        <h4 className='text-sm text-gray-800 mb-2 underline'>
          For Inbound Ship Planning
        </h4>
        <ul className='flex flex-col gap-y-5 list-disc mb-5'>
          <li>
            Not later than 12 hours prior to ETA, the shipping line or agent
            must submit the EDI (Electronic Data Interchange) (Baplie)/CASP and
            Special Cargo lists to the STT Planner.
          </li>
          <li>
            Shipping lines must submit the Manifest, Inward Container, DG and
            Special Cargo lists to STT’s Documentation Office.
          </li>
        </ul>

        <h4 className='text-sm text-gray-800 mb-2 underline'>
          For Outbound Ship Planning
        </h4>
        <ul className='flex flex-col gap-y-5 list-disc'>
          <li>
            Not later than 12 hours prior to ETA the shipping line or agent must
            submit the Booking Forecast, Pre-loading Plan and Special Stowage
            Instructions to the STT Planner.
          </li>
          <li>
            Not later than 12 hours prior to ETA, the shipping line or agent
            must submit the Final Loading List and Final Loading Summary to the
            STT Planner, in addition to the Final Loading Plan (if any).
          </li>
          <li>
            Soon after the CY (Container Yard) cutoff time, the shipping line or
            agent must confirm the Shut-Out Containers list with the STT
            Planner.
          </li>
          <li>
            In cases of full terminal booking, the shipping line or agent must
            submit to the STT Planner a waiting list of containers to avoid
            delays on shut-out decisions.
          </li>
        </ul>

        <div className='flex flex-wrap gap-2 border rounded-md items-center px-3 py-2 mt-5'>
          <span className='text-gray-600'>
            Email the Documentation Office at
          </span>
          <a
            href='mailto:cr.stt@sahathai.com'
            className='text-primary-1 underline'
          >
            cr.stt@sahathai.com
          </a>
        </div>

        <div className='flex flex-wrap gap-2 border rounded-md items-center px-3 py-2 mt-3'>
          <span className='text-gray-600'>
            Email the STT Operations Office at
          </span>
          <a
            href='mailto:planner.stt@sahathai.com'
            className='text-primary-1 underline'
          >
            planner.stt@sahathai.com
          </a>
        </div>
      </div>
    </>
  )
}
