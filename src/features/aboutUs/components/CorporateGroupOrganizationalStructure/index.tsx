import { useTranslations } from 'next-intl'
import Image from 'next/image'

import { Animation } from '@/components/Animation'
import { Line } from '@/components/Line'

export function CorporateGroupOrganizationalStructure() {
  const t = useTranslations('AboutUsPage.CorporateGroupOrganizationalStructure')

  return (
    <section className='mt-[80px] mb-[134px] max-w-[1040px] w-full mx-auto px-5'>
      <h2 className='text-navy headline-2'>{t('corporateGroup')}</h2>
      <Line className='my-[8px]' />
      <Animation className='w-full mt-[50px] shadow-8 rounded-[15px] overflow-hidden'>
        <div className='relative pt-[55.77%] w-full'>
          <Image src='/about-us/corporate-group.png' fill alt='' />
        </div>
      </Animation>

      <h2 className='mt-[110px] headline-2 text-navy'>
        {t('organizationalStructure.title')}
      </h2>
      <Line className='my-[8px]' />
      <p className='mt-[20px] text-black-6 body-1 whitespace-pre-line'>

        {t.rich(`organizationalStructure.content`, {
          name: (chunks) => <div className='inline-flex font-semibold  pr-5'>{chunks}</div>,
        })}
      </p>

      <Animation className='w-full mt-[50px] rounded-[15px] shadow-8 overflow-hidden'>
        <div className='relative pt-[77.31%] w-full'>
          <Image src='/about-us/organizational-structure.png' fill alt='' />
        </div>
      </Animation>
    </section>
  )
}
