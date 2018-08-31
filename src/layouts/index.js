import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import './reset.css'
import './index.css'
import AboutPage from '../pages/About'
import ProjectGallery from '../pages/Gallery'
import Footer from '../components/Footer'
import styled from 'styled-components'

const GlobalWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Layout = ({ children, data }) => (
    <GlobalWrapper>
        <Helmet
            title={data.site.siteMetadata.title}
            meta={[
                { name: 'description', content: 'Oskar Hulter Portfolio' },
                { name: 'keywords', content: 'Portfolio, Oskar Hulter' },
            ]}
        />
        <div>{children()}</div>
        <ProjectGallery />
        <AboutPage />
        <Footer />
    </GlobalWrapper>
)

Layout.propTypes = {
    children: PropTypes.func,
}

export default Layout

export const query = graphql`
    query SiteTitleQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`
