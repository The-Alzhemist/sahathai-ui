import { useTranslations } from 'next-intl'
import {
  PolicySection
} from '@/features/investorRelations/pages/ShareHolderPage/components/DividendPolicy/PolicySection'


export default function DividendPolicy() {
  const t = useTranslations('InvestorInformationPage.Shareholder')
  return (
    <main className="space-y-20 p-5">
      <PolicySection
        imageUrl="/investor-relations/devide-image-blue.png"
        title={t('profit.heading1')}
        content={t('profit.detail1')}
      />

      <PolicySection
        imageUrl="/investor-relations/devide-image-red.png"
        title={t('profit.heading2')}
        content={t('profit.detail2')}
        reverse
      />
    </main>
  );
}
