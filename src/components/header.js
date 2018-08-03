import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
    <div>
        <ul className="nav-bar">
            <li className="nav-item">
                <button className="nav-button">
                    <Link to="/">{siteTitle}</Link>
                </button>
            </li>
            <li className="nav-item">
                <button className="nav-button">Projects</button>
            </li>
            <li className="nav-item">
                <button className="nav-button">About</button>
            </li>
            <li className="nav-item">
                <button className="nav-button">Contact</button>
            </li>
        </ul>
    </div>
)

export default Header
