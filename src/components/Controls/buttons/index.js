import { React,useEffect } from 'react'
import './buttons.css'

export default function LoanButtons(props) {




function carLoan(){
    props.presets(8,16,"Car Loan")
}

function mortage(){
    props.presets(50,16,"Mortgage")
}

function personLoan(){
    props.presets(5,36,"Personal Loan")
}

    return (
        <div className="loan-buttons" style={{marginBottom:'2rem'}}>
            <h3 style={{color:"white"}}>Loan Presets</h3>
                <button className="btn" onClick={ carLoan }>Car Loan</button>
                <button className="btn" onClick={ mortage }>Mortgage</button>
                <button className="btn" onClick={ personLoan }>Personal Loan</button>
                </div>
    )
}
