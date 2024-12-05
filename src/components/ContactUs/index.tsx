'use client'

import ContactUs from '@/components/ContactUs/ContactUs'
import withContactUs from '@/components/ContactUs/withContactUs'

const WrappedComponent = withContactUs(ContactUs)

export default WrappedComponent
