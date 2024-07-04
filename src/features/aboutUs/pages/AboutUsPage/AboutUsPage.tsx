import { BoardAndExecutives } from '../../components/BoardAndExecutives'
import { CommitmentSuccess } from '../../components/CommitmentSuccess'
import { CorporateGroupOrganizationalStructure } from '../../components/CorporateGroupOrganizationalStructure'
import { VisionMissionValues } from '../../components/VisionMissionValues'

export function AboutUsPage() {
  return (
    <main className='mb-[244px]'>
      <VisionMissionValues />
      <CommitmentSuccess />
      <BoardAndExecutives />
      <CorporateGroupOrganizationalStructure />
    </main>
  )
}
