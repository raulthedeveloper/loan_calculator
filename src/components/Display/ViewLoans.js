import React, { useContext } from 'react'

import GlobalContext from '../../store/global-context'

export default function ViewLoans() {
   const context = useContext(GlobalContext)
   
    const viewButton = () =>{
        context.displayLoan(true)
    }
    
    return (
        <div>
            <button onClick={viewButton}>View Loans</button>
        </div>
    )
}
