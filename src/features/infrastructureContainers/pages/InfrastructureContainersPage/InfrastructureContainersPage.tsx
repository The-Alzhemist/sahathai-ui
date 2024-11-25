import { useTranslations } from 'next-intl'

import { ContactUs } from '@/components/ContactUs'
import { Menu } from '@/components/Menu'
import { OperationGuidelines } from '../../components/OperationGuidelines'
import { MachineryEquipment } from '../../components/MachineryEquipment'
import { LogisticInnovation } from '../../components/LogisticInnovation'

export function InfrastructureContainersPage() {
  const t = useTranslations('InfrastructureContainersPage')
  return (
    <main className='py-[130px]'>
      <Menu />
      <MachineryEquipment />
      <LogisticInnovation />
      <OperationGuidelines />
      <ContactUs className='mt-[80px]' />
    </main>
  )
}
