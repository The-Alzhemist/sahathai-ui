import { Form, Formik, FormikHelpers } from 'formik'
import { useTranslations } from 'next-intl'
import { toast, ToastOptions } from 'react-toastify'
import { useRef } from 'react'

import {
  CONTACT_HONEYPOT_FIELD,
  ContactUsTypeEnum,
} from '@/enums/ContactUsEnum'
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

const TOAST_OPTIONS: ToastOptions = {
  position: 'top-center',
  autoClose: 3000,
  theme: 'light',
}

export function ContactUsForm({ variant = 'default' }: ContactUsFormProps) {
  const t = useTranslations('ContactUs')
  const common = useTranslations('common')
  const types = VARIANT_TYPES[variant]
  const initialValues: ContactUsFormType = {
    ...contactUsInitialValue,
    type: types[0],
  }

  const honeypotRef = useRef<HTMLInputElement>(null)

  const handleOnSubmitForm = async (
    value: ContactUsFormType,
    { resetForm }: FormikHelpers<ContactUsFormType>
  ) => {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...value,
          [CONTACT_HONEYPOT_FIELD]: honeypotRef.current?.value ?? '',
        }),
      })
      if (!res.ok) throw new Error(`Contact API responded ${res.status}`)

      toast.success('Sent message successfully!', TOAST_OPTIONS)
      // Keep the selected tab after reset
      resetForm({ values: { ...initialValues, type: value.type } })
    } catch (error) {
      toast.error('Cannot send your message, please try again', TOAST_OPTIONS)
    }
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={contactUsValidationSchema}
      onSubmit={handleOnSubmitForm}
    >
      {({ values, isSubmitting }) => {
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
                {/* Honeypot: hidden from users, bots tend to fill it */}
                <input
                  ref={honeypotRef}
                  type='text'
                  name={CONTACT_HONEYPOT_FIELD}
                  tabIndex={-1}
                  autoComplete='off'
                  aria-hidden='true'
                  className='absolute left-[-9999px] w-px h-px opacity-0'
                />
                <button
                  className={`${
                    isContact ? 'bg-background' : 'bg-red-400'
                  } w-full py-[10px] rounded-full text-white button disabled:opacity-60 disabled:cursor-not-allowed`}
                  type='submit'
                  disabled={isSubmitting}
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
