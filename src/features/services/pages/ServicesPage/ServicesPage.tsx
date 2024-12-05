import { Menu } from '@/components/Menu'

import { ComprehensiveCommercialPortServices } from '../../components/ComprehensiveCommercialPortServices'
import { ContainerStorageWarehouseServices } from '../../components/ContainerStorageWarehouseServices'
import { InventoryManagementServices } from '../../components/InventoryManagementServices'
import ContactUs from '@/components/ContactUs/ContactUs'

export function ServicesPage() {
  return (
    <main>
      <Menu />
      <ComprehensiveCommercialPortServices />
      <ContainerStorageWarehouseServices />
      <InventoryManagementServices />
      <ContactUs className='pt-[80px] pb-[114px]' />
    </main>
  )
}
