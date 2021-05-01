import React from 'react'
import './ReadMe.css'

export default function ReadMe({hideReadMe}) {

    window.onclick = function(event) {
        if (event.target.className === "modal") {
          hideReadMe()
        }
        
      }

    return (<div id="myModal" class="modal">

    <div class="modal-content">
      <span onClick={hideReadMe} class="close">&times;</span>
      <h2>Welcome To Loan Logger</h2>
        <p>Loan logger like the name implies is designed to make logging loan data and visualizing payments easy</p>
    </div>
  
  </div>


    )
}


