import { Content } from './components/Content'
import { ProfileCard } from './components/ProfileCard'

export function ProfilePage() {
  return (
    <main className='max-w-[1196px] mx-auto flex flex-wrap gap-x-[32px] py-[42px]'>
      <h1 className='font-[700] text-[36px] leading-[44px] text-center mb-[42px] w-full'>
        คุณยุทธ วรฉัตรธาร
      </h1>
      <ProfileCard />
      <section className='space-y-[10px] max-w-[819px] w-full'>
        <Content title='การศึกษา'>
          &bull;&nbsp;เศรษฐศาสตร์มหาบัณฑิต (เกียรตินิยมดี) มหาวิทยาลัยธรรมศาสตร์
          <br />
          &bull;&nbsp;เศรษฐศาสตร์บัณฑิต มหาวิทยาลัยธรรมศาสตร์
        </Content>
        <Content title='ประวัติการอบรม'>
          &bull;&nbsp;Director Leadership Certification Program (DLCP) รุ่น 0 ปี
          2564
          <br />
          &bull;&nbsp;Advance Audit Committee Program (AACP) รุ่น 36 ปี 2563
          <br />
          &bull;&nbsp;Strategic Board Master Class (SBM) รุ่น 5 ปี 2561
          <br />
          &bull;&nbsp;Ethical Leadership Program (ELP) รุ่น 2 ปี 2558
          <br />
          &bull;&nbsp;Corporate Governance for Capital Market Intermediaries
          (CGI) รุ่น 0 ปี 2557
          <br />
          &bull;&nbsp;Financial Institutions Governance Program (FGP) รุ่น 6 ปี
          2556
          <br />
          &bull;&nbsp;Monitoring of the Quality of Financial Reporting (MFR)
          รุ่น 12 ปี 2553
          <br />
          &bull;&nbsp;Audit Committee Program (ACP) รุ่น 33 ปี 2553
          <br />
          &bull;&nbsp;Chartered Director Class (R-CDC) รุ่น 3 ปี 2551
          <br />
          &bull;&nbsp;Role of the Chairman Program (RCP) รุ่น 8 ปี 2546
          <br />
          &bull;&nbsp;Directors Certification Program (DCP) รุ่น 0 ปี 2543
        </Content>
        <Content title='วันที่ได้รับการแต่งตั้ง'>
          &bull;&nbsp;วาระที่ 1 : 3 พฤษภาคม 2560 (ณ วันแปรสภาพเป็นบริษัทมหาชน)
          <br />
          &bull;&nbsp;วาระที่ 2 : 27 กรกฎาคม 2563 (ต่อวาระ)
          <br />
          &bull;&nbsp;วาระที่ 3 : 20 เมษายน 2566 (ต่อวาระ)
          <br />
          &bull;&nbsp;จำนวนปีที่เป็นกรรมการ 6 ปี 11 เดือน (นับถึงวันที่ 23
          เมษายน 2567)
          <br />
          ประสบการณ์ทำงานในระยะเวลา 5 ปี
        </Content>
        <Content title='การดำรงตำแหน่งในบริษัทจดทะเบียน'>
          2559 - ปัจจุบัน ประธานกรรมการ บมจ. กรังค์ปรีซ์ อินเตอร์เนชั่นแนล
          <br />
          2558 - ปัจจุบัน ประธานกรรมการและกรรมการตรวจสอบ บมจ. สหไทย เทอร์มินอล
          <br />
          2554 - ปัจจุบัน ประธานกรรมการและกรรมการตรวจสอบ บมจ. เถ้าแก่น้อย
          ฟู๊ดแอนด์ มาร์เก็ตติ้ง
          <br />
          การดำรงตำแหน่งในบริษัทที่เกี่ยวข้อง -ไม่มี-
        </Content>
        <Content title='การดำรงตำแหน่งในบริษัทอื่น'>
          2560 - ปัจจุบัน กรรมการอิสระและประธานกรรมการตรวจสอบ บมจ. นูทริกซ์
          <br />
          2558 - ปัจจุบัน กรรมการอิสระและประธานกรรมการตรวจสอบ บมจ. บี เอส วาย
          กรุ๊ป
          <br />
          การดำรงตำแหน่งในองค์กรอื่น -ไม่มี-
        </Content>
        <Content title='การดำรงตำแหน่งในอดีต'>
          2560 - ปัจจุบัน กรรมการอิสระและประธานกรรมการตรวจสอบ บมจ. นูทริกซ์
          <br />
          2558 - ปัจจุบัน กรรมการอิสระและประธานกรรมการตรวจสอบ บมจ. บี เอส วาย
          กรุ๊ป
          <br />
          การดำรงตำแหน่งในองค์กรอื่น -ไม่มี-
        </Content>
      </section>
    </main>
  )
}
