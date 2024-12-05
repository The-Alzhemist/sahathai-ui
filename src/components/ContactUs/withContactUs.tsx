import {
  ContactUsAcceptProps,
  ContactUsForm,
  ContactUsProps,
} from '@/components/ContactUs/interface'
import React from 'react'

const withContactUs = (Component: React.FC<ContactUsProps>) => {
  const Hoc = ({ className }: ContactUsAcceptProps) => {
    const handleOnSubmitForm = (value: ContactUsForm) => {
      console.log('submit form')
      alert(JSON.stringify(value))
    }

    const newProps: ContactUsProps = {
      className,
      handleOnSubmitForm,
    }
    return <Component {...newProps} />
  }

  return Hoc
}
export default withContactUs
