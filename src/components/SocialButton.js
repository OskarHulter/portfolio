import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import styled from 'styled-components'
// Social buttons that gets passed type
//
const StyledSocialButton = styled.button`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    height: 55px;
    width: 55px;
    border-radius: 50%;
    margin: 7px;
    padding-top: 5px;
    color: ${props => props.theme.backgroundMain};
    background-color: ${props => props.theme.backgroundSecondary};
    border: none;
    cursor: pointer;
    transition: 800ms ease all;

    :hover {
        color: ${props => props.theme.backgroundSecondary};
        background-color: ${props => props.theme.backgroundMain};
    }
`

function renderLink(type) {
    const gitHubLink = 'https://github.com/OskarHulter'
    const emailLink = 'mailto:oskarhulter@gmail.com'
    const linkedInLink = 'https://www.linkedin.com/in/oskar-hulter'
    const twitterLink = 'https://twitter.com/OHulter'
    switch (type) {
        case 'gitHub':
            return gitHubLink
        case 'email':
            return emailLink
        case 'linkedIn':
            return linkedInLink
        default:
            return twitterLink
    }
}

function renderIcon(type) {
    switch (type) {
        case 'gitHub':
            return <FaGithub size={28} />
        case 'email':
            return <FaEnvelope size={28} />
        case 'linkedIn':
            return <FaLinkedinIn size={28} />
        default:
            return <FaTwitter size={28} />
    }
}

const SocialButton = props => (
    <a href={renderLink(props.type)} target="_blank">
        <StyledSocialButton>{renderIcon(props.type)}</StyledSocialButton>
    </a>
)

export default SocialButton
