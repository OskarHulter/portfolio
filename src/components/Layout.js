import React from 'react'
import Helmet from 'react-helmet'
// Layout component that wraps site
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
                    meta={[
                        {
                            charset: 'utf-8',
                        },
                        {
                            name: 'description',
                            content:
                                'Personal website showcasing the work of Oskar Hulter',
                        },
                        {
                            name: 'keywords',
                            content:
                                'web development, fullstack, software engineering, portfolio',
                        },
                        {
                            name: 'viewport',
                            content:
                                'width=device-width, initial-scale=1, shrink-to-fit=no',
                        },
                    ]}
                >
                    <html lang="en" />
                    <link
                        href="https://fonts.googleapis.com/css?family=Lato|Montserrat:700"
                        rel="stylesheet"
                    />
                </Helmet>

                <div>{children}</div>
            </>
        )}
    />
)

export default Layout
