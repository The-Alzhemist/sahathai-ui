import { InfrastructureContainersPageProps } from './interface'

export function withInfrastructureContainersPage(
  Component: React.FC<InfrastructureContainersPageProps>
) {
  function WithInfrastructureContainersPage({
    machineryData,
  }: InfrastructureContainersPageProps) {
    return <Component machineryData={machineryData} />
  }

  return WithInfrastructureContainersPage
}
