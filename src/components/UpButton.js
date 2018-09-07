import React from 'react'
import jump from 'jump.js'
import styled from 'styled-components'
import { FaArrowUp } from 'react-icons/fa'
//Button for navigating to the top of the site
const StyledUpButton = styled.button`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    height: 70px;
    width: 70px;
    border-radius: 50%;
    margin: 50px;
    padding-top: 5px;
    color: ${props => props.theme.backgroundMain};
    background-color: ${props => props.theme.secondaryColor};
    border: none;
    cursor: pointer;
    transition: 800ms ease all;
    font-family: ${props => props.theme.textFont};
    :hover {
        color: ${props => props.theme.primaryColor};
        background-color: ${props => props.theme.backgroundMain};
    }
`

const UpButton = () => (
    <StyledUpButton
        onClick={() => {
            jump('.landing-jump-point', {
                duration: 500,
                offset: -100,
            })
        }}
    >
        <FaArrowUp size={42} />
    </StyledUpButton>
)

export default UpButton
