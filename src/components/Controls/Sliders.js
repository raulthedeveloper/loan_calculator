import { React } from 'react'
import './controls.css'
import useHotKeys from '../../Hooks/useHotKeys'




export default function Sliders(props) {
  



let {interestMax,termMax,interest,term,amount } = props.data

// Contraints wont let user input values higher than maximum
let interestConstraint = interest >= interestMax ? interestMax : interest
let termConstraint = term >= termMax ? termMax : term


//   Change amount method is sent to slider componenent and value 
//   from sliders and input is sent to the parent (Control component) with change methods
  


useHotKeys('u', () => {
   
    document.getElementById("amount").focus();
    document.getElementById("amount").select();
   })

   useHotKeys('i', () => {
    document.getElementById("interest").focus();
    document.getElementById("interest").select();
   })

   useHotKeys('o', () => {
    document.getElementById("term").focus();
    document.getElementById("term").select();
   })


function changeAmount(e){
    if(e.target.value < 0){
        props.changeAmount(1)
    }else{
        props.changeAmount(e.target.value)
    }
      
}

function changeInterest(e){
    if(e.target.value < 0){
        props.changeInterest(1)
    }else if(e.target.value >= interestMax){
        props.changeInterest(interestMax)
    }else{
        props.changeInterest(e.target.value)
    }
    

}

function changeTerm(e){
    if(e.target.value < 0){
        props.changeInterest(1)
    }
   else if(e.target.value >= termMax){
        props.changeTerm(termMax)
    }else{
        props.changeTerm(e.target.value)
    }
    
}


    return (
        <div>
            <label>Loan Amount <span><em>(max $1,000,000)</em></span></label>
            <div className="slidecontainer">

                <input type="range" min="1" max="1000000" value={amount} className="slider" onChange={(e)=>changeAmount(e)} id="myRange"/> 
                <input id="amount"  type="number" value={amount} className="text-field" onChange={e =>changeAmount(e)} />
                
                </div>
                <label>Interest % <span><em>(max interest {interestMax}%)</em></span></label>
                <div className="slidecontainer">

                <input type="range" min="1" max={interestMax.toString()} value={interestConstraint} className="slider" onChange={e => changeInterest(e)} id="myRange"/> 

                <input id="interest" type="number" value={interestConstraint} className="text-field" onChange={e => changeInterest(e)}/>   

                </div>
                <label>Term Length <span><em>(max term {termMax} years)</em></span></label>
                <div className="slidecontainer">

                <input type="range" min="1" max={termMax.toString()} value={termConstraint} className="slider" onChange={e => changeTerm(e)} id="myRange"/> 

                <input id="term" type="number" value={termConstraint} className="text-field" onChange={e =>changeTerm(e)}/>            

                </div>
        </div>
        
    )
}
