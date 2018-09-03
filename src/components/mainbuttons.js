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
    width: 35vmin;
    height: 15vmin;
    margin: 2vmin;
    font-size: 6vmin;
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
