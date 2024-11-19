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

export function PeopleModal({ people, onClose }: PeopleModalProps) {
  return (
    <Modal className='max-w-[770px] w-full' onClose={onClose}>
      {people === PeopleEnum.YuthVorachattarn && <YuthVorachattarn />}
      {people === PeopleEnum.VithitLeenutaphong && <VithitLeenutaphong />}
      {people === PeopleEnum.VilaiChattanrassamee && <VilaiChattanrassamee />}
      {people === PeopleEnum.WichitRattanasirivilai && (
        <WichitRattanasirivilai />
      )}
      {people === PeopleEnum.SuchinRattanasirivilai && (
        <SuchinRattanasirivilai />
      )}
      {people === PeopleEnum.AnggoonSrisunthorn && <AnggoonSrisunthorn />}
      {people === PeopleEnum.ChairatChongyangyuenvong && (
        <ChairatChongyangyuenvong />
      )}
      {people === PeopleEnum.SauwakunKaruchit && <SauwakunKaruchit />}
      {people === PeopleEnum.BanchaiKaruchit && <BanchaiKaruchit />}
      {people === PeopleEnum.KittikhunLochaya && <KittikhunLochaya />}
      {people === PeopleEnum.MinrawiPhodee && <MinrawiPhodee />}
      {people === PeopleEnum.BunditRungsimanon && <BunditRungsimanon />}
      {people === PeopleEnum.RoongrojWhangteeranon && <RoongrojWhangteeranon />}
    </Modal>
  )
}
