import React from 'react'
import img1 from '../img/img1.jpg'
import Gallery from 'react-grid-gallery'

const IMAGES = [
    {
        src: img1,
        thumbnail: img1,
        thumbnailWidth: 320,
        thumbnailHeight: 174,
        isSelected: true,
        caption: 'A responsive website built by Me for abc with this and this',
    },
    {
        src: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg',
        thumbnail:
            'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg',
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        tags: [
            { value: 'Ocean', title: 'Ocean' },
            { value: 'People', title: 'People' },
        ],
        caption: 'Boats (Jeshu John - designerspics.com)',
    },

    {
        src: 'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg',
        thumbnail:
            'https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg',
        thumbnailWidth: 320,
        thumbnailHeight: 212,
    },
]

const ProjectPage = () => (
    <section className="project-gallery">
        <Gallery images={IMAGES} />
    </section>
)

export default ProjectPage
