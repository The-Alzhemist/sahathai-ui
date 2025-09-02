'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { BulletList, getArray, getString, None, Row } from './components/peopleModalHelper'

type Props = {
  /** เนมสเปซข้อมูลจริงของบุคคล (ค่าเริ่มต้นเป็นตัวอย่าง) */
  boardName: string // 'AboutUsPage.YuthVorachattarn'
}

export function BoardContentModal({ boardName = 'AboutUsPage.Yuth' }: Props) {
  // labels/common (ใช้ซ้ำได้ทุกโปรไฟล์)
  const L = useTranslations('AboutUsPage.ExecutiveProfile')
  // ข้อมูลจริงของบุคคล
  const t = useTranslations(boardName)

  // primitive
  const fullName = getString(t, 'fullName')
  const imageUrl =  '/about-us/yuth-vorachattarn.png'
  const age = getString(t, 'age') // ex: "77 ปี"
  const directorType = getString(t, 'directorType')

  // array/object
  const positions = getArray(t, 'positions')
  const education = getArray(t, 'education')
  const trainings = getArray(t, 'trainings')
  const appointments = getArray(t, 'appointments')
  const listedRoles = getArray(t, 'listedRoles')
  const workExp5y = getArray(t, 'workExp5y')
  const relatedCompanyRoles = getArray(t, 'relatedCompanyRoles')
  const otherCompanyRoles = getArray(t, 'otherCompanyRoles')
  const otherOrgRoles = getArray(t, 'otherOrgRoles')
  const pastRoles = getArray(t, 'pastRoles')

  const directorYears = getString(t, 'directorYears')
  const shareholding =  getString(t, 'shareholding')
  const familyRelatedInCompany = getArray(t, 'family')


  return (
    <>
      {/* Header: รูป + ชื่อ + ตำแหน่ง/อายุ */}
      <div className="flex flex-col md:flex-row gap-x-3 md:gap-x-[13px] items-center">
        <div className="max-w-[90%] md:max-w-[309px] w-full overflow-hidden">
          <div className="relative aspect-square w-full">
            <Image src={imageUrl} alt={fullName} fill className="object-cover" />
          </div>
        </div>

        <div className="w-full">
          <div className="text-xl md:text-[32px] leading-[1.35] text-navy px-5 md:px-0 mt-4 md:mt-0">
            {fullName}
          </div>


          {positions.length > 0 && (
            <Row label={L('labels.positions')} isShowLabel={false} value={<BulletList items={positions}  />} />
          )}
        </div>
      </div>

      {/* Body: ตารางหัวข้อ */}
      <div className="px-5 md:px-9 py-9 bg-white-1 space-y-5 md:space-y-[30px]">
        {age && (
          <Row label={L('labels.age')} value={<span className="text-black-6 body-2">{age}</span>} />
        )}

        {education.length > 0 && (
          <Row label={L('labels.education')} value={<BulletList items={education} />} />
        )}

        {trainings.length > 0 && (
          <Row label={L('labels.trainings')} value={<BulletList items={trainings} />} />
        )}

        {directorType && (
          <Row label={L('labels.directorType')} value={<span className='text-black-6 body-2'>{directorType}</span>} />
        )}

        {appointments.length > 0 && (
          <Row label={L('labels.appointments')} value={<BulletList items={appointments} />} />
        )}



        {directorYears && (
          <Row label={L('labels.directorYears')} value={<span className='text-black-6 body-2'>{directorYears}</span>} />
        )}


        {workExp5y && (
          <Row label={L('labels.workExp5y')} value={workExp5y.length ? <BulletList items={workExp5y} /> : <None L={L}/>} />
        )}

        <Row
          label={L('labels.listedRoles')}
          value={listedRoles.length ? <BulletList items={listedRoles} /> : <None L={L} />}
        />

        <Row
          label={L('labels.relatedCompanyRoles')}
          value={relatedCompanyRoles.length ? <BulletList items={relatedCompanyRoles} /> : <None L={L} />}
        />

        <Row
          label={L('labels.otherCompanyRoles')}
          value={otherCompanyRoles.length ? <BulletList items={otherCompanyRoles} /> : <None L={L} />}
        />

        <Row
          label={L('labels.otherOrgRoles')}
          value={otherOrgRoles.length ? <BulletList items={otherOrgRoles} /> : <None L={L} />}
        />

        <Row
          label={L('labels.pastRoles')}
          value={pastRoles.length ? <BulletList items={pastRoles} /> : <None L={L} />}
        />

        <Row
          label={L('labels.shareholding')}
          value={shareholding ? <div className='text-black-6 body-2'>{shareholding}</div> : <None L={L} />}
        />

        <Row label={L('labels.family')} value={familyRelatedInCompany.length ? <BulletList items={familyRelatedInCompany} />  : <None L={L} />} />

      </div>
    </>
  )
}
