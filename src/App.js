import './App.css';
import Controls from "./components/Controls/Controls"
import Display from "./components/Display/index"

import { useState } from 'react'






function App() {
// Sets up component state
let [term,setTerm] = useState(Number)
let [ amount, setAmount ] = useState(Number)
let [ interest, setInterest ] = useState(Number)
let [ loanType, setLoanType ] = useState(String)


// updateData is passed to Controls component in order to get values to set to local state
function updateData(term,amount,interest){
  setTerm(term)
  setAmount(amount)
  setInterest(interest)

  
}

// function is passed to controls to get loanType string from Controls component
function updateLoanType(loanType){
  setLoanType(loanType)
}



  return (
    <div className="App">
    <div className="container">
      <div className="col">
      <Controls updateData={updateData} updateLoanType={updateLoanType}/>
      </div>
    <div className="col">
    <Display payload={{term,amount,interest,loanType}}/>
    </div>

     
    </div>
      
    </div>
  );
}

export default App;
