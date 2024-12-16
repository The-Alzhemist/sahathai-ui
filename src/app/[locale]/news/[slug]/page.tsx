import { unstable_setRequestLocale } from 'next-intl/server'

interface Post {
  id: string
  title: string
  content: string
}

// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
export const revalidate = 60

// // We'll prerender only the params from `generateStaticParams` at build time.
// // If a request comes in for a path that hasn't been generated,
// // Next.js will server-render the page on-demand.
export const dynamicParams = true // or false, to 404 on unknown paths

export async function generateStaticParams() {
  const locales = ['th', 'en']

  const posts: Post[] = await fetch('https://api.vercel.app/blog').then(res =>
    res.json()
  )

  // Combine posts and locales into all possible combinations

  console.log(
    'xxx',
    posts.flatMap(post =>
      locales.map(locale => ({
        slug: String(post.id),
        locale: locale,
      }))
    )
  )

  return posts.flatMap(post =>
    locales.map(locale => ({
      slug: String(post.id),
      locale: locale,
    }))
  )
}

export default async function Page({ params }: { params: any }) {
  console.log('params:::::::::::::::::::::::', params)
  const id = (await params).slug
  const locale = (await params).locale

  console.log('id::', id, locale)
  const post: Post = await fetch(`https://api.vercel.app/blog/${id}`).then(
    res => res.json()
  )

  return (
    <main>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </main>
  )
}
