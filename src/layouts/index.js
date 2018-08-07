import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './reset.css'
import './index.css'
import AboutPage from '../pages/about'
import ContactPage from '../pages/contact'
import ProjectPage from '../pages/projects'

const Layout = ({ children, data }) => (
    <div>
        <Helmet
            title={data.site.siteMetadata.title}
            meta={[
                { name: 'description', content: 'Oskar Hulter Portfolio' },
                { name: 'keywords', content: 'Portfolio, Oskar Hulter' },
            ]}
        />
        <Header />
        <div>{children()}</div>
        <ProjectPage />
        <AboutPage />
        <ContactPage />
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
