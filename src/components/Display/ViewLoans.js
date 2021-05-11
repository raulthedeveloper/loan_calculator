import React, { useContext } from 'react'
import useHotKeys from '../../Hooks/useHotKeys'

import GlobalContext from '../../store/global-context'

export default function ViewLoans() {
   const context = useContext(GlobalContext)
   
    const viewButton = () =>{
        context.displayLoan(true)
        
    }

    useHotKeys('v', () => {
        viewButton()
      })
    
    return (
        <div>
            <button className="app-button" onClick={viewButton}>View Loans</button>
        </div>
    )
}
