import { useTranslations } from 'next-intl'

export function CorporateGroupOrganizationalStructurePage() {
  const t = useTranslations('CorporateGroupOrganizationalStructurePage')

  return (
    <main className='max-w-[1440px] mx-auto py-[40px]'>
      <h1 className='text-center font-[700] text-[36px] leading-[44px]'>
        {t('title')}
      </h1>
      <p className='mt-[24px] mb-[40px] max-w-[560px] mx-auto text-[18px] leading-[28px] sarabun text-center text-dark'>
        {t('description')}
      </p>

      <h2 className='mt-[40px] text-center font-[600] text-[30px] leading-[36px]'>
        {t('corporateGroup')}
      </h2>
      <div className='max-w-[1211px] w-full mt-[24px] mx-auto'>
        <div className='relative pt-[42.61%] w-full'>
          <div className='bg-dark-60 absolute inset-0 w-full h-full' />
        </div>
      </div>
      <section className='bg-dark py-[40px]'>
        <div className='p-[40px]'>
          <h2 className='text-center font-[600] text-[30px] leading-[36px] text-dark-60'>
            {t('organizationalStructure.title')}
          </h2>
          <p className='mt-[24px] max-w-[840px] mx-auto text-dark-100 text-center text-[18px] leading-[28px] sarabun'>
            {t('organizationalStructure.description')}
          </p>
        </div>
        <div className='max-w-[1211px] w-full mt-[24px] mx-auto'>
          <div className='relative pt-[42.61%] w-full'>
            <div className='bg-dark-300 absolute inset-0 w-full h-full' />
          </div>
        </div>
      </section>
    </main>
  )
}
