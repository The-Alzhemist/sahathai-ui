import { useTranslations } from 'next-intl'
import { GeneralWarehouse } from './components/GeneralWarehouse'
import { FreeZone } from './components/FreeZone'
import { CustomsOfficePortArea } from './components/CustomsOfficePortArea'
import { ContactUs } from './components/ContactUs'

export function PortFacilitiesPage() {
  const t = useTranslations('PortFacilitiesPage')
  return (
    <main className='py-[76px]'>
      <h1 className='text-center font-[700] text-[36px] leading-[44px]'>
        {t('title')}
      </h1>
      <GeneralWarehouse />
      <FreeZone />
      <CustomsOfficePortArea />
      <ContactUs className='mt-[191px]' />
    </main>
  )
}
