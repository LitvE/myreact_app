import React from 'react'
import Counter from './Counter'
import Level from './Level'

class Manager extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            score: 50,
        };
    }

    updateScore = (newScore) => {
        let {score} = this.state;
      this.setState({score: newScore});
      console.log('NewSore from APP' + newScore);
      console.log('Score From App ' + score)
    }

    render(){
        const {score} = this.state;
        return (
            <div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore, error.</p>
                <Counter score={score} updateScore={this.updateScore}/>
                <Level score={score}/>
            </div>
        )
    }
}

export default Manager;
