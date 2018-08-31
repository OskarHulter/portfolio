import React from 'react'
import styled from 'styled-components'
import { FaReact } from 'react-icons/fa'
import { FaHtml5 } from 'react-icons/fa'
import { FaCss3Alt } from 'react-icons/fa'
import { FaJsSquare } from 'react-icons/fa'
import { FaArrowAltCircleUp } from 'react-icons/fa'

const AboutWrapper = styled.section`
    display: grid;
    min-height: 200vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.7;
`
const TextContent = styled.div`
    font-size: 1.2em;
    margin: 1.5em 40px;
    max-width: 700px;
    text-align: center;
`
const SkillText = styled.div`
    margin: 1.5em 0;
    font-size: 0.5em;
`
const TextTitle = styled.h2`
    color: #2ea1ab;
    font-size: 2em;
    filter: brightness(130%);
    font-family: 'Cutive Mono', monospace;
`
const UpButton = styled.button`
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    height: 70px;
    width: 70px;
    border-radius: 50%;
    margin: 50px;
    padding-top: 5px;
`
const AboutPage = () => (
    <AboutWrapper>
        <TextContent>
            <TextTitle>My Story</TextTitle>
            My passion for computers started at the age of six. Specifically,
            around the time my step-father had to write a note, explaining the
            steps to launch Warcraft 2 from MS-DOS. For me, that note was a
            portal to another world.
            <br />
            A world which I embraced.
            <br />
            <br />
            <strong>
                A lot has changed since those days, but my passion remained.
            </strong>
            <br />
            <br />
            After a time of pursuing other passions, traveling and working
            day-jobs I finally realized my true calling had been there all
            along. In hindsight it's so obvious, but that realization was one of
            the greatest releifs of my life.
            <br />
            <br />
            I finished my bachelor's degree in Systems Science at Luleå Tekniska
            Universitet, 2018. My thesis focused on improving software
            documentation using data visualization. Since then I've focused my
            atention on modern web development. Long term I would love to learn
            more about machine learning.
        </TextContent>
        <TextContent>
            <TextTitle>My Skills</TextTitle>
            Specialized in semantic HTML, modern CSS, JavaScript ES20xx & its
            ecosystem.
            <br />
            <em>Full list of technologies at the bottom of the page.</em>
            <br />
            <br />
            I enjoy working across the stack and always try to choose the right
            tool for the job. Design patterns, testing, software architecture &
            declarative/functional programming are the areas I am most excited
            about at the moment.
            <br />
            The art of writing clean code that is consistent, consise, elegant
            and readable is a fulfulling challenge that I try to get better at
            each day.
            <br />
            The methodologies I embrace in my private work are Agile, Lean
            Software Development & Kanban.
            <br />
            My favorite JS tools are react, redux, webpack, styled-components &
            gatsby.
            <br />
            Other programming languages that I have previous experience with are
            C, C#, Java & php.
            <br />
            <br />
            Full list of technologies available at the bottom of the page.
        </TextContent>
        <TextContent>
            <TextTitle>Personal Life</TextTitle>
            Other great passions are music, strategy games & hiking. My favorite
            technical topics include modern javascript, testing, functional &
            declarative programmering.
        </TextContent>
        <TextContent>html5 css3 javascript react redux gatsby</TextContent>
        <div>
            <FaHtml5 size={44} />
            <FaCss3Alt size={44} />
            <FaJsSquare size={44} />
            <FaReact size={44} />
        </div>

        <UpButton>
            <FaArrowAltCircleUp size={50} />
        </UpButton>
    </AboutWrapper>
)

export default AboutPage
