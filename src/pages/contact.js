import React from 'react'
import styled from 'styled-components'
import SocialButtons from '../components/socialbuttons'

const contactPage = styled.div`
    display: flex;
`

const ContactPage = () => (
    <div className="contact-page">
        <a href="mailto:oskarhulter@gmail.com">
            <div className="page-subtitle">
                <p>oskarhulter@gmail.com</p>
            </div>
        </a>
        <SocialButtons />
    </div>
)

export default ContactPage
