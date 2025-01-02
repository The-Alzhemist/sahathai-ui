import { REVALIDATE_TIME } from '@/config/environtment'
import { InvestorInformationPage } from '@/features/investorRelations/pages/InvestorInformationPage'

export const revalidate = REVALIDATE_TIME

export default async function InvestorInformation() {
  return <InvestorInformationPage />
}
