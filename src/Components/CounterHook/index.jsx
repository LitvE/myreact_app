/*
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
}*/

import React, { useState } from 'react'

function CounterHook() {

    const [value, setValue] = useState(0);

    function inc (){
        setValue(value + 1);
    }

    /*
    const inc = (){
        setValue(value + 1);
    }
    */

    function dec (){
        setValue(value - 1);
    }

    /*
    const dec = (){
        setValue(value - 1);
    }
    */

    return (
        <div>
            <p>{value}</p>
            {/* <button onClick={()=> setValue(value + 1)}>+</button>
            <button onClick={()=> setValue(value - 1)}>-</button> */}
            <button onClick={inc}>+</button>
            <button onClick={dec}>-</button>
        </div>
    )
}

export default CounterHook;
