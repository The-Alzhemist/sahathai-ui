import { useTranslations } from 'next-intl'
import Image from 'next/image'

export function License() {
  const t = useTranslations('HomePage.License')
  return (
    <section className='max-w-[896px] w-full mx-auto'>
      <h2 className='text-[36px] leading-[56px] text-blue-800 text-center'>
        {t('title')}
      </h2>
      <p className='mt-[8px] body-2 text-black-60 text-center'>
        {t('description')}
      </p>
      <div className='flex flex-wrap justify-center mt-[40px] gap-[27.4px]'>
        <figure>
          <Image src='/home/license1.png' width={142.32} height={88} alt='' />
          <figcaption className='text-black-60 caption mt-[8px]'>
            {t('iso')}
          </figcaption>
        </figure>
        <figure>
          <Image src='/home/license2.png' width={58.67} height={88} alt='' />
          <figcaption className='text-black-60 caption mt-[8px]'>
            {t('iso')}
          </figcaption>
        </figure>
        <figure>
          <Image src='/home/license3.png' width={151.01} height={88} alt='' />
          <figcaption className='text-black-60 caption mt-[8px]'>
            {t('iso')}
          </figcaption>
        </figure>
        <figure>
          <Image src='/home/license4.png' width={129.68} height={88} alt='' />
          <figcaption className='text-black-60 caption mt-[8px]'>
            {t('iso')}
          </figcaption>
        </figure>
        <figure>
          <Image src='/home/license5.png' width={221.19} height={88} alt='' />
          <figcaption className='text-black-60 caption mt-[8px]'>
            {t('iso')}
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
