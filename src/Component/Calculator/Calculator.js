import React from "react";
import './Calculator.css'
import { useState } from "react";

export default function Calculator({test}) {

  const [button,setButton] = useState(15);


  function inputBill(event){
    const inputText = event.target.value
    console.log(inputText);
  }

  function buttonPress(event){
    const buttonValue = event.target.innerHTML;
    setButton(buttonValue)
    test(button)
  }


  return (
    <div className="calculator">
      <div>
        <p>Bill</p>
        <input type="text" onChange={inputBill}/>
      </div>
      <div>
        <p>Select Tip %</p>
          <div className="parent">
              <div className="div1"><button onClick={buttonPress}>5%</button></div>
              <div className="div2"> <button onClick={buttonPress}>10%</button></div>
              <div className="div3"><button onClick={buttonPress} id="default">15%</button></div>
              <div className="div4"><button onClick={buttonPress}>25%</button></div>
              <div className="div5"><button onClick={buttonPress}>50%</button></div>
              <div className="div6"><button onClick={buttonPress}>Custom</button></div>
          </div>
      </div>
      <div>
        <div className="calculator-people-text">
              <p>Number of People</p>
              <p id='error-people'>Can't be zero</p>
          </div>
        <input type="text" className="number-people"/>
      </div>  
    </div>
  );
}
