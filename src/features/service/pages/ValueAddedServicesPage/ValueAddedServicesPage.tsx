import { useTranslations } from 'next-intl'
import { ServiceForm } from '../../components/ServiceForm'

export function ValueAddedServicesPage() {
  const t = useTranslations('ValueAddedServicesPage')

  return (
    <main className='py-[80px]'>
      <section className='max-w-[954px] mx-auto'>
        <h2 className='font-[700] text-[36px] leading-[44px] text-center'>
          {t('title')}
        </h2>
        <p className='mt-[24px] text-center text-[18px] leading-[28px]'>
          {t('description')}
        </p>
      </section>
      <ServiceForm />
    </main>
  )
}
