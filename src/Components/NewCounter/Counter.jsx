import React, { Component } from 'react';
import style from '../NewCounter/NewCounter.module.scss';
import PropTypes from 'prop-types';

class Counter extends Component {
    // constructor(props){
    //     super(props);
    // }

    increase = ()=>{
        const {score, updateScore, step} = this.props;
        let newScore = score + step;
        updateScore(newScore);
   
        //this.setState({value: value+this.props.step});
    }

    decrease = ()=>{
        const {score, updateScore, step} = this.props;
        let newScore = score - step;
        updateScore(newScore);
        //this.setState({value: value-this.props.step});
    }

    render() {
        const {score} = this.props;
        return (
            <div className={style.component1}>
                <p>Component 1</p>
                <p>{score}</p>
                <button onClick={this.increase}>+</button>
                <button onClick={this.decrease}>-</button>
            </div>
        )
    }
}

Counter.propTypes = {
    score: PropTypes.number,
    step: 1,
    updateScore: PropTypes.func.isRequired,
}

Counter.defaultProps = {
    score: 0,
}

export default Counter;