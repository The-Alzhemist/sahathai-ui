import React from 'react'
import Image from 'next/image'
import { useLocale } from 'next-intl'

export default function DocumentProcess() {
    const locale = useLocale()
    return (
        <section>

            <Image
                className='mb-5 rounded-md'
                src='/infrastructure-containers/documentProcess.jpg'
                alt=''
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
        <>

            <h3 className='text-sm text-gray-800 mb-2 underline'>ขั้นตอนการยื่นเอกสาร สำหรับเรือขาเข้า
            </h3>
            <p className='text-gray-600 text-sm mb-5'>
                สายการเดินเรือหรือตัวแทนสายการเดินเรือ จำเป็นต้องส่งข้อมูลผ่าน EDI (Baplie)/CASP และรายชื่อสินค้าพิเศษ
                ให้กับทางสหไทย เทอร์มินอล ก่อนเวลาเข้าเทียบท่าโดยประมาณ (ETA) ล่วงหน้า 12 ชั่วโมง
                สายการเดินเรือต้องส่งบัญชีสินค้าทางเรือ รายการตู้คอนเทนเนอร์ขาเข้า สินค้าอันตราย และสินค้าพิเศษ
                ให้กับสำนักงานดำเนินเอกสารของสหไทย เทอร์มินอล
            </p>

            <h3 className='text-sm text-gray-800 mb-2 underline'>ขั้นตอนการยื่นเอกสาร สำหรับเรือขาออก
            </h3>
            <ul className='flex flex-col gap-y-5 list-disc'>
                <li className='text-gray-600 text-sm'>สายการเดินเรือหรือตัวแทนสายการเดินเรือ จำเป็นต้องยื่น Document
                    Forecast, Pre-loading Plan และ Special Stowage Instructions ให้กับทางสหไทย เทอร์มินอล
                    ก่อนเวลาเข้าเทียบท่าโดยประมาณ (ETA) ล่วงหน้า 12 ชั่วโมง
                </li>

                <li className='text-gray-600 text-sm'>สายการเดินเรือหรือตัวแทนสายการเดินเรือ จำเป็นต้องส่งรายชื่อ Final
                    Loading List, Final Loading Summary และ Final Loading Plan (หากมี) ให้กับทางสหไทย เทอร์มินอล
                    ก่อนเวลาเข้าเทียบท่าโดยประมาณ (ETA) ล่วงหน้า 12 ชั่วโมง
                </li>

                <li className='text-gray-600 text-sm'>เมื่อถึงเวลาปิดรับสินค้าที่ลานวางตู้คอนเทนเนอร์
                    สายการเดินเรือหรือตัวแทนสายการเดินเรือ
                    จำเป็นต้องส่งเอกสารของตู้คอนเทนเนอร์ที่รอการขนถ่ายให้กับทางสหไทย เทอร์มินอลทันที
                    เพื่อป้องกันความล่าช้า
                </li>

                <li className='text-gray-600 text-sm'>กรณีที่ท่าเทียบเรือมีการจองเต็มแล้ว
                    สายการเดินเรือหรือตัวแทนสายการเดินเรือ
                    จำเป็นต้องส่งเอกสารของตู้คอนเทนเนอร์ที่รอการขนถ่ายให้กับทางสหไทย เทอร์มินอล เพื่อป้องกันความล่าช้า
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
        </>
    )
}

const DocumentProcessEN = () => {
    return (
        <>

            <h3 className='text-sm text-gray-800 mb-2 underline'>การขอใบอนุญาตสำหรับการติดต่อชั่วคราวนี้</h3>
            <p className='text-gray-600 text-sm mb-5'>
                ผู้มาติดต่อที่ประสงค์จะติดต่ออาคารสำนักงานหรืออาคารปฏิบัติการ
                จำเป็นต้องแลกบัตรประชาชนและขอรับใบอนุญาตสำหรับผู้มาติดต่อที่ฝ่ายรักษาความปลอดภัยบริเวณประตูทางเข้าท่าเรือ
            </p>

            <h3 className='text-sm text-gray-800 mb-2 underline'>การขอใบอนุญาตสำหรับการติดต่อระยะยาว
            </h3>
            <p className='text-gray-600 text-sm mb-5'>
                ตัวแทนสายการเดินเรือที่ต้องการใบอนุญาตสำหรับการเข้ามายังสหไทย เทอร์มินอลในระยะยาว
                จำเป็นต้องกรอกแบบฟอร์มเพื่อแจ้งความประสงค์ และส่งเอกสารให้กับสำนักงาน Terminal Service คลิกที่นี่
                เพื่อส่งอีเมล์ไปยังสำนักงาน SSHE ที่ sshe.stt@sahathai.com
            </p>

            <h3 className='text-sm text-gray-800 mb-5 underline'>สิทธิ์การเข้ามายังพื้นที่ท่าเรือและเรือขนส่งสินค้า
            </h3>
            <p className='text-gray-600 text-sm mb-5'>
                บุคลากร (ยกเว้นตัวแทนสายการเดินเรือ)
                ที่มีความประสงค์จะเข้าไปในพื้นที่ท่าเรือหรือมีความประสงค์จะขึ้นไปบนเรือ ต้องกรอกแบบฟอร์มแจ้งความประสงค์
                และลงนามรับรองโดยตัวแทนสายการเดินเรือ เพื่อขออนุญาตสหไทย เทอร์มินอล ในการเข้าไปยังพื้นที่ปฏิบัติการ
            </p>


            <h3 className='text-sm text-gray-800 mb-5 underline'>การปฏิบัติการในพื้นที่ท่าเรือ
            </h3>
            <p className='text-gray-600 text-sm mb-5'>
                บุคลากรที่มีความประสงค์จะปฏิบัติงานในพื้นที่ท่าเรือ จำเป็นต้องกรอกเอกสารอนุญาตปฏิบัติงาน (Work Permit
                Form) ให้ครบถ้วน และแจ้งความประสงค์มายังสำนักงาน Terminal Service คลิกที่นี่ เพื่อส่งอีเมล์ไปยังสำนักงาน
                SSHE ที่ sshe.stt@sahathai.com
            </p>


            <h3 className='text-sm text-gray-800 mb-5 underline'>ลูกเรือที่ต้องการเข้าไปยังพื้นที่ท่าเรือ
            </h3>
            <p className='text-gray-600 text-sm mb-5'>
                ลูกเรือที่ประสงค์จะเข้าไปยังพื้นที่ปฏิบัติการท่าเรือ
                จำเป็นต้องติดต่อไปยังฝ่ายรักษาความปลอดภัยที่บริเวณท่าเรือ เพื่อลงทะเบียนและแลกบัตรลูกเรือ
            </p>

            <h3 className='text-sm text-gray-800 mb-5 underline'>สติ๊กเกอร์รถสำหรับตัวแทนสายการเดินเรือ
            </h3>
            <p className='text-gray-600 text-sm mb-5'>
                ตัวแทนสายการเดินเรือที่ต้องการสติ๊กเกอร์ติดรถเพื่อเข้าไปยังอาคารสำนักงาน จำเป็นต้องยื่นกรอกเอกสารแจ้งความประสงค์ในการขอสติ๊กเกอร์ติดรถยนต์ให้ครบถ้วน และยื่นเอกสาร พร้อมสำเนาใบอนุญาตขับขี่รถยนต์ และสำเนาของใบทะเบียนรถยนต์ และยื่นให้เอกสารให้กับสำนักงาน Terminal Service คลิกที่นี่ เพื่อส่งอีเมล์ไปยังสำนักงาน SSHE ที่ sshe.stt@sahathai.com
            </p>
        </>
    )
}

const DocumentProcessCN = () => {
    return (
        <>
            <p className='text-gray-800 text-sm mb-3'>进入和离开公司港区的访客规定</p>

            <p className='text-gray-800 text-sm mb-3'>
                为确保公司港区的出入秩序和安全，访客需严格遵守以下港口操作规程：
            </p>

            <p className='text-gray-800 text-sm mb-3'>
                1) 访客拜访港口员工时，安保人员需遵守公司的港区出入控制原则。
            </p>

            <p className='text-gray-800 text-sm mb-3'>
                2)
                访客拜访港口官员时，安保人员需评估其是否适合，并联系相关港口官员。访客需用身份证或政府颁发的证件换取访客证，并获得拜访许可。此许可需由官员签字确认。
            </p>

            <p className='text-gray-800 text-sm mb-3'>
                3)
                完成事务后，访客需归还访客证。如需进一步拜访代理人或办公楼内的其他人员，需根据港区出入控制原则申请新的访问许可。
            </p>

            <p className='text-gray-800 text-sm mb-3'>
                4)
                拜访船员或在码头区域开展业务的访客需在批准的进入名单上。安保人员将用身份证换取访客证并签发访问许可，此许可需由相关联系人签字确认。
            </p>

            <p className='text-gray-800 text-sm mb-3'>
                5) 短期或临时工作的承包商需遵循以下步骤申请工作许可：
            </p>

            <p className='text-gray-800 text-sm mb-3 ml-5'>
                5.1)
                有主管的承包商需联系安保人员说明工作目的，填写工作许可表，并用员工的身份证换取访问证。需提供员工名单及进入港区的工具清单。
            </p>
        </>
    )
}
