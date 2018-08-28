import React from 'react'
import { FaGithub } from 'react-icons/fa'

const GitButton = () => (
    <a href="https://github.com/OskarHulter" target="_blank">
        <button className="button-social">
            <FaGithub size={17} />
        </button>
    </a>
)

export default GitButton
