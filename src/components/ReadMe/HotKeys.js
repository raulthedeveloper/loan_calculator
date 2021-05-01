import React from 'react'
import './ReadMe.css'

export default function HotKeys({hideHotKeys}) {
    window.onclick = function(event) {
        if (event.target.className === "modal") {
          hideHotKeys()
        }
        
      }
    return (
        <div id="myModal" class="modal">

    <div class="modal-content">
      <span onClick={hideHotKeys} class="close">&times;</span>
      <h2>Hot Keys</h2>
       <div>
                    <h4>Loan Presets</h4>
                    <ul>
                        <li>Auto Loan: SHIFT A</li>
                        <li>Mortage: SHIFT M</li>
                        <li>Personal Loan: SHIFT P</li>
                    </ul>
                    </div>
                    

                    <div>
                    <h4>Loan Values</h4>
                    <ul>
                        <li>Loan Amount: SHIFT L</li>
                        <li>Interest: SHIFT I</li>
                        <li>Term Length: SHIFT T</li>
                    </ul>
                    </div>

                    <div>
                    <h4>View Loans</h4>
                    <ul>
                        <li>Save: SHIFT S</li>
                        <li>Export: SHIFT X</li>
                        <li>Back: SHIFT B</li>
                    </ul>
                    </div> 
    </div>
  
  </div>
    )
}


