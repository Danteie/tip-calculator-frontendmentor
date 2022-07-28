import React from "react";
import './Calculator.css'
import { useState } from "react";

export default function Calculator({test}) {

  const [button,setButton] = useState();

  function buttonPress(){
    const buttonValue = document.getElementsByTagName("button");
    setButton(() => buttonValue[0].innerHTML)
    test(button)
  }


  return (
    <div className="calculator">
      <div>
        <p>Bill</p>
        <input type="text"/>
      </div>
      <div>
        <p>Select Tip %</p>
          <div className="parent">
              <div className="div1"><button onClick={buttonPress}>5%</button></div>
              <div className="div2"> <button>10%</button></div>
              <div className="div3"><button id="default">15%</button></div>
              <div className="div4"><button>25%</button></div>
              <div className="div5"><button>50%</button></div>
              <div className="div6"><button>Custom</button></div>
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
