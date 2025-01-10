import React from 'react'
import Image from 'next/image'
import { useLocale } from 'next-intl'

export default function CfsGoods() {
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
      {locale === 'th' && <CfsGoodsInfoTH />}
      {locale === 'en' && <CfsGoodsInfoEN />}
      {locale === 'cn' && <CfsGoodsInfoCN />}
    </section>
  )
}

const CfsGoodsInfoTH = () => {
  return (
    <>
      <p className='text-gray-800 text-sm mb-3'>
        เป็นบริการสำหรับการรับสินค้าจากผู้ส่งออกสินค้ามาบรรจุใส่ตู้คอนเทนเนอร์ที่ท่าเรือสหไทย
        เพื่อเตรรยมยกขึ้นเรือขนสินค้าสำหรับผู้ส่งออกสินค้าที่ไม่มีฝ่ายบรรจุสินค้าเข้าตู้คอนเทนเนอร์เป็นของตัวเอง
        โดยส่วนมากเป็นการให้บริการในลักษณะบรรจุสินค้าของผู้ส่งออกรายเดียวแบบเต็มตู้
        สำหรับการบรรจุสินค้าเข้าตู้คอนเทนเนอร์เพื่อส่งออก โดยบริษัทฯ
        จะเรียกเก็บค่าบริการจากผู้ส่งออกสินค้าหรือตัวแทนของผู้ส่งออก
        นอกจากนี้บริษัทฯ ยังมีบริการสำหรับผู้นำเข้าสินค้า
        โดยเป็นการบริการในการเปิดตู้คอนเทนเนอร์ ที่นำมาส่งที่ท่าเรือสหไทย
        เพื่อนำสินค้าออกมาจากตู้คอนเทนเนอร์เพื่อจัดเตรียมให้ผู้นำเข้ามารับสินค้า
        โดยมีทั้งการเปิดตู้คอนเทนเนอร์สำหรับตู้คอนเทนเนอร์ที่ขนสินค้าของผู้นำเข้าสินค้าหลาย
        ๆ รายรวมกัรอยู่ในตู้คอนเทนเนอร์เดียวกัน
        ซึ่งใช้บริการขนสินค้าแบบไม่เต็มตู้คอนเทนเนอร์
        ซึ่งจะมีสินค้าจากผู้นำเข้าสินค้ารายอื่นบรรจุรวมอยู่ในตู้คอนเทนเนอร์ด้วย
        โดยสินค้าจะพักไว้ในโรงพักสินค้าเพื่อรอผู้นำเข้าสินค้าแต่ละรายมารับสินค้า
        และบริการเปิดตู้คอนเทนเนอร์ซึ่งบรรจุสินค้าของผู้นำเข้าเพียงรายเดียว
        ซึ่งผู้นำเข้าจะมารับสินค้าโดยตรงจากตู้คอนเทนเนอร์ โดยบริษัทฯ
        จะเรียกเก็บค่าบริการจากผู้นำเข้าหรือตัวแทนของผู้นำเข้า
      </p>
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
