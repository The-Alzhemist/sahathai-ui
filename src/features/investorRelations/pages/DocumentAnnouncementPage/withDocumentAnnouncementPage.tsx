import { FunctionComponentType } from '@/models/FunctionComponentType'
import { FinancialInformationPageProps } from '@/features/investorRelations/pages/FinancialInformationPage/interface'
import { DocumentAnnouncementPageProps } from '@/features/investorRelations/pages/DocumentAnnouncementPage/interface'

export function withDocumentAnnouncementPage(
  Component: React.FC<DocumentAnnouncementPageProps>
) {
  function withShareHolder(props:DocumentAnnouncementPageProps) {
    return <Component {...props} />
  }


  return withShareHolder
}
