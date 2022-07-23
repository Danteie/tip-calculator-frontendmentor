import './App.css';
import Calculator from './Component/Calculator/Calculator';
import Display from './Component/Display/Display';

function App() {
  return (
    <div className="App">
      <div>
        <h1>SPLI</h1>
        <h1>TTER</h1>
      </div>
      <div className='calculator-body'>
        <Calculator/>
        <Display/>
      </div>
      
    </div>
  );
}

export default App;
