import React from 'react'
import styled from 'styled-components'
import SocialButtons from './SocialButtons'

const FooterWrapper = styled.footer`
    display: grid;
    width: 100vw;
    height: 30vh;
    color: #25008b;
    background-color: #2ea1ab;
`
const Footer = () => (
    <FooterWrapper>
        <a href="mailto:oskarhulter@gmail.com">oskarhulter@gmail.com</a>
        <SocialButtons />
    </FooterWrapper>
)

export default Footer
