import './App.css';
import Controls from "./components/Controls/Controls"
import Display from "./components/Display/index"
import GlobalContext  from "./store/global-context"
import { useState, useEffect } from 'react'
import ClearList from '../src/Hooks/ClearList'


let dataArray = []


function App() {
// Sets up component state

// let [ loanType, setLoanType ] = useState(String)
let [ loanData, setLoanData ] = useState(String)

let [loan,setLoan] = useState({
  term:Number,
  amount:Number,
  interest:Number,
  loanType:String
})


let [ save, setSave ] = useState()

let [ showLoans, setShowLoans ] = useState(false)




/////////////////////Handles Saving to local storage/////////////////

function saveHandler(loanName){
  
  dataArray.push({loanName,loan})
   localStorage.setItem('loans',JSON.stringify(dataArray))
console.log(dataArray)
   setSave(save =>[...(save || [] || {}), {loanName,loan}])

    
}





////////////////////// Displays loan///////////////////////////

function displayLoan(boolean){
  
  setShowLoans(boolean)
  if(localStorage.getItem('loans')){
    let loan = JSON.parse(localStorage.getItem('loans')).dataArray
    setLoanData(loan)
  }
  
}






 ///////////// Wipes all loan data from local storage/////////////////////////
function clearLoans(){
 
  let confirm = window.confirm("Are you sure you want to clear");
  if(confirm){
    localStorage.removeItem('loans');
    console.log(save)
  setSave({})
}
  }
  

// updateData is passed to Controls component in order to get values to set to local state/////////
function updateData(term,amount,interest,loanType){
  setLoan({term,amount,interest,loanType})
  }




  function loadList(){
    if(localStorage.getItem('loans')){
      console.log(JSON.parse(localStorage.getItem('loans')))
      setSave(save =>[...(save || [] || {}), ...JSON.parse(localStorage.getItem('loans'))])
     
    }
  }


useEffect(()=>{
  loadList()
  // setSave(JSON.parse(localStorage.getItem('loans')))
  updateData()

 
},[])


  return (
    <GlobalContext.Provider value={{
      save,
      saveHandler,
      loan,
      displayLoan,
      loanData
    }
      }>
    <div className="App">
    <div className="container">
      <div className="col">
      <Controls updateData={updateData} />  

      {/* updateLoanType={loan.loanType} */}
      </div>
    <div className="col">
    <Display payload={loan} clear={clearLoans} showLoans={showLoans}/>
    </div>

     
    </div>
      
    </div>
    </GlobalContext.Provider>
  );
}

export default App;
