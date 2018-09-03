import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import Landing from './landing'
import AboutPage from './about'
import ProjectGallery from './gallery'
import Footer from '../components/footer'
//Wrapper of site elements
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
