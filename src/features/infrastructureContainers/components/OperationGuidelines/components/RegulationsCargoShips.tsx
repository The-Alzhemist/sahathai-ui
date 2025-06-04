import React from 'react'
import Image from 'next/image'
import { useLocale } from 'next-intl'

export default function RegulationsCargoShips() {
  const locale = useLocale()
  return (
    <section>
      <Image
        className='mb-5 border rounded-md'
        src='/infrastructure-containers/regulationCargo.jpg'
        alt=''
        width={666}
        height={328}
      />
      {locale === 'th' && <RegulationsCargoShipsInfoTH />}
      {locale === 'en' && <RegulationsCargoShipsInfoEN />}
      {locale === 'cn' && <RegulationsCargoShipsInfoCN />}
    </section>
  )
}

const RegulationsCargoShipsInfoTH = () => {
  return (
      <>
          <div className='text-sm text-gray-600'>
              <ul className='flex flex-col gap-y-5 list-disc'>
                  <li className='text-gray-600 text-sm'>กัปตันเรือ/หัวหน้าเจ้าหน้าที่มีหน้าที่รับผิดชอบในการตรวจสอบและตรวจสอบทรัพย์สินของสหไทย
                      เทอร์มินอล ร่วมกัน เพื่อรับประกันว่า ไม่มีความเสียหายใดๆ
                      เกิดขึ้นจากการชนเมื่อเรือขนส่งสินค้าเข้าเทียบท่า รวมทั้งตลอดเวลาที่เรือเทียบท่าที่ท่าเรือ
                  </li>

                  <li className='text-gray-600 text-sm'>มีการจัดเตรียมสะพานขึ้นลงเรือที่มีราวจับเหมาะสม
                      รวมทั้งตาข่ายป้องกัน ทันทีที่เรือขนส่งสินค้าเข้าเทียบท่าที่ท่าเรือ
                  </li>

                  <li className='text-gray-600 text-sm'>กัปตันเรือ/หัวหน้าเจ้าหน้าที่
                      มีหน้าที่รับผิดชอบในการเคลื่อนย้ายหรือปรับเปลี่ยนตำแหน่งของปั้นจั่นเรือทุกครั้งที่จำเป็น
                      เพื่อไม่ให้ขัดขวางการทำงานภายในท่าเรือ และเพื่อหลีกเลี่ยงการชนบริเวณหน้าท่า (Quay Crane)
                      และปั้นจั่นเรือ (ship derricks) เรือขนส่งสินค้า โดยต้องได้รับการอนุมัติจากสหไทย เทอร์มินอล
                      ก่อนทุกครั้ง เมื่อต้องทำการเคลื่อนย้ายหรือปรับเปลี่ยนตำแหน่ง
                  </li>

                  <li className='text-gray-600 text-sm'>กัปตันเรือ/หัวหน้าเจ้าหน้าที่
                      มีหน้าที่รับผิดชอบในการจัดหาอุปกรณ์ยึด (Lashing equipment) ที่เหมาะสมและมีประสิทธิภาพ
                      หากมีการแจ้งความประสงค์จากสหไทย เทอร์มินอล กัปตัน/หัวหน้าเจ้าหน้าที่
                      จำเป็นต้องทำการตรวจสอบว่าอุปกรณ์ยึดมีความปลอดภัยและได้ประสิทธิภาพ หากอุปกรณ์ยึดไม่ได้มาตรฐาน
                      ต้องทำการแจ้งเจ้าหน้าที่สหไทย เทอร์มินอล ทันที
                      ซึ่งหากเกิดความล่าช้าหรือส่งผลกระทบต่อเวลาปฏิบัติการ เนื่องจากทำการตรวจสอบอุปกรณ์ยึด
                      ตัวแทนสายการเดินเรือจำเป็นต้องชำระค่าใช้จ่ายเพิ่มเติม
                  </li>

                  <li className='text-gray-600 text-sm'>กัปตันเรือ/หัวหน้าเจ้าหน้าที่
                      มีหน้าที่รับผิดชอบการบำรุงรักษาความปลอดภัยของเรือขนส่งสินค้า อาทิ
                      การมัดเชือกผูกเรือให้แน่นตลอดการเทียบท่าเรือ


                  </li>


                  <li className='text-gray-600 text-sm'>หากลูกเรือและบุคลากรอื่นมีความประสงค์จะเข้าไปยังบริเวณพื้นที่ท่าเรือ
                      จำเป็นต้องติดต่อฝ่ายรักษาความปลอดภัยของสหไทย เทอร์มินอล ก่อนทุกครั้ง
                  </li>

                  <li className='text-gray-600 text-sm'>ไม่อนุญาติให้ปล่อยควันออกจากปล่องเรือเกินกว่าที่กำหนด
                  </li>

                  <li className='text-gray-600 text-sm'>ไม่อนุญาตให้ปล่อยน้ำมันลงในแม่น้ำหรือในบริเวณที่พื้นที่ปฏิบัติงาน
                  </li>

                  <li className='text-gray-600 text-sm'>ไม่อนุญาตให้ขีดเขียนในบริเวณท่าเรือ
                  </li>
              </ul>
          </div>
      </>
  )
}

const RegulationsCargoShipsInfoEN = () => {
    return (
        <>
            <>
                <ul className='text-gray-800 text-sm mb-3 flex flex-col gap-2'>
                    <li>
                        1.Receive and dispatch cargo containers through the NSW TOS system.
                    </li>
                    <li>2.Matching</li>
                    <li>3.Mobile X-Ray Machinem</li>
                </ul>
            </>
        </>
    )
}

const RegulationsCargoShipsInfoCN = () => {
    return (
        <>
            <>
                <ul className='text-gray-800 text-sm mb-3 flex flex-col gap-2'>
                    <li>1.通过NSW TOS系统接收和发运货物集装箱。</li>
                    <li>2.匹配。</li>
                    <li>3.移动X射线机器。</li>
                </ul>
            </>
        </>
    )
}
