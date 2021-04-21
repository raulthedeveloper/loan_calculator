import React, { useContext } from 'react'
import GlobalContext from '../../store/global-context'
import './display.css'

export default function DisplaySavedLoans() {
    let ctx = useContext(GlobalContext)

  
        // const loans = JSON.parse(localStorage.getItem('loans')).dataArray  
    


   
    function back(){
       
        ctx.displayLoan(false)
    }

    return (
        <div>
           <h1>Display loan is showing</h1>
           <div style={{overflow:"scroll"}}>
           {
                  !JSON.parse(localStorage.getItem('loans')) ? <h3>No Loans Saved</h3> : JSON.parse(localStorage.getItem('loans')).map((e,index) =>{
                        return  <ul key={index}>
                                    <li>{e.name}</li>
                                    <li>{e.loan.term}</li>
                                    <li>{e.loan.amount}</li>
                                </ul>
                    }) 
                }
           </div>
                
                
                <div className="save-buttons">
                <button>Email List</button>
                <button onClick={back}>Back</button>
                </div>

                
           
        </div>
    )
}
