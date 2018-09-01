import React from 'react'
import img1 from '../img/cms-img1.jpg'
import img2 from '../img/cms-img2.jpg'
import img3 from '../img/cms-img3.jpg'
import img4 from '../img/fbv-img1.jpg'
import img5 from '../img/csc-img1.png'
import img6 from '../img/csc-img2.png'
import img7 from '../img/csc-img3.png'
import Gallery from 'react-grid-gallery'
import styled from 'styled-components'

const GalleryWrapper = styled.section`
    background-color: #2ea1ab;
    min-height: 100vh;
    width: 98vw;
`
const IMAGES = [
    {
        src: img4,
        alt: 'Website project image',
        thumbnail: img4,
        thumbnailWidth: 317,
        thumbnailHeight: 317,
        tags: [{ value: 'Responsive Website', title: 'Project Type' }],
        caption:
            'Built and designed a responsive website to promote a non-profit organization.',
    },
    {
        src: img1,
        alt: 'Website project image',
        thumbnail: img1,
        thumbnailWidth: 317,
        thumbnailHeight: 317,
        tags: [{ value: 'CMS', title: 'Project Type' }],
        caption: 'A responsive website built by Me for abc with this and this',
    },
    {
        src: img2,
        alt: 'Website project image',
        thumbnail: img2,
        thumbnailWidth: 317,
        thumbnailHeight: 317,
        tags: [{ value: 'CMS', title: 'Project Type' }],
        caption:
            'Old cinema chairs and dim-lighting inspired the choice of colors.',
    },
    {
        src: img3,
        alt: 'Website project image',
        thumbnail: img3,
        thumbnailWidth: 317,
        thumbnailHeight: 317,
        tags: [{ value: 'CMS', title: 'Project Type' }],
        caption: 'Something for someone',
    },
    {
        src: img5,
        alt: 'Website project image',
        thumbnail: img5,
        thumbnailWidth: 333,
        thumbnailHeight: 231,
        tags: [{ value: 'Design Mockup', title: 'Project Type' }],
    },
    {
        src: img6,
        alt: 'Website project image',
        thumbnail: img6,
        thumbnailWidth: 333,
        thumbnailHeight: 231,
        tags: [{ value: 'Design Mockup', title: 'Project Type' }],
    },
    {
        src: img7,
        alt: 'Website project image',
        thumbnail: img7,
        thumbnailWidth: 107,
        thumbnailHeight: 182,
        tags: [{ value: 'Design Mockup', title: 'Project Type' }],
    },
]

const ProjectGallery = () => (
    <GalleryWrapper>
        <div className="gallery-jump-point" />
        <Gallery images={IMAGES} rowHeight="325" enableImageSelection={false} />
    </GalleryWrapper>
)

export default ProjectGallery
