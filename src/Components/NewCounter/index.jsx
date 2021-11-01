import React from 'react'
import Counter from './Counter'
import Level from './Level'
import style from '../NewCounter/NewCounter.module.scss';

class Manager extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            score: 0
        };
    }

    setScore = (newScore) => {
      this.setState({score: newScore});
    }

    handleScore = ({target: {value}}) => {
        this.setState({score: value});
        //console.log(value);
    }


    handleSubmit = e =>{
        e.preventDefault();
    }

    render(){
        const {score} = this.state;
        return (
            <div className={style.component3}>
                <p>Component 3</p>
                <form>
                    <p>Component 3</p>
                    <input type='text' name='score' value={score} onChange={this.handleScore} ></input>
                    <button type='submit'>Submit</button>
                </form>
                <Counter score={score} step={5} setScore={this.setScore}/>
                <Level score={score}/>
            </div>
        )
    }
}

export default Manager;
