import React from 'react'
import { FaAngleDown } from 'react-icons/fa'

const MainButtons = () => (
    <div className="button-container">
        <div>
            <button className="main-button">
                <div className="main-button-text">projects</div>
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
