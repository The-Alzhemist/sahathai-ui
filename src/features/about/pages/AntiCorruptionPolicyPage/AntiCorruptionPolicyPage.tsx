'use client'
import { Form, Formik } from 'formik'
import { useTranslations } from 'next-intl'

import { InputField } from '@/components/forms/InputField'
import { TextAreaField } from '@/components/forms/TextAreaField'

export function AntiCorruptionPolicyPage() {
  const t = useTranslations('AntiCorruptionPolicyPage')
  return (
    <main>
      <section className='bg-dark-60 space-y-[24px] p-[40px]'>
        <h1 className='font-[700] text-[36px] leading-[44px] text-center'>
          {t('title')}
        </h1>
        <p className='max-w-[841px] whitespace-pre mx-auto text-center text-[18px] leading-[28px] sarabun'>
          {t('description')}
        </p>
        <div className='flex gap-x-[24px] justify-center'>
          <h2 className='p-[10px] bg-dark-80 rounded-[8px] font-[500] text-[20px] leading-[24px]'>
            {t('guidelinesInvestigatingCorruption')}
          </h2>
          <h2 className='p-[10px] bg-dark-80 rounded-[8px] font-[500] text-[20px] leading-[24px]'>
            {t('policyReportingWrongdoing')}
          </h2>
        </div>
      </section>
      <section className='flex flex-wrap gap-[44px] bg-dark-60 mt-[52px]'>
        <div className='bg-dark flex-1'>
          <div className='max-w-[725px] min-h-[664px] flex flex-col items-center justify-center text-white'>
            <h3 className='font-[600] text-[30px] leading-[36px]'>
              {t('report.title')}
            </h3>
            <p className='mt-[24px] whitespace-pre text-center text-[18px] leading-[28px] sarabun'>
              {t('report.description')}
            </p>
          </div>
        </div>
        <div className='flex-1'>
          <Formik
            initialValues={{
              name: '',
              email: '',
              phoneNumber: '',
              description: '',
            }}
            onSubmit={() => {}}
          >
            <Form className='max-w-[725px] space-y-[26px] py-[46px]'>
              <InputField name='name' />
              <InputField name='email' />
              <InputField name='phoneNumber' />
              <TextAreaField name='description' />
              <button
                className='p-[18px] rounded-[30px] font-[700] leading-[18px] w-full bg-dark text-white'
                type='submit'
              >
                {t('report.sendMessage')}
              </button>
            </Form>
          </Formik>
        </div>
      </section>
    </main>
  )
}
