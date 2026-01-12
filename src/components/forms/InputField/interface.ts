import { FieldMetaProps } from 'formik/dist/types'

export interface InputFieldAcceptProps {
  className?: string
  name: string
  label?: string
  placeholder?: string
  disabled?: boolean
  type?: string
}

export interface InputFieldProps {
  className?: string
  name: string
  label?: string
  placeholder?: string
  disabled?: boolean
  type?: string
  meta: FieldMetaProps<any>
}
