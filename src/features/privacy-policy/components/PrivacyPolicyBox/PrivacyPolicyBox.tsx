import { useTranslations } from 'next-intl'

export const PrivacyPolicyBox = ({
  title,
  description,
}: {
  title: string
  description: string
}) => {
  const t = useTranslations('JoinUsPage.Policy')
  return (
    <section className='w-full mb-8 p-5 bg-white rounded-2xl'>
      <h2 className='mb-2 font-medium text-navy'>{title}</h2>
      <p className=' text-gray-500 text-sm'>{description}</p>
    </section>
  )
}
