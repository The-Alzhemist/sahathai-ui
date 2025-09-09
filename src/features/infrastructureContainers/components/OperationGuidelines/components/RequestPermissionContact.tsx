import React from 'react'
import Image from 'next/image'
import { useLocale } from 'next-intl'

export default function RequestPermissionContact() {
  const locale = useLocale()
  return (
    <section>

        <Image
        className='mb-5 rounded-md'
        src='/infrastructure-containers/requestContactPermisison.jpg'
        alt=''
        width={666}
        height={328}
      />
      {locale === 'th' && <RequestPermissionContactInfoTH />}
      {locale === 'en' && <RequestPermissionContactInfoEN />}
      {locale === 'cn' && <RequestPermissionContactInfoCN />}
    </section>
  )
}

const RequestPermissionContactInfoTH = () => {
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

          <h3 className='text-sm text-gray-800 mb-2 underline'>สิทธิ์การเข้ามายังพื้นที่ท่าเรือและเรือขนส่งสินค้า
          </h3>
          <p className='text-gray-600 text-sm mb-5'>
              บุคลากร (ยกเว้นตัวแทนสายการเดินเรือ)
              ที่มีความประสงค์จะเข้าไปในพื้นที่ท่าเรือหรือมีความประสงค์จะขึ้นไปบนเรือ ต้องกรอกแบบฟอร์มแจ้งความประสงค์
              และลงนามรับรองโดยตัวแทนสายการเดินเรือ เพื่อขออนุญาตสหไทย เทอร์มินอล ในการเข้าไปยังพื้นที่ปฏิบัติการ
          </p>


          <h3 className='text-sm text-gray-800 mb-2 underline'>การปฏิบัติการในพื้นที่ท่าเรือ
          </h3>
          <p className='text-gray-600 text-sm mb-5'>
              บุคลากรที่มีความประสงค์จะปฏิบัติงานในพื้นที่ท่าเรือ จำเป็นต้องกรอกเอกสารอนุญาตปฏิบัติงาน (Work Permit
              Form) ให้ครบถ้วน และแจ้งความประสงค์มายังสำนักงาน Terminal Service คลิกที่นี่ เพื่อส่งอีเมล์ไปยังสำนักงาน
              SSHE ที่ sshe.stt@sahathai.com
          </p>


          <h3 className='text-sm text-gray-800 mb-2 underline'>ลูกเรือที่ต้องการเข้าไปยังพื้นที่ท่าเรือ
          </h3>
          <p className='text-gray-600 text-sm mb-5'>
              ลูกเรือที่ประสงค์จะเข้าไปยังพื้นที่ปฏิบัติการท่าเรือ
              จำเป็นต้องติดต่อไปยังฝ่ายรักษาความปลอดภัยที่บริเวณท่าเรือ เพื่อลงทะเบียนและแลกบัตรลูกเรือ
          </p>

          <h3 className='text-sm text-gray-800 mb-2 underline'>สติ๊กเกอร์รถสำหรับตัวแทนสายการเดินเรือ
          </h3>
          <p className='text-gray-600 text-sm mb-5'>
              ตัวแทนสายการเดินเรือที่ต้องการสติ๊กเกอร์ติดรถเพื่อเข้าไปยังอาคารสำนักงาน จำเป็นต้องยื่นกรอกเอกสารแจ้งความประสงค์ในการขอสติ๊กเกอร์ติดรถยนต์ให้ครบถ้วน และยื่นเอกสาร พร้อมสำเนาใบอนุญาตขับขี่รถยนต์ และสำเนาของใบทะเบียนรถยนต์ และยื่นให้เอกสารให้กับสำนักงาน Terminal Service คลิกที่นี่ เพื่อส่งอีเมล์ไปยังสำนักงาน SSHE ที่ sshe.stt@sahathai.com
          </p>
      </>
  )
}

const RequestPermissionContactInfoEN = () => {
    return (
      <div className="text-sm text-gray-600 px-5">

        <h3 className="text-sm text-gray-800 mb-3 underline">Temporary Visits</h3>
        <ul className="flex flex-col gap-y-3 list-disc mb-6">
          <li>
            Visitors who need to enter the terminal administration or workshop buildings
            must contact the Security Office located at the terminal gate to receive a
            Visitor Card in exchange for their ID Card.
          </li>
        </ul>


        <h3 className="text-sm text-gray-800 mb-3 underline">Permanent Visits</h3>
        <ul className="flex flex-col gap-y-3 list-disc mb-6">
          <li>
            Agents who require an STT Access Control Card to enter the administration
            building must submit an Application Form to the Terminal Service Department.
            Email the SSHE Office at
            <a href="mailto:sshe.stt@sahathai.com" className="text-black pl-1 underline">
              sshe.stt@sahathai.com
            </a>.
          </li>
        </ul>


        <h3 className="text-sm text-gray-800 mb-3 underline">Access to the Terminal Area and Vessel</h3>
        <ul className="flex flex-col gap-y-3 list-disc mb-6">
          <li>
            Personnel (with the exception of agents) who need to enter the terminal area
            or board a vessel must provide the Terminal Service Office with a completed
            Request Form signed by the agent to receive permission to enter STT’s
            operational area.
          </li>
        </ul>


        <h3 className="text-sm text-gray-800 mb-3 underline">Working in the Terminal Area</h3>
        <ul className="flex flex-col gap-y-3 list-disc mb-6">
          <li>
            Personnel who need to work in the terminal area must provide the Terminal
            Service Office with the completed STT Work Permit Form.
            Click here to email the SSHE Office at
            <a href="mailto:sshe.stt@sahathai.com" className="text-black pl-1 underline">
              sshe.stt@sahathai.com
            </a>.
          </li>
        </ul>


        <h3 className="text-sm text-gray-800 mb-3 underline">Ship Crews Entering the Terminal</h3>
        <ul className="flex flex-col gap-y-3 list-disc mb-6">
          <li>
            Ship crews that require access to the port area must contact the security
            personnel at wharfside to register and exchange their Crew Cards.
          </li>
        </ul>


        <h3 className="text-sm text-gray-800 mb-3 underline">Car Stickers for Agents</h3>
        <ul className="flex flex-col gap-y-3 list-disc">
          <li>
            Agents who require a car sticker to enter the administration building must
            provide the Terminal Service Office with a completed Application for Car
            Sticker, a copy of their driver’s license, and a copy of the car registration.
            Email the SSHE Office at
            <a href="mailto:sshe.stt@sahathai.com" className="text-black pl-1 underline">
              sshe.stt@sahathai.com
            </a>.
          </li>
        </ul>
      </div>
    )
}

const RequestPermissionContactInfoCN = () => {
  return (
    <div className="text-sm text-gray-600 px-5">

      <h3 className="text-sm text-gray-800 mb-3 underline">Temporary Visits</h3>
      <ul className="flex flex-col gap-y-3 list-disc mb-6">
        <li>
          Visitors who need to enter the terminal administration or workshop buildings
          must contact the Security Office located at the terminal gate to receive a
          Visitor Card in exchange for their ID Card.
        </li>
      </ul>


      <h3 className="text-sm text-gray-800 mb-3 underline">Permanent Visits</h3>
      <ul className="flex flex-col gap-y-3 list-disc mb-6">
        <li>
          Agents who require an STT Access Control Card to enter the administration
          building must submit an Application Form to the Terminal Service Department.
          Email the SSHE Office at
          <a href="mailto:sshe.stt@sahathai.com" className="text-black pl-1 underline">
            sshe.stt@sahathai.com
          </a>.
        </li>
      </ul>


      <h3 className="text-sm text-gray-800 mb-3 underline">Access to the Terminal Area and Vessel</h3>
      <ul className="flex flex-col gap-y-3 list-disc mb-6">
        <li>
          Personnel (with the exception of agents) who need to enter the terminal area
          or board a vessel must provide the Terminal Service Office with a completed
          Request Form signed by the agent to receive permission to enter STT’s
          operational area.
        </li>
      </ul>


      <h3 className="text-sm text-gray-800 mb-3 underline">Working in the Terminal Area</h3>
      <ul className="flex flex-col gap-y-3 list-disc mb-6">
        <li>
          Personnel who need to work in the terminal area must provide the Terminal
          Service Office with the completed STT Work Permit Form.
          Click here to email the SSHE Office at
          <a href="mailto:sshe.stt@sahathai.com" className="text-black pl-1 underline">
            sshe.stt@sahathai.com
          </a>.
        </li>
      </ul>


      <h3 className="text-sm text-gray-800 mb-3 underline">Ship Crews Entering the Terminal</h3>
      <ul className="flex flex-col gap-y-3 list-disc mb-6">
        <li>
          Ship crews that require access to the port area must contact the security
          personnel at wharfside to register and exchange their Crew Cards.
        </li>
      </ul>


      <h3 className="text-sm text-gray-800 mb-3 underline">Car Stickers for Agents</h3>
      <ul className="flex flex-col gap-y-3 list-disc">
        <li>
          Agents who require a car sticker to enter the administration building must
          provide the Terminal Service Office with a completed Application for Car
          Sticker, a copy of their driver’s license, and a copy of the car registration.
          Email the SSHE Office at
          <a href="mailto:sshe.stt@sahathai.com" className="text-black pl-1 underline">
            sshe.stt@sahathai.com
          </a>.
        </li>
      </ul>
    </div>
  )
}
