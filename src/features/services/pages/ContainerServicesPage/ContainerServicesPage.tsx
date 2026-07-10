import { Menu } from '@/components/Menu'
import { ContainerStorageWarehouseServices } from '@/features/services/components/ContainerStorageWarehouseServices'

export function ContainerServicesPage() {
  return (
    <main>
      <Menu />
      <ContainerStorageWarehouseServices />
    </main>
  )
}
