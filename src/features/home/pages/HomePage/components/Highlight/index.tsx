import { LocationCheckIcon } from '@/components/icons/LocationCheckIcon'
import { useTranslations } from 'next-intl'
import { HighlightCard } from '../HighlightCard'
import { LikeIcon } from '@/components/icons/LikeIcon'
import { NavigationOneIcon } from '@/components/icons/NavigationOneIcon'

export function Highlight() {
  const t = useTranslations('HomePage.Highlight')

  return (
    <section className='mt-[152px] max-w-[897px] mx-auto'>
      <h2 className='text-[34px] leading-[36px] text-center text-blue-400'>
        {t('title')}
      </h2>
      <p className='mt-[8px] body-1 text-black-60 text-center'>
        {t('description')}
      </p>
      <div className='mt-[40px] flex justify-center flex-wrap gap-[24px]'>
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
          <LikeIcon className='text-white' width='48' height='48' />
        </HighlightCard>
        <HighlightCard
          title={t('locationEasyAccess.title')}
          description={t('locationEasyAccess.description')}
        >
          <NavigationOneIcon className='text-white' width='48' height='48' />
        </HighlightCard>
      </div>
    </section>
  )
}
