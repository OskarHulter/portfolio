import React from 'react'
import Link from 'gatsby-link'
import SocialButtons from '../components/socialbuttons'
import MainButtons from '../components/mainbuttons'

const IndexPage = () => (
    <div className="landing-page">
        <div className="page-title">
            <div className="oskar-title">
                <h1 className="name">Oskar</h1>
                <h1 className="name">Hulter</h1>
            </div>

            <h2 className="page-subtitle">fullstack web developer</h2>
        </div>
        <MainButtons />
        <SocialButtons />
    </div>
)

export default IndexPage
