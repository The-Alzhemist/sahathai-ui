import { Animation } from '@/components/Animation'
import { Line } from '@/components/Line'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

export function CorporateGroupOrganizationalStructure() {
  const t = useTranslations('AboutUsPage.CorporateGroupOrganizationalStructure')

  return (
    <section className='mt-[80px] max-w-[896px] w-full mx-auto'>
      <h2 className='text-blue-400 headline-2'>{t('corporateGroup')}</h2>
      <Line className='my-[8px]' />
      <Animation className='max-w-[886px] w-full mt-[5px] mx-auto'>
        <div className='relative pt-[57.22%] w-full'>
          <Image src='/about-us/corporate-group.png' fill alt='' />
        </div>
      </Animation>

      <h2 className='mt-[80px] headline-2 text-blue-400'>
        {t('organizationalStructure.title')}
      </h2>
      <Line className='my-[8px]' />
      <p className='mt-[30px] max-w-[886px] mx-auto text-black-60 text-center body-1'>
        {t('organizationalStructure.description')}
      </p>

      <Animation className='max-w-[891px] w-full mt-[55px] mx-auto'>
        <div className='relative pt-[77.33%] w-full'>
          <Image src='/about-us/organizational-structure.png' fill alt='' />
        </div>
      </Animation>
    </section>
  )
}
