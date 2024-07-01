'use client'
import { Form, Formik } from 'formik'
import { useTranslations } from 'next-intl'

import { InputField } from '@/components/forms/InputField'
import { TextAreaField } from '@/components/forms/TextAreaField'
import { cn } from '@/libs/util'
import { ContactUsProps } from './interface'
import Image from 'next/image'
import { Card } from './Card'
import { TelephoneIcon } from '../icons/TelephoneIcon'
import { RadioField } from '../forms/RadioField'
import { PrinterIcon } from '../icons/PrinterIcon'
import { EnvelopeIcon } from '../icons/EnvelopeIcon'
import { LocationIcon } from '../icons/LocationIcon'

export function ContactUs({ className }: ContactUsProps) {
  const t = useTranslations('ContactUs')
  const common = useTranslations('common')

  return (
    <section
      className={cn(
        'max-w-[896px] mx-auto flex flex-wrap justify-center gap-x-[107px] gap-y-[40px]',
        className
      )}
    >
      <h2 className='w-full text-center text-[34px] leading-[36px] text-blue-400'>
        {t('title')}
      </h2>
      <Formik
        initialValues={{
          name: '',
          email: '',
          phone: '',
          message: '',
          type: 'contact-form',
        }}
        onSubmit={() => {}}
      >
        {({ values }) => (
          <Form className='max-w-[416px] w-full space-y-[12px]'>
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
            <div className='space-y-[10px]'>
              <RadioField
                name='type'
                text={t('contactForm')}
                value='contact-form'
                checked={values.type === 'contact-form'}
              />
              <RadioField
                name='type'
                text={t('fraudComplaintForm')}
                value='fraud-complaint-form'
                checked={values.type === 'fraud-complaint-form'}
              />
            </div>
            <TextAreaField
              textAreaClassName='h-[154px]'
              name='message'
              label={t('message.label')}
              placeholder={t('message.placeholder')}
              maxLength={500}
            />
            <button
              className='bg-blue-400 w-full h-[36px] rounded-[50px] text-white button'
              type='submit'
            >
              {t('submit')}
            </button>
          </Form>
        )}
      </Formik>
      <div className='max-w-[373px] w-full space-y-[10px]'>
        <Card
          icon={<TelephoneIcon width='24' height='24' />}
          title={t('contactNumber.title')}
          description={t('contactNumber.description')}
        />
        <Card
          icon={<PrinterIcon width='24' height='24' />}
          title={t('fax.title')}
          description={t('fax.description')}
        />
        <Card
          icon={<EnvelopeIcon width='24' height='24' />}
          title={common('email')}
          description='info@sahathaiterminal.com'
        />
        <Card
          icon={<LocationIcon width='24' height='24' />}
          title={t('address.title')}
          description={t('address.description')}
        />
      </div>
      <Image
        className='mt-[134px]'
        src='/contact-us-map.png'
        width={901}
        height={574}
        alt=''
      />
    </section>
  )
}
