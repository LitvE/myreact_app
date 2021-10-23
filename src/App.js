import logo from './logo.svg';
import './App.css';
import Hello from './Components/Hello_fun';
import HelloClass from './Components/Hello_class';
import { Component } from 'react';
import Car from './Components/Car';

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
 
    return (
      <>
          <Car mark={'Mazda'} type={'CX5'} price={25000}/>
          <Car mark={'Ford'} type={'Fusion'} price={5000}/>
      </>
    );
  }

}


export default App;
