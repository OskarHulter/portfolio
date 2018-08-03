import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
    <div className="landing-page">
        <h1 className="page-title">Oskar Hulter</h1>
        <h2 className="page-subtitle">fullstack web developer</h2>
        <div className="button-container">
            <div>
                <button className="main-button">projects</button>
            </div>
            <div>
                <button className="main-button">about</button>
            </div>
        </div>
        <Link to="/page-2/">Go to page 2</Link>
    </div>
)

export default IndexPage
