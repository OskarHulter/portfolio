import React from 'react'
import MailButton from './mailbutton'
import GitButton from './gitbutton'
import TwitterButton from './twitterbutton'
import LinkedinButton from './linkedinbutton'
import styled from 'styled-components'

const SocialWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 40vmin;
`
//hmm. borde lösa DRY problemet med buttons. de bör ta props.
const SocialButton = styled.button`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    height: 14vmin;
    width: 14vmin;
    padding: 1.2vmin;
    border-radius: 50%;
    margin: 3vmin;
    font-size: 2vmin;
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
