import React from 'react'
import styled from 'styled-components'
import SocialButtons from './socialbuttons'
// Footer containing social buttons
const FooterWrapper = styled.footer`
    width: 315px;
    height: 70px;
    background-color: ${props => props.theme.primaryColor};
    border-top-left-radius: 20% 80%;
    border-top-right-radius: 20% 80%;
    padding-top: 12px;
    margin-left: auto;
    margin-right: auto;
`
const Footer = () => (
    <FooterWrapper>
        <SocialButtons />
    </FooterWrapper>
)

export default Footer
