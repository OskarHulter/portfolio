/* eslint-disable indent */
import React from 'react'
import styled from 'styled-components'
import img1 from '../img/img1.jpg'
import img2 from '../img/img2.jpg'
import img3 from '../img/img3.jpg'
import img4 from '../img/img4.png'
import img5 from '../img/img5.png'
import img6 from '../img/img6.png'
import Carousel from 'nuka-carousel'
import Lightbox from 'react-images'

const GalleryWrapper = styled.section`
    gallery: {
        marginright: -2;
        overflow: 'hidden';
        /*
		@media (min-width: 500px): {
			marginRight: -gutter.large;
		}
        */
    }

    /* anchor */
    thumbnail: {
        boxsizing: 'border-box';
        display: 'block';
        float: 'left';
        line-height: 0;
        padding-right: 2;
        padding-bottom: 2;
        overflow: 'hidden';
        /*
		@media (min-width: 500px): {
			paddingRight: gutter.large;
			paddingBottom: gutter.large;
		}
        */
    }

    ,

	/*orientation */
	landscape: {
        width: '30%';
    }
    square: {
        padding-bottom: 0;
        width: '40%';

        /*
		@media (min-width: 500px): {
			paddingBottom: 0;
		}
        */
    }

    /*actual <img />*/
    source: {
        border: 0;
        display: 'block';
        height: 'auto';
        maxwidth: '100%';
        width: 'auto';
    }
`
class Gallery extends React.Component {
    constructor() {
        super()
        this.state = {
            lightboxIsOpen: 'False',
            currentImage: 0,
        }

        this.closeLightbox = this.closeLightbox.bind(this)
        this.gotoNext = this.gotoNext.bind(this)
        this.gotoPrevious = this.gotoPrevious.bind(this)
        this.gotoImage = this.gotoImage.bind(this)
        this.handleClickImage = this.handleClickImage.bind(this)
        this.openLightbox = this.openLightbox.bind(this)
    }

    openLightbox(index, event) {
        event.preventDefault()
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        })
    }
    closeLightbox() {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        })
    }
    gotoPrevious() {
        this.setState({
            currentImage: this.state.currentImage - 1,
        })
    }
    gotoNext() {
        this.setState({
            currentImage: this.state.currentImage + 1,
        })
    }
    gotoImage(index) {
        this.setState({
            currentImage: index,
        })
    }
    handleClickImage() {
        if (this.state.currentImage === this.props.images.length - 1) return

        this.gotoNext()
    }
    renderGallery() {
        const { images } = this.props

        if (!images) return

        const gallery = images.filter(i => i.useForDemo).map((obj, i) => {
            return (
                <a
                    href={obj.src}
                    className={(thumbnail, obj.orientation)}
                    key={i}
                    onClick={e => this.openLightbox(i, e)}
                >
                    <img src={obj.thumbnail} className={source} />
                </a>
            )
        })

        return <div className={gallery}>{gallery}</div>
    }
    render() {
        return (
            <GalleryWrapper>
                {this.props.heading && <h2>{this.props.heading}</h2>}
                {this.props.subheading && <p>{this.props.subheading}</p>}
                {this.renderGallery()}
                <Lightbox
                    currentImage={this.state.currentImage}
                    images={this.props.images}
                    isOpen={this.state.lightboxIsOpen}
                    onClickImage={this.handleClickImage}
                    onClickNext={this.gotoNext}
                    onClickPrev={this.gotoPrevious}
                    onClickThumbnail={this.gotoImage}
                    onClose={this.closeLightbox}
                    preventScroll={this.props.preventScroll}
                    showThumbnails={this.props.showThumbnails}
                    spinner={this.props.spinner}
                    spinnerColor={this.props.spinnerColor}
                    spinnerSize={this.props.spinnerSize}
                    theme={this.props.theme}
                />
            </GalleryWrapper>
        )
    }
}
Gallery.displayName = 'Gallery'
/*
Gallery.propTypes = {
    heading: PropTypes.string,
    images: PropTypes.array,
    showThumbnails: PropTypes.bool,
    subheading: PropTypes.string,
}
*/
/*
const gutter = {
    small: 2,
    large: 4,
}
*/
export default Gallery
