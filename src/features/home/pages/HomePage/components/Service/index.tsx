import { ArrowRightIcon } from '@/components/icons/ArrowRightIcon'
import { useTranslations } from 'next-intl'

export function Service() {
  const t = useTranslations('HomePage.Service')
  return (
    <section className='mt-[80px] flex flex-wrap justify-center items-center gap-[98px] py-[74px]'>
      <div className='max-w-[608px] w-full'>
        <div className='relative pt-[64.80%] w-full'>
          <div className='bg-dark-80 absolute inset-0 w-full h-full' />
        </div>
      </div>
      <div className='space-y-[28px] max-w-[381px] w-full'>
        <h2 className='font-[700] text-[36px] leading-[44px]'>{t('title')}</h2>
        <ul className='text-[18px] leading-[28px] space-y-[12px]'>
          <li className='flex items-center '>
            <ArrowRightIcon
              className='shrink-0 mr-[10px]'
              width='20'
              height='20'
            />
            {t('containerCargoServices')}
          </li>
          <li className='flex items-center '>
            <ArrowRightIcon
              className='shrink-0 mr-[10px]'
              width='20'
              height='20'
            />
            {t('multipurposePortServices')}
          </li>
          <li className='flex items-center '>
            <ArrowRightIcon
              className='shrink-0 mr-[10px]'
              width='20'
              height='20'
            />
            {t('warehouseServices')}
          </li>
          <li className='flex items-center '>
            <ArrowRightIcon
              className='shrink-0 mr-[10px]'
              width='20'
              height='20'
            />
            {t('valueAddedServices')}
          </li>
        </ul>
        <button
          className='py-[4px] px-[18px] border border-dark-80 rounded-[50px]'
          type='button'
        >
          {t('seeMore')}
        </button>
      </div>
    </section>
  )
}
