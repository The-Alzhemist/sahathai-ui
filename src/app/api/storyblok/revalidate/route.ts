import { NextRequest, NextResponse } from 'next/server'
import { revalidateTag, revalidatePath } from 'next/cache'

export async function POST(req: NextRequest) {

  const REVALIDATE_SECRET_BLOG='abc123xyz987'

  // ป้องกันด้วย secret ง่ายๆ
  const secret = req.nextUrl.searchParams.get('secret')
  if (secret !== REVALIDATE_SECRET_BLOG) {
    return NextResponse.json({ ok: false, message: 'Invalid secret' }, { status: 401 })
  }

  const body = await req.json().catch(() => ({} as any))
  console.log("body:::::::::::", body)

  // body ส่งมาหน้าตาประมาณนี้
  // {
  //   text: 'The user aphiwit@codework-tech.com published the Story test-new-blog-sep-1 (blog/test-new-blog-sep-1)\n' +
  //   'https://app.storyblok.com/#/me/spaces/316761/stories/0/0/86063839668228',
  //     action: 'published',
  //   space_id: 316761,
  //   story_id: 86063839668228,
  //   full_slug: 'blog/test-new-blog-sep-1'
  // }

  const fullSlug = body?.full_slug // เช่น "blog/test-first-blog"
  // const lang = body?.story?.lang




  if (fullSlug && fullSlug.includes('/blog') || fullSlug.includes('/news') ) {
    console.log("revalidateTag  blog | new is true")
    revalidateTag('story:blog-list')
  } else  if (fullSlug && fullSlug.includes('/blog') || fullSlug.includes('/news') ) {
    console.log("revalidateTag  investor-accordion-list  is true")
    revalidateTag('story:investor-accordion-list')
  }  else {
    console.log("-------false------")
  }





  console.log('[Storyblok Webhook] fullSlug::::::::', fullSlug)



  if (fullSlug) {
    // สมมติมี 2 locale
    for (const locale of ['th', 'en','cn']) {
      revalidatePath(`/${locale}/${fullSlug}`, 'page')
    }
  }

  return NextResponse.json({ ok: true, fullSlug })
}
