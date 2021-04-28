import React, { useContext } from 'react'
import GlobalContext from '../../store/global-context'

export default function Save(props) {
 
    const ctx = useContext(GlobalContext)

    

     const saveButton =  () =>{
        // Save name of loan from loanName and Props to same object to be sent to View Loans
      const loanName = window.prompt("Name of the Loan?")
   
        if(loanName){
            ctx.saveHandler(loanName,ctx.loan,ctx.save)
        }
        

   
    }
   
    
    return (
        <div>
            <button onClick={saveButton}>Save</button>
        </div>
    )
}
