import { Ratelimit } from '@upstash/ratelimit'
import { Redis } from '@upstash/redis'

// 5 submissions per IP per 10 minutes. Skipped when Upstash is not configured
// (local dev); on Vercel add the Upstash Redis integration to enable it.
let ratelimit: Ratelimit | null | undefined

function getRatelimit(): Ratelimit | null {
  if (ratelimit !== undefined) return ratelimit

  const url = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL
  const token =
    process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN

  ratelimit =
    url && token
      ? new Ratelimit({
          redis: new Redis({ url, token }),
          limiter: Ratelimit.slidingWindow(5, '10 m'),
          prefix: 'contact-form',
        })
      : null
  return ratelimit
}

export async function isRateLimited(ip: string): Promise<boolean> {
  const limiter = getRatelimit()
  if (!limiter) return false
  const { success } = await limiter.limit(ip)
  return !success
}
