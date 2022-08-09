import React from "react";
import './Calculator.css'
import { useState,useEffect  } from "react";

export default function Calculator({displayTotal}) {

  const [button,setButton] = useState(15); // default state for tip button
  const [custom,setCustom] = useState(); // Custom input for tip %
  const [bill,setBill] = useState(0.00); // input of bill
  const [people,setPeople] = useState(1); // input nuber of people
 

  function inputBill(event){
    const inputText = event.target.value
    setBill(prevCount => prevCount = inputText)
  }

  function inputPeople(event){
    const inputPeople = event.target.value
    if(!inputPeople){
      document.getElementById("error-people").style.opacity = 1;
    }else{
      document.getElementById("error-people").style.opacity = 0;
    }
    setPeople(prevPeople => prevPeople = inputPeople)
  }
  
  function buttonPress(event){
    //default style for button
    const defuatlStyle = document.getElementsByClassName('default');
    if (defuatlStyle.length != 0) {
      defuatlStyle[0].classList.remove('default')
    }
    const buttonStyle = event.target;
    buttonStyle.classList.add('default')
    //remove custom input
    const customInput = document.getElementsByClassName('custom-input')[0]
    if (customInput.value) {
      customInput.value = ''
      setCustom(prevCustom => prevCustom = '')
    }
  
    //button value
    const buttonValue = event.target.innerHTML;
    setButton(prevButton => prevButton = buttonValue)
  }

  function customPress(event){
    //remove default style for button
    const defuatlStyle = document.getElementsByClassName('default');
    if (defuatlStyle.length != 0) {
      defuatlStyle[0].classList.remove('default')
    }
    
   
    
    //set custom tip input
    const customInput = event.target.value;
    setCustom(prevCustom => prevCustom = customInput)
  }


  useEffect(()=>{
    let total = ''

    if(!custom){
      total  = bill * parseInt(button)/100
    }else{
      total  = bill * parseInt(custom)/100
    }
    
    const totalPeople = total / people
    displayTotal(total.toFixed(2),totalPeople.toFixed(2))
  },[bill,button,people,custom,displayTotal])

  
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
              <div className="div3"><button onClick={buttonPress} className="default">15%</button></div>
              <div className="div4"><button onClick={buttonPress}>25%</button></div>
              <div className="div5"><button onClick={buttonPress}>50%</button></div>
              <div className="div6">
                <input type="text" placeholder="CUSTOM" className="custom-input" onChange={customPress}/></div>
          </div>
      </div>
      <div>
        <div className="calculator-people-text">
              <p>Number of People</p>
              <p id='error-people'>Can't be zero</p>
          </div>
        <input type="text" className="number-people" onChange={inputPeople} placeholder='1'/>
      </div>  
    </div>
  );
}
