import { FunctionComponentType } from '@/models/FunctionComponentType'


interface HomePageAcceptProps {
params:{ locale: string; };
}

export interface HomePageProps {
  params:{ locale: string; };
}
export function withHomePage(Component: React.FC<HomePageProps>) {
  function WithHomePage({params}:HomePageAcceptProps) {
    const newProps:HomePageProps = {
      params
    }
    return <Component {...newProps} />
  }

  return WithHomePage
}


