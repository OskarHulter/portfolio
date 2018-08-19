import React from 'react'
import img from '../img/img.jpg'
import Carousel from 'nuka-carousel'

const colors = ['7732bb', '047cc0', '00884b', 'e3bc13', 'db7c00', 'aa231f']
class Gallery extends React.Component {
    constructor() {
        super(...arguments)
        this.state = {
            slideIndex: 0,
            length: 6,
            wrapAround: true,
            underlineHeader: false,
            slidesToShow: 1.0,
            cellAlign: 'left',
            transitionMode: 'scroll',
        }
    }

    render() {
        return (
            <div
                style={{
                    width: '100vw',
                    margin: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Carousel
                    transitionMode={this.state.transitionMode}
                    cellAlign={this.state.cellAlign}
                    slidesToShow={this.state.slidesToShow}
                    wrapAround={this.state.wrapAround}
                    slideIndex={this.state.slideIndex}
                    renderBottomCenterControls={({ currentSlide }) => (
                        <div className="hej">
                            My Projects: Slide {currentSlide + 1}
                        </div>
                    )}
                    renderTopCenterControls={({ slideCount }) => (
                        <div>Slide: {slideCount}</div>
                    )}
                >
                    {colors
                        .slice(0, this.state.length)
                        .map((color, index) => (
                            <img
                                src={`http://placehold.it/1000x400/${color}/ffffff/&text=slide${index +
                                    1}`}
                                key={color}
                            />
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
                    <button onClick={() => this.setState({ slideIndex: 5 })}>
                        6
                    </button>
                </div>
            </div>
        )
    }
}

export default Gallery
