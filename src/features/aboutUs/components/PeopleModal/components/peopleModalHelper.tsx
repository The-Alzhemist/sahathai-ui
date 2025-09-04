import { useTranslations } from 'next-intl'

export function getString(t: ReturnType<typeof useTranslations>, key: string): string {

  try { return t(key as never) } catch {     console.warn(`Missing translation key: ${key}`);
    return '' }
}

export function getArray(t: ReturnType<typeof useTranslations>, key: string): string[] {
  const raw = t.raw(key as never)
  return Array.isArray(raw) ? (raw as string[]) : []
}

export function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-2 text-black-6 body-2 w-full space-y-1">
      {items.map((text, i) => (
          <li key={`${text}-${i}`} className="flex items-start gap-2">
  <span className="leading-6">&bull;</span>
  <span>{text}</span>
  </li>
))}
  </ul>
)
}

// L = Labels
export function None({ L }: { L: ReturnType<typeof useTranslations> }) {
  return <span className="text-black-6 body-2">{L('common.none' as never) }</span>
}

export function Row({ label, value, isShowLabel = true }: { label: string; value: React.ReactNode; isShowLabel?: boolean }) {
  return (
    <div className=" py-2 grid grid-cols-1 md:grid-cols-1 gap-1">
    {isShowLabel && <div className="text-md md:text-[20px] leading-[48.38px] text-navy px-5 md:px-0">{label}</div>}
      <div className="">{value}</div>
    </div>
)
}