import { useTranslations } from 'next-intl'

import { Menu } from '@/components/Menu'
import { OperationGuidelines } from '../../components/OperationGuidelines'
import { MachineryEquipment } from '../../components/MachineryEquipment'
import { LogisticInnovation } from '../../components/LogisticInnovation'
import ContactUs from '@/components/ContactUs/ContactUs'
import CookieConsentFloatingBar from '@/components/CookieConsentFloatingBar/CookieConsentFloatingBar'
import { Background } from '@/components/Background'
import OpticalCharacterRecognition from '@/features/infrastructureContainers/components/OpticalCharacterRecognition/OpticalCharacterRecognition'
import FreeTradeZone from '@/features/infrastructureContainers/components/FreeTradeZone/FreeTradeZone'

export function InfrastructureContainersPage() {
  const t = useTranslations('InfrastructureContainersPage')
  return (
    <main className='py-[130px]'>
      <Menu />
      <MachineryEquipment />
      <LogisticInnovation />
      <OpticalCharacterRecognition />
      <FreeTradeZone />
      <OperationGuidelines />
      <ContactUs className='mt-[80px]' />
    </main>
  )
}
