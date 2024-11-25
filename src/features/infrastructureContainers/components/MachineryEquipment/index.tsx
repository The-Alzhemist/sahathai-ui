import { useTranslations } from 'next-intl'

import { Collapse } from '../Collapse'

export function MachineryEquipment() {
  const t = useTranslations('InfrastructureContainersPage.MachineryEquipment')

  return (
    <section>
      <h2 className='prompt text-[40px] font-[500] text-center text-navy'>
        {t('title')}
      </h2>
      <div className='mt-[50px] space-y-[20px] max-w-[862px] w-full mx-auto'>
        <Collapse
          title={t('gantryCrane.title')}
          content={t('gantryCrane.content')}
          imageUrl='/infrastructure-containers/gantry-crane.webp'
        />
        <Collapse
          title={t('jibCrane.title')}
          content={t('jibCrane.content')}
          imageUrl='/infrastructure-containers/gantry-crane.webp'
        />
        <Collapse
          title={t('rtg.title')}
          content={t('rtg.content')}
          imageUrl='/infrastructure-containers/gantry-crane.webp'
        />
        <Collapse
          title={t('mobileHarborCrane.title')}
          content={t('mobileHarborCrane.content')}
          imageUrl='/infrastructure-containers/gantry-crane.webp'
        />
        <Collapse
          title={t('barge.title')}
          content={t('barge.content')}
          imageUrl='/infrastructure-containers/gantry-crane.webp'
        />
        <Collapse
          title={t('reachStacker.title')}
          content={t('reachStacker.content')}
          imageUrl='/infrastructure-containers/gantry-crane.webp'
        />
        <Collapse
          title={t('emptyContainerHandler.title')}
          content={t('emptyContainerHandler.content')}
          imageUrl='/infrastructure-containers/gantry-crane.webp'
        />
        <Collapse
          title={t('tractorTrailer.title')}
          content={t('tractorTrailer.content')}
          imageUrl='/infrastructure-containers/gantry-crane.webp'
        />
        <Collapse
          title={t('forklift.title')}
          content={t('forklift.content')}
          imageUrl='/infrastructure-containers/gantry-crane.webp'
        />
      </div>
    </section>
  )
}
