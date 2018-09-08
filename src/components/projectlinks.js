import React from 'react'
import styled, { injectGlobal } from 'styled-components'

const StyledProjectLinks = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    color: ${props => props.theme.backgroundMain};
    background-color: ${props => props.theme.backgroundSecondary};
    border-bottom-left-radius: 20% 80%;
    border-bottom-right-radius: 20% 80%;
    font-family: ${props => props.theme.textFont};
    margin-bottom: 3em;
`

const ProjectLinks = () => (
    <StyledProjectLinks>
        <li>
            <a href="https://github.com/OskarHulter/portfolio" target="_blank">
                Portfolio Site (github)
            </a>
        </li>
        <li>
            <a
                href="http://utbweb.its.ltu.se/~oskhul-5/cms/index.php"
                target="_blank"
            >
                CMS (hosted)
            </a>
        </li>
        <li>
            <a
                href="https://github.com/OskarHulter/CMS-school-project-PHP"
                target="_blank"
            >
                CMS (github)
            </a>
        </li>
        <li>
            <a
                href="http://utbweb.its.ltu.se/~oskhul-5/Fyrisbiografensvanner/"
                target="_blank"
            >
                Fyrisbiografens Vänner (hosted)
            </a>
        </li>
        <li>
            <a
                href="https://github.com/OskarHulter/ltuRegisterGradeAssignment"
                target="_blank"
            >
                REST Backend (github)
            </a>
        </li>
    </StyledProjectLinks>
)

export default ProjectLinks
