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

  // Storyblok มักส่ง { story: { slug, full_slug, lang, ... }, action: 'published' | 'unpublished' }
  const slug = body?.story?.slug || body?.slug
  const fullSlug = body?.story?.full_slug || body?.full_slug // เช่น "blog/test-first-blog"
  // const lang = body?.story?.lang

  // เคลียร์ cache แบบ tag (ทั้งหน้า detail และ list)
  if (slug) revalidateTag(`story:${slug}`)

  revalidateTag('story:blog-list')


  console.log('[Storyblok Webhook] slug:::::::::::::::', slug)
  console.log('[Storyblok Webhook] fullSlug::::::::', fullSlug)



  if (fullSlug) {
    // สมมติมี 2 locale
    for (const locale of ['th', 'en','cn']) {
      revalidatePath(`/${locale}/${fullSlug}`, 'page')
    }
  }

  return NextResponse.json({ ok: true, slug, fullSlug })
}
