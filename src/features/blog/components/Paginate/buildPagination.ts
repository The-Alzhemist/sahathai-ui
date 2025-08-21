// lib/buildPagination.ts
export function buildPagination({
                                  page,
                                  totalPages,
                                  siblings = 1,
                                  boundaries = 1,
                                }: {
  page: number
  totalPages: number
  siblings?: number
  boundaries?: number
}): (number | '…')[] {
  const clamp = (n: number, a: number, b: number) => Math.max(a, Math.min(b, n))
  const range = (a: number, b: number) => (a > b ? [] : Array.from({ length: b - a + 1 }, (_, i) => a + i))

  if (totalPages <= 1) return [1]
  page = clamp(page, 1, totalPages)

  // หน้าน้อย แสดงทั้งหมดไปเลย
  if (totalPages <= siblings * 2 + boundaries * 2 + 2) return range(1, totalPages)

  const first = range(1, boundaries)
  const last = range(totalPages - boundaries + 1, totalPages)

  const midStart = clamp(page - siblings, boundaries + 2, totalPages - boundaries - 1)
  const midEnd   = clamp(page + siblings, boundaries + 2, totalPages - boundaries - 1)
  const middle   = range(midStart, midEnd)

  const items: (number | '…')[] = [...first]
  if (midStart > boundaries + 2) items.push('…')          // เว้นช่วงซ้าย
  if (middle.length) items.push(...middle)
  if (midEnd < totalPages - boundaries - 1) items.push('…') // เว้นช่วงขวา
  items.push(...last)

  return items
}
