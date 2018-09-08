import '../css/reset.css'
import React from 'react'
import { ThemeProvider, injectGlobal } from 'styled-components'
import Layout from '../components/layout'
import Landing from './landing'
import AboutPage from './about'
import ProjectGallery from './gallery'
import Footer from '../components/footer'
//Wrapper of site elements that enable themeing
const grey = '#9099BA'
const lightGrey = '#acb7b2'
const purple = '#3a155c'
const darkGreen = '#0BB9F3'
const openSans = '"Open Sans", -apple-system, "Segoe UI", Roboto, sans-serif'
const cutiveMono = '"Cutive Mono", monospace'
const lato = '"Lato", -apple-system, "Segoe UI", Roboto, sans-serif'
const montserrat = '"Montserrat", -apple-system, "Segoe UI", Roboto, sans-serif'
const textGreen = '#41B8EB'
const textGreenVariation = '#6843D4'
injectGlobal`
body {
    box-sizing: border-box;
    color: ${lightGrey};
    background: ${purple};
}
`

const theme = {
    primaryColor: textGreen,
    secondaryColor: textGreenVariation,
    fontColor: lightGrey,
    backgroundMain: purple,
    backgroundSecondary: darkGreen,
    headerFont: montserrat,
    textFont: lato,
}

export default () => (
    <ThemeProvider theme={theme}>
        <Layout>
            <Landing />
            <ProjectGallery />
            <AboutPage />
            <Footer />
        </Layout>
    </ThemeProvider>
)
