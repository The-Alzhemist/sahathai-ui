import { Modal } from '@/components/Modal'
import { PeopleEnum } from '@/enums/PeopleEnum'
import { PeopleModalProps } from './interface'
import { YuthVorachattarn } from './YuthVorachattarn'
import { VithitLeenutaphong } from './VithitLeenutaphong'
import { VilaiChattanrassamee } from './VilaiChattanrassamee'
import { WichitRattanasirivilai } from './WichitRattanasirivilai'
import { SuchinRattanasirivilai } from './SuchinRattanasirivilai'
import { AnggoonSrisunthorn } from './AnggoonSrisunthorn'
import { ChairatChongyangyuenvong } from './ChairatChongyangyuenvong'
import { SauwakunKaruchit } from './SauwakunKaruchit'
import { BanchaiKaruchit } from './BanchaiKaruchit'
import { KittikhunLochaya } from './KittikhunLochaya'
import { MinrawiPhodee } from './MinrawiPhodee'
import { BunditRungsimanon } from './BunditRungsimanon'
import { RoongrojWhangteeranon } from './RoongrojWhangteeranon'
import { SangaSanguansaksri } from '@/features/aboutUs/components/PeopleModal/SangaSanguansaksri'
import { Papatssarin } from '@/features/aboutUs/components/PeopleModal/Papatssarin'
import { BoardContentModal } from '@/features/aboutUs/components/PeopleModal/BoardContentModal'

export function PeopleModal({ people, onClose }: PeopleModalProps) {
  return (
    <Modal className='max-w-[770px] w-[90%] ' onClose={onClose}>
      {people === PeopleEnum.YuthVorachattarn && <BoardContentModal boardName={'AboutUsPage.Yuth'} imgUrl={'/about-us/yuth-vorachattarn.png'} />}
      {people === PeopleEnum.VithitLeenutaphong && <BoardContentModal boardName={'AboutUsPage.Vithit'} imgUrl={'/about-us/vithit-leenutaphong.png'}/>}
      {people === PeopleEnum.VilaiChattanrassamee &&  <BoardContentModal boardName={'AboutUsPage.Vilai'} imgUrl={'/about-us/vilai-chattanrassamee.png'}/>}
      {people === PeopleEnum.WichitRattanasirivilai && <BoardContentModal boardName={'AboutUsPage.Wichit'} imgUrl={'/about-us/wichit-rattanasirivilai.png'}/>}
      {people === PeopleEnum.SuchinRattanasirivilai &&  <BoardContentModal boardName={'AboutUsPage.Suchin'} imgUrl={'/about-us/suchin-rattanasirivilai.png'}/>}
      {people === PeopleEnum.AnggoonSrisunthorn &&  <BoardContentModal boardName={'AboutUsPage.Auggoon'} imgUrl={'/about-us/anggoon-srisunthorn.png'}/>}
      {people === PeopleEnum.ChairatChongyangyuenvong &&  <BoardContentModal boardName={'AboutUsPage.Chairat'} imgUrl={'/about-us/chairat-chongyangyuenvong.png'}/>}
      {people === PeopleEnum.SauwakunKaruchit && <BoardContentModal boardName={'AboutUsPage.Saowakun'} imgUrl={'/about-us/sauwakun-karuchit.png'}/>}
      {people === PeopleEnum.BanchaiKaruchit && <BoardContentModal boardName={'AboutUsPage.Banchai'} imgUrl={'/about-us/banchai-karuchit.png'}/>}
      {people === PeopleEnum.KittikhunLochaya &&  <BoardContentModal boardName={'AboutUsPage.Kittikhun'} imgUrl={'/about-us/kittikhun-lochaya.png'}/>}
      {/*{people === PeopleEnum.MinrawiPhodee && <MinrawiPhodee />}*/}
      {/*{people === PeopleEnum.BunditRungsimanon && <BunditRungsimanon />}*/}
      {people === PeopleEnum.RoongrojWhangteeranon &&  <BoardContentModal boardName={'AboutUsPage.Rungroj'} imgUrl={'/about-us/rungroj.jpg'}/>}
      {people === PeopleEnum.SangaSanguansaksri &&   <BoardContentModal boardName={'AboutUsPage.Sanga'} imgUrl={'/about-us/Sanga_Sanguansaksri.jpg'}/>}
      {people === PeopleEnum.Papatssarin &&  <BoardContentModal boardName={'AboutUsPage.Papatsarin'} imgUrl={'/about-us/papatsarin-1.png'}/>}
    </Modal>
  )
}
