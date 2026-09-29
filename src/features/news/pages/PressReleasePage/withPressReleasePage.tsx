import { PressReleasePageProps } from './interface'

export function withPressReleasePage(
  Component: React.FC<PressReleasePageProps>
) {
  function Hoc(props: PressReleasePageProps) {
    return <Component {...props} />
  }

  return Hoc
}
