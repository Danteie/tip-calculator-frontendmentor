import React from "react";
import './Display.css'

export default function Display() {
  return (
    <div className="display">
        <div className="display-all">
            <div className="display-screen">
                <div>
                    <p className="white">Tip Amount</p>
                    <p>/ person</p>
                </div>
                    <h1 className="display-total">$0.00</h1>
            </div>
            <div className="display-screen">
                <div>
                    <p className="white">Total</p>
                    <p>/ person</p>
                </div>
                    <h1 className="display-total">$0.00</h1>
            </div>
        </div>
        <button>Restart</button>
    </div>
  );
}
