import React from 'react'
import jump from 'jump.js'
import styled from 'styled-components'

const StyledNavButton = styled.button`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-image: linear-gradient(
        to top,
        ${props => props.theme.backgroundSecondary} 0%,
        ${props => props.theme.primaryColor} 100%
    );
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 110px;
    min-height: 80px;
    width: 35vmin;
    height: 18vmin;
    margin: 2vmin;
    font-size: 6vmin;
    padding-bottom: 3px;
    border-radius: 50%;
    color: ${props => props.theme.fontColor};
    background-color: ${props => props.theme.secondaryColor};
    border: none;
    cursor: pointer;
    transition: 800ms ease all;
    font-family: ${props => props.theme.headerFont};
    :hover {
        color: ${props => props.theme.primaryColor};
    }
`

export const MainButton = () => (
    <>
        <StyledNavButton
            onClick={() => {
                jump('.gallery-jump-point')
            }}
        >
            projects
        </StyledNavButton>
        <StyledNavButton
            onClick={() => {
                jump('.about-jump-point')
            }}
        >
            about
        </StyledNavButton>
    </>
)