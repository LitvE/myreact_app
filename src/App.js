import logo from './logo.svg';
import './App.css';
import Hello from './Components/Hello_fun';
import HelloClass from './Components/Hello_class';
import { Component } from 'react';
import { Counter } from './Components/Counter';

// <>...</> сокращенная запись <React.Fragment></React.Fragment>
//REACT компоненты бывают 2-ч видов: функциональные (function) и классовые (Class)

/*
function App() {
  return (
  <>
  <Hello name={'John'} surname={'Dow'} />
  <Hello name={'Ivan'} surname={'Ivanov'} />
  <Hello name={'Petr'} surname={'Petrov'} />
  </>
  );
}*/

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
        username: 'unknown user',
        isSaying: false,
    };
  }

  render(){
    const {username, isSaying} = this.state;
    return (
      <>
      <Hello name={username}/>
      <HelloClass name={username} greeting={isSaying}/>
      <Counter step={5}/>
      </>
    );
  }

}


export default App;
