import { FieldMetaProps } from 'formik'

export interface TextAreaProps extends React.HTMLProps<HTMLTextAreaElement> {
  name: string
  label?: string
  textAreaClassName?: string
  maxLength?: number
  placeholder?: string
  meta: FieldMetaProps<any>
}

export interface TextAreaAcceptProps {
  name: string
  label?: string
  textAreaClassName?: string
  placeholder?: string
  maxLength?: number
}
