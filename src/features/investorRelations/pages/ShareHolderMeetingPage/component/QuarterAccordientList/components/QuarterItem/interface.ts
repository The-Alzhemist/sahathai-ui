export interface QuarterFile {
  filename: string
  url: string
}

export interface QuarterItemProps {
  label: string
  text?: string
  file?: QuarterFile
}
