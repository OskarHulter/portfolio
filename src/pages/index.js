import '../css/reset.css'
import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { Layout } from '../components/layout'
import { LandingPage } from './LandingPage'
import { AboutPage } from './About'
import { ProjectGallery } from './ProjectGallery'
import { Footer } from '../components/footer'

const roboto = '"Roboto", -apple-system, "Segoe UI", Roboto, sans-serif'
const montserrat = '"Montserrat", -apple-system, "Segoe UI", Roboto, sans-serif'
const purple = '#852C8F'
const lavendel = '#A789BD'
const cream = '#E3DFD0'
const freshBlue = '#2CBDEC'
const skyBlue = '#1E68B0'

const GlobalStyle = createGlobalStyle`
body {
    box-sizing: border-box;
    color: ${cream};
    background: ${purple};
}
`

const theme = {
    primaryColor: freshBlue,
    secondaryColor: lavendel,
    fontColor: cream,
    backgroundMain: purple,
    backgroundSecondary: skyBlue,
    headerFont: montserrat,
    textFont: roboto,
}

export default () => (
    <ThemeProvider theme={theme}>
        <Layout>
            <GlobalStyle />
            <LandingPage />
            <ProjectGallery />
            <AboutPage />
            <Footer />
        </Layout>
    </ThemeProvider>
)
