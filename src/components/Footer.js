import React from 'react'
import styled from 'styled-components'
import SocialButtons from './SocialButtons'
// Footer containing social links
const FooterWrapper = styled.footer`
    width: 315px;
    height: 70px;
    color: #25008b;
    background-color: #2ea1ab;
    border-top-left-radius: 20% 80%;
    border-top-right-radius: 20% 80%;
    padding-top: 12px;
`
const Footer = () => (
    <FooterWrapper>
        <SocialButtons />
    </FooterWrapper>
)

export default Footer
