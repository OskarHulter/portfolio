import React from 'react'
import SocialButton from './socialbutton'
import styled from 'styled-components'

const SocialWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    padding-bottom: 20px;
`

const SocialButtons = () => (
    <SocialWrapper>
        <SocialButton type="gitHub" />
        <SocialButton type="email" />
        <SocialButton type="linkedIn" />
        <SocialButton type="twitter" />
    </SocialWrapper>
)

export default SocialButtons
