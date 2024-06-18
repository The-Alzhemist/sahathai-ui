'use client'
import { Form, Formik } from 'formik'

import { InputField } from '@/components/forms/InputField'
import { TextAreaField } from '@/components/forms/TextAreaField'
import { useTranslations } from 'next-intl'

export function ContactUs() {
  const t = useTranslations('HomePage.ContactUs')
  return (
    <section className='max-w-[1440px] mx-auto flex flex-wrap justify-center'>
      <div className='relative w-[720px] h-[664px] bg-[url("/sahathai-map.png")] bg-[rgba(0,0,0,0.81)] bg-cover bg-blend-multiply'>
        <div className='absolute bottom-[88px] left-1/2 -translate-x-1/2 max-w-[338px] w-full text-white'>
          <div className='font-[700] text-[24px] leading-[44px] text-center'>
            {t('title')}
          </div>
          <div className='text-[12px] leading-[16px] text-center whitespace-pre'>
            <span className='font-[700]'>{t('company')}</span>
            <br />
            {t('address')}
          </div>
        </div>
      </div>
      <Formik
        initialValues={{ name: '', email: '', phone: '', comment: '' }}
        onSubmit={() => {}}
      >
        <Form className='max-w-[720px] w-full space-y-[20px] px-[32px] py-[24px]'>
          <InputField name='name' label='NAME *' />
          <InputField name='email' label='EMAIL *' />
          <InputField name='phone' label='PHONE *' />
          <TextAreaField name='comment' label='COMMENT' />
          <button
            className='bg-dark w-[200px] h-[44px] rounded-[22px] text-white'
            type='submit'
          >
            SUBMIT
          </button>
        </Form>
      </Formik>
    </section>
  )
}
