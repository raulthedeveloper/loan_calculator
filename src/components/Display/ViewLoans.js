import React, { useState } from 'react'



export default function ViewLoans() {
    const [view, setView ] = useState(false)

    const viewButton = () =>{
        alert("View Loan has been pressed")
        setView(true)
    }
    
    return (
        <div>
            <button onClick={viewButton}>View Loans</button>
        </div>
    )
}
