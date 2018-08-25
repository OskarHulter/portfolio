/* eslint-disable indent */
import React from 'react'
import img1 from '../img/img1.jpg'
import img2 from '../img/img2.jpg'
import img3 from '../img/img3.jpg'
import img4 from '../img/img4.png'
import img5 from '../img/img5.png'
import img6 from '../img/img6.png'
import Carousel from 'nuka-carousel'

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
/*
! TIPS FOR GETTING STARTED WITH RESPONSIVE IMAGES

The background-size property is ie>=9 only, but if that is fine with you, you can use a div with background-image and set background-size: contain:

div.image{
    background-image: url("your/url/here");
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
}
Now you can just set your div size to whatever you want and not only will the image keep its aspect ratio it will also be centralized both vertically and horizontally within the div. Just don't forget to set the sizes on the css since divs don't have the width/height attribute on the tag itself.

This approach is different than setecs answer, using this the image area will be constant and defined by you (leaving empty spaces either horizontally or vertically depending on the div size and image aspect ratio), while setecs answer will get you a box that exactly the size of the scaled image (without empty spaces).

*/
