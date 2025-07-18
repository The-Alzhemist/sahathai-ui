import ContactUs from '@/components/ContactUs/ContactUs'
import { getTranslations } from 'next-intl/server'

export default function Contact() {
  return <ContactUs className='pt-[96px] pb-[124px]' />
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
    title: t('ContactUs.Title'),
    description: t('ContactUs.Description'),
    openGraph: {
      title: t('ContactUs.Title'),
      description: t('ContactUs.Description'),
      images: [
        {
          url:
            'https://sahathai-ui.vercel.app' + '/seo/meta-image-contact-us.jpg',
          width: 800,
          height: 600,
          alt: 'sahathai-contact-us-meta-image',
        },
        {
          url:
            'https://sahathai-ui.vercel.app' + '/seo/meta-image-contact-us.jpg',
          width: 1800,
          height: 1600,
          alt: 'sahathai-contact-us-meta-image',
        },
      ],
    },
  }
}
