'use client'
import { Form, Formik } from 'formik'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import * as Yup from 'yup'

import { InputField } from '@/components/forms/InputField'
import { TextAreaField } from '@/components/forms/TextAreaField'
import { cn } from '@/libs/util'
import { ContactUsProps } from './interface'

import { TelephoneIcon } from '../icons/TelephoneIcon'
import { ContactTypeField } from '../forms/ContactTypeField'
import { PrinterIcon } from '../icons/PrinterIcon'
import { EnvelopeIcon } from '../icons/EnvelopeIcon'
import { LocationIcon } from '../icons/LocationIcon'
import { Animation } from '../Animation'
import { WarningIcon } from '../icons/WarningIcon'
import { MailIcon } from '../icons/MailIcon'
import withContactUs from '@/components/ContactUs/withContactUs'
import { contactUsInitialValue } from '@/components/ContactUs/ContactUsInitialValue'
import { contactUsValidationSchema } from '@/components/ContactUs/ContactUsValidation'
import { Card } from '@/components/ContactUs/components/Card/Card'
import { ContactUsTypeEnum } from '@/enums/ContactUsEnum'

const ContactUs = ({ className, handleOnSubmitForm }: ContactUsProps) => {
  const t = useTranslations('ContactUs')
  const common = useTranslations('common')

  return (
    <Animation className={cn('container-mini space-y-[52px]', className)}>
      <h2 className='w-full text-center text-[32px] leading-[48.38px] font-[500] text-navy'>
        {t('title')}
      </h2>
      <Formik
        initialValues={contactUsInitialValue}
        validationSchema={contactUsValidationSchema}
        onSubmit={v => {
          handleOnSubmitForm(v)
        }}
      >
        {({ values }) => (
          <Form>
            <div className='flex gap-[24px] mobile:flex-col'>
              <ContactTypeField
                className='flex-1'
                name='type'
                text={t('contactForm')}
                value='contact-form'
                checked={values.type === ContactUsTypeEnum.CONTACT}
                Icon={MailIcon}
              />
              <ContactTypeField
                className='flex-1'
                name='type'
                text={t('fraudComplaintForm')}
                value='fraud-complaint-form'
                checked={values.type === ContactUsTypeEnum.FRAUD_COMPLAINT}
                Icon={WarningIcon}
              />
            </div>
            <div className='flex gap-[70px] px-5 md:px-[65px] py-[48px] bg-white mt-[24px] shadow-6 rounded-[10px] mobile:flex-col'>
              <div className='max-w-[416px] w-full shrink-0 space-y-[15px] mobile:max-w-none'>
                <InputField
                  name='name'
                  label={t('nameField.label')}
                  placeholder={t('nameField.placeholder')}
                />
                <InputField
                  name='phone'
                  label={t('phoneNumberField.label')}
                  placeholder={t('phoneNumberField.placeholder')}
                />
                <InputField
                  name='email'
                  className='capitalize'
                  label={common('email')}
                  placeholder={t('emailField.placeholder')}
                />
                <TextAreaField
                  textAreaClassName='h-[154px]'
                  name='message'
                  label={t('message.label')}
                  placeholder={t('message.placeholder')}
                  maxLength={500}
                />
                <button
                  className='bg-background w-full py-[10px] rounded-full text-white button'
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
                />
                <Card
                  Icon={PrinterIcon}
                  title={t('fax.title')}
                  description={t('fax.description')}
                />
                <Card
                  Icon={EnvelopeIcon}
                  title={common('email')}
                  description='info@sahathaiterminal.com'
                />
                <Card
                  Icon={LocationIcon}
                  title={t('address.title')}
                  description={t('address.description')}
                />
              </div>
            </div>
          </Form>
        )}
      </Formik>
      <Image
        className='w-full'
        src='/contact-us-map.png'
        width={0}
        height={0}
        sizes='100vw'
        alt=''
      />
    </Animation>
  )
}

const WrappedComponent = withContactUs(ContactUs)
export default WrappedComponent
