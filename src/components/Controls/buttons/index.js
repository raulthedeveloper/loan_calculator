import { React,useEffect } from 'react'
import './buttons.css'
import useHotKeys from '../../../Hooks/useHotKeys'

let prevId

function handleActive(id){
    
    if(!prevId){
        prevId = id
    }


    if(id !== prevId){
        document.getElementById(prevId).classList.remove('active-button') 
        document.getElementById(prevId).classList.add('btn')

        document.getElementById(id).classList.add('active-button')
        document.getElementById(id).classList.remove('btn')
        
    }else{
        document.getElementById(id).classList.add('active-button')
        document.getElementById(id).classList.remove('btn')
    }

    
    

}



export default function LoanButtons(props) {


    useHotKeys('q', () => {
        autoLoan()
        handleActive('auto-loan')
        prevId = 'auto-loan'
        
       })

       useHotKeys('w', () => {
        // Remove and restore previous class
        mortage()
        handleActive('mortgage')
        prevId = 'mortgage'

       })

       useHotKeys('e', () => {
        personLoan()
        handleActive('personal')
        prevId = 'personal'

       })

       
    
 useEffect(()=>{
    personLoan()
    // eslint-disable-next-line
},[])


function autoLoan(){
    props.presets(8,16,"Auto Loan")
    handleActive('auto-loan')
    prevId = 'auto-loan'
}

function mortage(){
    props.presets(50,16,"Mortgage")
    handleActive('mortgage')
    prevId = 'mortgage'
}

function personLoan(){
    props.presets(5,36,"Personal Loan")
    handleActive('personal')
    prevId = 'personal'
}

    return (
        <div className="loan-buttons" style={{marginBottom:'2rem'}}>
            <h3 style={{color:"white"}}>Loan Presets</h3>
                <button id="auto-loan" className="bg-red-700 mr-3  hover:bg-red-800 text-white font-bold py-2 px-4 rounded" onClick={ autoLoan }>Auto Loan</button>
                <button id="mortgage" className="bg-red-700 mr-3 hover:bg-red-800 text-white font-bold py-2 px-4 rounded" onClick={ mortage }>Mortgage</button>
                <button id="personal" className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 md:mt-0 mt-3 px-4 rounded" onClick={ personLoan }>Personal Loan</button>
                </div>
    )
}
