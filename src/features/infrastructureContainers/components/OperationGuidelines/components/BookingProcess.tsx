import React from 'react'
import Image from 'next/image'
import { useLocale } from 'next-intl'

export default function BookingProcess() {
    const locale = useLocale()
    return (
        <section className='max-h-[1000px] overflow-y-scroll'>

            <Image
                className='mb-5 rounded-md'
                src='/infrastructure-containers/booking-process.jpg'
                alt=''
                width={666}
                height={328}
            />
            {locale === 'th' && <BookingProcessTH />}
            {locale === 'en' && <BookingProcessEN />}
            {locale === 'cn' && <BookingProcessCN />}
        </section>
    )
}

const BookingProcessTH = () => {
    return (
        <>

            <h3 className='text-sm text-gray-800 mb-2 underline'>ลานวางตู้คอนเทนเนอร์สำหรับส่งออก
            </h3>
            <p className='text-gray-600 text-sm mb-5'>
                สายการเดินเรือหรือตัวแทนสายการเดินเรือ ต้องส่งมอบ “การแจ้งโอนเข้า” (Pre-advise)
                ให้แก่สำนักงานจัดเตรียมเอกสารของสหไทย เทอร์มินอล ผ่านทางอีเมล์ ทาง EDI หรือทางแฟกซ์
                โดยมีข้อมูลของตู้คอนเทนเนอร์ดังต่อไปนี้
            </p>

            <ul className='flex flex-col gap-y-5 list-disc'>
                <li className='text-gray-600 text-sm'>ชื่อเรือขนส่งสินค้าและเลขที่การเดินทาง (voyage number)
                </li>

                <li className='text-gray-600 text-sm'>สายการเดินเรือหรือตัวแทนสายการเดินเรือ จำเป็นต้องส่งรายชื่อ Final
                    ชื่อลูกค้า
                </li>

                <li className='text-gray-600 text-sm'>ผู้ปฏิบัติการตู้คอนเทนเนอร์
                </li>

                <li className='text-gray-600 text-sm'>ท่าเรือปลายทาง
                </li>

                <li className='text-gray-600 text-sm'>เลขที่จองเรือขนส่งสินค้า
                </li>

                <li className='text-gray-600 text-sm'>การขนส่ง (รถบรรทุกหรือเรือบรรทุก)
                </li>

                <li className='text-gray-600 text-sm'>ประเภทสินค้า (สินค้าทั่วไป สินค้าอันตราย สินค้าเย็น เป็นต้น)
                </li>

                <li className='text-gray-600 text-sm'>เงื่อนไขเฉพาะต่างๆ (เช่น อุณหภูมิ หรือ
                    ประมวลข้อบังคับว่าด้วยการขนส่งสินค้าอันตรายทางทะเล)
                </li>

                <li className='text-gray-600 text-sm'>ใบกำกับ หรือใบรับของ
                    จะต้องได้รับการจัดเตรียมให้แก่สำนักงานศุลกากรที่ประตูเข้าในเวลาที่ตู้คอนเทนเนอร์ถูกนำเข้าโดยรถบรรทุก
                </li>

                <li className='text-gray-600 text-sm'>สำหรับตู้คอนเทนเนอร์ ที่ได้รับการขนส่งโดยเรือบรรทุก
                    ผู้ควบคุมเรือบรรทุกจะทำการจองที่ยืนยันกับสำนักงานจัดเตรียมเอกสารของสหไทย เทอร์มินอล
                    ก่อนเรือบรรทุกจะมาถึง ใบกำกับจะต้องถูกส่งให้แก่สำนักงานจัดเตรียมเอกสารของสหไทย เทอร์มินอล
                    ก่อนการนำเข้าไปในคอนเทนเนอร์โดยเรือบรรทุก
                </li>
            </ul>

            <div className='flex flex-wrap gap-2 border rounded-md items-center px-3 py-2 my-5'>
            <span className='text-sm text-gray-600'>
      ส่งอีเมล์ไปยังสำนักงานจัดเตรียมเอกสารที่
            </span>
                <span className='text-primary-1'>cr.stt@sahathai.com</span>
            </div>

            <h3 className='text-sm text-gray-800 mb-2 underline'>ลานเก็บตู้คอนเทนเนอร์ส่งออก (CFS)
            </h3>
            <ul className='flex flex-col gap-y-5 list-disc'>
                <li className='text-gray-600 text-sm'>สายการเดินเรือหรือตัวแทนสายการเดินเรือ จะต้องส่งเอกสารการจอง CFS
                    ให้แก่สำนักงานจัดเตรียมเอกสารโดยทางอีเมล์หรือแฟกซ์
                </li>

                <li className='text-gray-600 text-sm'> บริษัทจัดส่งสินค้าทางเรือจะต้องส่งใบแจ้งราคา/บัญชีรายการการบรรจุก่อนการนำเข้าไปยังสินค้า
                </li>

                <li className='text-gray-600 text-sm'>บริษัทจัดส่งสินค้าทางเรือจะต้องส่งใบกำกับก่อนการบรรจุ
                </li>
            </ul>

            <div className='flex flex-wrap gap-2 border rounded-md items-center px-3 py-2 my-5'>
            <span className='text-sm text-gray-600'>
                ส่งอีเมล์สำนักงานจัดเตรียมเอกสารที่
            </span>
                <span className='text-primary-1'>cr.stt@sahathai.com</span>
            </div>

            <div className='flex flex-wrap gap-2 border rounded-md items-center px-3 py-2 my-5'>
            <span className='text-sm text-gray-600'>
              โททรศัพท์ ติดต่อ
            </span>
                <span
                    className='text-primary-1'>+66 (0)84-540-7912, +66(0)92-224-4818 </span>
            </div>

            <div className='flex flex-wrap gap-2 border rounded-md items-center px-3 py-2 my-5'>
            <span className='text-sm text-gray-600'>
          โทรสาร
            </span>
                <span
                    className='text-primary-1'> +66(0)2-386-8008</span>
            </div>


            <h3 className='text-sm text-gray-800 mb-2 underline'>การขนส่งสินค้าทางเรือเพื่อนำเข้า
            </h3>
            <ul className='flex flex-col gap-y-5 list-disc'>
                <li className='text-gray-600 text-sm'> ผู้รับของจะต้องส่งใบส่งมอบ (D/O) (Delivery Order) และ
                    ใบศุลกากรให้แก่สำนักงานจัดเตรียมเอกสารของสหไทย เทอร์มินอล สำหรับคอนเทนเนอร์นำเข้าภายในประเทศ
                </li>

                <li className='text-gray-600 text-sm'> สำนักงานจัดเตรียมเอกสารของสหไทย เทอร์มินอล
                    จะจัดเตรียมเอกสารส่งมอบสำหรับการเก็บตู้คอนเทนเนอร์นำเข้า
                </li>

                <li className='text-gray-600 text-sm'>สายการเดินเรือหรือตัวแทนสายการเดินเรือ
                    จะต้องส่งบัญชีสินค้าที่บรรทุกมากับเรือและแจ้งสถานะของสินค้า (CY/DIR/LCL/CFS) ล่วงหน้า 24 ชั่วโมง
                    ก่อนสินค้าจะขนส่งมาถึงสหไทย เทอร์มินอล
                </li>
            </ul>

            <div className='flex flex-wrap gap-2 border rounded-md items-center px-3 py-2 my-5'>
            <span className='text-sm text-gray-600'>
   ส่งอีเมล์ไปยังสำนักงานจัดเตรียมเอกสาร ที่
            </span>
                <span
                    className='text-primary-1'>cr.stt@sahathai.com</span>
            </div>
        </>
    )
}

const BookingProcessEN = () => {
    return <div className="px-5 text-sm text-gray-600">

      <h3 className="text-sm text-gray-800 mb-2 underline">Export CY</h3>
      <p className="mb-5">
        The shipping line or agent must submit a “Pre-advise” to STT’s Documentation Office by email, EDI, or fax before export containers gate-in containing the following information:
      </p>
      <ul className="flex flex-col gap-y-5 list-disc">
        <li>Vessel name and voyage number</li>
        <li>Customer name</li>
        <li>Container operator</li>
        <li>Container number, size and type</li>
        <li>Port of discharge</li>
        <li>Vessel booking numbers</li>
        <li>Transportation (truck or barge)</li>
        <li>Cargo type (general, DG, Reefer, etc.)</li>
        <li>Controlled conditions (e.g., temperature, IMDG [International Maritime Dangerous Goods Code])</li>
        <li>
          A Bai-Kam-Kab, or receipt note, shall be provided to the Customs Office at the Booth Gate at the time the container is brought in by truck.
        </li>
        <li>
          For containers by barge, the barge operator is to provide confirmed booking to STT’s Documentation Office before the barge’s arrival. The Bai-Kam-Kab is to be submitted to STT’s Documentation Office before bringing in containers by barge.
        </li>
      </ul>

      <div className="flex flex-wrap gap-2 border rounded-md items-center px-3 py-2 my-5">
        <span>Email the Documentation Office at</span>
        <a href="mailto:cr.stt@sahathai.com" className="text-primary-1 underline">cr.stt@sahathai.com</a>
      </div>


      <h3 className="text-sm text-gray-800 mb-2 underline">Export CFS</h3>
      <ul className="flex flex-col gap-y-5 list-disc">
        <li>
          The shipping line or agent is to submit CFS booking documentation to STT’s Documentation Office by email or fax.
        </li>
        <li>
          The shipper is to submit an Invoice/Packing List before bringing in cargo.
        </li>
        <li>
          The shipper is to submit a Bai-Kam-Kab before stuffing.
        </li>
      </ul>

      <div className="flex flex-col gap-2 border rounded-md px-3 py-2 my-5">
        <div className="flex flex-wrap gap-2 items-center">
          <span>Click here to email the Documentation Office at</span>
          <a href="mailto:cr.stt@sahathai.com" className="text-primary-1 underline">cr.stt@sahathai.com</a>
        </div>
        <div className="flex flex-wrap gap-2 items-center">
          <span>Service Hotline:</span>
          <span className="text-primary-1">+66 (0)84-540-7912, +66 (0)92-224-4818</span>
        </div>
        <div className="flex flex-wrap gap-2 items-center">
          <span>Fax:</span>
          <span className="text-primary-1">+66 (0)2-386-8008</span>
        </div>
      </div>


      <h3 className="text-sm text-gray-800 mb-2 underline">Import Shipment</h3>
      <ul className="flex flex-col gap-y-5 list-disc">
        <li>
          The consignee is to submit a (D/O) (Delivery Order) and Customs Slip to STT’s Documentation Office for local import containers.
        </li>
        <li>
          STT’s Documentation Office will prepare a Delivery Ticket for import container pickup.
        </li>
        <li>
          The shipping line or agent is to submit manifest and advise the status of shipment (CY/DIR/LCL/CFS) 24 hours before shipment arrival at STT.
        </li>
      </ul>

      <div className="flex flex-wrap gap-2 border rounded-md items-center px-3 py-2 my-5">
        <span>Click here to email the Documentation Office at</span>
        <a href="mailto:cr.stt@sahathai.com" className="text-primary-1 underline">cr.stt@sahathai.com</a>
      </div>
    </div>
}

const BookingProcessCN = () => {
  return <div className="px-5 text-sm text-gray-600">

    <h3 className="text-sm text-gray-800 mb-2 underline">Export CY</h3>
    <p className="mb-5">
      The shipping line or agent must submit a “Pre-advise” to STT’s Documentation Office by email, EDI, or fax before export containers gate-in containing the following information:
    </p>
    <ul className="flex flex-col gap-y-5 list-disc">
      <li>Vessel name and voyage number</li>
      <li>Customer name</li>
      <li>Container operator</li>
      <li>Container number, size and type</li>
      <li>Port of discharge</li>
      <li>Vessel booking numbers</li>
      <li>Transportation (truck or barge)</li>
      <li>Cargo type (general, DG, Reefer, etc.)</li>
      <li>Controlled conditions (e.g., temperature, IMDG [International Maritime Dangerous Goods Code])</li>
      <li>
        A Bai-Kam-Kab, or receipt note, shall be provided to the Customs Office at the Booth Gate at the time the container is brought in by truck.
      </li>
      <li>
        For containers by barge, the barge operator is to provide confirmed booking to STT’s Documentation Office before the barge’s arrival. The Bai-Kam-Kab is to be submitted to STT’s Documentation Office before bringing in containers by barge.
      </li>
    </ul>

    <div className="flex flex-wrap gap-2 border rounded-md items-center px-3 py-2 my-5">
      <span>Email the Documentation Office at</span>
      <a href="mailto:cr.stt@sahathai.com" className="text-primary-1 underline">cr.stt@sahathai.com</a>
    </div>


    <h3 className="text-sm text-gray-800 mb-2 underline">Export CFS</h3>
    <ul className="flex flex-col gap-y-5 list-disc">
      <li>
        The shipping line or agent is to submit CFS booking documentation to STT’s Documentation Office by email or fax.
      </li>
      <li>
        The shipper is to submit an Invoice/Packing List before bringing in cargo.
      </li>
      <li>
        The shipper is to submit a Bai-Kam-Kab before stuffing.
      </li>
    </ul>

    <div className="flex flex-col gap-2 border rounded-md px-3 py-2 my-5">
      <div className="flex flex-wrap gap-2 items-center">
        <span>Click here to email the Documentation Office at</span>
        <a href="mailto:cr.stt@sahathai.com" className="text-primary-1 underline">cr.stt@sahathai.com</a>
      </div>
      <div className="flex flex-wrap gap-2 items-center">
        <span>Service Hotline:</span>
        <span className="text-primary-1">+66 (0)84-540-7912, +66 (0)92-224-4818</span>
      </div>
      <div className="flex flex-wrap gap-2 items-center">
        <span>Fax:</span>
        <span className="text-primary-1">+66 (0)2-386-8008</span>
      </div>
    </div>


    <h3 className="text-sm text-gray-800 mb-2 underline">Import Shipment</h3>
    <ul className="flex flex-col gap-y-5 list-disc">
      <li>
        The consignee is to submit a (D/O) (Delivery Order) and Customs Slip to STT’s Documentation Office for local import containers.
      </li>
      <li>
        STT’s Documentation Office will prepare a Delivery Ticket for import container pickup.
      </li>
      <li>
        The shipping line or agent is to submit manifest and advise the status of shipment (CY/DIR/LCL/CFS) 24 hours before shipment arrival at STT.
      </li>
    </ul>

    <div className="flex flex-wrap gap-2 border rounded-md items-center px-3 py-2 my-5">
      <span>Click here to email the Documentation Office at</span>
      <a href="mailto:cr.stt@sahathai.com" className="text-primary-1 underline">cr.stt@sahathai.com</a>
    </div>
  </div>
}
