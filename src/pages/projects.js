import React from 'react'
import Gallery from '../components/gallery'

const ProjectPage = () => (
    <section
        className="gallery"
        ref={section => {
            this.gallery = section
        }}
    >
        gallery
        <Gallery />
    </section>
)

export default ProjectPage
