// components/QuarterItem.tsx
import { DownloadButton } from '@/components/DownloadButton'
import {
  QuarterItemProps
} from '@/features/investorRelations/pages/ShareHolderMeetingPage/component/QuarterAccordientList/components/QuarterItem/interface'


export default function QuarterItem({ label, text, file }: QuarterItemProps) {
  if (!text && !file) return null

  return (
    <div className="border-t pt-3">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-gray-800">{text || label}</span>
        {file?.filename && (
          <DownloadButton
            className={`mt-[16px] ${!file.filename ? 'opacity-30 pointer-events-none' : ''}`}
            href={file.filename}
          />
        )}
      </div>
    </div>
  )
}
