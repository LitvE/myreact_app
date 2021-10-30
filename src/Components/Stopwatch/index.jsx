import React, { Component } from 'react'

export default class StopWatch extends Component {
    constructor(props){
        super(props);
        this.state = {
            time: 0,
        };
        this.timerId = null;
    }

    tick = () =>{
        this.setState({time: this.state.time+1});
        // this.setState((state, props) => {
        //     return {time: this.state.time +1};
        // });
    }

    reset = () => {
        this.setState({time: 0});
    };

    start = () => {
        if(!this.timerId){
            this.timerId = setInterval(this.tick, 1000);
        }        
    };

    stop = () => {
        clearInterval(this.timerId);
        this.timerId = null;
    };

    componentDidMount(){
        this.start();
    }

    componentDidUpdate(prevProps, prevState){};

    render() {
        const {time} = this.state;
        return (
            <div>
                <h1>{time}</h1>
                <button onClick={this.start}>Start</button>
                <button onClick={this.stop}>Stop</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        )
    }
}
