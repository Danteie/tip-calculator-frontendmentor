import React from "react";
import './Display.css'

export default function Display({total,totalPeople}) {

    function refreshPage(){
        window.location.reload();
    } 


  return (
    <div className="display">
        <div className="display-all">
            <div className="display-screen">
                <div>
                    <p className="white">Tip Amount</p>
                    <p>/ person</p>
                </div>
                    <h1 className="display-total">${totalPeople}</h1>
            </div>
            <div className="display-screen">
                <div>
                    <p className="white">Total</p>
                    <p>/ person</p>
                </div>
                    <h1 className="display-total">${total}</h1>
            </div>
        </div>
        <button onClick={refreshPage} className='restart'>RESET</button>
    </div>
  );
}
