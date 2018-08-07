import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'

const Icons = () => (
    <div className="container-social">
        <button className="button-social">
            <FaGithub size={30} />
        </button>
        <button className="button-social">
            <FaEnvelope size={30} />
        </button>
        <button className="button-social">
            <FaLinkedinIn size={30} />
        </button>
        <button className="button-social">
            <FaTwitter size={30} />
        </button>
    </div>
)

export default Icons
