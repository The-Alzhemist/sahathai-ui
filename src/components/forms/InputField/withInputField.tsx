import { useField } from 'formik'
import { InputFieldAcceptProps, InputFieldProps } from './interface'

export function withInputField(Component: React.FC<InputFieldProps>) {
  function WithInputField({
    label,
    name,
    className,
    placeholder,
    disabled = false,
    inputClassName = '',
    type = 'text',
    onlyNumber,
  }: InputFieldAcceptProps) {
    const [field, meta, helpers] = useField(name)

    const componentProps: InputFieldProps = {
      placeholder,
      label,
      className,
      disabled,
      meta,
      type,
      inputClassName,
      helpers,
      onlyNumber,
      ...field,
    }

    return <Component {...componentProps} />
  }

  return WithInputField
}
