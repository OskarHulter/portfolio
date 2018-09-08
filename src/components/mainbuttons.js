import React from 'react'
import jump from 'jump.js'
import styled from 'styled-components'

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
`
const MainButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 110px;
    min-height: 80px;
    width: 38vmin;
    height: 20vmin;
    margin: 2vmin;
    font-size: 7vmin;
    padding-bottom: 3px;
    border-radius: 50%;
    color: ${props => props.theme.backgroundMain};
    background-color: ${props => props.theme.primaryColor};
    border: none;
    cursor: pointer;
    transition: 800ms ease all;
    font-family: ${props => props.theme.textFont};
    :hover {
        color: ${props => props.theme.primaryColor};
        background-color: ${props => props.theme.backgroundMain};
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
