import { FunctionComponentType } from '@/models/FunctionComponentType'

export function withServiceProviderImportExportPage(
  Component: React.FC<FunctionComponentType>
) {
  function Hoc() {
    return <Component />
  }

  return Hoc
}
