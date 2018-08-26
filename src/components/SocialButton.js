import React from 'react'
import styled from 'styled-components'
import { FaGithub } from 'react-icons/fa'

const StyledSocialButton = styled.button`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    height: 14vmin;
    width: 14vmin;
    padding: 1.2vmin;
    border-radius: 50%;
    margin: 3vmin;
    font-size: 2vmin;
`
// This function has to be improved to make it reusable.
function handleClick() {
    //const siteLink = props.siteType
    if (siteLink == 'git') {
        const url = 'https://github.com/OskarHulter'
    } else if (siteLink === 'mail') {
        const url = 'mailto:oskarhulter@gmail.com'
    } else if (siteLink === 'in') {
        const url = 'https://www.linkedin.com/in/oskar-hulter'
    } else {
        const url = 'https://twitter.com/OHulter'
    }
    let site = window.open(url, '_blank')
    site.focus()
}

const SocialButton = props => (
    <StyledSocialButton
        onClick={() => {
            handleClick()
        }}
    >
        <FaGithub size={30} />
    </StyledSocialButton>
)

export default SocialButton
