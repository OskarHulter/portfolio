import React from 'react'
import styled from 'styled-components'
import { FaReact } from 'react-icons/fa'
import { FaHtml5 } from 'react-icons/fa'
import { FaCss3Alt } from 'react-icons/fa'
import { FaJsSquare } from 'react-icons/fa'

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
const AboutPage = () => (
    <AboutWrapper>
        <TextContent>
            <TextTitle>My Story</TextTitle>
            My passion for computers started at the age of six. Specifically,
            around the time my step-father had to write a note, explaining the
            steps to launch Warcraft 2 from MS-DOS.
            <br />
            <br />
            A lot has changed since those days, but my passion remained.
            <br />
            <br />
            After a time of pursuing other passions I realized my true calling.
            I finished my degree in Systems Science at Luleå Tekniska
            Universitet, 2018. Since then I've focused my atention on modern web
            development.
        </TextContent>
        <TextContent>
            <TextTitle>My Skills</TextTitle>
            Today I focus on modern web development, specializing in JavaScript.
            I enjoy working across the stack and always try to choose the right
            tool for the job. That said, I do have a few favorites. I have
            previous experience of C, C# Java & php. Methodologies & Best
            practices: Agile LEAN Kanban Mobile-first Bachelor's in Systems
            Science (LTU, 2018).
        </TextContent>
        <TextContent>
            <TextTitle>Personal Life</TextTitle>
            Other great passions are music, strategy games & hiking. My favorite
            technical topics include modern javascript, testing, functional &
            declarative programmering.
        </TextContent>
        <TextContent>html5 css3 javascript react redux gatsby</TextContent>
        <div>
            <FaHtml5 size={32} />
            <FaCss3Alt size={32} />
            <FaJsSquare size={32} />
            <FaReact size={32} />
        </div>
    </AboutWrapper>
)

export default AboutPage
