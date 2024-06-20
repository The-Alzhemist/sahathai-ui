import { FunctionComponentType } from '@/models/FunctionComponentType'

export function withCorporateGroupOrganizationalStructurePage(
  Component: React.FC<FunctionComponentType>
) {
  function WithCorporateGroupOrganizationalStructurePage() {
    return <Component />
  }

  return WithCorporateGroupOrganizationalStructurePage
}
