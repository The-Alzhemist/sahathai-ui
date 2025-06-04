import React from 'react'
import Image from 'next/image'
import { useLocale } from 'next-intl'

export default function SafetyRegulations() {
  const locale = useLocale()
  return (
    <section>
       <Image
        className='mb-5 rounded-md'
        src='/infrastructure-containers/SafetyRegulation.jpg'
        alt=''
        width={666}
        height={328}
      />
      {locale === 'th' && <SafetyRegulationsInfoTH />}
      {locale === 'en' && <SafetyRegulationsInfoEN />}
      {locale === 'cn' && <SafetyRegulationsInfoCN />}
    </section>
  )
}

const SafetyRegulationsInfoTH = () => {
  return (
    <>
        <div className='text-sm text-gray-600'>

            <ul className='flex flex-col gap-y-5 list-disc mb-5'>
                <li className='text-gray-600 text-sm'>ผู้มาติดต่อห้ามเข้าไปในพื้นที่ท่าเรือ
                    หากไม่ได้รับอนุญาตจากเจ้าหน้าที่ของสหไทย เทอร์มินอลที่มีอำนาจ
                </li>

                <li className='text-gray-600 text-sm'> ผู้มาติดต่อต้องติดต่อสำนักงาน Terminal Service (TMS)
                    เพื่อรับเครื่องแต่งกายและเปลี่ยนเครื่องแต่งกายให้เหมาะสม ตามที่สหไทย เทอร์มินอล จัดเตรียมให้ ทั้งนี้
                    เพื่อความปลอดภัยและเพื่อให้มั่นใจว่าผู้มาติดต่อได้ทำการสวมเครื่องแต่งกายที่สามารถเห็นได้ชัดเจน
                </li>

                <li className='text-gray-600 text-sm'>ผู้มาติดต่อต้องปฏิบัติตามป้ายห้าม คำสั่ง และคำเตือนทั้งหมด
                    รวมทั้งต้องสวมหมวกนิรภัยตลอดเวลา
                </li>

                <li className='text-gray-600 text-sm'>ผู้มาติดต่อที่เข้าไปในบริเวณท่าเรือผ่านทางลานจอดรถและ/หรือขึ้นเรือขนส่งสินค้าต้องใช้ทางเดินเท้าตลอดรั้วของท่าเรือ
                    และห้ามเดินลัดผ่านลานวางตู้คอนเทนเนอร์
                </li>

                <li className='text-gray-600 text-sm'>ห้ามบันทึกภาพและวิดีโอภายในพื้นที่ท่าเรือโดยไม่ได้รับอนุญาตจากบุคลากรของสหไทย
                    เทอร์มินอล ที่มีอำนาจ
                </li>


                <li className='text-gray-600 text-sm'> พาหนะทุกประเภทที่ขับขี่ในพื้นที่ตู้คอนเทนเนอร์
                    ต้องใช้ความเร็วไม่เกิน 20 กม./ชม.
                    ในวันทำการ
                </li>

                <li className='text-gray-600 text-sm'>พนักงานขับรถทุกคนภายในพื้นที่ท่าเรือจะต้องปฏิบัติตามกฎการจราจรและข้อบังคับด้านความปลอดภัย
                    และห้ามจอดพาหนะทิ้งไว้โดยไม่ได้รับอนุญาต
                </li>


                <li className='text-gray-600 text-sm'>ห้ามจอดพาหนะทุกประเภทที่อาจขัดขวางการสัญจรภายในพื้นที่ปฏิบัติงาน
                </li>


                <li className='text-gray-600 text-sm'>บุคลากรทุกคนจำเป็นต้องแจ้งสหไทย เทอร์มินอล โดยทันที
                    หากพบเจอการกระทำใดที่อาจส่งผลต่อความปลอดภัยภายในท่าเรือ
                    หรือการกระทำใดที่อาจส่งผลกระทบต่อโครงสร้างพื้นฐานภายในท่าเรือและความปลอดภัยภายในท่าเรือตามที่ระบุไว้ในประมวลข้อบังคับว่าด้วยการรักษาความปลอดภัยของเรือและท่าเรือระหว่างประเทศ
                    (International Ship and Port Facility Security)
                </li>


                <li className='text-gray-600 text-sm'>หากมีการละเมิดระเบียบที่กำหนดจะถูกยกเลิกใบอนุญาตเรือขนส่งสินค้า
                </li>

            </ul>

            <div className='flex flex-wrap gap-2 border rounded-md items-center px-3 py-2 mb-5'>
        <span className='text-sm text-gray-600'>
     ส่งอีเมล์ให้แก่สำนักงาน SSHE ที่
        </span>

                <span className='text-primary-1'>      sshe.stt@sahathai.com</span>
            </div>
        </div>

    </>
  )
}

const SafetyRegulationsInfoEN = () => {
    return (
        <>
            <p className='text-gray-800 text-sm mb-3'>
                Thailand, as a party to the International Convention for the Safety of
                Life at Sea 1974, as amended 2002 (SOLAS), is committed to adhering to
                the International Ship and Port Facility Security Code (ISPS Code). This
                mandates that ships and ports comply with security protocols to prevent
                threats that could compromise maritime safety. This regulation has been
                effective since July 1, 2004.
            </p>
            <p className='text-gray-800 text-sm mb-3'>
                Sahathai Terminal Public Company Limited (Port No. 6), a service
                provider for vessels exceeding 500 gross tons, is located on the eastern
                bank of the Chao Phraya River, Bang Ya Phraek Subdistrict, Phra Pradaeng
                District, Samut Prakan Province. The company has developed a port
                security plan to comply with this convention, addressing risks like
                cargo theft, drug smuggling, stowaways, piracy, terrorism, and other
                potential threats, ensuring adequate and appropriate security measures.
            </p>

            <div className='flex flex-wrap gap-2 border rounded-md items-center px-3 py-2 mb-3'>
        <span className='text-sm text-gray-700'>
          เอกสาร STT OPERATIONAL RESTRICTIONS
        </span>

        <a
          className='bg-primary-1 px-2 py-1 rounded-full text-xs text-white'
          href='https://storage.googleapis.com/nueng-image-storage-demo/dummyPhoto/dummy.pdf'
          download
        >
          ดาวน์โหลดเอกสาร
        </a>
      </div>

      <div className='flex flex-wrap gap-2 border rounded-md items-center px-3 py-2'>
        <span className='text-sm text-gray-700'>
          การจัดการความปลอดภัย บริษัท สหไทย เทอร์มินอล จำกัด มหาชน
        </span>

        <a
          className='bg-primary-1 px-2 py-1 rounded-full text-xs text-white'
          href='https://storage.googleapis.com/nueng-image-storage-demo/dummyPhoto/dummy.pdf'
          download
        >
          ดาวน์โหลดเอกสาร
        </a>
      </div>
    </>
  )
}

const SafetyRegulationsInfoCN = () => {
  return (
    <>
      <p className='text-gray-800 text-sm mb-3'>
        泰国作为《1974年国际海上人命安全公约》（SOLAS）的缔约国，并根据2002年修正案，承诺遵守《国际船舶和港口设施保安规则》（ISPS规则）。该规则要求船舶和港口采取保安措施，以防止可能危及海上运输安全的威胁。此规定自2004年7月1日起生效。
      </p>
      <p className='text-gray-800 text-sm mb-3'>
        沙哈泰码头公共有限公司（第6号港），为提供服务的港口，接纳500总吨以上的船舶，位于昭披耶河东岸，Samut
        Prakan省Phra Pradaeng区Bang Ya
        Phraek分区。公司制定了港口保安计划以遵守该公约，应对货物盗窃、毒品走私、偷渡者、海盗行为、恐怖主义等潜在威胁，确保采取足够且适当的保安措施。
      </p>

      <div className='flex flex-wrap gap-2 border rounded-md items-center px-3 py-2 mb-3'>
        <span className='text-sm text-gray-700'>
          เอกสาร STT OPERATIONAL RESTRICTIONS
        </span>

        <a
          className='bg-primary-1 px-2 py-1 rounded-full text-xs text-white'
          href='https://storage.googleapis.com/nueng-image-storage-demo/dummyPhoto/dummy.pdf'
          download
        >
          ดาวน์โหลดเอกสาร
        </a>
      </div>

      <div className='flex flex-wrap gap-2 border rounded-md items-center px-3 py-2'>
        <span className='text-sm text-gray-700'>
          การจัดการความปลอดภัย บริษัท สหไทย เทอร์มินอล จำกัด มหาชน
        </span>

        <a
          className='bg-primary-1 px-2 py-1 rounded-full text-xs text-white'
          href='https://storage.googleapis.com/nueng-image-storage-demo/dummyPhoto/dummy.pdf'
          download
        >
          ดาวน์โหลดเอกสาร
        </a>
      </div>
    </>
  )
}
