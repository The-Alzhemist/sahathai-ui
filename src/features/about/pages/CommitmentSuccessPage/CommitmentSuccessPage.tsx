import { useTranslations } from 'next-intl'
import { CommitmentSuccessCard } from './components/CommitmentSuccessCard'
import { CommitmentSuccessContent } from './components/CommitmentSuccessContent'

export function CommitmentSuccessPage() {
  const t = useTranslations('CommitmentSuccessPage')

  return (
    <main className='max-w-[1196px] mx-auto py-[100px]'>
      <h1 className='text-center font-[700] text-[36px] leading-[44px]'>
        {t('title')}
      </h1>
      <p className='mt-[26px] max-w-[945px] mx-auto font-[400] leading-[24px] sarabun text-center text-dark-300'>
        {t('description')}
      </p>
      <CommitmentSuccessCard className='mt-[74px]'>
        <div className='w-[562px] h-[242px] shrink-0 bg-dark-80 rounded-[8px] mx-auto' />
        <CommitmentSuccessContent
          year={2008}
          title={t('item1.title')}
          description={t('item1.description')}
        />
      </CommitmentSuccessCard>
      <CommitmentSuccessCard>
        <CommitmentSuccessContent
          year={2008}
          title={t('item2.title')}
          description={t('item2.description')}
        />
        <div className='w-[562px] h-[242px] shrink-0 bg-dark-80 rounded-[8px] mx-auto' />
      </CommitmentSuccessCard>
      <CommitmentSuccessCard>
        <div className='w-[562px] h-[242px] shrink-0 bg-dark-80 rounded-[8px] mx-auto' />
        <CommitmentSuccessContent
          year={2008}
          title={t('item3.title')}
          description={t('item3.description')}
        />
      </CommitmentSuccessCard>
      <CommitmentSuccessCard>
        <CommitmentSuccessContent
          year={2008}
          title={t('item4.title')}
          description={t('item4.description')}
        />
        <div className='w-[562px] h-[242px] shrink-0 bg-dark-80 rounded-[8px] mx-auto' />
      </CommitmentSuccessCard>
      <CommitmentSuccessCard>
        <div className='w-[562px] h-[242px] shrink-0 bg-dark-80 rounded-[8px] mx-auto' />
        <CommitmentSuccessContent
          year={2008}
          title={t('item5.title')}
          description={t('item5.description')}
        />
      </CommitmentSuccessCard>
      <CommitmentSuccessCard>
        <CommitmentSuccessContent
          year={2008}
          title={t('item6.title')}
          description={t('item6.description')}
        />
        <div className='w-[562px] h-[242px] shrink-0 bg-dark-80 rounded-[8px] mx-auto' />
      </CommitmentSuccessCard>
    </main>
  )
}
