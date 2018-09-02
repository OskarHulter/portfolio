import React from 'react'
import styled from 'styled-components'
import Layout from 'components/Layout'
import Landing from './Landing'
import AboutPage from 'pages/About'
import ProjectGallery from 'pages/Gallery'
import Footer from 'components/Footer'

const GlobalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default () => (
    <Layout>
        <GlobalWrapper>
            <Landing />
            <ProjectGallery />
            <AboutPage />
            <Footer />
        </GlobalWrapper>
    </Layout>
)
