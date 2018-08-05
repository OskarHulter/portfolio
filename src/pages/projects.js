import React from 'react'
import Link from 'gatsby-link'
import Gallery from '../components/gallery'

const ProjectPage = () => (
    <div className="project-page">
        <Gallery />
        <p>Project Gallery</p>
    </div>
)

export default ProjectPage

export const pageQuery = graphql`
    query GalleryImageQuery {
        galleryImage: imageSharp(id: { regex: "/img/" }) {
            sizes(maxWidth: 1240) {
                ...GatsbyImageSharpSizes
            }
        }
    }
`
