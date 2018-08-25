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

const AboutPage = () => (
    <AboutWrapper>
        <h1 className="title-main">programmer:</h1>
        <p className="content">
            *Bachelor's Degree in Systems Science (LTU, 2018). *Passion for
            building modern web experiences. *Specialized in JavaScript *enjoys
            learning other technologies. Previous experience: Java C PHP
            Methodologies & Best practices: Agile LEAN Kanban Mobile-first
        </p>
        <h1 className="title">person:</h1>
        <p className="content">
            My personality type is INTP (big 5 psychological test). My other
            great passions are music, strategy games & hiking.
        </p>
        <p className="content">
            My favorite topics include modern javascript, testing, functional &
            declarative programmering.
        </p>
    </AboutWrapper>
)

export default AboutPage
