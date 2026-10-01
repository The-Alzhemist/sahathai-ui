import { NextRequest, NextResponse } from 'next/server'
import { revalidateTag } from 'next/cache'
import { ArticleEnum } from '@/enums/ArticleEnum'
import { StrapiRevalidateTag } from '@/enums/StrapiCacheEnum'
import { ARTICLE_REVALIDATE_TAG } from '@/libs/strapi/article'

// Strapi webhook payload shape (confirmed from Strapi's source, not docs):
// {
//   event: 'entry.publish',
//   createdAt: '2026-09-30T10:00:00.000Z',
//   model: 'article',
//   uid: 'api::article.article',
//   entry: { id: 4, slug: 'my-article', locale: 'th', type: 'press_release', ... }
// }
//
// Content-types with draft/publish only go live on entry.publish/entry.unpublish.
// Content-types with draftAndPublish: false (e.g. popup-banner) have no publish
// event at all — entry.create/entry.update/entry.delete are what matter there.

const DRAFT_PUBLISH_EVENTS = ['entry.publish', 'entry.unpublish']
const NO_DRAFT_PUBLISH_EVENTS = ['entry.create', 'entry.update', 'entry.delete']

export async function POST(req: NextRequest) {
  console.log('------ Strapi webhook received ------')

  const secret = req.headers.get('x-webhook-secret')

  if (secret !== process.env.STRAPI_WEBHOOK_SECRET) {
    console.warn('------ Strapi webhook: secret mismatch ------', {
      headerPresent: secret !== null,
    })
    return NextResponse.json(
      { ok: false, message: 'Invalid secret' },
      { status: 401 }
    )
  }

  const body = await req.json()
  console.log('------ Strapi webhook payload ------')
  console.log(JSON.stringify(body, null, 2))

  const event: string | undefined = body.event
  const uid: string | undefined = body.uid
  const entry = body.entry

  if (uid === 'api::person.person') {
    if (!event || !DRAFT_PUBLISH_EVENTS.includes(event)) {
      return NextResponse.json({ ok: true, skipped: true })
    }

    console.log(`------ Revalidate tag: ${StrapiRevalidateTag.Person} ------`)
    revalidateTag(StrapiRevalidateTag.Person)

    return NextResponse.json({ ok: true, uid, event, dateResponse: new Date() })
  }

  if (uid === 'api::committee.committee') {
    if (!event || !DRAFT_PUBLISH_EVENTS.includes(event)) {
      return NextResponse.json({ ok: true, skipped: true })
    }

    console.log(
      `------ Revalidate tag: ${StrapiRevalidateTag.Committee} ------`
    )
    revalidateTag(StrapiRevalidateTag.Committee)

    return NextResponse.json({ ok: true, uid, event, dateResponse: new Date() })
  }

  if (uid === 'api::popup-banner.popup-banner') {
    if (!event || !NO_DRAFT_PUBLISH_EVENTS.includes(event)) {
      return NextResponse.json({ ok: true, skipped: true })
    }

    console.log(
      `------ Revalidate tag: ${StrapiRevalidateTag.PopupBanner} ------`
    )
    revalidateTag(StrapiRevalidateTag.PopupBanner)

    return NextResponse.json({ ok: true, uid, event, dateResponse: new Date() })
  }

  if (uid === 'api::e-service.e-service') {
    if (!event || !DRAFT_PUBLISH_EVENTS.includes(event)) {
      return NextResponse.json({ ok: true, skipped: true })
    }

    console.log(`------ Revalidate tag: ${StrapiRevalidateTag.EService} ------`)
    revalidateTag(StrapiRevalidateTag.EService)

    return NextResponse.json({ ok: true, uid, event, dateResponse: new Date() })
  }

  if (uid === 'api::shareholder-meeting.shareholder-meeting') {
    if (!event || !DRAFT_PUBLISH_EVENTS.includes(event)) {
      return NextResponse.json({ ok: true, skipped: true })
    }

    console.log(
      `------ Revalidate tag: ${StrapiRevalidateTag.ShareHolderMeeting} ------`
    )
    revalidateTag(StrapiRevalidateTag.ShareHolderMeeting)

    return NextResponse.json({ ok: true, uid, event, dateResponse: new Date() })
  }

  if (uid === 'api::published-document.published-document') {
    if (!event || !DRAFT_PUBLISH_EVENTS.includes(event)) {
      return NextResponse.json({ ok: true, skipped: true })
    }

    console.log(
      `------ Revalidate tag: ${StrapiRevalidateTag.PublishedDocument} ------`
    )
    revalidateTag(StrapiRevalidateTag.PublishedDocument)

    return NextResponse.json({ ok: true, uid, event, dateResponse: new Date() })
  }

  if (uid === 'api::operating-result.operating-result') {
    if (!event || !DRAFT_PUBLISH_EVENTS.includes(event)) {
      return NextResponse.json({ ok: true, skipped: true })
    }

    console.log(
      `------ Revalidate tag: ${StrapiRevalidateTag.OperatingResult} ------`
    )
    revalidateTag(StrapiRevalidateTag.OperatingResult)

    return NextResponse.json({ ok: true, uid, event, dateResponse: new Date() })
  }

  if (uid === 'api::annual-report.annual-report') {
    if (!event || !DRAFT_PUBLISH_EVENTS.includes(event)) {
      return NextResponse.json({ ok: true, skipped: true })
    }

    console.log(
      `------ Revalidate tag: ${StrapiRevalidateTag.AnnualReport} ------`
    )
    revalidateTag(StrapiRevalidateTag.AnnualReport)

    return NextResponse.json({ ok: true, uid, event, dateResponse: new Date() })
  }

  if (uid === 'api::financial-info.financial-info') {
    if (!event || !DRAFT_PUBLISH_EVENTS.includes(event)) {
      return NextResponse.json({ ok: true, skipped: true })
    }

    console.log(
      `------ Revalidate tag: ${StrapiRevalidateTag.FinancialInfo} ------`
    )
    revalidateTag(StrapiRevalidateTag.FinancialInfo)

    return NextResponse.json({ ok: true, uid, event, dateResponse: new Date() })
  }

  if (uid === 'api::article.article') {
    if (!event || !DRAFT_PUBLISH_EVENTS.includes(event)) {
      return NextResponse.json({ ok: true, skipped: true })
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

    return NextResponse.json({
      ok: true,
      uid,
      event,
      slug,
      type,
      dateResponse: new Date(),
    })
  }

  console.warn('Cannot revalidate unknown uid:', uid)
  return NextResponse.json(
    { ok: false, message: `Unknown uid: ${uid}` },
    { status: 400 }
  )
}
