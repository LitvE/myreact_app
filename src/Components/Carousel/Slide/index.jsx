import React, { Component } from 'react';
import style from '../Slide/Slide.module.scss';

class Slide extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //        img,
    //     };
        
    // }

    // load = () => {
    //     const {img} = this.state;
    //     const {currentImage: {src}} = this.props;
    //     const {currentImage: {alt}} = this.props;
    //     const {currentImage: {width}} = this.props;
    //     const {currentImage: {height}} = this.props;
    //     img.src = src;
    //     img.width = width;
    //     img.height = height;
    //     img.alt = alt;
    //     this.setState({img: img});
    // }

    // componentDidMount () {
    //     this.load();
    // }


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