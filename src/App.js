import './App.css';
import Controls from "./components/Controls/Controls"
import Display from "./components/Display/index"
import { useState } from 'react'






function App() {
let [term,setTerm] = useState(0)
let [ amount, setAmount ] = useState(0)
let [ interest, setInterest ] = useState(0)
let [ loanType, setLoanType ] = useState("")



function updateData(term,amount,interest){
  setTerm(term)
  setAmount(amount)
  setInterest(interest)
  
}

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
