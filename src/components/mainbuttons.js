import React from 'react'
import scrollToComponent from 'react-scroll-to-component'

const MainButtons = () => (
    <div className="button-container">
        <div>
            <button
                className="main-button"
                onClick={() =>
                    scrollToComponent(this.gallery, {
                        offset: 0,
                        align: 'top',
                        duration: 1500,
                    })
                }
            >
                <div className="main-button-text">projects</div>
            </button>
        </div>
        <div>
            <button className="main-button">
                <div className="main-button-text">about</div>
            </button>
        </div>
    </div>
)

export default MainButtons
