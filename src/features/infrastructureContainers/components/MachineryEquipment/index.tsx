import { useTranslations } from 'next-intl'

import { Collapse } from '../Collapse'
import { Card } from '@/features/services/components/Card'
import Image from 'next/image'

export function MachineryEquipment() {
  const t = useTranslations('InfrastructureContainersPage.MachineryEquipment')

  return (
    <section className='relative pt-[100px]' id='machinery-equipment'>
      <h2 className='prompt text-3xl md:text-[40px] font-[500] text-center text-navy'>
        {t('title')}
      </h2>
      <div className='mt-[50px] space-y-[20px] max-w-[1042px] w-full mx-auto px-5'>
        <Card
          imageUrl={'/infrastructure-containers/new/infrastructure-1.webp'}
          title={t('gantryCrane.title')}
          content={t('gantryCrane.content')}
          position={'left'}
        />

        <Card
          imageUrl={'/infrastructure-containers/new/infrastructure-2.webp'}
          title={t('jibCrane.title')}
          content={t('jibCrane.content')}
          position={'right'}
        />

        <Card
          imageUrl={'/infrastructure-containers/new/infrastructure-3.webp'}
          title={t('rtg.title')}
          content={t('rtg.content')}
          position={'left'}
        />

        <Card
          imageUrl={'/infrastructure-containers/new/infrastructure-4.webp'}
          title={t('mobileHarborCrane.title')}
          content={t('mobileHarborCrane.content')}
          position={'right'}
        />

        <Card
          imageUrl={'/infrastructure-containers/new/infrastructure-5.webp'}
          title={t('barge.title')}
          content={t('barge.content')}
          position={'left'}
        />

        <Card
          imageUrl={'/infrastructure-containers/new/infrastructure-6.webp'}
          title={t('reachStacker.title')}
          content={t('reachStacker.content')}
          position={'right'}
        />

        <Card
          imageUrl={'/infrastructure-containers/new/infrastructure-7.webp'}
          title={t('emptyContainerHandler.title')}
          content={t('emptyContainerHandler.content')}
          position={'left'}
        />

        <Card
          imageUrl={'/infrastructure-containers/new/infrastructure-8.webp'}
          title={t('tractorTrailer.title')}
          content={t('tractorTrailer.content')}
          position={'right'}
        />

        <Card
          imageUrl={'/infrastructure-containers/new/infrastructure-9.webp'}
          title={t('forklift.title')}
          content={t('forklift.content')}
          position={'left'}
        />
      </div>
    </section>
  )
}
