import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa'
let smallScreen
const mq = window.matchMedia('@media all and (max-width: 700px)')
mq.addListener(WidthChange)
WidthChange(mq)

function WidthChange(mq) {
    if (mq.matches) {
        smallScreen = true
    } else {
        smallScreen = false
    }
}

function renderIcon() {
    if (smallScreen) {
        return <FaLinkedinIn size={10} />
    } else {
        return <FaLinkedinIn size={70} />
    }
}

const LinkedinButton = () => (
    <a href="https://www.linkedin.com/in/oskar-hulter" target="_blank">
        <button className="button-social">{renderIcon()}</button>
    </a>
)

export default LinkedinButton
