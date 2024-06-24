import { useTranslations } from 'next-intl'
import Image from 'next/image'

import { Banner } from './components/Banner'
import { PolygonIcon } from '@/components/icons/PolygonIcon'

export function CorporateGroupOrganizationalStructurePage() {
  const t = useTranslations('CorporateGroupOrganizationalStructurePage')

  return (
    <main>
      <Banner />

      <h2 className='mt-[40px] text-center text-blue headline-2'>
        {t('corporateGroup')}
      </h2>
      <div className='max-w-[886px] w-full mt-[16px] mx-auto'>
        <div className='relative pt-[57.22%] w-full'>
          <Image src='/about/corporate-group.png' fill alt='' />
        </div>
      </div>

      <section className='relative bg-blue pt-[50px] pb-[157px]'>
        <h2 className='text-center headline-2 text-white'>
          {t('organizationalStructure.title')}
        </h2>
        <p className='mt-[26px] max-w-[886px] mx-auto text-white text-center body-1'>
          {t('organizationalStructure.description')}
        </p>

        <div className='max-w-[891px] w-full mt-[48px] mx-auto'>
          <div className='relative pt-[77.33%] w-full'>
            <Image src='/about/organizational-structure.png' fill alt='' />
          </div>
        </div>
        <PolygonIcon
          className='absolute top-0 right-0'
          height='327'
          width='90'
        />
        <PolygonIcon
          className='absolute bottom-0 left-0 rotate-180'
          height='327'
          width='90'
        />
      </section>
    </main>
  )
}
