import React, { Component } from 'react'
import Slide from './Slide';
import Slider from './Slider';

export class Carousel extends Component {

    constructor(props){
        super(props);
        this.state = {
            index: 0,
            width: 600,
            height: 450,
        }
    }

    setfullScreenMode = (isFullScreen) =>{
        if(!isFullScreen){
            this.setState({width: window.innerWidth});
            this.setState({height: window.innerHeight});
        } else {
            this.setState({width: 600});
            this.setState({height: 450});
        }
    }

    setNextImage = () => {
        const {index} = this.state;
        const {slides} = this.props;
        this.setState({index: ((index+1) + slides.length) % slides.length});
    }

    setPrevImage = () => {
        const {index} = this.state;
        const {slides} = this.props;
        this.setState({index: ((index-1) + slides.length) % slides.length});
    }

    render() {
        const {index} = this.state;
        const {slides} = this.props;
        const {width, height} = this.state;

        const currentImage = {...slides[index], width: width, height: height};

        return (
            <div>
                <Slide currentImage={currentImage}/>
                <Slider next={this.setNextImage} prev={this.setPrevImage} setfullScreenMode={this.setfullScreenMode}/>
            </div>
        )
    }
}

export default Carousel;
