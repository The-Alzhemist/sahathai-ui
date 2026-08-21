import { getTranslations } from 'next-intl/server'

import { CompanySecretaryContactPage } from '@/features/companySecretaryContact/CompanySecretaryContactPage'

export default function CompanySecretaryContact() {
  return <CompanySecretaryContactPage />
}

export async function generateMetadata({
  params: { locale },
}: {
  params: {
    locale: string
  }
}) {
  const t = await getTranslations('MetaData')

  return {
    title: t('CompanySecretaryContact.Title'),
    description: t('CompanySecretaryContact.Description'),
    openGraph: {
      title: t('CompanySecretaryContact.Title'),
      description: t('CompanySecretaryContact.Description'),
      images: [
        {
          url: `${process.env.DOMAIN_NAME}/seo/contact/contact-meta-img-${locale}.png`,
          width: 800,
          height: 600,
          alt: 'sahathai-company-secretary-contact-meta-image',
        },
      ],
    },
  }
}
