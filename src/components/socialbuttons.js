import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa'
import MailButton from './mailbutton'
import GitButton from './gitbutton'
import TwitterButton from './twitterbutton'

const SocialButtons = () => (
    <div className="container-social">
        <GitButton />
        <MailButton />
        <a href="https://www.linkedin.com/in/oskar-hulter" target="_blank">
            <button className="button-social">
                <FaLinkedinIn size={30} />
            </button>
        </a>

        <TwitterButton />
    </div>
)

export default SocialButtons
