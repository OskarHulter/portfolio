import React from 'react'
import { FaEnvelope } from 'react-icons/fa'

const MailButton = () => (
    <a href="mailto:oskarhulter@gmail.com">
        <button className="button-social">
            <FaEnvelope size={30} />
        </button>
    </a>
)

export default MailButton
