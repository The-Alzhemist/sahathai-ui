// const components: { [key: string]: React.ComponentType<any> } = {
//   feature: Feature,
// }
// import Feature from '@/components/Storyblok/Feature'
// import { apiPlugin, storyblokInit } from '@storyblok/react/rsc'

// const REVALIDATE_TIME = Number(
//   process.env.STORYBLOK_REVALIDATE_TIME_SECOND as number | false | undefined
// )

// storyblokInit({
//   accessToken: process.env.STORYBLOK_ACCESS_TOKEN as string,
//   use: [apiPlugin],
//   components: components,
//   apiOptions: {
//     fetch: (input, init) =>
//       fetch(input, { ...init, next: { revalidate: REVALIDATE_TIME } }),
//   },
// })

// const getStoryblokApi: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   return <>{children}</>
// }

// export default getStoryblokApi

import Feature from '@/components/Storyblok/Feature'
import { apiPlugin, storyblokInit } from '@storyblok/react/rsc'

export const getStoryblokApi = storyblokInit({
  accessToken: 'STORYBLOK_ACCESS_TOKEN',
  use: [apiPlugin],
  components: {
    feature: Feature,
  },
})
