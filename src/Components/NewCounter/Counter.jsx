import React, { Component } from 'react'

class Counter extends Component {
    // constructor(props){
    //     super(props);
    // }

    increase = ()=>{
        const {score, updateScore} = this.props;
        let newScore = score + 1;
        updateScore(newScore);
   
        //this.setState({value: value+this.props.step});
    }

    decrease = ()=>{
        const {score, updateScore} = this.props;
        let newScore = score - 1;
        updateScore(newScore);
        //this.setState({value: value-this.props.step});
    }

    render() {
        const {score} = this.props;
        return (
            <div>
                <p>{score}</p>
                <button onClick={this.increase}>+</button>
                <button onClick={this.decrease}>-</button>
            </div>
        )
    }
}

export default Counter;