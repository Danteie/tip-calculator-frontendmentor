import React from "react";
import './Display.css'

export default function Display() {
  return (
    <div className="display">
        <div className="display-screen">
            <div>
                <p>Tip Amount</p>
                <p>/ person</p>
            </div>
                <h1>$0.00</h1>
        </div>
        <div className="display-screen">
            <div>
                <p>Total</p>
                <p>/ person</p>
            </div>
                <h1>$0.00</h1>
        </div>
        <button>Restart</button>
    </div>
  );
}
