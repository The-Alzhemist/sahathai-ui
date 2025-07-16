import { useTranslations } from 'next-intl'
import { Menu } from '@/components/Menu'

import AccordionList, { AccordionItem } from '@/features/investorRelations/pages/ShareHolderMeetingPage/component/AccordientList'


const documents: AccordionItem[] = [
  {
    title: 'เอกสารประชุม',
    files: [
      { title: 'หนังสือเชิญประชุม', name: 'invite-2568.pdf', type: 'pdf' },
      { title: 'PowerPoint', name: 'presentation.pdf' }, // ไม่มี type ก็ถือว่าเป็น pdf/download
    ],
  },
  {
    title: 'คลิปย้อนหลัง',
    files: [
      {
        title: 'ประชุมสามัญผู้ถือหุ้น 2567',
        name: 'https://www.youtube.com/watch?v=N7I7cp5Erdg',
        type: 'youtube',
      },
    ],
  },
];


export function ShareHolderMeetingPage() {
  const t = useTranslations('InvestorInformationPage.Shareholder')

  return (
    <main className="pt-[100px] pb-[176px] bg-white ">
      <Menu/>
      <section className="p-5 max-w-4xl mx-auto">

        {/* Mobile View */}
        <div className='border px-5 pt-5 rounded-md mb-7'>
          <h2 className="text-xl md:text-3xl font-bold mb-6">การประชุมสามัญผู้ถือหุ้นประจำปี 2568</h2>
          <AccordionList documents={documents} />
        </div>

        <div className='border px-5 pt-5 rounded-md mb-7'>
          <h2 className="text-xl md:text-3xl font-bold mb-6">การประชุมสามัญผู้ถือหุ้นประจำปี 2568</h2>
          <AccordionList documents={documents} />
        </div>

      </section>
    </main>

  )
}


