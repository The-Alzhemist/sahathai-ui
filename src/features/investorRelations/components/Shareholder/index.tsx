import { useTranslations } from 'next-intl'

import { Link } from '@/libs/intl/navigation'
import { InvestorInformationEnum } from '@/enums/investorRelations/InvestorInformationEnum'
import { ArrowRightIcon } from '@/components/icons/ArrowRightIcon'
import { Animation } from '@/components/Animation'
import { ShareholderCard } from '../ShareholderCard'
import { investmentStakeholderList } from '@/features/investorRelations/components/Shareholder/InvesterList'

export function Shareholder() {
  const t = useTranslations('InvestorInformationPage.Shareholder')

  return (
    <Animation>
      <h2
        id={InvestorInformationEnum.Shareholder}
        className='headline-2 text-black-80'
      >
        {t('title')}
      </h2>

      <section className='overflow-scroll'>
        <table className='report shadow-6 rounded-[10px] mt-[37px] overflow-hidden w-full'>
          <thead>
            <tr>
              <th className='subtitle-1'>{t('order')}</th>
              <th className='subtitle-1 min-w-[200px]'>{t('title')}</th>
              <th className='subtitle-1'>{t('numberShares')}</th>
              <th className='subtitle-1'>{t('shares')}</th>
            </tr>
          </thead>
          <tbody>
            {investmentStakeholderList.map((item, index) => (
              <tr key={index}>
                <td className='body-2 p-[16px]'>{index + 1}</td>
                <td className='body-2 p-[16px]'>{item.name}</td>
                <td className='body-2 p-[16px]'>
                  {item.stockAmount.toLocaleString()}
                </td>
                <td className='body-2 p-[16px]'>{`${item.percentAmount}%`}</td>
              </tr>
            ))}

            <tr>
              <td className='p-[16px] headline-4 text-blue-400' colSpan={2}>
                รวม
              </td>
              <td className='body-2 p-[16px]'>
                {' '}
                {investmentStakeholderList
                  .reduce((acc, curr) => acc + curr.stockAmount, 0)
                  .toLocaleString()}
              </td>
              <td className='body-2 p-[16px]'>
                {' '}
                {investmentStakeholderList
                  .reduce((acc, curr) => acc + curr.percentAmount, 0)
                  .toLocaleString()}
                %
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <p className='mt-[32px] body-2'>{t('note')}</p>

      <ShareholderCard
        className='mt-[112px]'
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
        className='mt-[9px] mx-auto w-fit block text-blue-400 subtitle-1 flex items-center gap-[9px]'
        href='#'
      >
        {t('stockDistribution')}
        <ArrowRightIcon width='16' height='16' />
      </Link>
    </Animation>
  )
}
