import React from "react";
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { commaNumberFormat } from '@/libs/util'


export default function ShareHolderFreeFloatTable() {
  const t = useTranslations('InvestorInformationPage.Shareholder')
  return (
    <div className="mx-auto max-w-[860px] rounded-2xl bg-white px-[30px] pt-[30px] pb-[15px] shadow-xl  ring-black/5">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 text-darkGray" >
        <h3 className="text-md font-semibold ">
          {t('shareholderFreeFloatOverview', { date: '18/03/2567' })}
        </h3>
        <span className="shrink-0 text-sm font-semibold ">
            {t('type')}: XM
        </span>
      </div>

      <div className="mt-4 border-t border-slate-200" />

      {/* Row 1 */}
      <div className="grid grid-cols-[auto,1fr,auto] items-center gap-4 py-5 border-b border-slate-200">
        <Image src={'/investor-relations/people-circle-blue.png'} alt={'people-icon'} height={50} width={50} />
        <div className="text-darkGray">
          <div className="font-normal  ">
           {t('minorityShareholders')}
          </div>
        </div>
        <div className="text-right font-normal ">
          {commaNumberFormat(2940)}
        </div>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-[auto,1fr,auto] items-center gap-4 py-5">
        <Image src={'/investor-relations/percent-circle-blue.png'} alt={'people-icon'} height={50} width={50} />
        <div className="text-darkGray">
          <div className="font-normal">
           {t('minorityShareholding')}
          </div>
        </div>
        <div className="text-right  font-normal">
          {commaNumberFormat(44.38)}
        </div>
      </div>
    </div>
  );
}
