import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa'

const LinkedinButton = () => (
    <a href="https://www.linkedin.com/in/oskar-hulter" target="_blank">
        <button className="button-social">
            <FaLinkedinIn size={30} />
        </button>
    </a>
)

export default LinkedinButton
