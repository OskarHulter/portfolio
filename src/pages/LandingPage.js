import React from 'react'
import { SocialButton } from '../components/SocialButton'
import { MainButton } from '../components/MainButton'
import styled from 'styled-components'
import logo from '../img/oh-logo-proto-small.png'
import { FaHeart } from 'react-icons/fa'
import { FaReact } from 'react-icons/fa'
import { FaNodeJs } from 'react-icons/fa'

const LandingPageWrapper = styled.header`
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='152' height='152' viewBox='0 0 152 152'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='temple' fill='%234a00a3' fill-opacity='0.16'%3E%3Cpath d='M152 150v2H0v-2h28v-8H8v-20H0v-2h8V80h42v20h20v42H30v8h90v-8H80v-42h20V80h42v40h8V30h-8v40h-42V50H80V8h40V0h2v8h20v20h8V0h2v150zm-2 0v-28h-8v20h-20v8h28zM82 30v18h18V30H82zm20 18h20v20h18V30h-20V10H82v18h20v20zm0 2v18h18V50h-18zm20-22h18V10h-18v18zm-54 92v-18H50v18h18zm-20-18H28V82H10v38h20v20h38v-18H48v-20zm0-2V82H30v18h18zm-20 22H10v18h18v-18zm54 0v18h38v-20h20V82h-18v20h-20v20H82zm18-20H82v18h18v-18zm2-2h18V82h-18v18zm20 40v-18h18v18h-18zM30 0h-2v8H8v20H0v2h8v40h42V50h20V8H30V0zm20 48h18V30H50v18zm18-20H48v20H28v20H10V30h20V10h38v18zM30 50h18v18H30V50zm-2-40H10v18h18V10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    background-repeat: repeat;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    height: 100vh;
    width: 100%;
    text-align: center;
    font-size: 4vmin;
    font-family: ${props => props.theme.headerFont};
`

const TitleWrapper = styled.div`
    font-size: 13vmin;
    padding-top: 10px;
    text-shadow: 0px 4px 3px rgba(0, 0, 0, 0.4), 0px 8px 13px rgba(0, 0, 0, 0.1),
        0px 18px 23px rgba(0, 0, 0, 0.1);
`

const SubTitle = styled.h2`
    color: ${props => props.theme.secondaryColor};
    font-size: 5vmin;
    letter-spacing: 0.6vmin;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
`

const EmojiWrapper = styled.div`
    font-family: ${props => props.theme.textFont};
    color: ${props => props.theme.primaryColor};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
`

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
`

const SocialWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100%;
    padding-bottom: 50px;
`

export const LandingPage = () => (
    <LandingPageWrapper>

        <TitleWrapper>
            <div className="landing-jump-point" />
            <img src={logo} alt="OH Logotype" height="129" width="119" />
            <h1>Oskar Hulter</h1>
            <SubTitle>full-stack web developer</SubTitle>
        </TitleWrapper>

        <EmojiWrapper>
            <FaNodeJs size={30} />+<FaReact size={30} />=<FaHeart size={30} />
        </EmojiWrapper>
        
        <ButtonWrapper>
            <MainButton />
        </ButtonWrapper>

        <SocialWrapper>
            <SocialButton type="gitHub" />
            <SocialButton type="email" />
            <SocialButton type="linkedIn" />
            <SocialButton type="twitter" />
        </SocialWrapper>

    </LandingPageWrapper>
)