import { useField } from 'formik'
import { TextAreaProps } from './interface'

export function withTextAreaField(Component: React.FC<TextAreaProps>) {
  function WithTextAreaField(props: TextAreaProps) {
    const [field] = useField(props.name)

    const componentProps = {
      ...props,
      ...field,
    }

    return <Component {...componentProps} />
  }

  return WithTextAreaField
}
