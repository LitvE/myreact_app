import React from 'react'
import Counter from './Counter'
import Level from './Level'
import style from '../NewCounter/NewCounter.module.scss';

class Manager extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            score: 50,
        };
    }

    updateScore = (newScore) => {
      this.setState({score: newScore});
    }

    render(){
        const {score} = this.state;
        return (
            <div className={style.component3}>
                <p>Component 3</p>
                <Counter score={score} step={5} updateScore={this.updateScore}/>
                <Level score={score}/>
            </div>
        )
    }
}

export default Manager;
