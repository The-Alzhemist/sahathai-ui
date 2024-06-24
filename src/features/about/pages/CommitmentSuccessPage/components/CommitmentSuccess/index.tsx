import { useTranslations } from 'next-intl'
import Image from 'next/image'

import { CommitmentSuccessCard } from '../CommitmentSuccessCard'
import { CommitmentSuccessContent } from '../CommitmentSuccessContent'

export function CommitmentSuccess() {
  const t = useTranslations('CommitmentSuccessPage')

  return (
    <section className='max-w-[894px] mx-auto mt-[16px]'>
      <CommitmentSuccessCard>
        <Image
          className='rounded-[8px]'
          src='/about/2551.png'
          width={411}
          height={242}
          alt=''
        />
        <CommitmentSuccessContent
          year={t('2551.year')}
          imageUrl='/about/shcp.png'
          title={t('2551.title')}
        />
      </CommitmentSuccessCard>
      <CommitmentSuccessCard>
        <CommitmentSuccessContent
          year={t('2556.year')}
          imageUrl='/about/sahathai.png'
          title={t('2556.title')}
        />
        <Image
          className='rounded-[8px]'
          src='/about/2556.png'
          width={411}
          height={242}
          alt=''
        />
      </CommitmentSuccessCard>
      <CommitmentSuccessCard>
        <Image
          className='rounded-[8px]'
          src='/about/2558.png'
          width={411}
          height={242}
          alt=''
        />
        <CommitmentSuccessContent
          year={t('2558.year')}
          imageUrl='/about/bbt.png'
          title={t('2558.title')}
          description={t('2558.description')}
        />
      </CommitmentSuccessCard>
      <CommitmentSuccessCard>
        <CommitmentSuccessContent
          year={t('2559_2560.year')}
          imageUrl='/about/bbs.png'
          title={t('2559_2560.title')}
          description={t('2559_2560.description')}
        />
        <Image
          className='rounded-[8px]'
          src='/about/2559_2560.png'
          width={411}
          height={242}
          alt=''
        />
      </CommitmentSuccessCard>
      <CommitmentSuccessCard>
        <Image
          className='rounded-[8px]'
          src='/about/2560_2562.png'
          width={411}
          height={242}
          alt=''
        />
        <CommitmentSuccessContent
          year={t('2560_2562.year')}
          imageUrl='/about/sahathai.png'
          description={t('2560_2562.description')}
        />
      </CommitmentSuccessCard>
      <CommitmentSuccessCard>
        <CommitmentSuccessContent
          year={t('2568.year')}
          imageUrl='/about/circle.png'
          description={t('2568.description')}
        />
        <Image
          className='rounded-[8px]'
          src='/about/2568.png'
          width={411}
          height={242}
          alt=''
        />
      </CommitmentSuccessCard>
    </section>
  )
}
