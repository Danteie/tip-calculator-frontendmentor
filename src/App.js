import { useState} from 'react';
import './App.css';
import Calculator from './Component/Calculator/Calculator';
import Display from './Component/Display/Display';


function App() {
 
  const [total,setTotal] = useState();
  const [totalPeople,setPeople] = useState();

  const displayTotal = (t,p) => {
    setTotal(prevTotal => prevTotal = t)
    setPeople(prevPeople => prevPeople = p)
  }

  

  return (
    <div className="App">
      <div className='title-text'>
        <h1>SPLI</h1>
        <h1>TTER</h1>
      </div>
      <div className='calculator-body'>
        <Calculator displayTotal={displayTotal}/>
        <Display total={total} totalPeople={totalPeople}/>
      </div>
      
    </div>
  );
}

export default App;
