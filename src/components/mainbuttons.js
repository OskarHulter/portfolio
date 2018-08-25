import React from 'react'
import jump from 'jump.js'

const MainButtons = () => (
    <div className="button-container">
        <div>
            <button
                className="main-button"
                onClick={() => {
                    jump('.project-gallery')
                }}
            >
                <div className="main-button-text">projects</div>
            </button>
        </div>
        <div>
            <button
                className="main-button"
                onClick={() => {
                    jump('.about-page')
                }}
            >
                <div className="main-button-text">about</div>
            </button>
        </div>
    </div>
)

export default MainButtons
