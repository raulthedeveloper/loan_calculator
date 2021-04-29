import React, { useContext,useState,useEffect } from 'react'
import GlobalContext from '../../store/global-context'
import SaveButton from './Save'
import './display.css'

export default function DisplaySavedLoans() {
    let ctx = useContext(GlobalContext)

  console.log(...ctx.save)

   
    function back(){
       
        ctx.displayLoan(false)
    }

    function deleteItem(index){
        // pop item off of state and save new state to local host
        console.log(index)
    }
      
      

    return (
        <div>
           <h1 style={{textAlign:'center'}}>Saved Loans</h1>
           <div >
           {
               
                !ctx.save ? <h3>No Loans saved</h3> :  ctx.save.map((e,index) =>{
                        return <div key={index} className="loan-list">
                            <div className="delete-item" onClick={() => deleteItem(index)}>x</div>
                            <ul style={{listStyle: 'none',paddingLeft: '10px'}}  >
                                <li>Name: {e.loanName}</li>
                                <li>Years: {e.loan.term}</li>
                                <li>Interest: {e.loan.interest}%</li>
                                <li>Amount: ${e.loan.amount}</li>
                                </ul>
                                
                                </div>
                    }) 

                    
                }

                
           </div>
                
                
                <div className="save-buttons">
                <button>Email List</button>
                <SaveButton />
                <button onClick={back}>Back</button>
                </div>

                
           
        </div>
    )
}
