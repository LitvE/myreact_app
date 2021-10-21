import React from "react";
import { Component } from "react";

export class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {
            value: 0,
        };
    }

    increase = ()=>{
        const {value} = this.state
        this.setState({value: value+this.props.step});
    }

    decrease = ()=>{
        const {value} = this.state
        this.setState({value: value-this.props.step});
    }

    render(){
        const {value} = this.state;
        return(
            <div>
                <p>{value}</p>
                <button onClick={this.increase}>+</button>
                <button onClick={this.decrease}>-</button>
            </div>
        );
    }
}