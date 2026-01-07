'use client'
import { useMemo, useState } from 'react'
import { useTranslations } from 'next-intl'

import { Link } from '@/libs/intl/navigation'
import { Animation } from '@/components/Animation'
import { Tabs } from '@/components/Tabs'
import { SubcommitteeEnum } from './interface'
import { AvatarIcon } from '@/components/icons/AvatarIcon'

export function Subcommittee() {
  const t = useTranslations('AboutUsPage.BoardAndExecutives.Subcommittee')

  const tabs = useMemo(
    () => [
      {
        title: t('auditCommittee.title'),
        key: SubcommitteeEnum.Audit,
      },
      {
        title: t('executiveCommittee.title'),
        key: SubcommitteeEnum.Executive,
      },
      {
        title: t('nominationAndRemunerationCommittee.title'),
        key: SubcommitteeEnum.NominationAndRemuneration,
      },
      {
        title: t('enterpriseRiskManagementCommittee.title'),
        key: SubcommitteeEnum.EnterpriseRiskManagement,
      },
    ],
    [t]
  )

  const [activeTab, setActiveTab] = useState<string>(SubcommitteeEnum.Audit)

  return (
    <section className='mt-[90px] pb-[85px] max-w-[1040px] min-h-[760px] w-full mx-auto px-5'>
      <h2 className='headline-2 text-center text-navy'>{t('title')}</h2>

      <div className='flex'>
        <Tabs
          className='mt-[40px] w-fit mx-auto bg-white'
          tabs={tabs}
          style='border'
          active={activeTab}
          onChange={setActiveTab}
        />
      </div>

      <Animation
        key={activeTab}
        className='whitespace-pre-wrap body-1 text-black-6 mt-[50px] rounded-[15px] p-5  md:py-[44px] md:px-[65px] shadow-8 bg-white min-h-[490px]'
      >
        <SubcommitteeSection activeTab={activeTab} />
      </Animation>
    </section>
  )
}

export function SubcommitteeSection({ activeTab }: { activeTab: string }) {
  const t = useTranslations(`AboutUsPage.BoardAndExecutives.Subcommittee`)
  const membersRow = t.raw(`${activeTab}.members`) as Array<{
    name: string
    role: string
  }>

  // for auditCommittee
  const notesRow = t.raw('auditCommittee.note') as Array<{ content: string }>

  const members = Array.isArray(membersRow) ? membersRow : []

  return (
    <section className=' text-black-6'>
      <p className='mb-7'>{t(`${activeTab}.intro`)}</p>

      <ul className='mt-4 grid gap-3 mb-7'>
        {members.map((m, i) => (
          <li key={i} className='flex items-center md:items-end gap-3'>
            <div className='self-start'>
              <AvatarIcon className='text-base relative  mr-[15px] ' />
            </div>

            <div className='flex flex-wrap items-center gap-x-5'>
              <div className=' w-[300px]'>{m.name}</div>
              <div className=''>{m.role}</div>
            </div>
          </li>
        ))}
      </ul>

      {/* tab 1 only */}
      {activeTab === SubcommitteeEnum.Audit && (
        <>
          <p className='mb-7'>{t(`${activeTab}.intro2`)}</p>
          <div className=''>{t(`${activeTab}.noteTitle`)}</div>

          <ul className='grid mb-7'>
            {notesRow.map((note, i) => (
              <li key={i} className='flex items-start gap-3'>
                <div className='flex flex-wrap gap-x-5'>
                  <div className=''>
                    {i + 1}. {note.content}
                  </div>
                </div>
              </li>
            ))}
          </ul>

          <div className='flex flex-wrap items-center gap-2 '>
            <p className=''>{t(`${activeTab}.pdfTitle`)}</p>
            <Link
              className='hover:underline text-secondary font-normal'
              href='https://sahathaiterminal.com/wp-content/uploads/2019/05/20181130_AC_ID.pdf'
            >
              {t(`${activeTab}.clickLinkText`)}
            </Link>
          </div>
        </>
      )}
    </section>
  )
}
