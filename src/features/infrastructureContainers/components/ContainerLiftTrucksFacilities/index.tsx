import { useTranslations } from 'next-intl'

import { Animation } from '@/components/Animation'
import { Card } from './Card'

export function ContainerLiftTrucksFacilities() {
  const t = useTranslations(
    'InfrastructureContainersPage.ContainerLiftTrucksFacilities'
  )

  return (
    <Animation className='mt-[97px] max-w-[896px] w-full mx-auto'>
      <h2 className='headline-2 text-blue-400'>{t('title')}</h2>
      <section className='mt-[40px] flex flex-wrap gap-x-[85px] gap-y-[40px]'>
        <Card
          imageUrl='/infrastructure-containers/reach-stacker.png'
          title={t('reachStacker.title')}
          description={t('reachStacker.description')}
        />
        <Card
          imageUrl='/infrastructure-containers/empty-container-lift-trucks.png'
          title={t('emptyContainerLiftTrucks.title')}
          description={t('emptyContainerLiftTrucks.description')}
        />
        <Card
          imageUrl='/infrastructure-containers/tractors-trailers.png'
          title={t('tractorsTrailers.title')}
          description={t('tractorsTrailers.description')}
        />
        <Card
          imageUrl='/infrastructure-containers/forklifts.png'
          title={t('forklifts.title')}
          description={t('forklifts.description')}
        />
      </section>
    </Animation>
  )
}
