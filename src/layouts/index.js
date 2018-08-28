import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import './reset.css'
import './index.css'
import AboutPage from '../pages/about'
import ProjectPage from '../pages/projects'
import Footer from '../components/Footer'

const Layout = ({ children, data }) => (
    <div>
        <Helmet
            title={data.site.siteMetadata.title}
            meta={[
                { name: 'description', content: 'Oskar Hulter Portfolio' },
                { name: 'keywords', content: 'Portfolio, Oskar Hulter' },
            ]}
        />
        <div>{children()}</div>
        <ProjectPage />
        <AboutPage />
        <Footer />
    </div>
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
