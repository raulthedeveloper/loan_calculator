import React from 'react'
import './ReadMe.css'

export default function HotKeys({hideHotKeys}) {
    return (
        <div id="myModal" class="modal">

    <div class="modal-content">
      <span onClick={hideHotKeys} class="close">&times;</span>
      <h2>Hot Keys</h2>
       <div>
                    <h4>Loan Presets</h4>
                    <ul>
                        <li>Auto Loan: CTRL A</li>
                        <li>Mortage: CTRL M</li>
                        <li>Person Loan: CTRL P</li>
                    </ul>
                    </div>
                    

                    <div>
                    <h4>Loan Values</h4>
                    <ul>
                        <li>Loan Amount: CTRL A</li>
                        <li>Interest: CTRL M</li>
                        <li>Person Loan: CTRL P</li>
                    </ul>
                    </div>

                    <div>
                    <h4>Loan Presets</h4>
                    <ul>
                        <li>Auto Loan: CTRL A</li>
                        <li>Mortage: CTRL M</li>
                        <li>Person Loan: CTRL P</li>
                    </ul>
                    </div> 
    </div>
  
  </div>
    )
}


