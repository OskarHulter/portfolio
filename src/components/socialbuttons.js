import React from 'react'
import MailButton from './mailbutton'
import GitButton from './gitbutton'
import TwitterButton from './twitterbutton'
import LinkedinButton from './linkedinbutton'

const SocialButtons = () => (
    <div className="container-social">
        <GitButton />
        <MailButton />
        <LinkedinButton />
        <TwitterButton />
    </div>
)

export default SocialButtons
