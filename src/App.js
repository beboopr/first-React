import { useState } from 'react'
import logo from './logo.svg';
import './App.css';

const names = ['ED','eddy','Captain ED']

function App() { 
  const [myName,setmyName] = useState('Captain ED')
  const [ counter, setCounter] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {myName} is is cool.
        </p>
        {names.map(name => (
          <button onClick={() => setmyName(name)}>{name}</button>
        ))}
       <button onClick={() =>setmyName('your mom')}>your mom</button>
       <button onClick={() =>setmyName('your mama')}>your mama</button>
       <p>you cliked the button {counter} times</p>
       <button onClick={() => setCounter(counter - 1)}>-1</button>
       <button onClick={() => setCounter(0)}>Reset</button>
       <button onClick={() => setCounter(counter + 1)}>+1</button>
      </header>
    </div>
  );
}

export default App;
