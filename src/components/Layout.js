import React from 'react'
import Helmet from 'react-helmet'
import '../css/reset.css'
import '../css/index.css'

import { StaticQuery, graphql } from 'gatsby'

const Layout = ({ children }) => (
    <StaticQuery
        query={graphql`
            query LayoutQuery {
                site {
                    siteMetadata {
                        title
                    }
                }
            }
        `}
        render={data => (
            <>
                <Helmet
                    titleTemplate={`%s | ${data.site.siteMetadata.title}`}
                    defaultTitle={data.site.siteMetadata.title}
                />
                <div>{children}</div>
            </>
        )}
    />
)

export default Layout
