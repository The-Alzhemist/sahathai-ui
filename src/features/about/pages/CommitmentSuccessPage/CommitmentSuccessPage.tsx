import { useTranslations } from 'next-intl'

import { Title } from '@/components/Title'
import { CommitmentSuccessCard } from './components/CommitmentSuccessCard'
import { CommitmentSuccessContent } from './components/CommitmentSuccessContent'
import { Banner } from './components/Banner'
import { CommitmentSuccess } from './components/CommitmentSuccess'

export function CommitmentSuccessPage() {
  const t = useTranslations('CommitmentSuccessPage')
  const common = useTranslations('common')

  return (
    <main>
      <Banner />
      <Title>
        <h2 className='text-center headline-2 text-white'>
          {common('sahathaiTerminal')}
        </h2>
        <p className='mt-[8px] text-center headline-4 text-white'>
          {t('startingBusiness')}
        </p>
      </Title>
      <CommitmentSuccess />
    </main>
  )
}
