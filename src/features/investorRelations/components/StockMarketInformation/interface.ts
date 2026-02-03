export interface StockData {
  date: string
  open: number
  high: number
  low: number
  close: number
  adjusted_close: number
  volume: number
}

export interface StockMarketInformationProps {
  stockData: StockData[]
}
