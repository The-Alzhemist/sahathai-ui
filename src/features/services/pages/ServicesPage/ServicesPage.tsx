import { ContactUs } from '@/components/ContactUs'
import { ContainerServices } from '../../components/ContainerServices'
import { MultipurposePort } from '../../components/MultipurposePort'
import { WarehouseServices } from '../../components/WarehouseServices'
import { ComprehensiveCommercialPortServices } from '../../components/ComprehensiveCommercialPortServices'
import { ImportExportAgent } from '../../components/ImportExportAgent'
import { OtherRelatedServiceBusinesses } from '../../components/OtherRelatedServiceBusinesses'

export function ServicesPage() {
  return (
    <main className='py-[80px]'>
      <ContainerServices />
      <MultipurposePort />
      <WarehouseServices />
      <ComprehensiveCommercialPortServices />
      <ImportExportAgent />
      <OtherRelatedServiceBusinesses />
      <ContactUs className='mt-[72px]' />
    </main>
  )
}
