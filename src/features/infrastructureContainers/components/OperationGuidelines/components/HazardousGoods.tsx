import React from 'react'
import Image from 'next/image'
import { useLocale } from 'next-intl'

export default function HazardousGoods() {
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
      {locale === 'th' && <HazardousGoodsInfoTH />}
      {locale === 'en' && <HazardousGoodsInfoEN />}
      {locale === 'cn' && <HazardousGoodsInfoCN />}
    </section>
  )
}

const HazardousGoodsInfoTH = () => {
  return (
    <>
      <p className='text-gray-800 text-sm mb-3'>
        สินค้าอันตราย ท่าเรือจะใช้ UN Number
        ในการตรวจสอบและบ่งชี้ประเภทสินค้าอันตราย โดยสามารถแบ่ง
        ประเภทสินค้าอันตราย ได้ออกเป็น 3 กลุ่ม ดังนี้
      </p>
      <ul className='flex flex-col gap-2 text-gray-800 text-sm mb-3'>
        <li className='mb-3 flex items-center gap-2'>
          <span className='bg-red-200 rounded-xl px-3 py-1'>กลุ่มที่ 1 </span>
          <span>ห้ามขนถ่าย</span>
        </li>

        <li className='mb-3 flex items-center gap-2'>
          <span className='bg-yellow-200 rounded-xl px-3 py-1'>
            กลุ่มที่ 2{' '}
          </span>
          <span>ไม่รับฝากเก็บ (ลูกค้าต้องนำรถมารับที่ข้างเรือเท่านั้น)</span>
        </li>

        <li className='mb-3 flex items-center gap-2'>
          <span className='bg-green-200 rounded-xl px-3 py-1'>กลุ่มที่ 3 </span>
          <span>
            ฝากเก็บได้ไม่เกิน 5 วันทำการ ลูกค้าต้องนำรถมารับภายใน 5 วัน
            (นับจากวันที่ตู้วางพื้นในลาน)
          </span>
        </li>
      </ul>

      <div className='flex flex-wrap gap-2 border rounded-md items-center px-3 py-1'>
        <span className='text-sm text-gray-700'>
          สามารถ นำ UN Number เข้าไปตรวจสอบข้อมูลในระบบ โดยเข้าไปตรวจสอบใน
        </span>

        <a
          className='text-primary-1'
          href='https://stt.sahathaiterminal.com/containerinquery/Default.aspx?type=DG'
          rel='noopener'
          target='_blank'
        >
          ลิ้งตรวจสอบข้อมูลในระบบ
        </a>
      </div>
    </>
  )
}

const HazardousGoodsInfoEN = () => {
  return (
    <>
      <p className='text-gray-800 text-sm mb-3'>
        Hazardous goods are identified and verified using their UN Number. They
        can be categorized into three groups as follows:
      </p>
      <ul className='flex flex-col gap-2 text-gray-800 text-sm mb-3'>
        <li className='mb-3 flex items-center gap-2'>
          <span className='bg-red-200 rounded-xl px-3 py-1'>Group 1 </span>
          <span>Prohibited for handling.</span>
        </li>

        <li className='mb-3 flex items-center gap-2'>
          <span className='bg-yellow-200 rounded-xl px-3 py-1'>Group 2 </span>
          <span>
            Not accepted for storage (customers must collect directly from the
            vessel).
          </span>
        </li>

        <li className='mb-3 flex items-center gap-2'>
          <span className='bg-green-200 rounded-xl px-3 py-1'>Group 3 </span>
          <span>
            Can be stored for up to 5 working days. Customers must collect
            within 5 days (starting from the date the container is placed in the
            yard).
          </span>
        </li>
      </ul>

      <div className='flex flex-wrap gap-2 border rounded-md items-center px-3 py-1'>
        <span className='text-sm text-gray-700'>
          You can check the UN Number details in the system by visiting:
        </span>

        <a
          className='text-primary-1'
          href='https://stt.sahathaiterminal.com/containerinquery/Default.aspx?type=DG'
          rel='noopener'
          target='_blank'
        >
          check the UN Number details
        </a>
      </div>
    </>
  )
}

const HazardousGoodsInfoCN = () => {
  return (
    <>
      <p className='text-gray-800 text-sm mb-3'>
        危险品通过 UN 编号进行识别和验证，可分为以下三类：
      </p>
      <ul className='flex flex-col gap-2 text-gray-800 text-sm mb-3'>
        <li className='mb-3 flex items-center gap-2'>
          <span className='bg-red-200 rounded-xl px-3 py-1'>第一类 </span>
          <span>禁止装卸。</span>
        </li>

        <li className='mb-3 flex items-center gap-2'>
          <span className='bg-yellow-200 rounded-xl px-3 py-1'>第二类 </span>
          <span>不接受存储（客户必须直接从船只提取）。</span>
        </li>

        <li className='mb-3 flex items-center gap-2'>
          <span className='bg-green-200 rounded-xl px-3 py-1'>第三类 </span>
          <span>
            可存储最多 5 个工作日。客户必须在 5
            天内提取（从集装箱放置到堆场的日期算起）。
          </span>
        </li>
      </ul>

      <div className='flex flex-wrap gap-2 border rounded-md items-center px-3 py-1'>
        <span className='text-sm text-gray-700'>
          您可以访问以下链接，在系统中检查 UN 编号的详细信息：
        </span>

        <a
          className='text-primary-1'
          href='https://stt.sahathaiterminal.com/containerinquery/Default.aspx?type=DG'
          rel='noopener'
          target='_blank'
        >
          在系统中检查 UN 编号的详细信息
        </a>
      </div>
    </>
  )
}
