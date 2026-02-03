import { FieldHelperProps, FieldMetaProps } from 'formik'

export interface InputFieldAcceptProps {
  className?: string
  name: string
  label?: string
  placeholder?: string
  disabled?: boolean
  type?: string
  inputClassName?: string
  onlyNumber?: boolean
}

export interface InputFieldProps {
  className?: string
  name: string
  label?: string
  placeholder?: string
  disabled?: boolean
  type?: string
  meta: FieldMetaProps<any>
  inputClassName?: string
  helpers?: FieldHelperProps<string> //use for phoneNo as string
  onlyNumber?: boolean
}
