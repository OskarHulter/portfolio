import React from 'react'
import MailButton from './mailbutton'
import GitButton from './gitbutton'
import TwitterButton from './twitterbutton'
import LinkedinButton from './linkedinbutton'
import styled from 'styled-components'

const SocialWrapper = styled.div`
    display: flex;
    justify-content: center;
`

const SocialButtons = () => (
    <SocialWrapper>
        <GitButton />
        <MailButton />
        <LinkedinButton />
        <TwitterButton />
    </SocialWrapper>
)

export default SocialButtons
