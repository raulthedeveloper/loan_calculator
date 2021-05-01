import './App.css';
import Controls from "./components/Controls/Controls"
import Display from "./components/Display/index"
import GlobalContext  from "./store/global-context"
import { useState, useEffect } from 'react'
import ReadMe from './components/ReadMe/ReadMe'
import HotKey from './components/ReadMe/HotKeys'


let dataArray = []



var map = {}; 
onkeydown = onkeyup = function(e){
    map[e.key] = e.type === 'keydown';
    // console.log(map)
    if(map["Shift"] && map["S"]){
      alert('saved was pressed')
      map = {}
    }

    if(map["Shift"] && map["E"]){
      alert('Export was pressed')
      map = {}
    }

    if(map["Shift"] && map["A"]){
      alert('Auto Loan Button')
      map = {}
    }

    if(map["Shift"] && map["M"]){
      alert('Mortgage Button')
      map = {}
    }

    if(map["Shift"] && map["P"]){
      alert('Personal Loan Button')
      map = {}
    }

    if(map["Shift"] && map["L"]){
      alert('Loan Amount input')
      map = {}
    }

    if(map["Shift"] && map["I"]){
      alert('Interest Amount input')
      map = {}
    }

    if(map["Shift"] && map["T"]){
      alert('Term Amount input')
      map = {}
    }

   

    if(map["Shift"] && map["V"]){
      alert('View Loans Button')
      map = {}
    }

    if(map["Shift"] && map["Delete"]){
      alert('Clear Loans Button')
      map = {}
    }

  // Clears map object to prevent size doesnt go past 2
   if(Object.keys(map).length >= 2){
     map = {}
   }
}



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

let [ listItem, setListItem ] = useState(false)

let [ readMe, setReadMe ] = useState(false)

let [ hotKeys, setHotKeys] = useState(false)

/////////////////////Handles Saving to local storage/////////////////

function saveHandler(loanName){
  dataArray.push({loanName,loan})
    setSave(save =>[...(save || [] || {}), {loanName,loan}])
    localStorage.setItem('loans',JSON.stringify(dataArray))
}






////////////////////// Displays loan///////////////////////////

function displayLoan(boolean){
  
  setShowLoans(boolean)
  if(localStorage.getItem('loans')){
    let loan = JSON.parse(localStorage.getItem('loans')).dataArray
    setLoanData(loan)
  }
  
}


/////////// Delete List Item ///////////////
function deleteItem(index){
  let newValue = save
  if(newValue.length >= 0){
    newValue.splice(index,1)
    console.log(newValue)
    console.log(newValue.length)
    
  }

  if(newValue.length === 0){
    newValue = []
    console.log(newValue)
   
  }
  dataArray = newValue
  setSave([])
  setSave(save =>[...(save || [] || {}), ...newValue])
  localStorage.setItem('loans',JSON.stringify(newValue))
  
}


///////////// Updates graph when user clicks on saved loan item//////////////////////
function updateCurrentChart(index){
  updateData(
    save[index].loan.term,
    save[index].loan.amount,
    save[index].loan.interest,
    save[index].loan.loanType
  )
  setShowLoans(false)
  setListItem(true)
}






 ///////////// Wipes all loan data from local storage/////////////////////////
function clearLoans(){
 
  let confirm = window.confirm("Are you sure you want to clear");
  if(confirm){
    localStorage.removeItem('loans');
  setSave({})
}
  }
  





////// updateData is passed to Controls component in order to get values to set to local state/////////
function updateData(term,amount,interest,loanType){
  setLoan({term,amount,interest,loanType})
  }






///////// when page loads checks if localstorage exist if it does it updates the dataArray and save state /////////////
  function loadList(){
    setSave([])

    if(localStorage.getItem('loans')){
      dataArray.push(...JSON.parse(localStorage.getItem('loans')))
      setSave(save =>[...(save || [] || {}), ...JSON.parse(localStorage.getItem('loans'))])
      
    }
  
  }




/////////// Shows Read Me /////////////////
 function showReadMe(){
    setReadMe(true)
}

function hideReadMe(){
  setReadMe(false)
}

function showHotKeys(){
  setHotKeys(true)
}

function hideHotKeys(){
  setHotKeys(false)
}




useEffect(()=>{
  loadList()
  updateData()

 
},[])


  return (
    <GlobalContext.Provider value={{
      save,
      saveHandler,
      loan,
      displayLoan,
      loanData,
      deleteItem,
      updateCurrentChart,
    }
      }>
    <div className="App">
      {
       readMe ? <ReadMe hideReadMe={hideReadMe}/> : null
      }

      {
        hotKeys ? <HotKey hideHotKeys={hideHotKeys}/> : null
      }
      
    <div className="container">
      <div className="col">
      <Controls showReadMe={showReadMe} showHotKeys={showHotKeys} listItem={listItem} payload={loan} updateData={updateData} />  

      </div>
    <div className="col">
    <Display  payload={loan} clear={clearLoans} showLoans={showLoans}/>
    </div>

     
    </div>
      
    </div>
    </GlobalContext.Provider>
  );
}

export default App;
