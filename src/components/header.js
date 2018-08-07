import React from 'react'
import Link from 'gatsby-link'

const Header = () => (
    <div>
        <ul className="nav-bar">
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
