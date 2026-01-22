import { Animation } from '@/components/Animation'
import { useLocale } from 'next-intl'
import Image from 'next/image'

export function LogisticInnovation() {
  const lang = useLocale()
  return (
    <Animation className='mt-[100px] max-w-[862px] w-full mx-auto px-5'>
      <div
        className='relative pt-[161.02%] w-full mb-10'
        id='logistic-innovation'
      >
        {lang === 'th' && (
          <Image
            src='/infrastructure-containers/logistic-innovation-th-prompt.png'
            fill
            alt=''
          />
        )}

        {lang === 'en' && (
          <Image
            src='/infrastructure-containers/new/logistic-innovation-en-prompt.webp'
            fill
            alt=''
          />
        )}

        {lang === 'cn' && (
          <Image
            src='/infrastructure-containers/new/logistic-innovation-cn-prompt.webp'
            fill
            alt=''
          />
        )}
      </div>
    </Animation>
  )
}
