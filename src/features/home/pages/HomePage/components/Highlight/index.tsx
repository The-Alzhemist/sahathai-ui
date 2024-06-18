import { LocationCheckIcon } from '@/components/icons/LocationCheckIcon'
import { useTranslations } from 'next-intl'
import { HighlightCard } from '../HighlightCard'

export function Highlight() {
  const t = useTranslations('HomePage.Highlight')

  return (
    <section className='mt-[80px] pb-[80px]'>
      <h2 className='font-[700] text-[36px] leading-[44px] text-center'>
        {t('bestOption')}&nbsp;
        <span className='font-[400]'>{t('logisticAndSupplyChain')}</span>
      </h2>
      <p className='mt-[8px] font-[500] text-[20px] leading-[24px] text-dark text-center'>
        {t('description')}
      </p>
      <div className='mt-[56px] flex justify-center flex-wrap gap-[10px]'>
        <HighlightCard
          title={t('location.title')}
          description={t('location.description')}
        >
          <LocationCheckIcon className='text-white' width='48' height='48' />
        </HighlightCard>
        <HighlightCard
          title={t('flexibility.title')}
          description={t('flexibility.description')}
        >
          <LocationCheckIcon className='text-white' width='48' height='48' />
        </HighlightCard>
        <HighlightCard
          title={t('locationEasyAccess.title')}
          description={t('locationEasyAccess.description')}
        >
          <LocationCheckIcon className='text-white' width='48' height='48' />
        </HighlightCard>
      </div>
    </section>
  )
}
