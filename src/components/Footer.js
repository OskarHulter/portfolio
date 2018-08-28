import React from 'react'
import styled from 'styled-components'
import SocialButtons from './SocialButtons'

const FooterWrapper = styled.footer`
    width: 100vw;
    @media (max-width: 768) {
        height: 40px;
    }
    height: 100px;
    color: #25008b;
    background-color: #2ea1ab;
    border-top-left-radius: 20% 80%;
    border-top-right-radius: 20% 80%;
`
const Footer = () => (
    <FooterWrapper>
        <SocialButtons />
    </FooterWrapper>
)

export default Footer
