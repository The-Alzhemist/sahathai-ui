import { Menu } from '@/components/Menu'
import { OperationGuidelines } from '../../components/OperationGuidelines'
import { MachineryEquipment } from '../../components/MachineryEquipment'
import { LogisticInnovation } from '../../components/LogisticInnovation'
import ContactUs from '@/components/ContactUs/ContactUs'
import OpticalCharacterRecognition from '@/features/infrastructureContainers/components/OpticalCharacterRecognition/OpticalCharacterRecognition'

import SwiperVertical from '@/components/Header/components/SwiperVertical'
import { AnimatePresence } from 'framer-motion'
import { Animation } from '@/components/Animation'

export function InfrastructureContainersPage() {
  return (
    <main>
      <AnimatePresence mode='wait'>
        <Animation key={`infra-structure-page-${Date.now()}`}>
          <Menu />

          <SwiperVertical />
          <MachineryEquipment />
          <LogisticInnovation />
          <OpticalCharacterRecognition />
          {/*<FreeTradeZone />*/}
          <OperationGuidelines />
          <ContactUs className='my-[80px]' />
        </Animation>
      </AnimatePresence>
    </main>
  )
}
