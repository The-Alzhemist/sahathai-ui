import { useTranslations } from 'next-intl'

import { Collapse } from '../Collapse'
import { Card } from '@/features/services/components/Card'
import Image from 'next/image'

export function MachineryEquipment() {
  const t = useTranslations('InfrastructureContainersPage.MachineryEquipment')

  return (
    <section className='relative' id='machinery-equipment'>

      <h2 className='prompt text-3xl md:text-[40px] font-[500] text-center text-navy'>
        {t('title')}
      </h2>
      <div className='mt-[50px] space-y-[20px] max-w-[1042px] w-full mx-auto px-5'>
        <Card imageUrl={'/infrastructure-containers/gantry-crane.png'} title={t('gantryCrane.title')}
              content={t('gantryCrane.content')} position={'left'} />

        <Card imageUrl={'/infrastructure-containers/gantry-crane.webp'} title={t('jibCrane.title')}
              content={t('jibCrane.content')} position={'right'} />

        <Card imageUrl={'/infrastructure-containers/rtg.png'} title={t('rtg.title')} content={t('rtg.content')}
              position={'left'} />

        <Card imageUrl={'/infrastructure-containers/mobile-harbor-crane.png'} title={t('mobileHarborCrane.title')}
              content={t('mobileHarborCrane.content')} position={'right'} />

        <Card imageUrl={'/infrastructure-containers/bard.png'} title={t('barge.title')} content={t('barge.content')}
              position={'left'} />

        <Card imageUrl={'/infrastructure-containers/reach-stacker.png'} title={t('reachStacker.title')}
              content={t('reachStacker.content')} position={'right'} />

        <Card imageUrl={'/infrastructure-containers/tractor.png'} title={t('emptyContainerHandler.title')}
              content={t('emptyContainerHandler.content')} position={'left'} />

        <Card imageUrl={'/infrastructure-containers/container-car.png'} title={t('tractorTrailer.title')}
              content={t('tractorTrailer.content')} position={'right'} />

        <Card imageUrl={'/infrastructure-containers/forklift.png'} title={t('forklift.title')}
              content={t('forklift.content')} position={'left'} />

      </div>
    </section>
  )
}
