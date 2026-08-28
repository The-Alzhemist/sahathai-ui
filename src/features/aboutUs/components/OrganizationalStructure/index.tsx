'use client'

import { Line } from '@/components/Line'
import { useTranslations } from 'next-intl'
import { Animation } from '@/components/Animation'
import Image from 'next/image'

export function OrganizationalStructure() {
  const t = useTranslations('AboutUsPage.CorporateGroupOrganizationalStructure')

  return (
    <div>
      <h2 className='mt-[110px] headline-2 text-navy'>
        {t('organizationalStructure.title')}
      </h2>
      <Line className='my-[8px]' />
      <p className='mt-[20px] text-black-6 body-1 whitespace-pre-line'>
        {t.rich(`organizationalStructure.content`, {
          name: chunks => (
            <div className='inline-flex font-semibold  pr-5'>{chunks}</div>
          ),
        })}
      </p>

      <Animation className='w-full mt-[50px] shadow-8 rounded-[15px] overflow-hidden bg-white'>
        <Image
          src='/about-us/new/organizational-structure.jpg'
          width={1140}
          height={1121}
          alt={t('organizationalStructure.title')}
        />
      </Animation>
    </div>
  )
}
