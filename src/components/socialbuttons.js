import React from 'react'
import MailButton from './MailButton'
import GitButton from './GitButton'
import TwitterButton from './TwitterButton'
import LinkedinButton from './LinkedinButton'
import styled from 'styled-components'

const SocialWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
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
