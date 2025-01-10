import React from 'react'
import Image from 'next/image'
import { useLocale } from 'next-intl'

export default function DockingInfo() {
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
      {locale === 'th' && <DockingInfoTH />}
      {locale === 'en' && <DockingInfoEN />}
      {locale === 'cn' && <DockingInfoCN />}
    </section>
  )
}

export const DockingInfoTH = () => {
  return (
    <>
      <p className='text-gray-800 text-sm mb-3'>
        สายการเดินเรือหรือตัวแทนสายการเดินเรือ
        ต้องส่งอีเมล์รายละเอียดของเรือบรรทุกสินค้า บริการ
        และลักษณะของเรือบรรทุกสินค้า (แผนการจัดเก็บทั่วไป แผนการผูกยึดเรือ
        แผนการจัดวางตู้สินค้าเย็น ระบบความปลอดภัย
        และตารางพื้นที่ระวางตู้คอนเทนเนอร์) ให้แก่ สหไทย เทอร์มินอล
        ล่วงหน้าอย่างน้อย 1 สัปดาห์
        ก่อนเข้าเทียบท่าสายการเดินเรือหรือตัวแทนสายการเดินเรือ
        ต้องส่งข้อมูลตารางการเข้าเทียบท่าระยะยาวล่วงหน้าอย่างน้อย 1 เดือน
        ให้กับสหไทย เทอร์มินอล เพื่อให้สหไทย
        เทอร์มินอลวางแผนจองตู้คอนเทนเนอร์ให้กับเรือขนส่งสินค้าล่วงหน้าอย่างน้อย
        7, 3 และ 1 วัน ก่อนเข้าเทียบท่า สายการเดินเรือหรือตัวแทนสายการเดินเรือ
        ต้องส่งข้อมูลประมาณการของวันที่เรือจะเข้าเทียบท่า (ETA)
        และปริมาณสินค้าที่จะทำการโหลดขึ้นหรือลงโดยประมาณ เพื่อให้ สหไทย
        เทอร์มินอล ยืนยันแผนการเข้าเทียบท่า (POB)
        และประมาณการของวันที่ที่เรือจะออกจากท่าเรือต้นทาง (ETD)
      </p>

      <div className='flex flex-wrap gap-2 border rounded-md items-center px-3 py-2'>
        <span className='text-sm text-gray-700'>
          ส่งอีเมล์ถึงสำนักงานปฏิบัติการของ สหไทย เทอร์มินอล ได้ที่
        </span>

        <span className='text-primary-1'>planner.stt@sahathai.com</span>
      </div>
    </>
  )
}

export const DockingInfoEN = () => {
  return (
    <>
      <p className='text-gray-800 text-sm mb-3'>
        Shipping lines or shipping agents must send an email with the details of
        the cargo ship, services, and cargo ship characteristics (general
        stowage plan, lashing plan, refrigerated container arrangement plan,
        safety system, and container slot allocation plan) to Sahathai Terminal
        at least one week in advance. Shipping lines or shipping agents must
        provide long-term berthing schedules at least one month in advance for
        planning and pre-booking of container slots 7, 3, and 1 day before
        berthing. The shipping lines or agents must also provide an estimated
        time of arrival (ETA) and estimated cargo volumes for loading or
        unloading. Sahathai Terminal will confirm the berthing plan (POB) and
        the estimated departure time (ETD) from the terminal.
      </p>

      <div className='flex flex-wrap gap-2 border rounded-md items-center px-3 py-2'>
        <span className='text-sm text-gray-700'>
          Please email the operations office of Sahathai Terminal at
        </span>

        <span className='text-primary-1'>planner.stt@sahathai.com</span>
      </div>
    </>
  )
}

export const DockingInfoCN = () => {
  return (
    <>
      <p className='text-gray-800 text-sm mb-3'>
        船公司或船公司代理必须提前至少 1
        周发送电子邮件，提供货船的详细信息、服务和货船特性（一般装载计划、
        系泊计划、冷藏集装箱布置计划、安全系统以及集装箱插槽分配计划）到
        Sahathai Terminal。船公司或船公司代理 必须提前至少 1
        个月提供长期停泊时间表，以便在停泊前 7、3 和 1
        天预订集装箱插槽。此外，船公司或代理人还
        必须提供预计到达时间（ETA）和预计装卸货物的数量。Sahathai Terminal
        将确认停泊计划（POB）以及预计的 离港时间（ETD）。
      </p>

      <div className='flex flex-wrap gap-2 border rounded-md items-center px-3 py-2'>
        <span className='text-sm text-gray-700'>
          请发送电子邮件至 Sahathai Terminal 的运营办公室，邮箱为
        </span>

        <span className='text-primary-1'>planner.stt@sahathai.com</span>
      </div>
    </>
  )
}
