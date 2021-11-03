import React, { Component } from 'react'
import Icon from '@mdi/react';
import { mdiSkipPrevious } from '@mdi/js';
import { mdiSkipNext } from '@mdi/js';
import { mdiPlay } from '@mdi/js';
import { mdiPause } from '@mdi/js'; 
import { mdiFullscreen } from '@mdi/js'; 
import { mdiFullscreenExit } from '@mdi/js';
import style from '../Slider/Slider.module.scss';

export class Slider extends Component {

    constructor(props){
        super(props);
        this.state = {
            isPlaying: false,
            isFullScreen: false,
        };

        this.timerId = null;
    }


    handlerPlay = () => {
        const {isPlaying} = this.state;
        const {next} = this.props;
        this.setState({isPlaying: !isPlaying});

        if(!isPlaying){
            this.timerId = setInterval(() =>{
                next();
                console.log('working');
            }, 2000);
        } else {
            clearInterval(this.timerId);
        }
        
    }

    handlerFullScreen = () => {
        const {isFullScreen} = this.state;
        const {setfullScreenMode} = this.props;
        this.setState({isFullScreen: !isFullScreen});
        setfullScreenMode(isFullScreen);
    }

    render() {
        const {isPlaying, isFullScreen} = this.state;
        const {next, prev} = this.props;
        return (
            <div className={style.sliderStyle}>
                <div>
                    <Icon onClick={prev} path={mdiSkipPrevious}/>
                    <Icon onClick={next} path={mdiSkipNext}/>
                </div>
                <div>
                    <Icon onClick={this.handlerPlay} path={isPlaying ?mdiPause : mdiPlay}/>
                    <Icon onClick={this.handlerFullScreen} path={isFullScreen ? mdiFullscreenExit : mdiFullscreen}/>
                </div>
            </div>
        );
    }
}

export default Slider;
