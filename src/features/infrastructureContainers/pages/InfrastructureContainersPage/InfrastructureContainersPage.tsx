import { useTranslations } from 'next-intl'
import { Menu } from '@/components/Menu'
import { OperationGuidelines } from '../../components/OperationGuidelines'
import { MachineryEquipment } from '../../components/MachineryEquipment'
import { LogisticInnovation } from '../../components/LogisticInnovation'
import ContactUs from '@/components/ContactUs/ContactUs'
import OpticalCharacterRecognition from '@/features/infrastructureContainers/components/OpticalCharacterRecognition/OpticalCharacterRecognition'
import FreeTradeZone from '@/features/infrastructureContainers/components/FreeTradeZone/FreeTradeZone'
import { Banner } from '@/components/Banner'
import SwiperVertical from '@/components/Header/components/BannerSwiper/BannerSwiper'

export function InfrastructureContainersPage() {
  const t = useTranslations('Menu')
  return (
    <main>
      <Menu />
      {/* <Banner
        imagePath='/home/new/sahathai-building-banner.webp'
        alt={t('infrastructureContainers.title')}
        caption={t('infrastructureContainers.title')}
        className='mb-[40px]'
      /> */}
      <SwiperVertical />
      <MachineryEquipment />
      <LogisticInnovation />
      <OpticalCharacterRecognition />
      {/*<FreeTradeZone />*/}
      <OperationGuidelines />
      <ContactUs className='my-[80px]' />
    </main>
  )
}
