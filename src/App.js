import logo from './logo.svg';
import './App.css';
import Hello from './Components/Hello_fun';
import HelloClass from './Components/Hello_class';
import { Component } from 'react';
//import Car from './Components/Car';
import User from './Components/User';

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
/*
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

}*/

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      name: 'Grut',
      age: 25,
      isSelected: false,
    };
  }

  clickHandler = () =>{
    const {isSelected} = this.state;
    this.setState({isSelected: !isSelected});
  }

  render(){
    const {name, age, isSelected} = this.state;
    return <User name={name} age={age} isSelected={isSelected} clickHandler={this.clickHandler}/>;
  }

}

export default App;
