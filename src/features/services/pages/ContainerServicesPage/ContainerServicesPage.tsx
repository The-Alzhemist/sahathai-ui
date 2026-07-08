import { useTranslations } from 'next-intl'

import { Menu } from '@/components/Menu'
import { ContainerStorageWarehouseServices } from '@/features/services/components/ContainerStorageWarehouseServices'

export function ContainerServicesPage() {
  const t = useTranslations(
    'ServicesPage.ComprehensiveCommercialPortServices.bargeServices'
  )

  return (
    <main>
      <Menu />
      <ContainerStorageWarehouseServices />
    </main>
  )
}
