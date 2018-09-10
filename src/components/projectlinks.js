import React from 'react'
import styled from 'styled-components'

const StyledProjectLinks = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 3fr 3fr;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    color: ${props => props.theme.fontColor};
    background-color: ${props => props.theme.backgroundMain};
    border-bottom-left-radius: 20% 20%;
    border-bottom-right-radius: 20% 20%;
    font-family: ${props => props.theme.textFont};
    padding-bottom: 1em;
    margin-bottom: 2em;
    min-height: 250px;
`
const ProjectLink = styled.li`
    text-align: center;
    a {
        color: ${props => props.theme.fontColor};
        text-decoration-line: underline;
    }
`
const ProjectLinkTitle = styled.h2`
    grid-column-start: span 3;
    text-align: center;
    font-family: ${props => props.theme.headerFont};
`
const ProjectLinks = () => (
    <StyledProjectLinks>
        <ProjectLinkTitle>Project Links</ProjectLinkTitle>
        <ProjectLink>
            <a
                href="https://github.com/OskarHulter/portfolio"
                target="_blank"
                rel="noreferrer"
            >
                Portfolio Site
            </a>
        </ProjectLink>
        <ProjectLink>
            <a
                href="http://utbweb.its.ltu.se/~oskhul-5/cms/index.php"
                target="_blank"
                rel="noreferrer"
            >
                CMS, hosted
            </a>
        </ProjectLink>
        <ProjectLink>
            <a
                href="https://github.com/OskarHulter/CMS-school-project-PHP"
                target="_blank"
                rel="noreferrer"
            >
                CMS, git
            </a>
        </ProjectLink>
        <ProjectLink>
            <a
                href="http://utbweb.its.ltu.se/~oskhul-5/Fyrisbiografensvanner/"
                target="_blank"
                rel="noreferrer"
            >
                FBV Website
            </a>
        </ProjectLink>
        <ProjectLink>
            <a
                href="https://github.com/OskarHulter/ltuRegisterGradeAssignment"
                target="_blank"
                rel="noreferrer"
            >
                REST-API
            </a>
        </ProjectLink>
    </StyledProjectLinks>
)

export default ProjectLinks
