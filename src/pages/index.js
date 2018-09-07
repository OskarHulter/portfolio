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
const openSans = '"Open Sans", sans-serif'
const cutiveMono = '"Cutive Mono", monospace'

injectGlobal`
html,
body,
div,
span,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
a,
em,
font,
img,
strong,
ol,
ul,
li,
form,
label,
legend {
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-weight: inherit;
    font-style: inherit;
    font-size: 100%;
    font-family: inherit;
    line-height: inherit;
    vertical-align: baseline;
    background-repeat: no-repeat;
}

/* remember to define focus styles! */
:focus {
    outline: 0;
}

/* Makes touches register 300ms faster on touch devices */
a,
area,
button,
input,
label,
select,
summary,
textarea,
[tabindex] {
    -ms-touch-action: manipulation;
    touch-action: manipulation;
}


body {
    
    box-sizing: border-box;
    font-family: ${openSans};
    color: ${lightGrey};
    background: ${purple};
}
`

const theme = {
    primaryColor: grey,
    secondaryColor: '#9099BA',
    fontColor: lightGrey,
    backgroundMain: purple,
    backgroundSecondary: '#1A6080',
    headerFont: cutiveMono,
    textFont: openSans,
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
