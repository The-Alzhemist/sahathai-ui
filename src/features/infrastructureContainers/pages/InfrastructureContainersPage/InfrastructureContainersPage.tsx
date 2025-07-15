import { useTranslations } from 'next-intl'
import { Menu } from '@/components/Menu'
import { OperationGuidelines } from '../../components/OperationGuidelines'
import { MachineryEquipment } from '../../components/MachineryEquipment'
import { LogisticInnovation } from '../../components/LogisticInnovation'
import ContactUs from '@/components/ContactUs/ContactUs'
import OpticalCharacterRecognition from '@/features/infrastructureContainers/components/OpticalCharacterRecognition/OpticalCharacterRecognition'
import FreeTradeZone from '@/features/infrastructureContainers/components/FreeTradeZone/FreeTradeZone'
import { Banner } from '@/components/Banner'

export function InfrastructureContainersPage() {
  const t = useTranslations('Menu')
  return (
    <main>
      <Menu />
      <Banner
        imagePath='/about-us/banner.png'
        alt={t('infrastructureContainers')}
        caption={t('infrastructureContainers')}
        className='mb-[40px]'
      />
      <MachineryEquipment />
      <LogisticInnovation />
      <OpticalCharacterRecognition />
      <FreeTradeZone />
      <OperationGuidelines />
      <ContactUs className='mt-[80px]' />
    </main>
  )
}
