import { NextRequest, NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'

export async function POST(req: NextRequest) {

  const REVALIDATE_SECRET_BLOG='abc123xyz987'

  // ป้องกันด้วย secret ง่ายๆ
  const secret = req.nextUrl.searchParams.get('secret')
  if (secret !== REVALIDATE_SECRET_BLOG) {
    return NextResponse.json({ ok: false, message: 'Invalid secret' }, { status: 401 })
  }

  const body = await req.json().catch(() => ({} as any))

  // body ส่งมาหน้าตาประมาณนี้
  // {
  //   text: 'The user aphiwit@codework-tech.com published the Story test-new-blog-sep-1 (blog/test-new-blog-sep-1)\n' +
  //   'https://app.storyblok.com/#/me/spaces/316761/stories/0/0/86063839668228',
  //     action: 'published',
  //   space_id: 316761,
  //   story_id: 86063839668228,
  //   full_slug: 'blog/test-new-blog-sep-1'
  // }

  console.log("body:::::",body)
  const fullSlug = body.full_slug


  if (fullSlug && (fullSlug.includes('blog') ) ) {
    console.log("fullSlug === blog", fullSlug)
    revalidateTag('story:blog-list')
  }  else if (fullSlug.includes('news')) {
    console.log("fullSlug === news", fullSlug)
    revalidateTag('story:news-list')
  } else  if (fullSlug && fullSlug.includes('invrester-relartion')  ) {
    console.log("fullSlug === invrester-relartion",fullSlug)
    revalidateTag('story:investor-accordion-list')
  }  else {
    console.log("fullSlug else::::", fullSlug)
    console.log("cannot revalidate blog-list tag")
  }


  return NextResponse.json({ ok: true, fullSlug })
}
