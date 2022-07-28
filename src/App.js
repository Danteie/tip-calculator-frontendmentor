import { useState } from 'react';
import './App.css';
import Calculator from './Component/Calculator/Calculator';
import Display from './Component/Display/Display';


function App() {
 
  const [button,setButton] = useState();

  const test = (i) => {
    setButton(() => i)
    console.log(i);
  }


  return (
    <div className="App">
      <div className='title-text'>
        <h1>SPLI</h1>
        <h1>TTER</h1>
      </div>
      <div className='calculator-body'>
        <Calculator test={test}/>
        <Display button={button}/>
      </div>
      
    </div>
  );
}

export default App;
