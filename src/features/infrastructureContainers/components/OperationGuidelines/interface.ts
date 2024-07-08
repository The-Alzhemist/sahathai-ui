export type TabType =
  | 'docking'
  | 'operatingHours'
  | 'cfsLcl'
  | 'responsibilityScope'
  | 'regulationsCargoShips'
  | 'safetyRegulations'
  | 'hazardousGoods'
  | 'requestPermissionContact'
  | 'documentSubmissionProcess'
  | 'bookingProcess'
  | 'serviceCharge'

export interface DockProps {
  imageUrl: string
  description: string
}
