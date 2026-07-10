import { ActivityPageProps } from '@/features/investorRelations/pages/ActivityPage/interface'

export function withActivityPage(
  Component: React.FC<ActivityPageProps>
) {
  function withShareHolder(props:ActivityPageProps) {
    return <Component {...props} />
  }

  return withShareHolder
}
