import React from 'react'
import styled from 'styled-components'

const AboutWrapper = styled.section`
    display: grid;
    background-color: #25008b;
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
`

const TextContent = styled.div`
    font-size: 1.2em;
    line-height: 1.7;
    margin: 1.5em 0;
`

const AboutPage = () => (
    <AboutWrapper>
        <h1 className="title-main">programmer:</h1>
        <TextContent>
            *Bachelor's Degree in Systems Science (LTU, 2018). *Passion for
            building modern web experiences. *Specialized in JavaScript *enjoys
            learning other technologies. Previous experience: Java C PHP
            Methodologies & Best practices: Agile LEAN Kanban Mobile-first
        </TextContent>
        <h1 className="title">person:</h1>
        <TextContent>
            My personality type is INTP (big 5 psychological test). My other
            great passions are music, strategy games & hiking.
        </TextContent>
        <TextContent>
            My favorite topics include modern javascript, testing, functional &
            declarative programmering. Some of my favorite TOOLS, LEARNING
            RESOURCES, HOBBIES, COLLECTIBLES
        </TextContent>
    </AboutWrapper>
)

export default AboutPage
