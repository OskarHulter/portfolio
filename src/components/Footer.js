import React from 'react'
import styled from 'styled-components'
import SocialButtons from './socialbuttons'
// Footer containing social buttons
const FooterWrapper = styled.footer`
    width: 315px;
    height: 120px;
    color: ${props => props.theme.backgroundMain};
    background-color: ${props => props.theme.primaryColor};
    font-family: ${props => props.theme.textFont};
    border-top-left-radius: 20% 50%;
    border-top-right-radius: 20% 50%;
    padding-top: 12px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    font-size: 1.2em;
`
const Footer = () => (
    <FooterWrapper>
        <SocialButtons />
        <p>&copy; Oskar Hulter</p>
    </FooterWrapper>
)

export default Footer
