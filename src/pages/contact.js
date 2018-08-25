import React from 'react'
import SocialButtons from '../components/socialbuttons'

const ContactPage = () => (
    <div className="contact-page">
        <div className="page-subtitle" />
        <a href="mailto:oskarhulter@gmail.com">
            <div className="page-subtitle">
                <p>oskarhulter@gmail.com</p>
            </div>
        </a>
        <SocialButtons />
    </div>
)

export default ContactPage
