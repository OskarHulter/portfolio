import React from 'react'
import PropTypes from 'prop-types'

const Card = ({property}) => {
    const {index, picture, description}  = property;
        return (
            <div id={`card-${index}`} className="card">
                <img src={picture} alt={} />
                <div className="details">
                    <span className="index">{index+1}</span>
                    <p className="location">
                        {city}<br />
                        {description}
                    </p>
                    <ul className="features">
                        <li className="technology-icon">{techicon}
                        <span>Technologies</span></li>
                    </ul>
                </div>
            </div>
        )
    }
export default Card