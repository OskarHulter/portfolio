import React from 'react'
import SocialButtons from '../components/socialbuttons'
import MainButtons from '../components/mainbuttons'
import styled from 'styled-components'
// Landing page
const LandingPageWrapper = styled.header`
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='152' height='152' viewBox='0 0 152 152'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='temple' fill='%234a00a3' fill-opacity='0.16'%3E%3Cpath d='M152 150v2H0v-2h28v-8H8v-20H0v-2h8V80h42v20h20v42H30v8h90v-8H80v-42h20V80h42v40h8V30h-8v40h-42V50H80V8h40V0h2v8h20v20h8V0h2v150zm-2 0v-28h-8v20h-20v8h28zM82 30v18h18V30H82zm20 18h20v20h18V30h-20V10H82v18h20v20zm0 2v18h18V50h-18zm20-22h18V10h-18v18zm-54 92v-18H50v18h18zm-20-18H28V82H10v38h20v20h38v-18H48v-20zm0-2V82H30v18h18zm-20 22H10v18h18v-18zm54 0v18h38v-20h20V82h-18v20h-20v20H82zm18-20H82v18h18v-18zm2-2h18V82h-18v18zm20 40v-18h18v18h-18zM30 0h-2v8H8v20H0v2h8v40h42V50h20V8H30V0zm20 48h18V30H50v18zm18-20H48v20H28v20H10V30h20V10h38v18zM30 50h18v18H30V50zm-2-40H10v18h18V10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    background-repeat: repeat;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 3fr 2fr 1fr;
    height: 100vh;
    width: 100%;
    text-align: center;

    font-size: 3vmin;
    font-family: ${props => props.theme.headerFont};
`
const OskarHulter = styled.div`
    font-size: 12vmin;
    line-height: 15vmin;
    margin-top: 4vmin;
`
const TitleWrapper = styled.div`
    color: ${props => props.theme.primaryColor};
`
const SubTitle = styled.h2`
    color: ${props => props.theme.secondaryColor};
    font-size: 5vmin;
    line-height: 3vmin;
    letter-spacing: 0.6vmin;
`

const LandingPage = () => (
    <LandingPageWrapper>
        <TitleWrapper>
            <div className="landing-jump-point" />
            <OskarHulter>
                <h1>Oskar Hulter</h1>
            </OskarHulter>
            <SubTitle>fullstack web developer</SubTitle>
        </TitleWrapper>
        <p>
            I'm a web dev that loves Javascript & it's ecosystem, <br />
            Check out my work or get in touch.
        </p>

        <MainButtons />
        <SocialButtons />
    </LandingPageWrapper>
)

export default LandingPage
