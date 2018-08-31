import React from 'react'
import jump from 'jump.js'
import styled from 'styled-components'
import { FaArrowUp } from 'react-icons/fa'

const StyledUpButton = styled.button`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    height: 70px;
    width: 70px;
    border-radius: 50%;
    margin: 50px;
    padding-top: 5px;
    background-color: #f05075;
`

const UpButton = () => (
    <StyledUpButton
        onClick={() => {
            jump('.landing-jump-point')
        }}
    >
        <FaArrowUp size={42} />
    </StyledUpButton>
)

export default UpButton
