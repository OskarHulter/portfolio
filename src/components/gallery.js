import React from 'react'
import Link from 'gatsby-link'
import img from '../img/img.jpg'

const Gallery = props => (
    <div className="container-gallery">
        <div className="img__selected">
            <img src={img} alt="img" />
        </div>
        <div className="imgs">
            <img src="" />
        </div>
    </div>
)

export default Gallery
