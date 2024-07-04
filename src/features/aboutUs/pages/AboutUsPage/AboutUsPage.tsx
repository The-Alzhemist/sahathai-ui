import { BoardAndExecutives } from '../../components/BoardAndExecutives'
import { CommitmentSuccess } from '../../components/CommitmentSuccess'
import { VisionMissionValues } from '../../components/VisionMissionValues'

export function AboutUsPage() {
  return (
    <main>
      <VisionMissionValues />
      <CommitmentSuccess />
      <BoardAndExecutives />
    </main>
  )
}
