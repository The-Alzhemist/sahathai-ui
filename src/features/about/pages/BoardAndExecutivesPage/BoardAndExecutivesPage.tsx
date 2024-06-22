import { Board } from './components/Board'
import { Executives } from './components/Executives'
import { Subcommittee } from './components/Subcommittee'

export function BoardAndExecutivesPage() {
  return (
    <main>
      <Board />
      <Executives />
      <Subcommittee />
    </main>
  )
}
