import { useTranslations } from 'next-intl'

import { ContactUs } from '@/components/ContactUs'
import { GeneralWarehouse } from '../../components/GeneralWarehouse'
import { FreeZone } from '../../components/FreeZone'
import { ToolsEquipmentTechnology } from '../../components/ToolsEquipmentTechnology'
import { ThreeHarborCranes } from '../../components/ThreeHarborCranes'
import { Crane } from '../../components/Crane'
import { ContainerLiftTrucksFacilities } from '../../components/ContainerLiftTrucksFacilities'
import { TerminalOperatingSystem } from '../../components/TerminalOperatingSystem'
import { OperationGuidelines } from '../../components/OperationGuidelines'
import { AutomatedContainerReadingTechnology } from '../../components/AutomatedContainerReadingTechnology'

export function InfrastructureContainersPage() {
  const t = useTranslations('InfrastructureContainersPage')
  return (
    <main className='py-[62px]'>
      <h1 className='headline-2 text-blue-400 text-center'>{t('title')}</h1>
      <GeneralWarehouse />
      <FreeZone />
      <ToolsEquipmentTechnology />
      <ThreeHarborCranes />
      <Crane />
      <ContainerLiftTrucksFacilities />
      <TerminalOperatingSystem />
      <AutomatedContainerReadingTechnology />
      <OperationGuidelines />
      <ContactUs className='mt-[59px]' />
    </main>
  )
}
