import { Form, Formik } from 'formik'
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
import { UserIcon } from '../icons/UserIcon'
import { RedWarningIcon } from '../icons/WarningRedIcon'
import { Card } from './Card'
import { contactUsInitialValue } from './ContactUsInitialValue'
import { contactUsValidationSchema } from './ContactUsValidation'
import {
  ContactUsFormProps,
  ContactUsFormType,
  ContactUsFormVariant,
} from './interface'
import { IconProps } from '../icons/interface'

// Form type tabs shown for each variant; the first one is selected by default
const VARIANT_TYPES: Record<ContactUsFormVariant, ContactUsTypeEnum[]> = {
  default: [ContactUsTypeEnum.CONTACT, ContactUsTypeEnum.FRAUD_COMPLAINT],
  complaint: [ContactUsTypeEnum.FRAUD_COMPLAINT],
  ir: [ContactUsTypeEnum.IR_CONTACT],
  companySecretary: [ContactUsTypeEnum.COMPANY_SECRETARY],
}

const TYPE_TAB: Record<
  ContactUsTypeEnum,
  { labelKey: string; Icon: React.FC<IconProps> }
> = {
  [ContactUsTypeEnum.CONTACT]: { labelKey: 'contactForm', Icon: MailIcon },
  [ContactUsTypeEnum.FRAUD_COMPLAINT]: {
    labelKey: 'fraudComplaintForm',
    Icon: RedWarningIcon,
  },
  [ContactUsTypeEnum.IR_CONTACT]: { labelKey: 'irContactForm', Icon: MailIcon },
  [ContactUsTypeEnum.COMPANY_SECRETARY]: {
    labelKey: 'companySecretaryForm',
    Icon: MailIcon,
  },
}

// Label written into the submitted message so the inbox can tell forms apart
const TYPE_SUBMIT_LABEL: Record<ContactUsTypeEnum, string> = {
  [ContactUsTypeEnum.CONTACT]: 'แบบฟอร์มติดต่อ (contact)',
  [ContactUsTypeEnum.FRAUD_COMPLAINT]:
    'แบบฟอร์มข้อร้องเรียนเรื่องการบริการ (Service complaint)',
  [ContactUsTypeEnum.IR_CONTACT]: 'แบบฟอร์มติดต่อ IR (IR contact)',
  [ContactUsTypeEnum.COMPANY_SECRETARY]:
    'แบบฟอร์มเลขานุการบริษัทฯ (Company secretary)',
}

export function ContactUsForm({ variant = 'default' }: ContactUsFormProps) {
  const t = useTranslations('ContactUs')
  const common = useTranslations('common')
  const types = VARIANT_TYPES[variant]
  const initialValues: ContactUsFormType = {
    ...contactUsInitialValue,
    type: types[0],
  }

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

      const contactType = TYPE_SUBMIT_LABEL[value.type]

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
      {({ values }) => {
        const isComplaint = values.type === ContactUsTypeEnum.FRAUD_COMPLAINT
        const isContact = !isComplaint
        return (
          <Form>
            <div className='flex gap-[24px] mobile:flex-col'>
              {types.map((type) => {
                const { labelKey, Icon } = TYPE_TAB[type]
                return (
                  <ContactTypeField
                    key={type}
                    className='flex-1'
                    name='type'
                    text={t(labelKey)}
                    value={type}
                    checked={values.type === type}
                    Icon={Icon}
                    contactUsType={type}
                  />
                )
              })}
            </div>
            <div className='flex gap-[50px] px-5 md:px-[65px] py-[48px] bg-white mt-[24px] shadow-6 rounded-[10px] mobile:flex-col'>
              <div className='max-w-[416px] w-full shrink-0 space-y-[15px] mobile:max-w-none'>
                <InputField
                  name='name'
                  label={t('nameField.label')}
                  placeholder={t('nameField.placeholder')}
                  inputClassName={isContact ? '' : 'focus:border-red-400'}
                />
                <InputField
                  name='phone'
                  type='text'
                  label={t('phoneNumberField.label')}
                  placeholder={t('phoneNumberField.placeholder')}
                  inputClassName={isContact ? '' : 'focus:border-red-400'}
                  onlyNumber
                />
                <InputField
                  name='email'
                  className='capitalize'
                  label={common('email')}
                  placeholder={t('emailField.placeholder')}
                  inputClassName={isContact ? '' : 'focus:border-red-400'}
                />
                <TextAreaField
                  textAreaClassName={`h-[154px] ${
                    isContact ? '' : 'focus:border-red-400'
                  }`}
                  name='message'
                  label={t('message.label')}
                  placeholder={t('message.placeholder')}
                  maxLength={500}
                />
                <button
                  className={`${
                    isContact ? 'bg-background' : 'bg-red-400'
                  } w-full py-[10px] rounded-full text-white button`}
                  type='submit'
                >
                  {t('submit')}
                </button>
              </div>
              <div className='min-w-0 flex-1 space-y-[33px]'>
                {values.type === ContactUsTypeEnum.FRAUD_COMPLAINT && (
                  <>
                    <Card
                      Icon={LocationIcon}
                      title={t('address.title')}
                      description={t('address.descriptionComplaint')}
                      contactUsType={values.type}
                    />
                    <Card
                      Icon={TelephoneIcon}
                      title={t('contactNumber.title')}
                      description={t('contactNumber.description')}
                      contactUsType={values.type}
                    />
                    <Card
                      Icon={PrinterIcon}
                      title={t('fax.title')}
                      description={t('fax.description')}
                      contactUsType={values.type}
                    />
                    <Card
                      Icon={EnvelopeIcon}
                      title={common('email')}
                      description='anticorrupt.stt@sahathaiterminal.com'
                      contactUsType={values.type}
                    />
                  </>
                )}
                {values.type === ContactUsTypeEnum.CONTACT && (
                  <>
                    <Card
                      Icon={LocationIcon}
                      title={t('address.title')}
                      description={t('address.description')}
                      contactUsType={values.type}
                    />
                    <Card
                      Icon={UserIcon}
                      title={t('customerService.coordinator.title')}
                      description={t('customerService.coordinator.description')}
                      contactUsType={values.type}
                    />
                    <Card
                      Icon={TelephoneIcon}
                      title={t('contactNumber.title')}
                      description={t('contactNumber.description')}
                      contactUsType={values.type}
                    />
                    <Card
                      Icon={EnvelopeIcon}
                      title={common('email')}
                      description='cs@sahathaiterminal.com'
                      contactUsType={values.type}
                    />
                  </>
                )}
                {values.type === ContactUsTypeEnum.IR_CONTACT && (
                  <>
                    <p className='body-1 text-black-6'>
                      {t('investorRelations.description')}
                    </p>
                    <Card
                      Icon={UserIcon}
                      title={t('investorRelations.coordinator.title')}
                      description={t('investorRelations.coordinator.description')}
                      contactUsType={values.type}
                    />
                    <Card
                      Icon={TelephoneIcon}
                      title={t('contactNumber.title')}
                      description={t('contactNumber.description')}
                      contactUsType={values.type}
                    />
                    <Card
                      Icon={EnvelopeIcon}
                      title={common('email')}
                      description='ir@sahathaiterminal.com'
                      contactUsType={values.type}
                    />
                  </>
                )}
                {values.type === ContactUsTypeEnum.COMPANY_SECRETARY && (
                  <>
                    <Card
                      Icon={LocationIcon}
                      title={t('address.title')}
                      description={t('companySecretary.address')}
                      contactUsType={values.type}
                    />
                    <Card
                      Icon={UserIcon}
                      title={t('companySecretary.coordinator.title')}
                      description={t('companySecretary.coordinator.description')}
                      contactUsType={values.type}
                    />
                    <Card
                      Icon={TelephoneIcon}
                      title={t('contactNumber.title')}
                      description={t('companySecretary.phone')}
                      contactUsType={values.type}
                    />
                    <Card
                      Icon={EnvelopeIcon}
                      title={common('email')}
                      description='papichaya.b@sahathaiterminal.com'
                      contactUsType={values.type}
                    />
                  </>
                )}
              </div>
            </div>
          </Form>
        )
      }}
    </Formik>
  )
}
