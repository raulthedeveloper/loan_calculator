import React, { useContext,useState,useEffect } from 'react'
import GlobalContext from '../../store/global-context'
import './display.css'

export default function DisplaySavedLoans() {
    let ctx = useContext(GlobalContext)

  

   
    function back(){
       
        ctx.displayLoan(false)
    }

    
      
      

    return (
        <div>
           <h1>Display loan is showing</h1>
           <div style={{overflow:"scroll"}}>
           {
                !ctx.save ? <h3>No Loans saved</h3> :  ctx.save.map((e,index) =>{
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
