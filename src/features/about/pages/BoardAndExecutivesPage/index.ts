import { BoardAndExecutivesPage } from './BoardAndExecutivesPage'
import { withBoardAndExecutivesPage } from './withBoardAndExecutivesPage'

const ConnectedBoardAndExecutivesPage = withBoardAndExecutivesPage(
  BoardAndExecutivesPage
)

export { ConnectedBoardAndExecutivesPage as BoardAndExecutivesPage }
