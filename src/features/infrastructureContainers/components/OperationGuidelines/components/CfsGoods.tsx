import React from 'react'
import Image from 'next/image'
import { useLocale } from 'next-intl'

export default function CfsGoods() {
  const locale = useLocale()
  return (
    <section>
      <Image
        className='mb-5 rounded-md'
        src='/infrastructure-containers/cfs.jpg'
        alt=''
        width={666}
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
        <div className='text-sm text-gray-600'>
          <h3 className='text-sm text-gray-800 mb-5 underline'>สหไทย เทอร์มินอล รับจัดการสินค้า CFS/LCL ดังต่อไปนี้</h3>

          <ul className='flex flex-col gap-y-5 list-disc mb-7'>
            <li className=''>สินค้าที่ได้รับการบรรจุในบรรจุภัณฑ์หรือแพเล็ต และมีน้ำหนักไม่เกิน 2
              ตัน ซึ่งสามารถยกขนด้วยรถฟอร์คลิฟต์ได้
            </li>

            <li className=''>สำหรับสินค้าที่ได้รับการบรรจุในบรรจุภัณฑ์หรือแพเล็ต และมีน้ำหนักเกิน 2
              ตัน
              สามารถติดต่อฝ่ายลูกค้าสัมพันธ์ของเรา เพื่อแจ้งความประสงค์
            </li>

            <li className=''>ในกรณีที่จำเป็นต้องใช้เครื่องมือหรืออุปกรณ์จัดเก็บสินค้าพิเศษ
              จำเป็นต้องชำระค่าใช้จ่ายเพิ่มเติม
            </li>
          </ul>

          <h3 className='text-sm text-gray-800 mb-5 underline'>สหไทย เทอร์มินอล ไม่รับจัดการสินค้า CFS/LCL ดังต่อไปนี้</h3>

          <ul className='flex flex-col gap-y-5 list-disc mb-7'>
            <li className=''> สินค้าที่อาจทำให้เกิดมลพิษบริเวณท่าเรือและคลังสินค้า อาทิ ผงแป้ง สารเคมีที่หลอมละลาย
            </li>

            <li className=''>สินค้าที่ได้รับการสั่งห้ามจากองค์กรภาครัฐ อาทิ สินค้าอันตรายบางประเภท (DG)
            </li>
            <li className=''>เครื่องมือที่มีน้ำหนักมาก สินค้าที่มีน้ำหนักไม่สมดุล และสินค้าประเภทอื่นๆ
              ที่ไม่สามารถยกขนด้วยรถฟอร์คลิฟต์ได้ และ/หรือต้องการเครื่องมือพิเศษในการยกขน
            </li>
            <li className=''>สหไทย เทอร์มินอล ขอสงวนสิทธิ์ที่จะจัดหาเครื่องมือและบุคลากรเพิ่มเติม
              สำหรับขนส่งสินค้าในกรณีพิเศษ เจ้าของสินค้าต้องเป็นฝ่ายจัดหาเครื่องมือยกขนและบุคลากรเอง
            </li>
          </ul>

          <h3 className='text-sm text-gray-800 mb-5 underline'>กฎระเบียบสำหรับสินค้าที่บรรจุในบรรจุภัณฑ์ที่ทำจากไม้ในประเทศปลายทาง

          </h3>

          <ul className='flex flex-col gap-y-5 list-disc'>
            <li className=''>หากต้องมีการระบุกฎระเบียบเกี่ยวกับบรรจุภัณฑ์ที่ทำขึ้นจากไม้ ลูกค้าต้องแจ้ง สหไทย เทอร์มินอล เมื่อทำการจอง
            </li>
          </ul>


        </div>

      </>
  )
}

const CfsGoodsInfoEN = () => {
  return (
      <>
        <p className='text-gray-800 text-sm mb-3'>
          This service is for receiving goods from exporters to load into
          containers at Sahathai port for shipment, for exporters who do not have
          their own packing facilities. Typically, it is a service for full
          container loading of a single exporter’s goods. Charges will apply to
          exporters or their representatives. Additionally, services are available
          for importers for opening containers at Sahathai Terminal to unload
          goods and prepare them for pickup. This includes opening containers with
          goods from multiple importers in a shared container (less-than-container
          load). Goods will be stored in a warehouse until each importer picks
          them up, or it may be a full container load where the importer picks up
          goods directly from the container.
        </p>
      </>
  )
}

const CfsGoodsInfoCN = () => {
  return (
      <>
        <p className='text-gray-800 text-sm mb-3'>
          此服务是为了接收出口商的货物并在Sahathai港口装入集装箱以备运输，适用于没有自己集装箱装载设施的出口商。通常，这是一项针对单一出口商的满集装箱装载服务。公司会向出口商或其代理收取费用。此外，还为进口商提供服务，开箱集装箱并将货物准备好以供取货。这包括多家进口商的货物放在同一个集装箱中的服务（拼箱），货物会存放在仓库，直到每个进口商来取货，或者是单一进口商的满箱服务，进口商可以直接从集装箱取货。
      </p>
    </>
  )
}
