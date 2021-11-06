//import logo from './logo.svg';
//import { Component } from 'react';
import './App.css';
//import Carousel from './Components/Carousel';
import CounterHook from './Components/CounterHook';
//import MouseTracker from './Components/MouseTracker';
//import StopWatch from './Components/Stopwatch';
//import UserList from './Components/UserList';
//import Hello from './Components/Hello_fun';
//import HelloClass from './Components/Hello_class';
//import Car from './Components/Car';
//import User from './Components/User';
//import UsersList from './Components/UsersList';
//import CarsList from './Components/CarsList';
//import SelectedUsersList from './Components/SelectedUsersList';
//import Calendar from './Components/Calendar';
//import Manager from './Components/NewCounter';
//import SimpleForm from './Components/SimpleForm';

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

// class App extends Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       count: 0,
//     }
//     this.updatedCounter = 0;
//     console.log('Constructor');
//   }
//   //after first render
//   componentDidMount(){
//     console.log('Did mount')
//   }
//   //after 2...n render
//   componentDidUpdate(prevProps, prevState){
//     this.updatedCounter++;
//     console.log('Did update', this.updatedCounter);
//   }
//   //before unmount
//   componentWillUnmount(){}

//   render(){
//     return (
//       <>
//       <div>{this.state.count}</div>
//       <button onClick={() => {this.setState({count: this.state.count+1})}}>+</button>
//       </>
//     );
//   }
// }

// class App extends Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       isMounted: false,
//     };
//   }

//   render(){
//     return (
//     <>
//     <button onClick={ () => {this.setState({isMounted: !this.state.isMounted})}}>Show/Hide</button>
//      {!this.state.isMounted && <MouseTracker />}
//      </>
//     );
//   }
// }

// class App extends Component{

//   render(){
//     return (
//     <>
//     <StopWatch />
//     </>
//     );
//   }
// }

// const db = [
//   {id: 1, name: 'name1', surname: 'surname1'},
//   {id: 2, name: 'name2', surname: 'surname2'},
//   {id: 3, name: 'name3', surname: 'surname3'},
// ];

// class App extends Component{
//   constructor(props){
//       super(props);
//       this.state = {
//       users: db.map( u => ({...u, isSelected: false})),
//     };
//   }

//   updateUsers = (newUsers) => {
//     this.setState({users: newUsers});
//   }

//   render(){
//     const {users} = this.state;
//     return (
//     <>
//     <UserList users={users} updateUsers={this.updateUsers}/>
//     <SelectedUsersList users={users}/>
//     </>
//     );
//   }
// }
// const currentDate = new Date('2021, 10, 30');

// const App = () => {

//   return <Calendar currentDate={currentDate}/>;
// }

// const App = () => {

//   return <Manager />

// }

// const dbSlides = [
//   {src: 'https://www.hdcarwallpapers.com/walls/mercedes_amg_f1_w08_eq_power_2017_4k-HD.jpg', title: 'Mercedes F1 Team', alt: 'mercedes'},
//   {src: 'https://besthqwallpapers.com/Uploads/20-2-2020/122474/thumb2-ferrari-sf1000-4k-charles-leclerc-2020-f1-cars-formula-1.jpg', title: 'Ferrari F1 Team', alt: 'ferrari'},
//   {src: 'https://besthqwallpapers.com/Uploads/23-4-2018/49635/thumb2-4k-max-verstappen-close-up-raceway-2018-cars.jpg', title: 'RedBull F1 Team', alt: 'redbull'},
//   {src: 'https://www.f1-fansite.com/wp-content/uploads/2019/11/2019BrazilianGrandPrixSunday_2ST8108.jpg', title: 'McLaren F1 Team', alt: 'mclaren'},
//   {src: 'https://besthqwallpapers.com/Uploads/18-3-2019/83846/thumb2-4k-george-russell-close-up-williams-fw42-raceway.jpg', alt: 'williams'}
// ];

// class App extends Component {

//     constructor(props){
//       super(props);
//       this.state = {
//       slides: dbSlides.map( slide => ({...slide})),
//     };
//   }

//   render(){
//     const {slides} = this.state;
    
//     return <Carousel slides={slides}/>
//   }
  
// }

const App = () => {

  return <CounterHook />

}

export default App;
