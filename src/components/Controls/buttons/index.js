import React from 'react'
import './buttons.css'

export default function LoanButtons() {


    return (
        <div className="loan-buttons" style={{marginBottom:'2rem'}}>
            <h3 style={{color:"white"}}>Loan Presets</h3>
                <button className="btn">Car Loan</button>
                <button className="btn">Mortgage</button>
                <button className="btn">Personal Loan</button>
                </div>
    )
}
