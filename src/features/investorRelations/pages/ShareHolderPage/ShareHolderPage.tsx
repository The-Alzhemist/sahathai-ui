import { useTranslations } from 'next-intl'
import { Menu } from '@/components/Menu'

import { Animation } from '@/components/Animation'
import { InvestorInformationEnum } from '@/enums/investorRelations/InvestorInformationEnum'
import { investmentStakeholderList } from '@/features/investorRelations/components/Shareholder/InvesterList'
import { ShareholderCard } from '@/features/investorRelations/components/ShareholderCard'
import { Link } from '@/libs/intl/navigation'
import { ArrowRightIcon } from '@/components/icons/ArrowRightIcon'
import {Banner} from "@/components/Banner";


export function ShareHolderPage() {
  const t = useTranslations('InvestorInformationPage.Shareholder')
  const tMenu = useTranslations('Menu')

  return (
    <main className=" pb-[176px] bg-white ">
      <Menu />
      <Banner
          imagePath='/about-us/banner.png'
          alt={tMenu('investorRelations.shareHolder')}
          caption={tMenu('investorRelations.shareHolder')}
      />
      <section className="max-w-[1140px] w-full px-5 mx-auto  mt-[80px] ">
        <Animation>
          <h2
            id={InvestorInformationEnum.Shareholder}
            className="headline-2 text-black-80"
          >
            {t('title')}
          </h2>

          <Link
            className=" w-fit  text-blue-400 subtitle-1 flex items-center justify-items-start  gap-[9px]"
            href="https://www.set.or.th/th/market/product/stock/quote/PORT/major-shareholders"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('stockDistribution')}
            <ArrowRightIcon width="16" height="16" />
          </Link>

          <ShareholderCard
            className="mt-[60px]"
            title={t('shareholderFreeFloatOverview', { date: '18/03/2567', type: 'XM' })}
          >
            <ShareholderCard.Item title={t('minorityShareholders')} value="2,940" />
            <ShareholderCard.Item title={t('minorityShareholding')} value="44.38" />
          </ShareholderCard>
          <ShareholderCard
            className="mt-[48px]"
            title={t('shareholderOverview', { date: '18/03/2567', type: 'XM' })}
          >
            <ShareholderCard.Item title={t('numberShareholder')} value="3,246" />
            <ShareholderCard.Item title={t('scriptlessShares')} value="96.41" />
          </ShareholderCard>

          <section className="overflow-scroll">
            <table className="report shadow-6 rounded-[10px] mt-[37px] overflow-hidden w-full no-scrollbar">
              <thead>
              <tr>
                <th className="subtitle-1">{t('order')}</th>
                <th className="subtitle-1 min-w-[200px]">{t('title')}</th>
                <th className="subtitle-1">{t('numberShares')}</th>
                <th className="subtitle-1">{t('shares')}</th>
              </tr>
              </thead>
              <tbody>
              {investmentStakeholderList.map((item, index) => (
                <tr key={index}>
                  <td className="body-2 p-[16px]">{index + 1}</td>
                  <td className="body-2 p-[16px]">{item.name}</td>
                  <td className="body-2 p-[16px]">
                    {item.stockAmount.toLocaleString()}
                  </td>
                  <td className="body-2 p-[16px]">{`${item.percentAmount}%`}</td>
                </tr>
              ))}

              {/*<tr>*/}
              {/*  <td className="p-[16px] headline-4 text-blue-400" colSpan={2}>*/}
              {/*    รวม*/}
              {/*  </td>*/}
              {/*  <td className="body-2 p-[16px]">*/}
              {/*    {' '}*/}
              {/*    {investmentStakeholderList*/}
              {/*      .reduce((acc, curr) => acc + curr.stockAmount, 0)*/}
              {/*      .toLocaleString()}*/}
              {/*  </td>*/}
              {/*  <td className="body-2 p-[16px]">*/}
              {/*    {' '}*/}
              {/*    {investmentStakeholderList*/}
              {/*      .reduce((acc, curr) => acc + curr.percentAmount, 0)*/}
              {/*      .toLocaleString()}*/}
              {/*    %*/}
              {/*  </td>*/}
              {/*</tr>*/}
              </tbody>
            </table>
          </section>

          <p className="mt-[32px] body-2 mb-10">{t('note')}</p>

          <section className='border rounded-md p-5'>
            <h2
              id={InvestorInformationEnum.Shareholder}
              className="headline-2 text-black-80 mb-5"
            >
              {t('profit.title')}
            </h2>
            <h3 className='headline-4 text-blue-400 mb-2'>{t('profit.heading1')}</h3>
            <p className='body-2 mb-7 whitespace-pre-line break-words break-keep' >
              {t('profit.detail1')}</p>
            <h3 className='headline-4 text-blue-400 mb-2'>{t('profit.heading2')}</h3>
            <p className='body-2 whitespace-pre-line break-words break-keep'> {t('profit.detail2')}</p>
          </section>
        </Animation>
      </section>
    </main>

  )
}


