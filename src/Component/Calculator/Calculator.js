import React from "react";
import './Calculator.css'

export default function Calculator() {
  return (
    <div className="calculator">
        <p>Bill</p>
        <input type="text"/>
        <p>Select Tip %</p>
        <div class="parent">
            <div class="div1"><button>5%</button></div>
            <div class="div2"> <button>10%</button></div>
            <div class="div3"><button id="default">15%</button></div>
            <div class="div4"><button>25%</button></div>
            <div class="div5"><button>50%</button></div>
            <div class="div6"><button>Custom</button></div>
        </div>
        <div className="calculator-people-text">
            <p>Number of People</p>
            <p>Can't be zero</p>
        </div>
        <input type="text"/>
    </div>
  );
}
