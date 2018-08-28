import React from 'react'
import styled from 'styled-components'
import { FaReact } from 'react-icons/fa'
import { FaHtml5 } from 'react-icons/fa'
import { FaCss3Alt } from 'react-icons/fa'
import { FaJsSquare } from 'react-icons/fa'

const AboutWrapper = styled.section`
    display: grid;
    background-color: #25008b;
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 1fr 5fr;
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
        <div>
            <FaHtml5 size={17} />
            <FaCss3Alt size={17} />
            <FaJsSquare size={17} />
            <FaReact size={17} />
        </div>
        <SkillText>
            <h1 className="title-main">programmer:</h1>
            Passion for modern web. Specializing in JavaScript but enjoys
            learning other technologies. Java C PHP Methodologies & Best
            practices: Agile LEAN Kanban Mobile-first Bachelor's in Systems
            Science (LTU, 2018).
        </SkillText>
        <SkillText>html5 css3 javascript react redux gatsby</SkillText>
        <TextContent>
            <h1 className="title">person:</h1>
            Other great passions are music, strategy games & hiking. My favorite
            technical topics include modern javascript, testing, functional &
            declarative programmering.
        </TextContent>
    </AboutWrapper>
)

export default AboutPage
