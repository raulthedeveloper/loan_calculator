import './App.css';
import Controls from "./components/Controls/Controls"
import Display from "./components/Display/index"
import GlobalContext  from "./store/global-context"
import { useState, useEffect } from 'react'



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


let [ save, setSave ] = useState({
  savedData:Array,
})

let [ showLoans, setShowLoans ] = useState(false)




async function saveHandler(loanName){
 localStorage.removeItem('loans')
  dataArray.push({name:loanName,loan})
 setSave({dataArray})

    
   localStorage.setItem('loans',JSON.stringify(dataArray))


    
}


function displayLoan(boolean){
  

  setShowLoans(boolean)
  if(localStorage.getItem('loans')){
    let loan = JSON.parse(localStorage.getItem('loans')).dataArray
    setLoanData(loan)
  }
  
}

function deleteHandler(){
// Adds delete function to remove items

}



function clearLoans(){
  // Wipes all loan data from local storage
  let confirm = window.confirm("Are you sure you want to clear");
  if(confirm){
    localStorage.removeItem('loans')
  setSave({})
}
  }
  


// updateData is passed to Controls component in order to get values to set to local state
function updateData(term,amount,interest,loanType){
  setLoan({term,amount,interest,loanType})
  }



useEffect(()=>{
  updateData()
  // updateLoanType()

 
},[])


  return (
    <GlobalContext.Provider value={{
      save,
      saveHandler,
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
