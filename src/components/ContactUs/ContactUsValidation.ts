import * as Yup from 'yup'

export const contactUsValidationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  phone: Yup.string()
    .required('Phone no is required')
    .matches(/^[^-]*$/, 'Please remove "-" from phone number'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  message: Yup.string().required('Message is required'),
})
