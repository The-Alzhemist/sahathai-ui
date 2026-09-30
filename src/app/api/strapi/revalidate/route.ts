import { NextRequest, NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'
import { ArticleEnum } from '@/enums/ArticleEnum'
import { StrapiRevalidateTag } from '@/enums/StrapiCacheEnum'
import { ARTICLE_REVALIDATE_TAG } from '@/libs/strapi/article'

// body ส่งมาหน้าตาประมาณนี้ (Strapi webhook)
// {
//   event: 'entry.publish',
//   model: 'article',
//   entry: { id: 4, slug: 'my-article', type: 'press_release', ... }
// }

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret')

  if (secret !== process.env.STRAPI_REVALIDATE_SECRET) {
    return NextResponse.json(
      { ok: false, message: 'Invalid secret' },
      { status: 401 }
    )
  }

  const body = await req.json()
  console.log('------ Strapi webhook payload ------')
  console.log(JSON.stringify(body, null, 2))

  const model: string | undefined = body.model
  const entry = body.entry

  if (model === 'person') {
    console.log(`------ Revalidate tag: ${StrapiRevalidateTag.Person} ------`)
    revalidateTag(StrapiRevalidateTag.Person)

    return NextResponse.json({ ok: true, model, dateResponse: new Date() })
  }

  const type: ArticleEnum | undefined = entry?.type
  const slug: string | undefined = entry?.slug

  if (!type || !slug) {
    console.log('Missing entry.type or entry.slug in request body')
    return NextResponse.json(
      { ok: false, message: 'Missing entry.type or entry.slug' },
      { status: 400 }
    )
  }

  const tag = ARTICLE_REVALIDATE_TAG[type]

  if (!tag) {
    console.warn('Cannot revalidate unknown article type:', type)
    return NextResponse.json(
      { ok: false, message: `Unknown article type: ${type}` },
      { status: 400 }
    )
  }

  console.log(`------ Revalidate tag: ${tag} ------`)
  revalidateTag(tag)
  revalidateTag(`article:${slug}`)

  return NextResponse.json({ ok: true, slug, type, dateResponse: new Date() })
}
