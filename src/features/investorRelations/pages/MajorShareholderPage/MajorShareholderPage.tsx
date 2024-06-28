import { useTranslations } from 'next-intl'
import { Card } from './Card'
import { Link } from '@/libs/intl/navigation'

export function MajorShareholderPage() {
  const t = useTranslations('MajorShareholderPage')

  return (
    <main className='py-[80px] max-w-[1375px] w-full mx-auto'>
      <h1 className='w-full font-[700] text-[36px] leading-[44px] text-center'>
        {t('title')}
      </h1>
      <section className='mt-[80px] py-[10px] px-[40px] flex flex-wrap justify-center gap-[48px]'>
        <Card
          title={t('shareholderOverview', { data: '11/03/2567', type: 'XM' })}
        >
          <Card.Item title={t('minorityShareholders')} value='3,473' />
          <Card.Item title={t('minorityShareholding')} value='44.36' />
        </Card>
        <Card
          title={t('shareholderOverview', { data: '11/03/2567', type: 'XM' })}
        >
          <Card.Item title={t('numberShareholder')} value='3,473' />
          <Card.Item title={t('scriptlessShares')} value='44.36' />
        </Card>
      </section>
      <Link
        className='py-[5px] px-[20px] border border-dark-80 rounded-[50px] mx-auto w-fit block mt-[9px]'
        href='#'
      >
        {t('stockDistribution')}
      </Link>
      <section className='max-w-[1303px] mx-auto mt-[48px]'>
        <h2 className='font-[700] text-[24px] leading-[44px]'>
          {t('annualReport')}
        </h2>
        <table className='w-full shadow-3 rounded-[10px] overflow-hidden'>
          <thead>
            <tr>
              <th>{t('order')}</th>
              <th>{t('majorShareholder')}</th>
              <th>{t('numberShares')}</th>
              <th>{t('shares')}</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 10 }).map((_, index) => (
              <tr key={index}>
                <td className='border-b border-dark-60'>{index + 1}</td>
                <td className='border-b border-dark-60'>
                  บริษัท รัตน โฮลดิ้ง จำกัด
                </td>
                <td className='border-b border-dark-60'>209,828,258</td>
                <td className='border-b border-dark-60'>34.56</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  )
}
