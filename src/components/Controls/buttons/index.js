import { React,useEffect } from 'react'
import './buttons.css'

export default function LoanButtons(props) {

    
 useEffect(()=>{
    personLoan()
    // eslint-disable-next-line
},[])


function autoLoan(){
    props.presets(8,16,"Auto Loan")
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
                <button className="btn" onClick={ autoLoan }>Auto Loan</button>
                <button className="btn" onClick={ mortage }>Mortgage</button>
                <button className="btn" onClick={ personLoan }>Personal Loan</button>
                </div>
    )
}
