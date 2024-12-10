import { unstable_setRequestLocale } from 'next-intl/server'

interface Post {
  id: string
  title: string
  content: string
}

export const revalidate = 60 // Revalidate every 10 minutes
export const dynamicParams = false // Only generate pre-defined paths

export async function generateStaticParams() {
  const locales = ['th', 'en', 'cn'] // Define all supported locales
  const slugs = ['1', '2', '3'] // Your slugs

  return slugs.flatMap(slug =>
    locales.map(locale => ({
      slug,
      locale,
    }))
  )
}

export default function Page({ params }: any) {
  const { slug, locale } = params
  console.log('params::::::::::::::::', params)

  unstable_setRequestLocale(locale) // Set the locale for static rendering

  return <div>xxxxxx</div>
}
