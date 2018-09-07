import React from 'react'
import img1 from 'img/cms-img1.jpg'
import img2 from 'img/cms-img2.jpg'
import img3 from 'img/cms-img3.jpg'
import img4 from 'img/fbv-img1.jpg'
import img5 from 'img/csc-img1.png'
import img6 from 'img/csc-img2.png'
import img7 from 'img/preserva-img1.jpg'
import img8 from 'img/preserva-img2.jpg'
import img9 from 'img/preserva-img3.jpg'
import Gallery from 'react-grid-gallery'
import styled from 'styled-components'
// Gallery component for showing my projects
const GalleryWrapper = styled.section`
    background-color: ${props => props.theme.backgroundSecondary};
    min-height: 20vh;
    width: 95%;
`
const IMAGES = [
    {
        src: img4,
        alt: 'Landing Page with a a cinema-photo',
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
        caption: 'Mockup of a landing page I designed for a school project.',
    },
    {
        src: img6,
        alt: 'Website project image',
        thumbnail: img6,
        thumbnailWidth: 333,
        thumbnailHeight: 231,
        tags: [{ value: 'Design Mockup', title: 'Project Type' }],
        caption: 'Mockup of a about page I designed for a school project.',
    },
    {
        src: img7,
        alt: 'Website project image',
        thumbnail: img7,
        thumbnailWidth: 295,
        thumbnailHeight: 265,
        tags: [{ value: 'Design Mockup', title: 'Project Type' }],
        caption: 'Mockup for a user view of a digital conservation app.',
    },
    {
        src: img8,
        alt: 'Website project image',
        thumbnail: img8,
        thumbnailWidth: 295,
        thumbnailHeight: 265,
        tags: [{ value: 'Design Mockup', title: 'Project Type' }],
        caption: 'Mockup of a admin view of a digital conservation app.',
    },
    {
        src: img9,
        alt: 'Website project image',
        thumbnail: img9,
        thumbnailWidth: 153,
        thumbnailHeight: 270,
        tags: [{ value: 'Design Mockup', title: 'Project Type' }],
        caption: 'Mockup of a mobile view of a digital conservation app.',
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
