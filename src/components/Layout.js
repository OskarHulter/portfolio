import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

export const Layout = ({ children }) => (
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
                                'web development, fullstack, software engineering, portfolio, Oskar Hulter',
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
                        href="https://fonts.googleapis.com/css?family=Montserrat:700|Roboto"
                        rel="stylesheet"
                    />
                </Helmet>

                <div>{children}</div>
            </>
        )}
    />
)