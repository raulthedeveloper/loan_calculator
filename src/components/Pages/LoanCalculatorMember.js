import '../../App.css';
import Controls from "../Controls/Controls"
import Display from "../Display/index"
import GlobalContext  from "../../store/global-context"
import { useState, useEffect } from 'react'
import ReadMe from '../ReadMe/ReadMe'
import HotKey from '../ReadMe/HotKeys'

import { useParams } from 'react-router';
import axios from 'axios'

let dataArray = []


const LoanCalculator = () => {

const userId = useParams().id








  
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

let [demo, setDemo] = useState(Boolean)

let [ showLoans, setShowLoans ] = useState(false)

let [ listItem, setListItem ] = useState(false)

let [ readMe, setReadMe ] = useState(false)

let [ hotKeys, setHotKeys] = useState(false)



/////////////////////Handles Saving to local storage/////////////////

function saveHandler(loanName){
  

    axios.post(`http://localhost:3300/save_loan/${userId}`, {
      name: loanName,
      term:loan.term,
      amount: loan.amount,
      interest:loan.interest,
      loanType:loan.loanType
    })
    .then(function (response) {
     console.log(response.body)
      
    })
    .catch(function (error) {
      console.log(error);
  
  });
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
  setSave([])


}
  }
  


////// updateData is passed to Controls component in order to get values to set to local state/////////
function updateData(term,amount,interest,loanType){
  setLoan({term,amount,interest,loanType})
  }






///////// when page loads checks if localstorage exist if it does it updates the dataArray and save state /////////////
  function loadList(){
    setSave([])

    if(!demo){
      const options = {
        url: `http://localhost:3300/get_loans/${userId}`,
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json;charset=UTF-8',
  
        }
      };
      
      
      axios(options)
        .then(response => {
            console.log(response.data)
  
           setSave(response.data)
            
        });
  
    }else{
            // uses local storage for demo mode

      if(localStorage.getItem('loans')){
        dataArray.push(...JSON.parse(localStorage.getItem('loans')))
        setSave(save =>[...(save || [] || {}), ...JSON.parse(localStorage.getItem('loans'))])
        
      }
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
  setDemo(false)
  loadList()
  updateData()
  

 
},[])


  return (
   
    <GlobalContext.Provider value={{
      save,
      demo,
      clearLoans,
      saveHandler,
      loan,
      displayLoan,
      loanData,
      deleteItem,
      updateCurrentChart,
    }
      }>
    <div className="App py-10 ">
      {
       readMe ? <ReadMe hideReadMe={hideReadMe}/> : null
      }

      {
        hotKeys ? <HotKey hideHotKeys={hideHotKeys}/> : null
      }
      
    <div className="container flex justify-center	m-auto ">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="">
      <Controls showReadMe={showReadMe} showHotKeys={showHotKeys} listItem={listItem} payload={loan} updateData={updateData} />  

      </div>
    <div className="">
    <Display  payload={loan} clear={clearLoans} showLoans={showLoans}/>
    </div>
      </div>
      

     
    </div>
      
    </div>
    </GlobalContext.Provider>
  );
}

export default LoanCalculator
