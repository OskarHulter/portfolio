import React from 'react'
import styled from 'styled-components'
import UpButton from '../components/upbutton'
import ProjectLinks from '../components/projectlinks'

const AboutWrapper = styled.section`
    display: grid;
    min-height: 200vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.7;
    font-family: ${props => props.theme.textFont};
    background-image: linear-gradient(
        to top,
        ${props => props.theme.backgroundMain} 0%,
        ${props => props.theme.backgroundSecondary} 100%
    );
`
const TextContent = styled.div`
    margin: 1.5em 4px;
    max-width: 750px;
    text-align: center;
    font-size: 0.8em;

    text-shadow: 1px 2px 1px rgba(0, 0, 0, 0.3);
    @media (min-width: 768px) {
        font-size: 1em;
        margin: 1.5em 40px;
    }
    @media (min-width: 992px) {
        font-size: 1.2em;

        margin: 1.5em 40px;
    }
`
const SkillText = styled.div`
    text-align: left;
    padding-left: 50px;
    strong {
        font-weight: bold;
    }
`
const TextTitle = styled.h2`
    color: ${props => props.theme.primaryColor};
    font-size: 2.5em;
    font-family: ${props => props.theme.headerFont};
    text-shadow: 1px 2px 1px rgba(0, 0, 0, 0.3);
`

const AboutPage = () => (
    <AboutWrapper>
        <ProjectLinks />
        <div className="about-jump-point" />
        <TextTitle>My Skills</TextTitle>
        <SkillText>
            <strong>programming languages:</strong> JavaScript C C# Java php
            <br />
            <strong>front-end</strong>: html5 css3 react redux gatsby
            <br />
            <strong>back-end</strong>: Node Express MongoDB MySQL GraphQL REST
            <br />
            <strong>tools</strong>: git webpack cypress jest wireshark nmap
            <br />
            <strong>misc</strong>: design data-viz agile lean kanban
        </SkillText>
        <TextContent>
            Specialized in semantic HTML, modern CSS, JavaScript ES20xx & its
            ecosystem. <br /> I'm up to date about the newest trends but I
            always try to choose the right tool for the job. I know that my
            greatest asset isn't knowledge about specific flavour-of-the-month
            frameworks, but in my reasoning about the tradeoffs they offer.
            <br />
            My favorite JS tools are react, webpack, cypress, styled-components
            & gatsby.
            <br />
            Design patterns, testing, software architecture &
            declarative/functional programming are the areas I am most excited
            about at the moment.
            <br />
            <br />I enjoy doing design and UX work because I'm motivated by
            impacting the end-users in a direct way. I don't mind database
            management, but delegating that responsibility to a third party
            allows me to focus on delivering an awesome user experience. The
            methodologies I embrace in my work are Agile, Lean Software
            Development & Kanban.
            <br />
            <br />
            The art of writing clean code that is consise, consistent, elegant
            and readable is a fulfulling challenge that I try to get better at
            each day.
            <br />I would love to apply & learn more about machine learning in
            the long term.
        </TextContent>
        <TextContent>
            <TextTitle>My Story</TextTitle>
            My passion for computers started at the age of six.
            <br />
            Specifically,
            <br /> around the time my step-father wrote a note <br />
            explaining the steps to launch Warcraft 2 from MS-DOS.
            <br />
            That note became a portal to another world.
            <br />A world which I embraced.
            <br />
            <br />
            <strong>
                A lot has changed since 1997, but my passion remained.
            </strong>
            <br />
            <br />
            After a time of pursuing other interests, studying, traveling and
            working day-jobs I finally realized that my true calling had been
            there all along.
            <br />I finished my bachelor's degree in Systems Science at Luleå
            Tekniska Universitet, 2018.
            <br /> My thesis was an exploratory case-study about improving
            software documentation using data visualization. The result of the
            study indicates that data-visualization can be a potent tool for
            making software documentation easier to understand.
            <br />
            Since then I've focused my attention on modern web development.
        </TextContent>

        <TextContent>
            <TextTitle>My Personality</TextTitle>I definitely have an analytical
            mindset. This is reflected in my three biggest interests: music,
            strategy games & programming.
            <br />
            <br />
            As with any personality trait, an analytical mindset brings both
            opportunities and challenges. I really enjoy the process of
            learning, working on my craft, experiencing new realizations and the
            fulfillment of solving problems efficiently. I am always looking for
            another angle, to find new insights.
            <br />
            <br />
            My primary challenge is that I am susceptible to analysis paralysis.
            I try to remedy this by acknowledging that no solution has to be
            perfect from the start. Even if you start building something that
            isn't the most efficient solution, you'll still learn more about
            what's needed than if you sit around and think.
            <br />
            <br />I enjoy working with other people & I am very talkative for
            being an introvert. One of my core values is to always leave my ego
            at the door and take every opportunity to improve. This means that I
            value feedback from others, even if it could be construed as
            criticism.
            <br />
            <br />
            Currently I am developing a website called stressless.productions
            that will host royalty-free music. It is still under construction
            but I will post more info when I've come a bit further along. I am
            also in the process of creating a webshop called festivaltent.shop
            offering tents with fun patterns.
            <br />
            <br />
            <br />
            <br />
            Get in touch at:
            <br />
            oskarhulter@gmail.com
        </TextContent>

        <UpButton />
    </AboutWrapper>
)

export default AboutPage
