import { useField } from 'formik'
import { InputFieldProps } from './interface'

export function withInputField(Component: React.FC<InputFieldProps>) {
  function WithInputField({
    label,
    name,
    className,
    placeholder,
    disabled = false,
  }: InputFieldProps) {
    const [field] = useField(name)

    const componentProps = {
      ...field,
      placeholder,
      label,
      className,
      disabled,
    }

    return <Component {...componentProps} />
  }

  return WithInputField
}
