import React from 'react'
import img1 from '../img/img1.jpg'
import img2 from '../img/img2.jpg'
import img3 from '../img/img3.jpg'
import Gallery from 'react-grid-gallery'
import styled from 'styled-components'

const IMAGES = [
    {
        src: img1,
        alt: 'Website project image',
        thumbnail: img1,
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        tags: [{ value: 'php', title: 'php' }],
        caption: 'A responsive website built by Me for abc with this and this',
    },
    {
        src: img2,
        alt: 'Website project image',
        thumbnail: img2,
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [
            { value: 'html', title: 'html' },
            { value: 'css', title: 'css' },
        ],
        caption:
            'Website for a local non-profit cinema club. Old cinema chairs and dim-lighting inspired the choice of colors.',
    },

    {
        src: img3,
        alt: 'Website project image',
        thumbnail: img3,
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [
            { value: 'html', title: 'html' },
            { value: 'css', title: 'css' },
        ],
        caption: 'Something for someone',
    },
    {
        src: img3,
        alt: 'Website project image',
        thumbnail: img3,
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [
            { value: 'html', title: 'html' },
            { value: 'css', title: 'css' },
        ],
    },
    {
        src: img3,
        alt: 'Website project image',
        thumbnail: img3,
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [
            { value: 'html', title: 'html' },
            { value: 'css', title: 'css' },
        ],
    },
]

const GalleryWrapper = styled.section`
    background-color: #2ea1ab;
    height: 100vh;
    width: 100vw;
`

const ProjectPage = () => (
    <GalleryWrapper>
        <div className="project-gallery" />
        <Gallery images={IMAGES} />
    </GalleryWrapper>
)

export default ProjectPage
