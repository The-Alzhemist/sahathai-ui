'use client'
import { Form, Formik } from 'formik'
import { useTranslations } from 'next-intl'

import { InputField } from '@/components/forms/InputField'
import { TextAreaField } from '@/components/forms/TextAreaField'
import { FunctionComponentType } from '@/models/FunctionComponentType'
import { cn } from '@/libs/util'
import { StoreIcon } from '@/components/icons/StoreIcon'

export function ContactUs({ className }: FunctionComponentType) {
  const common = useTranslations('common')
  const t = useTranslations('PortFacilitiesPage.ContactUs')
  return (
    <section
      className={cn(
        'max-w-[1045px] mx-auto flex flex-wrap gap-x-[150px]',
        className
      )}
    >
      <section className='max-w-[432px] w-full'>
        <div className='font-[700] text-[18px] leading-[20px]'>
          {common('contactUs')}
        </div>
        <h2 className='mt-[6px] font-[700] text-[36px] leading-[44px]'>
          {t('title')}
        </h2>
        <p className='mt-[24px]'>{t('description')}</p>
        <ul className='mt-[48px] text-[18px] leading-[18px]'>
          <li className='flex gap-x-[8px]'>
            <StoreIcon width='20' height='20' />
            contact@company.com
          </li>
          <li className='flex gap-x-[8px]'>
            <StoreIcon width='20' height='20' />
            (123) 456 - 789
          </li>
          <li className='flex gap-x-[8px]'>
            <StoreIcon width='20' height='20' />
            794 Mcallister St San Francisco, 94102
          </li>
        </ul>
      </section>
      <Formik
        initialValues={{
          name: '',
          email: '',
          phoneNumber: '',
          description: '',
        }}
        onSubmit={() => {}}
      >
        <Form className='p-[32px] bg-dark-80 rounded-[25px] max-w-[462px] w-full'>
          <InputField name='name' />
          <InputField className='mt-[24px]' name='email' />
          <InputField className='mt-[24px]' name='phoneNumber' />
          <TextAreaField className='mt-[24px]' name='description' />
          <button
            className='mt-[32px] p-[18px] rounded-[30px] w-full bg-dark text-white'
            type='submit'
          >
            {common('sendMessage')}
          </button>
        </Form>
      </Formik>
    </section>
  )
}
