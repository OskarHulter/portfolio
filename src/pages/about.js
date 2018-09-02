import React from 'react'
import styled from 'styled-components'
import UpButton from 'components/UpButton'
import { FaReact } from 'react-icons/fa'
import { FaHtml5 } from 'react-icons/fa'
import { FaCss3Alt } from 'react-icons/fa'
import { FaJsSquare } from 'react-icons/fa'

const AboutWrapper = styled.section`
    display: grid;
    min-height: 200vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.7;
`
const TextContent = styled.div`
    margin: 1.5em 40px;
    max-width: 700px;
    text-align: center;
    font-size: 0.9em;
    @media (min-width: 768px) {
        font-size: 1em;
    }
    @media (min-width: 992px) {
        font-size: 1.2em;
    }
`
const SkillText = styled.div`
    margin: 1.5em 0;
    font-size: 0.6em;
    text-align: center;
`
const TextTitle = styled.h2`
    color: #2ea1ab;
    font-size: 2em;
    filter: brightness(130%);
    font-family: 'Cutive Mono', monospace;
`

const AboutPage = () => (
    <AboutWrapper>
        <TextContent>
            <div className="about-jump-point" />
            <TextTitle>My Story</TextTitle>
            My passion for computers started at the age of six.
            <br />
            Specifically, around the time my step-father wrote a note, <br />
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
            Tekniska Universitet, 2018. My thesis was an exploratory case-study
            about improving software documentation using data visualization.
            <br />
            Since then I've focused my atention on modern web development.
        </TextContent>
        <TextContent>
            <TextTitle>My Skills</TextTitle>
            Specialized in semantic HTML, modern CSS, JavaScript ES20xx & its
            ecosystem.
            <br />
            <div>
                <FaHtml5 size={32} />
                <FaCss3Alt size={32} />
                <FaJsSquare size={32} />
                <FaReact size={32} />
            </div>
            <em>Full skill list at the bottom of the page.</em>
            <br />
            <br />I enjoy the whole stack and always try to choose the right
            tool for the job. Design patterns, testing, software architecture &
            declarative/functional programming are the areas I am most excited
            about at the moment.
            <br />
            The art of writing clean code that is consistent, consise, elegant
            and readable is a fulfulling challenge that I try to get better at
            each day.
            <br />
            <br />I enjoy doing design and UX work because I'm motivated by
            impacting the end-users in a direct way. I don't mind database
            management, but delegating that responsibility to a third party
            allows me to focus on delivering an awesome user experience. The
            methodologies I embrace in my work are Agile, Lean Software
            Development & Kanban.
            <br />
            <br />
            My favorite JS tools are react, redux, webpack, styled-components &
            gatsby.
            <br />
            Other programming languages that I have previous experience with are
            C, C#, Java & php. Long term I would love to learn more about
            machine learning.
        </TextContent>
        <TextContent>
            <TextTitle>My Personality</TextTitle>I definately have an analytical
            mindset. This is reflected in my three biggest interests: music,
            strategy games & programming.
            <br />
            <br />
            As with any personaliy trait, an analytical mindset brings both
            opportunities and challenges. I really enjoy the process of
            learning, working on my craft, experiencing new realizations and the
            fulfillment of solving problems efficiently. I am always looking for
            another angle, to find new insights.
            <br />
            <br />
            My primary challenge is that I am susceptible to analysis paralysis.
            I try to remedy this by acknowledging that no solution has to be
            perfect from the start. Even if you start building something that
            isn't the most efficient solution, you can still learn more about
            what you need than if you just sit around and think.
            <br />
            <br />I enjoy working with other people & I am very talkative for
            being an introvert. One of my core values is to always leave my ego
            at the door and take every opportunity to improve. This means that I
            value feedback from others, even if it could be construed as
            critizism.
            <br />
            <br />
            Currently I am developing a website called stressless.productions
            that will host royalty-free music. It is still under construction
            but I will post more info when I've come a bit further along. I am
            also in the process of creating a webshop called festivaltent.shop
            offering tents with fun patterns targeted at music festivals.
            <br />
            <br />
            Please feel free to contact me at:
            <br />
            <TextTitle>oskarhulter@gmail.com</TextTitle>
        </TextContent>
        <SkillText>
            <TextTitle>skill list</TextTitle>
            front-end: html5 css3 javascript react redux gatsby
            <br />
            back-end: Node Express MongoDB MySQL GraphQL REST C C# Java php
            <br />
            misc: git webpack jest wireshark nmap packet tracer
        </SkillText>

        <UpButton />
    </AboutWrapper>
)

export default AboutPage
