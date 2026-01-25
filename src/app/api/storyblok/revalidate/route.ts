import { NextRequest, NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'
import { RevalidateTag, SlugType } from '@/enums/CacheEnum'

export async function POST(req: NextRequest) {
  // for trigger webhook in storyblok click published on web
  const REVALIDATE_SECRET_BLOG = 'abc123xyz987'

  // ป้องกันด้วย secret ง่ายๆ
  const secret = req.nextUrl.searchParams.get('secret')
  if (secret !== REVALIDATE_SECRET_BLOG) {
    return NextResponse.json(
      { ok: false, message: 'Invalid secret' },
      { status: 401 }
    )
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

  const fullSlug = body.full_slug
  console.log('-------------full slug-------', fullSlug)

  if (fullSlug?.includes(SlugType.BLOG)) {
    console.log('---------Revalidate secret BLOG---------')
    revalidateTag(RevalidateTag.BLOG)
  } else if (fullSlug?.includes(SlugType.NEWS)) {
    console.log('------ Revalidate secret NEWS--------')
    revalidateTag(RevalidateTag.NEWS)
  } else if (fullSlug?.includes(SlugType.INVESTOR)) {
    console.log('------ Revalidate secret INVESTOR--------')
    revalidateTag(RevalidateTag.INVESTOR)
  } else if (fullSlug?.includes(SlugType.ESERVICE)) {
    console.log('------ Revalidate secret ESERVICE--------')
    revalidateTag(RevalidateTag.ESERVICE)
  } else if (fullSlug?.includes(SlugType.BANNER_POPUP)) {
    console.log('------ Revalidate secret BANNER_POPUP--------')
    revalidateTag(RevalidateTag.ESERVICE)
  } else {
    console.log('------ cannot revalidate any known tag --------')
    console.log('cannot revalidate any known tag')
  }

  return NextResponse.json({ ok: true, fullSlug })
}
