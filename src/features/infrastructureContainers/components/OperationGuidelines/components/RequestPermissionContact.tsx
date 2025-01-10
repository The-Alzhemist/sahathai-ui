import React from 'react'
import Image from 'next/image'
import { useLocale } from 'next-intl'

export default function RequestPermissionContact() {
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
      {locale === 'th' && <RequestPermissionContactInfoTH />}
      {locale === 'en' && <RequestPermissionContactInfoEN />}
      {locale === 'cn' && <RequestPermissionContactInfoCN />}
    </section>
  )
}

const RequestPermissionContactInfoTH = () => {
  return (
    <>
      <p className='text-gray-800 text-sm mb-3'>
        การเข้า-ออกในเขตพื้นที่ท่าเรือของบริษัทสำหรับผู้มาติดต่อ
      </p>

      <p className='text-gray-800 text-sm mb-3'>
        เพื่อให้การผ่านเข้า-ออกพื้นที่ท่าเรือของบริษัทเป็นไปด้วยความเป็นระเบียบ
        เรียบร้อย และปลอดภัย
        จึงให้บุคคลภายนอกปฏิบัติตามระเบียบปฏิบัติของท่าเรือที่มีอยู่อย่างเคร่งครัดตลอดเวลาดังนี้
      </p>

      <p className='text-gray-800 text-sm mb-3'>
        1) กรณีผู้มาติดต่อเพื่อขอเข้าพบพนักงานท่าเรือ
        ให้เจ้าหน้าที่รักษาความปลอดภัยปฏิบัติตามหลักการควบคุมการเข้า-ออกพื้นที่เขตท่าเรือของบริษัท
      </p>

      <p className='text-gray-800 text-sm mb-3'>
        2) กรณีผู้มาติดต่อเพื่อขอเข้าพบเจ้าหน้าที่ท่าเรือ
        ให้เจ้าหน้าที่รักษาความปลอดภัยพิจารณาจากลักษณะทั่ว ๆ ไปว่าเหมาะสมหรือไม่
        และดำเนินการติดต่อเจ้าหน้าที่ท่าเรือพร้อมแลกบัตรผู้มาติดต่อโดยแลกกับบัตรประจำตัวประชาชนหรือบัตรที่ทางราชการออกให้เท่านั้น
        และต้องออกใบขออนุญาตเพื่อติดต่อกับเจ้าหน้าที่ท่าเรือให้กับผู้มาติดต่อ
        เพื่อให้ผู้มาติดต่อนำไปให้เจ้าหน้าที่ท่าเรือที่ตนไปติดต่อลงลายมือชื่อเพื่อเป็นการยืนยันในการเข้าไปติดต่อในครั้งนั้น
        ๆ
      </p>

      <p className='text-gray-800 text-sm mb-3'>
        3)
        กรณีผู้มาติดต่อเสร็จกิจธุระจากการติดต่อเจ้าหน้าที่ท่าเรือแล้วจะต้องแลกบัตรคืนและหากมีความจำเป็นที่จะต้องเข้าพบกับเอเย่นเรือ
        หรือบุคคลในท่าเรือของบริษัทในอาคารสำนักงาน
        ให้มาดำเนินการทำบัตรอนุญาตผ่านเข้า-ออกตามหลักการควบคุมการเข้า-ออกพื้นที่เขตท่าเรือของบริษัท
      </p>

      <p className='text-gray-800 text-sm mb-3'>
        4)
        ผู้มาติดต่อกับลูกเรือหรือติดต่องานในเขตท่าเทียบเรือจะต้องเป็นบุคคลที่มีรายชื่อในการขออนุญาตเข้าพื้นที่ปฏิบัติการตามแบบฟอร์มและตามรายชื่อที่ได้รับการอนุญาตให้เข้าในเขตพื้นที่แล้วเท่านั้น
        โดยเจ้าหน้าที่รักษาความปลอดภัยจะให้แลกบัตรผู้มาติดต่อและออกใบอนุญาตผ่านเข้า-ออก
        เพื่อให้ผู้ที่มาติดต่อนำไปให้ผู้ที่ตนไปติดต่อเพื่อลงลายมือชื่อเป็นการยืนยันในการเข้าไปติดต่อในครั้งนั้น
        ๆ
      </p>

      <p className='text-gray-800 text-sm mb-3'>
        5) ผู้รับเหมาที่มีสัญญาจ้างการทำงานเป็นระยะเวลาสั้น ๆ
        และเป็นครั้งคราวมีขั้นตอนในการขออนุญาตเข้าทำงานในเขตพื้นที่บริษัท ดังนี้
      </p>

      <p className='text-gray-800 text-sm mb-3 ml-5'>
        5.1)
        บริษัทรับเหมาที่มีหัวหน้าหรือหรือผู้ควบคุมจะต้องติดต่อกับเจ้าหน้าที่รักษาความปลอดภัย
        เพื่อแจ้งวัตถุประสงค์ในการเข้าไปทำงานและติดต่อทำใบขออนุญาตเข้าทำงานในพื้นที่ท่าเรือของบริษัทฯ
        โดยกรอกรายละเอียดในการเข้าทำงานในพื้นที่ท่าเรือของบริษัทฯ
        พร้อมทั้งทำการแลกบัตรแสดงตน
        โดยใช้บัตรประจำตัวประชาชนของพนักงานแลกบัตรผ่านต่อเจ้าหน้าที่รักษาความปลอดภัยตามรายชื่อพนักงานที่ขออนุญาตเข้าทำงาน
        พร้อมทั้งแสดงรายการอุปกรณ์ที่จะต้องนำเข้าไปปฏิบัติงานในเขตพื้นที่ท่าเรือ
      </p>
    </>
  )
}

const RequestPermissionContactInfoEN = () => {
  return (
    <>
      <p className='text-gray-800 text-sm mb-3'>
        Entry and Exit Procedures for Visitors in the Company Port Area
      </p>

      <p className='text-gray-800 text-sm mb-3'>
        To ensure orderly and safe entry and exit in the company port area,
        visitors are required to strictly follow the port operational procedures
        at all times as outlined below:
      </p>

      <p className='text-gray-800 text-sm mb-3'>
        1) For visitors meeting port employees, security staff must adhere to
        the company port entry and exit control principles.
      </p>

      <p className='text-gray-800 text-sm mb-3'>
        2) For visitors meeting port officials, security staff must evaluate
        their general appropriateness and contact the relevant port official.
        Visitors must exchange their ID card or a government-issued card for a
        visitor pass and obtain an entry permit to meet the port official. This
        permit must be signed by the official to confirm the visit.
      </p>

      <p className='text-gray-800 text-sm mb-3'>
        3) After completing their business, visitors must return their visitor
        pass. If further meetings with agents or other personnel within the
        office building are required, they must apply for a new entry permit
        following the port control principles.
      </p>

      <p className='text-gray-800 text-sm mb-3'>
        4) Visitors meeting crew members or conducting business within the dock
        area must be on an approved entry list. Security staff will exchange
        their ID for a visitor pass and issue an entry permit, which must be
        signed by the relevant contact to confirm the visit.
      </p>

      <p className='text-gray-800 text-sm mb-3'>
        5) Contractors with short-term or occasional work must follow these
        steps to obtain work permits:
      </p>

      <p className='text-gray-800 text-sm mb-3 ml-5'>
        5.1) Contractors with a supervisor must contact security staff to state
        the purpose of their work, fill out a work permit form, and exchange
        their employees ID cards for access passes. A list of employees and a
        description of tools to be brought into the port area must also be
        provided.
      </p>
    </>
  )
}

const RequestPermissionContactInfoCN = () => {
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
