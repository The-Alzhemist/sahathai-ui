'use client'
import { useTranslations } from 'next-intl'
import { Formik, Form } from 'formik'

import { Slide } from '@/components/Slide'
import { InputField } from '@/components/forms/InputField'
import { TextAreaField } from '@/components/forms/TextAreaField'
import { Content } from './components/Content'
import { Card } from './components/Card'
import { Strength } from '../../components/Strength'

export function ContainerServicesPage() {
  const t = useTranslations('ContainerServicesPage')
  const common = useTranslations('common')
  return (
    <main className='py-[83px]'>
      <Content
        title={t('containerMaintenanceAndRepairServices.title')}
        description={t('containerMaintenanceAndRepairServices.description')}
      />
      <Content
        className='mt-[176px]'
        title={t('cfsCy.title')}
        description={t('cfsCy.description')}
      />
      <Content
        className='mt-[176px]'
        title={t('dutyFreeZone.title')}
        description={t('dutyFreeZone.description')}
      />
      <Card
        className='mt-[159px]'
        title={t('bulkCargoProjectCargo.title')}
        description={t('bulkCargoProjectCargo.description')}
      />
      <Card
        className='mt-[62px] flex-row-reverse'
        title={t('coastalShipping.title')}
        description={t('coastalShipping.description')}
      />
      <Slide className='mt-[100px]' />
      <Strength className='mt-[147px]' />
      <section className='mt-[80px] max-w-[954px] w-full mx-auto'>
        <h2 className='font-[700] text-[36px] leading-[44px] text-center'>
          {t('comprehensiveServices.title')}
        </h2>
        <p className='mt-[24px] text-center text-[18px] leading-[28px]'>
          {t('comprehensiveServices.description')}
        </p>
      </section>
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
    </main>
  )
}
