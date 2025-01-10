import React from 'react'
import Image from 'next/image'
import { useLocale } from 'next-intl'

export default function SafetyRegulations() {
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
      {locale === 'th' && <SafetyRegulationsInfoTH />}
      {locale === 'en' && <SafetyRegulationsInfoEN />}
      {locale === 'cn' && <SafetyRegulationsInfoCN />}
    </section>
  )
}

const SafetyRegulationsInfoTH = () => {
  return (
    <>
      <p className='text-gray-800 text-sm mb-3'>
        ด้วยประเทศไทยได้เข้าร่วมเป็นภาคีอนุสัญญาระหว่างประเทศว่าด้วยความปลอดภัยแห่งชีวิตในทะเล
        ค.ศ. 1974 แก้ไขเพิ่มเติม ค.ศ. 2002 (International Convention for the
        Safety of Life at Sea 1974, as amended 2002)
        กำหนดให้เรือและท่าเรือระหว่างประเทศที่อยู่ในบังคับของประมวลข้อบังคับว่าด้วยการรักษาความปลอดภัยของเรือและท่าเรือระหว่างประเทศ
        (International Ship and Port Facility Security Code : ISPS Code)
        ต้องมีการปฏิบัติการรักษาความปลอดภัยของเรือและท่าเรือเพื่อป้องกันภัยคุกคามอันอาจก่อให้เกิดความไม่ปลอดภัยในการขนส่งทางนํ้า
        และเพื่อให้มั่นใจว่าเรือและท่าเรือมีการรักษาความปลอดภัยอย่างเพียงพอและเหมาะสม
        ซึ่งมีผลบังคับใช้ตั้งแต่ วันที่ 1 กรกฎาคม ค.ศ. 2004 เป็นต้นไป
      </p>
      <p className='text-gray-800 text-sm mb-3 '>
        บริษัทสหไทย เทอร์มินอล จำกัด (มหาชน) (ท่าหมายเลข 6)
        ซึ่งเป็นผู้ให้บริการท่าเทียบเรือที่มีขนาดเกินกว่า 500 ตันกรอส
        ตั้งอยู่บริเวณริมฝั่งแม่น้ำเจ้าพระยาตะวันออก ตำบลบางหญ้าแพรก
        อำเภอพระประแดง จังหวัดสมุทรปราการ
        ได้ตระหนักถึงความสำคัญเกี่ยวกับการรักษาความปลอดภัยของเรือและท่าเทียบเรือ
        บริษัทฯ
        จึงได้จัดทำแผนการรักษาความปลอดภัยดังกล่าวขึ้นเพื่อให้เป็นไปตามอนุสัญญาดังกล่าวที่กำหนดให้ท่าเรือที่ให้บริการเรือโดยสารเรือสินค้าที่มีขนาดมากกว่า
        500 ตันกรอส
        จะต้องจัดทำรายงานการประเมินและแผนการรักษาความปลอดภัยของท่าเรือเพื่อป้องกันภัยคุกคามเรือและท่าเทียบเรือในรูปแบบต่างๆ
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
