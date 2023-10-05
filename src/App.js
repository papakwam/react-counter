import logo from './logo.svg';
import './App.css';
import React, { useState }  from 'react';
import "./Components/s.css"

const App = () => {
  const [number, setNumber] = useState (0);
  const [age, setAge] = useState (23);

  const handleIncrease = () => {
    setAge(age+2);
    setNumber(number+1);
  }

  const handleDecrease = () => {
    setAge(age-2);
    setNumber(number-1);
  }


  return(
  <div className='App'> 
  <h1>{age}</h1>
  <h1>{number}</h1>
  <button onClick={handleIncrease}>Increase</button>
  <button onClick={handleDecrease}>Decrease</button>
  

  </div>)
}

export default App;
