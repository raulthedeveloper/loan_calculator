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
      <div className="hotkey-container" style={{display: 'flex', justifyContent: 'space-around'}}>
                  <div >
                    <h4>Loan Presets</h4>
                    <ul>
                        <li>Auto Loan: Q</li>
                        <li>Mortage: W</li>
                        <li>Personal Loan: E</li>
                    </ul>
                    </div>
                    

                    <div>
                    <h4>Loan Values</h4>
                    <ul>
                        <li>Loan Amount: U</li>
                        <li>Interest: I</li>
                        <li>Term Length: P</li>
                    </ul>
                    </div>

                    <div>
                    <h4>View Loans</h4>
                    <ul>
                        <li>Save: S</li>
                        <li>Export: X</li>
                        <li>Back: B</li>
                    </ul>
                    </div> 
      </div>
              

                    
    </div>
  
  </div>
    )
}


