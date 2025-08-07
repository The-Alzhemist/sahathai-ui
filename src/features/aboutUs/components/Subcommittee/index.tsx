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
        className='whitespace-pre-wrap body-1 text-black-6 mt-[50px] rounded-[15px] p-5 md:p-9 shadow-8 bg-white'
      >
        <div className='whitespace-pre-line mb-5'>
          {t.rich(`${activeTab}.content`, {
            bold: chunks => <strong className='font-semibold'>{chunks}</strong>,
            name: chunks => (
              <div className='inline-flex justify-start items-baseline  w-[240px] pr-5'>
                <AvatarIcon className='text-base relative top-[5px] mr-[15px]' />
                {chunks}
              </div>
            ),
            sub: chunks => (
              <sup className='ml-[4px] text-xs text-gray-600'>{chunks}</sup>
            ),
          })}
          {activeTab === SubcommitteeEnum.Audit ? (
            <>
              <Link
                className='hover:underline text-secondary font-normal'
                href='https://sahathaiterminal.com/wp-content/uploads/2019/05/20181130_AC_ID.pdf'
              >
                {t(`${activeTab}.clickLinkText`)}
              </Link>
            </>
          ) : null}
        </div>
      </Animation>
    </section>
  )
}
