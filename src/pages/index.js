import '../css/reset.css'
import React from 'react'
import { ThemeProvider, injectGlobal } from 'styled-components'
import Layout from '../components/layout'
import Landing from './landing'
import AboutPage from './about'
import ProjectGallery from './gallery'
import Footer from '../components/footer'
//Wrapper of site elements that enable themeing
const lato = '"Lato", -apple-system, "Segoe UI", Roboto, sans-serif'
const montserrat = '"Montserrat", -apple-system, "Segoe UI", Roboto, sans-serif'
/*
Old themes - Might add a theme toggle for fun later.
const openSans = '"Open Sans", -apple-system, "Segoe UI", Roboto, sans-serif'
const cutiveMono = '"Cutive Mono", monospace'
const greenFrenchPass = '#B5FFF9'
const greenPlantation = '#253F45'
const greenPea = '#1A5457'
const turquoise = '#45DED8'
const seaGreenKeppel = '#35ABA6'

const deepBlue = '#054565'
const blue = '#0D6797'
const lightGreen = '#9BCCCC'
const white = '#E4E5E6'
const orange = '#D75C29'
*/
const purple = '#852C8F'
const lavendel = '#A789BD'
const cream = '#E3DFD0'
const freshBlue = '#2CBDEC'
const skyBlue = '#1E68B0'

injectGlobal`
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
