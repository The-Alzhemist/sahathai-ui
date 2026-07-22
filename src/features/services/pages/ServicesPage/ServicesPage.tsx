'use client'

import { Menu } from '@/components/Menu'
import { ComprehensiveCommercialPortServices } from '../../components/ComprehensiveCommercialPortServices'

import { InventoryManagementServices } from '../../components/InventoryManagementServices'
import ContactUs from '@/components/ContactUs/ContactUs'

import SwiperVertical from '@/components/Header/components/SwiperVertical'
import { AnimatePresence } from 'framer-motion'
import { Animation } from '@/components/Animation'
import { useNavigationTick } from '@/context/NavigationTickContext'

export function ServicesPage() {
  const { tick } = useNavigationTick()

  return (
    <main>
      <AnimatePresence mode='wait'>
        <Animation key={tick}>
          <Menu />

          <SwiperVertical />
          <ComprehensiveCommercialPortServices />
          {/*<ContainerStorageWarehouseServices />*/}
          <InventoryManagementServices />
          <ContactUs className='pt-[80px] pb-[114px]' />
          {/* <CookieConsentFloatingBar /> */}
        </Animation>
      </AnimatePresence>
    </main>
  )
}
