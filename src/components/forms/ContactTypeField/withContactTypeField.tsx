import { useField } from 'formik'
import { ContactTypeFieldProps } from './interface'

export function withContactTypeField(
  Component: React.FC<ContactTypeFieldProps>
) {
  function WithContactTypeField({
    name,
    value,
    ...props
  }: ContactTypeFieldProps) {
    const [field] = useField(name)

    const componentProps = {
      ...props,
      ...field,
      value,
    }

    return <Component {...componentProps} />
  }

  return WithContactTypeField
}
