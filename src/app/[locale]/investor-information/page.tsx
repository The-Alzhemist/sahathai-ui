import { InvestorInformationPage } from '@/features/investorRelations/pages/InvestorInformationPage'

export const revalidate = 3600

export default async function InvestorInformation() {
  return <InvestorInformationPage />
}
