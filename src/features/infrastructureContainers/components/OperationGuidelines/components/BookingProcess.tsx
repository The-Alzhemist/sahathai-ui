import React from 'react'
import Image from 'next/image'
import { useLocale } from 'next-intl'

export default function BookingProcess() {
    const locale = useLocale()
    return (
        <section>

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

const BookingProcessCN = () => {
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
