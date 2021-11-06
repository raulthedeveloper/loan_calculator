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
            <button className="bg-red-700 mr-3 hover:bg-red-800 text-white font-bold py-2 px-4 rounded" onClick={viewButton}>View Loans</button>
        </div>
    )
}
