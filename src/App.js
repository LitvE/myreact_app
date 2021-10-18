import logo from './logo.svg';
import './App.css';
import Hello from './Components/Hello';

function App() {
  return (
  <>
  <Hello name={'John'} surname={'Dow'} />
  <Hello name={'Ivan'} surname={'Ivanov'} />
  <Hello name={'Petr'} surname={'Petrov'} />
  </>
  );
}

export default App;
