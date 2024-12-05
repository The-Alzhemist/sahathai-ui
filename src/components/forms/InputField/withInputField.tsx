import { useField } from 'formik'
import { InputFieldAcceptProps, InputFieldProps } from './interface'

export function withInputField(Component: React.FC<InputFieldProps>) {
  function WithInputField({
    label,
    name,
    className,
    placeholder,
    disabled = false,
  }: InputFieldAcceptProps) {
    const [field, meta] = useField(name)

    const componentProps: InputFieldProps = {
      placeholder,
      label,
      className,
      disabled,
      meta,
      ...field,
    }

    return <Component {...componentProps} />
  }

  return WithInputField
}
