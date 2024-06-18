export interface InputFieldProps extends React.HTMLProps<HTMLInputElement> {
  className?: string
  name: string
  label?: string
  placeholder?: string
  disabled?: boolean
}
