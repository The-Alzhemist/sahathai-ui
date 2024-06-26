import { Form, Formik } from 'formik'
import { useTranslations } from 'next-intl'

import { InputField } from '@/components/forms/InputField'
import { TextAreaField } from '@/components/forms/TextAreaField'

export function ServiceForm() {
  const t = useTranslations('ContainerServicesPage')
  const common = useTranslations('common')

  return (
    <section className='mt-[80px] max-w-[1280px] bg-dark-60 mx-auto p-[40px] flex flex-wrap gap-[40px]'>
      <Formik
        initialValues={{
          name: '',
          email: '',
          phoneNumber: '',
          description: '',
        }}
        onSubmit={() => {}}
      >
        <Form className='max-w-[627px] w-full space-y-[26px] py-[32px]'>
          <InputField name='name' />
          <InputField name='email' />
          <InputField name='phoneNumber' />
          <TextAreaField name='description' />
          <button
            className='p-[18px] rounded-[30px] font-[700] leading-[18px] w-full bg-dark text-white'
            type='submit'
          >
            {common('sendMessage')}
          </button>
        </Form>
      </Formik>
      <div className='w-full max-w-[533px]'>
        <h2 className='font-[700] text-[36px] leading-[44px] text-center'>
          {t('form.title')}
        </h2>
        <p className='mt-[24px] text-[18px] leading-[28px] text-center'>
          {t('form.description')}
        </p>
      </div>
    </section>
  )
}
