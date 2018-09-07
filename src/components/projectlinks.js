import React from 'react'
import styled from 'styled-components'

const StyledProjectLinks = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 95%;
    color: #25008b;
    background-color: #2ea1ab;
    border-bottom-left-radius: 20% 80%;
    border-bottom-right-radius: 20% 80%;
`

const ProjectLinks = () => (
    <StyledProjectLinks>
        <h2>Links: </h2>
        <a href="https://github.com/OskarHulter/portfolio" target="_blank">
            Portfolio Site (github)
        </a>
        <a
            href="http://utbweb.its.ltu.se/~oskhul-5/cms/index.php"
            target="_blank"
        >
            CMS (hosted)
        </a>
        <a
            href="https://github.com/OskarHulter/CMS-school-project-PHP"
            target="_blank"
        >
            CMS (github)
        </a>
        <a
            href="http://utbweb.its.ltu.se/~oskhul-5/Fyrisbiografensvanner/"
            target="_blank"
        >
            Fyrisbiografens Vänner (hosted)
        </a>
        <a
            href="https://github.com/OskarHulter/ltuRegisterGradeAssignment"
            target="_blank"
        >
            REST Backend (github)
        </a>
    </StyledProjectLinks>
)

export default ProjectLinks
