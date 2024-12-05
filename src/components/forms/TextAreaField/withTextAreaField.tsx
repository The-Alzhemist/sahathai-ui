import { useField } from 'formik'
import { TextAreaAcceptProps, TextAreaProps } from './interface'

export function withTextAreaField(Component: React.FC<TextAreaProps>) {
  function WithTextAreaField({
    name,
    label,
    maxLength,
    placeholder,
    textAreaClassName,
  }: TextAreaAcceptProps) {
    const [field, meta] = useField(name)

    const componentProps: TextAreaProps = {
      meta,
      label,
      maxLength,
      placeholder,
      textAreaClassName,
      ...field,
    }

    return <Component {...componentProps} />
  }

  return WithTextAreaField
}
