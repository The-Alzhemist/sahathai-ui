import { useTranslations } from 'next-intl'
import { Technology } from './components/Technology'
import { ThreeHarborCranes } from './components/ThreeHarborCranes'
import { EquipmentCard } from './components/EquipmentCard'
import { ContactUs } from '../../components/ContactUs'

export function TechnologyEquipmentPage() {
  const t = useTranslations('TechnologyEquipmentPage')

  return (
    <main>
      <Technology />
      <ThreeHarborCranes />
      <section className='mt-[179px] max-w-[1299px] w-full mx-auto space-y-[90px]'>
        <EquipmentCard
          title={t('rtgCrane.title')}
          description={t('rtgCrane.description')}
          orientation='horizontal'
        />
        <EquipmentCard
          title={t('mobileHarborCranes.title')}
          description={t('mobileHarborCranes.description')}
          orientation='horizontal'
        />
        <EquipmentCard
          title={t('electricCrane.title')}
          description={t('electricCrane.description')}
          orientation='horizontal'
        />
      </section>
      <section className='mt-[248px] max-w-[1299px] w-full mx-auto flex flex-wrap gap-[80px]'>
        <EquipmentCard
          title={t('reachStackerForklift.title')}
          description={t('reachStackerForklift.description')}
          orientation='vertical'
        />
        <EquipmentCard
          title={t('emptyContainerForklift.title')}
          description={t('emptyContainerForklift.description')}
          orientation='vertical'
        />
        <EquipmentCard
          title={t('tractorsAndTrailers.title')}
          description={t('tractorsAndTrailers.description')}
          orientation='vertical'
        />
        <EquipmentCard
          title={t('forklift.title')}
          description={t('forklift.description')}
          orientation='vertical'
        />
      </section>
      <ContactUs className='mt-[191px] mb-[141px]' />
    </main>
  )
}
