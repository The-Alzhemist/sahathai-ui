'use client'
import { AboutUsPage } from './AboutUsPage'
import { withAboutUsPage } from './withAboutUsPage'

const ConnectedAboutUsPage = withAboutUsPage(AboutUsPage)

export { ConnectedAboutUsPage as AboutUsPage }
