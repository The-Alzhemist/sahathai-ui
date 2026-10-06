import { Person } from '@/types/Person'
import { Committee } from '@/types/Committee'

export interface BoardAndExecutivesProps {
  boardData: Person[]
  executiveData: Person[]
  committeeData: Committee[]
}
