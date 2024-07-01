export interface RadioFieldProps extends React.HTMLProps<HTMLInputElement> {
  name: string
  className?: string
  text: React.ReactNode
  textClassName?: string
}
