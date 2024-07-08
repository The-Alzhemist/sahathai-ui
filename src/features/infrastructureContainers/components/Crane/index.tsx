import { useTranslations } from 'next-intl'
import Image from 'next/image'

import { Animation } from '@/components/Animation'
import { Card } from './Card'

export function Crane() {
  const t = useTranslations('InfrastructureContainersPage.Crane')

  return (
    <Animation className='mt-[66px] space-y-[40px] max-w-[896px] w-full mx-auto'>
      <h2 className='headline-2 text-blue-400'>{t('title')}</h2>
      <Card>
        <div className='relative max-w-[435px] w-full rounded-[8px] overflow-hidden'>
          <div className='relative pt-[66.66%] w-full'>
            <Image src='/infrastructure-containers/rtg-crane.png' fill alt='' />
          </div>
          <div className='absolute left-[15px] bottom-[13px] p-[4px] bg-white'>
            <Image src='/logo.png' width={43.4} height={10.31} alt='' />
          </div>
        </div>
        <Card.Content
          title={t('rtgCrane.title')}
          description={t('rtgCrane.description')}
        />
      </Card>
      <Card>
        <Card.Content
          title={t('mobileHarborCranes.title')}
          description={t('mobileHarborCranes.description')}
        />
        <div className='relative max-w-[435px] w-full rounded-[8px] overflow-hidden'>
          <div className='relative pt-[66.66%] w-full'>
            <Image
              src='/infrastructure-containers/mobile-harbor-cranes.png'
              fill
              alt=''
            />
          </div>
          <div className='absolute left-[15px] bottom-[13px] p-[4px] bg-white'>
            <Image src='/logo.png' width={43.4} height={10.31} alt='' />
          </div>
        </div>
      </Card>
      <Card>
        <div className='relative max-w-[435px] w-full rounded-[8px] overflow-hidden'>
          <div className='relative pt-[66.66%] w-full'>
            <Image
              src='/infrastructure-containers/electric-crane.png'
              fill
              alt=''
            />
          </div>
          <div className='absolute left-[15px] bottom-[13px] p-[4px] bg-white'>
            <Image src='/logo.png' width={43.4} height={10.31} alt='' />
          </div>
        </div>
        <Card.Content
          title={t('electricCrane.title')}
          description={t('electricCrane.description')}
        />
      </Card>
    </Animation>
  )
}
