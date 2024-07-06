import { Animation } from '@/components/Animation'
import { useTranslations } from 'next-intl'

export function ImportExportAgent() {
  const t = useTranslations('ServicesPage.ImportExportAgent')

  return (
    <Animation className='mt-[72px] max-w-[896px] w-full mx-auto p-[24px] shadow-2 space-y-[40px]'>
      <h2 className='headline-2 text-blue-400 text-center'>{t('title')}</h2>
      <section className='space-y-[16px]'>
        <h3 className='reg-20 text-blue-300 underline'>
          {t('importExportAgentService.title')}
        </h3>
        <div className='grid grid-cols-[10px_1fr] body-1 text-black-80'>
          <span>&bull;</span>
          <p>{t('importExportAgentService.description')}</p>
          <span>&bull;</span>
          <p>{t('importExportAgentService.description2')}</p>
        </div>
      </section>
    </Animation>
  )
}
