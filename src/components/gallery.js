/* eslint-disable indent */
import React from 'react'
import img1 from '../img/img1.jpg'
import img2 from '../img/img2.jpg'
import img3 from '../img/img3.jpg'
import img4 from '../img/img4.png'
import img5 from '../img/img5.png'
import img6 from '../img/img6.png'
import Carousel from 'nuka-carousel'
/* 
{
    const projectName: 'stressless.productions',
    const description = 'Platform for downloading royalty-free music. Under Construction',
    const technologies used = 'html'

}
*/
const imageDescription1 = ''

const projectImages = [
    'Fyrisbiografens Vänner',
    'CMS in PHP',
    'Grading Backend',
    'stressless.productions',
    'festivaltent.shop',
]
const images = [img1, img2, img3, img4, img5, img6]
class Gallery extends React.Component {
    constructor() {
        super(...arguments)
        this.state = {
            slideIndex: 0,
            length: 5,
            wrapAround: true,
            underlineHeader: false,
            slidesToShow: 1.0,
            cellAlign: 'left',
            transitionMode: 'scroll',
        }
    }
    getImage(currentSlide) {
        switch (currentSlide) {
            case 0:
                return img1
            case 1:
                return img2
            case 2:
                return img3
            case 3:
                return img4
            case 4:
                return img5
            default:
                return img6
        }
    }
    render() {
        return (
            <div className="gallery-carousel">
                <Carousel
                    transitionMode={this.state.transitionMode}
                    cellAlign={this.state.cellAlign}
                    slidesToShow={this.state.slidesToShow}
                    wrapAround={this.state.wrapAround}
                    slideIndex={this.state.slideIndex}
                    /* 
                    renderBottomCenterControls={({ description, currentSlide }) => (
                        <div className="project-description-text">
                            My Projects: Slide {currentSlide + 1}
                        </div>
                    )}
                    */
                    renderBottomCenterControls={({ currentSlide }) => (
                        <div className="hej">
                            My Projects: Slide {currentSlide + 1}
                        </div>
                    )}
                    renderTopCenterControls={({ slideCount }) => (
                        <div>Slide: {slideCount}</div>
                    )}
                >
                    {images
                        .slice(0, this.state.length)
                        .map((image, index) => (
                            <img src={this.getImage(index)} key={index} />
                        ))}
                </Carousel>
                <div className="project-gallery-buttons">
                    <button onClick={() => this.setState({ slideIndex: 0 })}>
                        1
                    </button>
                    <button onClick={() => this.setState({ slideIndex: 1 })}>
                        2
                    </button>
                    <button onClick={() => this.setState({ slideIndex: 2 })}>
                        3
                    </button>
                    <button onClick={() => this.setState({ slideIndex: 3 })}>
                        4
                    </button>
                    <button onClick={() => this.setState({ slideIndex: 4 })}>
                        5
                    </button>
                </div>
            </div>
        )
    }
}

export default Gallery
