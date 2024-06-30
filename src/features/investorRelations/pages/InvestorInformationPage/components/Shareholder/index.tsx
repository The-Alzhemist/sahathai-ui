import { useTranslations } from 'next-intl'

import { Link } from '@/libs/intl/navigation'
import { InvestorInformationEnum } from '@/enums/investorRelations/InvestorInformationEnum'
import { ShareholderProps } from './interface'
import { ShareholderCard } from '../ShareholderCard'

export function Shareholder({ className }: ShareholderProps) {
  const t = useTranslations('InvestorInformationPage.Shareholder')

  return (
    <section className={className}>
      <h2
        id={InvestorInformationEnum.Shareholder}
        className='headline-2 text-black-80'
      >
        {t('title')}
      </h2>

      <table className='w-full report shadow-3 rounded-[10px] overflow-hidden mt-[37px]'>
        <thead>
          <tr>
            <th className='subtitle-1'>{t('order')}</th>
            <th className='subtitle-1'>{t('title')}</th>
            <th className='subtitle-1'>{t('numberShares')}</th>
            <th className='subtitle-1'>{t('shares')}</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 10 }).map((_, index) => (
            <tr key={index}>
              <td className='body-2'>{index + 1}</td>
              <td className='body-2'>บริษัท รัตน โฮลดิ้ง จำกัด</td>
              <td className='body-2'>209,828,258</td>
              <td className='body-2'>34.56</td>
            </tr>
          ))}
        </tbody>
      </table>

      <ShareholderCard
        className='mt-[145px]'
        title={t('shareholderOverview', { date: '11/03/2567', type: 'XM' })}
      >
        <ShareholderCard.Item title={t('minorityShareholders')} value='3,473' />
        <ShareholderCard.Item title={t('minorityShareholding')} value='44.36' />
      </ShareholderCard>
      <ShareholderCard
        className='mt-[48px]'
        title={t('shareholderOverview', { date: '11/03/2567', type: 'XM' })}
      >
        <ShareholderCard.Item title={t('numberShareholder')} value='3,473' />
        <ShareholderCard.Item title={t('scriptlessShares')} value='44.36' />
      </ShareholderCard>

      <Link
        className='py-[5px] px-[20px] border border-dark-80 rounded-[50px] mx-auto w-fit block mt-[9px] bg-white text-dark medium'
        href='#'
      >
        {t('stockDistribution')}
      </Link>
    </section>
  )
}
