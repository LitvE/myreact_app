import React, { Component } from 'react';
import style from '../Slide/Slide.module.scss';

class Slide extends Component {

    render() {
        const {currentImage} = this.props;

        return (
            <div className={style.slideStyle}>
                <figure>
                <img src={currentImage.src} width={currentImage.width} height={currentImage.height} alt={currentImage.alt}/>
                <figcaption>{currentImage.title}</figcaption>
                </figure>
            </div>
        )
    }
}

export default Slide;