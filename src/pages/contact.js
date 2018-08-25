import React from 'react'
import styled from 'styled-components'
import SocialButtons from '../components/socialbuttons'

const blue = ''

const ContactWrapper = styled.div`
    display: grid;
    width: 100vw;
    height: 100vh;
    color: #25008b;
    background-color: #2ea1ab;
`

const ContactPage = () => (
    <ContactWrapper>
        <a href="mailto:oskarhulter@gmail.com">
            <div className="page-subtitle">
                <p>oskarhulter@gmail.com</p>
            </div>
        </a>
        <SocialButtons />
    </ContactWrapper>
)

export default ContactPage
