import React from 'react'
import styled from 'styled-components'
import { SocialButton } from './SocialButton'

const FooterWrapper = styled.footer`
    width: 315px;
    height: 170px;
    color: ${props => props.theme.backgroundMain};
    background-color: ${props => props.theme.primaryColor};
    font-family: ${props => props.theme.textFont};
    border-top-left-radius: 20% 30%;
    border-top-right-radius: 20% 30%;
    padding-top: 15px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    font-size: 1.2em;
`

const SocialWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    padding-bottom: 50px;
`

export const Footer = () => (
    <FooterWrapper>
        <SocialWrapper>
            <SocialButton type="gitHub" />
            <SocialButton type="email" />
            <SocialButton type="linkedIn" />
            <SocialButton type="twitter" />
        </SocialWrapper>
        <p>&copy; Oskar Hulter</p>
    </FooterWrapper>
)