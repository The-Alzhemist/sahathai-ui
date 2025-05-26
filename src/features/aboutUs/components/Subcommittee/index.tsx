'use client'
import { useMemo, useState } from 'react'
import { useTranslations } from 'next-intl'

import { Link } from '@/libs/intl/navigation'
import { Animation } from '@/components/Animation'
import { Tabs } from '@/components/Tabs'
import { SubcommitteeEnum } from './interface'

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
    <section className='mt-[90px] mb-[85px] max-w-[1040px] w-full mx-auto px-5'>
      <h2 className='headline-2 text-center text-navy'>{t('title')}</h2>

      <div className='flex'>
        <Tabs
          className='mt-[40px] w-fit mx-auto'
          tabs={tabs}
          style='border'
          active={activeTab}
          onChange={setActiveTab}
        />
      </div>

      <Animation
        key={activeTab}
        className='whitespace-pre-wrap body-1 text-black-6 mt-[50px] rounded-[15px] p-5 md:p-9 shadow-8'
      >
        <div className='whitespace-pre-line mb-5'>
          {t.rich(`${activeTab}.content`, {
            bold: (chunks) => <strong className='font-semibold'>{chunks}</strong>,
            name: (chunks) => <div className='inline-flex font-semibold w-[200px] pr-5'>{chunks}</div>,
          })}
        </div>

        {activeTab === SubcommitteeEnum.Audit ? (
          <>
            &nbsp;
            <Link className='hover:underline text-blue-300 ทะขถ' href='https://sahathaiterminal.com/wp-content/uploads/2019/05/20181130_AC_ID.pdf'>
              {t(`${activeTab}.clickLinkText`)}
            </Link>
          </>
        ) : null}
      </Animation>
    </section>
  )
}
