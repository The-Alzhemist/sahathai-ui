import { Formik, Form } from 'formik'
import { useTranslations } from 'next-intl'
import { useForm as useFormSpree } from '@formspree/react'
import { toast } from 'react-toastify'
import { useEffect } from 'react'

import { ContactUsTypeEnum } from '@/enums/ContactUsEnum'
import { ContactTypeField } from '../forms/ContactTypeField'
import { InputField } from '../forms/InputField'
import { TextAreaField } from '../forms/TextAreaField'
import { EnvelopeIcon } from '../icons/EnvelopeIcon'
import { LocationIcon } from '../icons/LocationIcon'
import { MailIcon } from '../icons/MailIcon'
import { PrinterIcon } from '../icons/PrinterIcon'
import { TelephoneIcon } from '../icons/TelephoneIcon'
import { RedWarningIcon } from '../icons/WarningRedIcon'
import { Card } from './Card'
import { contactUsInitialValue } from './ContactUsInitialValue'
import { contactUsValidationSchema } from './ContactUsValidation'
import { ContactUsFormProps, ContactUsFormType } from './interface'

export function ContactUsForm({ hideContactForm = false }: ContactUsFormProps) {
  const t = useTranslations('ContactUs')
  const common = useTranslations('common')
  const initialValues: ContactUsFormType = hideContactForm
    ? { ...contactUsInitialValue, type: 'fraud-complaint-form' }
    : contactUsInitialValue

  const FORM_SPREE_ID = process.env.NEXT_PUBLIC_FORM_SPREE_ID
  const [state, sendDataToFromSpree] = useFormSpree(FORM_SPREE_ID!)

  useEffect(() => {
    if (state.submitting) {
      toast.info("We're processing your message...", {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      })
    }
    if (!state.submitting && !state.errors && state.succeeded) {
      toast.success('Sent message successfully!...', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      })
    }
  }, [state.submitting, state.errors, state.succeeded])

  const handleOnSubmitForm = async (
    value: ContactUsFormType,
    resetForm: any
  ) => {
    try {
      const formData = new FormData()
      const currentDate = new Date()
      const day = currentDate.getDate() // Get the day without leading zero
      const month = currentDate.getMonth() + 1 // Get the month (adding 1 because months are 0-indexed)
      const year = currentDate.getFullYear()
      const hours = currentDate.getHours() // Get hours without leading zero
      const minutes = currentDate.getMinutes() // Get minutes without leading zero

      const formattedDate = `${day}-${month}-${year} ${hours}:${minutes}`

      const contactType =
        value.type === ContactUsTypeEnum.CONTACT
          ? 'แบบฟอร์มติดต่อ (contact)'
          : 'แบบฟอร์มข้อร้องเรียนเรื่องการบริการ (Service complaint)'

      const contactName = value.name || '-'
      const contactPhone = value.phone || '-'
      const contactEmail = value.email || '-'
      const message = value.message || '-'
      const customFormattedText = `
        ประเภทการติดต่อ (contact type): ${contactType}
        วันที่ (date):                   ${formattedDate}
        ชื่อผู้ติดต่อ (contact name):       ${contactName}
        หมายเลขโทรศัพท์ (phone number): ${contactPhone}
        อีเมล (e-mail):                ${contactEmail}
        ข้อความ (message):             ${message}
      `

      formData.append('Contact from data:', customFormattedText.trim())

      await sendDataToFromSpree(formData)
      resetForm()
    } catch (error) {
      toast.error('Cannot sent your message, please try again')
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={contactUsValidationSchema}
      onSubmit={(v, { resetForm }) => {
        handleOnSubmitForm(v, resetForm)
      }}
    >
      {({ values }) => (
        <Form>
          <div className='flex gap-[24px] mobile:flex-col'>
            {!hideContactForm && (
              <ContactTypeField
                className='flex-1'
                name='type'
                text={t('contactForm')}
                value='contact-form'
                checked={values.type === ContactUsTypeEnum.CONTACT}
                Icon={MailIcon}
                contactUsType={ContactUsTypeEnum.CONTACT}
              />
            )}
            <ContactTypeField
              className='flex-1'
              name='type'
              text={t('fraudComplaintForm')}
              value='fraud-complaint-form'
              checked={values.type === ContactUsTypeEnum.FRAUD_COMPLAINT}
              Icon={RedWarningIcon}
              contactUsType={ContactUsTypeEnum.FRAUD_COMPLAINT}
            />
          </div>
          <div className='flex gap-[70px] px-5 md:px-[65px] py-[48px] bg-white mt-[24px] shadow-6 rounded-[10px] mobile:flex-col'>
            <div className='max-w-[416px] w-full shrink-0 space-y-[15px] mobile:max-w-none'>
              <InputField
                name='name'
                label={t('nameField.label')}
                placeholder={t('nameField.placeholder')}
                inputClassName={
                  values.type === ContactUsTypeEnum.CONTACT
                    ? ''
                    : 'focus:border-red-400'
                }
              />
              <InputField
                name='phone'
                type='text'
                label={t('phoneNumberField.label')}
                placeholder={t('phoneNumberField.placeholder')}
                inputClassName={
                  values.type === ContactUsTypeEnum.CONTACT
                    ? ''
                    : 'focus:border-red-400'
                }
                onlyNumber
              />
              <InputField
                name='email'
                className='capitalize'
                label={common('email')}
                placeholder={t('emailField.placeholder')}
                inputClassName={
                  values.type === ContactUsTypeEnum.CONTACT
                    ? ''
                    : 'focus:border-red-400'
                }
              />
              <TextAreaField
                textAreaClassName={`h-[154px] ${
                  values.type === ContactUsTypeEnum.CONTACT
                    ? ''
                    : 'focus:border-red-400'
                }`}
                name='message'
                label={t('message.label')}
                placeholder={t('message.placeholder')}
                maxLength={500}
              />
              <button
                className={`${
                  values.type === ContactUsTypeEnum.CONTACT
                    ? 'bg-background'
                    : 'bg-red-400'
                } w-full py-[10px] rounded-full text-white button`}
                type='submit'
              >
                {t('submit')}
              </button>
            </div>
            <div className='space-y-[33px]'>
              <Card
                Icon={TelephoneIcon}
                title={t('contactNumber.title')}
                description={t('contactNumber.description')}
                contactUsType={values.type as ContactUsTypeEnum}
              />
              <Card
                Icon={PrinterIcon}
                title={t('fax.title')}
                description={t('fax.description')}
                contactUsType={values.type as ContactUsTypeEnum}
              />
              <Card
                Icon={EnvelopeIcon}
                title={common('email')}
                description='info@sahathaiterminal.com'
                contactUsType={values.type as ContactUsTypeEnum}
              />
              <Card
                Icon={LocationIcon}
                title={t('address.title')}
                description={t('address.description')}
                contactUsType={values.type as ContactUsTypeEnum}
              />
            </div>
          </div>
        </Form>
      )}
    </Formik>
  )
}
