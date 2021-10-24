//import logo from './logo.svg';
import { Component } from 'react';
import './App.css';
//import Hello from './Components/Hello_fun';
//import HelloClass from './Components/Hello_class';
//import { Component } from 'react';
//import Car from './Components/Car';
//import User from './Components/User';
//import UsersList from './Components/UsersList';
//import CarsList from './Components/CarsList';
//import SelectedUsersList from './Components/SelectedUsersList';

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
/*
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

}*/

//const App = () => <UsersList />;
//const App = () => <CarsList />;
/*
const usersDB = [
  {id: 1, name: 'Grut', age: 25},
  {id: 2, name: 'Ella', age: 20},
]

class App extends Component{
  constructor(props){
    super(props);
     this.state = {
      users: usersDB.map((u) => ({
          ...u, 
          isSelected: false,
      })),
  };
}

  setUsers = (newUsers) =>{
    this.setState({users: newUsers});
  }

  render(){
  const {users} = this.state;
    return (
      <>
      <UsersList users={users} setUsers={this.setUsers}/>
      <SelectedUsersList users={users}/>
      </>
    );
  }
}*/

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      count: 0,
    }
    this.updatedCounter = 0;
    console.log('Constructor');
  }
  //after first render
  componentDidMount(){
    console.log('Did mount')
  }
  //after 2...n render
  componentDidUpdate(prevProps, prevState){
    this.updatedCounter++;
    console.log('Did update', this.updatedCounter);
  }
  //before unmount
  componentWillUnmount(){}

  render(){
    return (
      <>
      <div>{this.state.count}</div>
      <button onClick={() => {this.setState({count: this.state.count+1})}}>+</button>
      </>
    );
  }
}

export default App;
