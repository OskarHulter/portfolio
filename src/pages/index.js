import React from 'react'
import Link from 'gatsby-link'
import SocialButtons from '../components/socialbuttons'
import MainButtons from '../components/mainbuttons'

const IndexPage = () => (
    <div className="landing-page">
        <div className="page-title">
            <h1 className="oskar-title">Oskar</h1>
            <h1 className="hulter-title">Hulter</h1>

            <h2 className="page-subtitle">fullstack web developer</h2>
        </div>
        <div className="interactive-container">
            <MainButtons />
            <SocialButtons />
        </div>
    </div>
)

export default IndexPage
