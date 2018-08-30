import React from 'react'
import styled from 'styled-components'
import { FaReact } from 'react-icons/fa'
import { FaHtml5 } from 'react-icons/fa'
import { FaCss3Alt } from 'react-icons/fa'
import { FaJsSquare } from 'react-icons/fa'

const AboutWrapper = styled.section`
    display: grid;
    background-color: #25008b;
    height: 200vh;
    width: 100vw;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 5fr 1fr;
    line-height: 1.5;
`

const TextContent = styled.div`
    margin: 1.5em 0;
`
const SkillText = styled.div`
    margin: 1.5em 0;
    font-size: 0.5em;
`
const AboutPage = () => (
    <AboutWrapper>
        <TextContent>
            My passion for computer systems was ignited at the ripe age of six.
            I have fond memories of the note that my step-father wrote,
            explaining the steps to launch Warcraft 2 from MS-DOS. A lot has
            changed since then but my passion has remained. Today I focus on
            modern web development specializing in JavaScript but I always enjoy
            learning other technologies. I enjoy working across the whole stack.
            I have previous experience of C, C# Java & php. Methodologies & Best
            practices: Agile LEAN Kanban Mobile-first Bachelor's in Systems
            Science (LTU, 2018).
        </TextContent>
        <TextContent>
            Other great passions are music, strategy games & hiking. My favorite
            technical topics include modern javascript, testing, functional &
            declarative programmering.
            <a href="mailto:oskarhulter@gmail.com">oskarhulter@gmail.com</a>
        </TextContent>
        <SkillText>html5 css3 javascript react redux gatsby</SkillText>
        <div>
            <FaHtml5 size={17} />
            <FaCss3Alt size={17} />
            <FaJsSquare size={17} />
            <FaReact size={17} />
        </div>
    </AboutWrapper>
)

export default AboutPage
