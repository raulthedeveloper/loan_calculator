import React, { useContext } from 'react'
import GlobalContext from '../../store/global-context'
import useHotKeys from '../../Hooks/useHotKeys'

export default function Save(props) {
 
    const ctx = useContext(GlobalContext)

    useHotKeys('s', () => {
        saveButton()
      })

     const saveButton =  () =>{
        // Save name of loan from loanName and Props to same object to be sent to View Loans
      const loanName = window.prompt("Name of the Loan?")
   
        if(loanName){
            ctx.saveHandler(loanName,ctx.loan,ctx.save)
        }
        

   
    }
   
    
    return (
        <div>
            <button className="bg-red-700 mr-3 hover:bg-red-800 text-white font-bold py-2 px-4 rounded" onClick={saveButton}>Save</button>
        </div>
    )
}
