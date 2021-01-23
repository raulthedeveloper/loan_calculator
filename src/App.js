import './App.css';
import Controls from "./components/Controls/Controls"
import Display from "./components/Display/index"
import { useState, useEffect } from 'react'






function App() {

let [term,setTerm] = useState(Number)
let [ amount, setAmount ] = useState(Number)
let [ interest, setInterest ] = useState(Number)
let [ loanType, setLoanType ] = useState(String)



function updateData(term,amount,interest){
  setTerm(term)
  setAmount(amount)
  setInterest(interest)
  
}



useEffect(() =>{
  setTerm(term)
  setAmount(amount)
  setInterest(interest)
  // eslint-disable-next-line
},[])

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
