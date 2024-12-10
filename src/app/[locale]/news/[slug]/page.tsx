interface Post {
  id: string
  title: string
  content: string
}

// // Next.js will invalidate the cache when a
// // request comes in, at most once every 600 seconds.(10 mins)
// export const revalidate = 60

// // We'll prerender only the params from `generateStaticParams` at build time.
// // If a request comes in for a path that hasn't been generated,
// // Next.js will server-render the page on-demand.
// export const dynamicParams = false // or false, to 404 on unknown paths

export async function generateStaticParams() {
  // const posts: Post[] = await fetch('https://api.vercel.app/blog').then(res =>
  //   res.json()
  // )
  // return posts.map(post => ({
  //   id: String(post.id),
  // }))
  const slugs = ['1', '2', '3']
  return slugs.map(slug => {
    return {
      slug: slug,
    }
  })
}
export default function Page({ params }: { params: { slug: string } }) {
  console.log('params::::::::::::::::', params)
  return <h1>My Page</h1>
}
