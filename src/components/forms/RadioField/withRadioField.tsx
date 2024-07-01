import { useField } from 'formik'
import { RadioFieldProps } from './interface'

export function withRadioField(Component: React.FC<RadioFieldProps>) {
  function WithRadioField({ name, value, ...props }: RadioFieldProps) {
    const [field] = useField(name)

    const componentProps = {
      ...props,
      ...field,
      value,
    }

    return <Component {...componentProps} />
  }

  return WithRadioField
}
