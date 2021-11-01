import React, { Component } from 'react'
import Icon from '@mdi/react';

export class Slider extends Component {

    constructor(props){
        super(props);
        this.state = {
            isPlaying: false,
            isFullScreen: false,
        };

        this.timerId = null;
    }

    handlePlay = () => {
        const {isPlaying} = this.state;
        this.setState({isPlaying: !isPlaying});
    }

    handleFullScreen = () => {
        const {isFullScreen} = this.state;
        const {setfullScreenMode} = this.props;
        this.setState({isFullScreen: !isFullScreen});
        setfullScreenMode(isFullScreen);
    }

    render() {
        const {isPlaying, isFullScreen} = this.state;
        const {next, prev} = this.props;
        return (
            <div>
                <div>
                    <Icon onClick={prev} path={mdiSkipPrevios}/>
                    <Icon onClick={next} path={mdiSkipNext}/>
                </div>
                <div>
                    <Icon onClick={this.handlePlay} path={isPlaying ?mdiPause : mdiPlay}/>
                    <Icon onClick={this.handleFullScreen} path={isFullScreen ? mdiFullscreenExit : mdiFullscreen}/>
                </div>
            </div>
        )
    }
}

export default Slider;
