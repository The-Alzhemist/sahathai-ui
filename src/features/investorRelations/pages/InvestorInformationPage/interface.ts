import { StockData } from '@/features/investorRelations/components/StockMarketInformation/interface'
import { AnnualReport } from '@/types/AnnualReport'

export interface InvestorInformationPageAcceptProps {
  stockData: StockData[]
  annualReportData: AnnualReport[]
}

export interface InvestorInformationPageProps {
  stockData: StockData[]
  annualReportData: AnnualReport[]
}
