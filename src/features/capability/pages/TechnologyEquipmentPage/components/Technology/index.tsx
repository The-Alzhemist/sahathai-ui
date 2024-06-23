import { useTranslations } from 'next-intl'

export function Technology() {
  const t = useTranslations('TechnologyEquipmentPage.Technology')

  return (
    <section className='flex items-center flex-wrap gap-[96px] justify-center pt-[156px] pb-[113px]'>
      <div className='w-[403px] h-[390px] border border-dark-50 bg-dark-60 rounded-[4px]' />
      <div className='max-w-[681px] w-full'>
        <h2 className='font-[700] text-[24px] leading-[44px]'>
          {t('modernTechnologyAndEquipment.title')}
        </h2>
        <p className='text-[18px] leading-[28px]'>
          {t('modernTechnologyAndEquipment.description')}
        </p>
        <h2 className='font-[700] text-[24px] leading-[44px]'>
          {t('improvingAndAddingEquipment.title')}
        </h2>
        <p className='text-[18px] leading-[28px]'>
          {t('improvingAndAddingEquipment.description')}
        </p>
        <h2 className='font-[700] text-[24px] leading-[44px]'>
          {t('confidenceInService.title')}
        </h2>
        <p className='text-[18px] leading-[28px]'>
          {t('confidenceInService.description')}
        </p>
      </div>
    </section>
  )
}
