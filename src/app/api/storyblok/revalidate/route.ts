import { NextRequest, NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'
import { RevalidateTag, SlugType } from '@/enums/CacheEnum'

const REVALIDATE_SECRET_BLOG = 'abc123xyz987'

// body ส่งมาหน้าตาประมาณนี้
// {
//   text: 'The user aphiwit@codework-tech.com published the Story test-new-blog-sep-1 (blog/test-new-blog-sep-1)\n' +
//   'https://app.storyblok.com/#/me/spaces/316761/stories/0/0/86063839668228',
//     action: 'published',
//   space_id: 316761,
//   story_id: 86063839668228,
//   full_slug: 'blog/test-new-blog-sep-1'
// }

const REVALIDATE_RULES: Array<{
  slug: SlugType
  tag: RevalidateTag
}> = [
  { slug: SlugType.BLOG, tag: RevalidateTag.BLOG },
  { slug: SlugType.NEWS, tag: RevalidateTag.NEWS },
  { slug: SlugType.ESERVICE, tag: RevalidateTag.ESERVICE },
  { slug: SlugType.BANNER_POPUP, tag: RevalidateTag.BANNER_POPUP },
  { slug: SlugType.BOARD, tag: RevalidateTag.BOARD },
  { slug: SlugType.CODE_OF_CONDUCT, tag: RevalidateTag.CODE_OF_CONDUCT },
  {
    slug: SlugType.SHARE_HOLDER_MEETING,
    tag: RevalidateTag.SHARE_HOLDER_MEETING,
  },
  {
    slug: SlugType.FINANCIAL_INFORMATION,
    tag: RevalidateTag.FINANCIAL_INFORMATION,
  },
  { slug: SlugType.PERFORMANT_REPORT, tag: RevalidateTag.PERFORMANT_REPORT },
  {
    slug: SlugType.DOCUMENT_ANNOUNCEMENT,
    tag: RevalidateTag.DOCUMENT_ANNOUNCEMENT,
  },
  { slug: SlugType.GOOD_CORPORATE, tag: RevalidateTag.GOOD_CORPORATE },
  { slug: SlugType.ACTIVITY, tag: RevalidateTag.ACTIVITY },
  { slug: SlugType.WARRANT, tag: RevalidateTag.WARRANT },
]

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret')

  if (secret !== REVALIDATE_SECRET_BLOG) {
    return NextResponse.json(
      { ok: false, message: 'Invalid secret' },
      { status: 401 }
    )
  }

  const body = await req.json()
  const fullSlug: string | undefined = body.full_slug

  if (!fullSlug) {
    console.log('Missing full_slug in request body')
    return NextResponse.json(
      { ok: false, message: 'Missing full_slug' },
      { status: 400 }
    )
  }

  const rule = REVALIDATE_RULES.find(r => fullSlug.includes(r.slug))

  if (rule) {
    console.log(`------ Revalidate tag: ${rule.tag} ------`)
    revalidateTag(rule.tag)
  } else {
    console.warn('Cannot revalidate unknown slug:', fullSlug)
  }

  return NextResponse.json({ ok: true, fullSlug, date: new Date() })
}
