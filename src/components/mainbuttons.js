import React from 'react'
import Link from 'gatsby-link'
import { FaAngleDown } from 'react-icons/fa'
import * as Scroll from 'react-scroll'

function scrollToProjects(e) {
    scroll.ScrollToBottom()
}

const MainButtons = () => (
    <div className="button-container">
        <div>
            <button className="main-button">
                <Link to="secondInsideContainer" className="main-button-text">
                    projects
                </Link>
                <div className="angle-icon">
                    <FaAngleDown />
                </div>
            </button>
        </div>
        <div>
            <button className="main-button">
                <div className="main-button-text">about</div>
                <div className="angle-icon">
                    <FaAngleDown />
                </div>
            </button>
        </div>
    </div>
)

export default MainButtons
