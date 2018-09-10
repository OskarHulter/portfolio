import React from 'react'
import jump from 'jump.js'
import styled from 'styled-components'

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
`
const MainButton = styled.button`
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

const MainButtons = () => (
    <ButtonWrapper>
        <MainButton
            onClick={() => {
                jump('.gallery-jump-point')
            }}
        >
            projects
        </MainButton>
        <MainButton
            onClick={() => {
                jump('.about-jump-point')
            }}
        >
            about
        </MainButton>
    </ButtonWrapper>
)

export default MainButtons
