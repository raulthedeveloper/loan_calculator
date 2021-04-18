import React, { useState } from 'react'

let newData = []

export default function Save(props) {
    const [ save, setSave ] = useState(false)
    const [ data, setData ] = useState([])


    const saveButton = () =>{
        // Save name of loan from loanName and Props to same object to be sent to View Loans
      const loanName = window.prompt("Name of the Loan?")
        setSave(true)
        newData.push(props)
        console.log(newData)
        setData(newData)
    }
    return (
        <div>
            <button onClick={saveButton}>Save</button>
        </div>
    )
}
