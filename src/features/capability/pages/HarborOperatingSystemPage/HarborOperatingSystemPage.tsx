import { useTranslations } from 'next-intl'
import { HarborOperatingSystemCard } from './components/HarborOperatingSystemCard'
import { Ocr } from './components/Ocr'
import { ContactUs } from '../../components/ContactUs'

export function HarborOperatingSystemPage() {
  const t = useTranslations('HarborOperatingSystemPage')

  return (
    <main className='pt-[176px] pb-[147px]'>
      <h1 className='font-[700] text-[36px] leading-[44px] text-center'>
        {t('title')}
      </h1>
      <section className='mt-[69px] flex flex-wrap max-w-[1158px] w-full gap-[57px] mx-auto'>
        <HarborOperatingSystemCard
          title={t('modernPerformance.title')}
          description={t('modernPerformance.description')}
        />
        <HarborOperatingSystemCard
          title={t('effectiveSolution.title')}
          description={t('effectiveSolution.description')}
        />
        <HarborOperatingSystemCard
          title={t('efficientOperations.title')}
          description={t('efficientOperations.description')}
        />
      </section>
      <Ocr />
      <ContactUs className='mt-[167px]' />
    </main>
  )
}
