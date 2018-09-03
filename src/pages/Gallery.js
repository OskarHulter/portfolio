import React from 'react'
import img1 from 'img/cms-img1.jpg'
import img2 from 'img/cms-img2.jpg'
import img3 from 'img/cms-img3.jpg'
import img4 from 'img/fbv-img1.jpg'
import img5 from 'img/csc-img1.png'
import img6 from 'img/csc-img2.png'
import Gallery from 'react-grid-gallery'
import styled from 'styled-components'
// Gallery component for showing my projects
const GalleryWrapper = styled.section`
    background-color: #2ea1ab;
    min-height: 20vh;
    width: 95%;
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
            'Designed & coded a responsive website to promote a non-profit organization.',
    },
    {
        src: img1,
        alt: 'Website project image',
        thumbnail: img1,
        thumbnailWidth: 317,
        thumbnailHeight: 317,
        tags: [{ value: 'CMS', title: 'Project Type' }],
        caption: 'Designed & coded a CMS from scratch in php.',
    },
    {
        src: img2,
        alt: 'Website project image',
        thumbnail: img2,
        thumbnailWidth: 317,
        thumbnailHeight: 317,
        tags: [{ value: 'CMS', title: 'Project Type' }],
        caption: 'Admin view of the CMS.',
    },
    {
        src: img3,
        alt: 'Website project image',
        thumbnail: img3,
        thumbnailWidth: 317,
        thumbnailHeight: 317,
        tags: [{ value: 'CMS', title: 'Project Type' }],
        caption:
            'Post list in admin view of CMS. They can be edited & deleted.',
    },
    {
        src: img5,
        alt: 'Website project image',
        thumbnail: img5,
        thumbnailWidth: 333,
        thumbnailHeight: 231,
        tags: [{ value: 'Design Mockup', title: 'Project Type' }],
        caption: 'Mockup of a website I designed.',
    },
    {
        src: img6,
        alt: 'Website project image',
        thumbnail: img6,
        thumbnailWidth: 333,
        thumbnailHeight: 231,
        tags: [{ value: 'Design Mockup', title: 'Project Type' }],
        caption: 'Mockup of a website I designed.',
    },
]

const ProjectGallery = () => (
    <GalleryWrapper>
        <div className="gallery-jump-point" />
        <Gallery
            images={IMAGES}
            rowHeight={300}
            enableImageSelection={false}
            margin={3}
        />
    </GalleryWrapper>
)

export default ProjectGallery
