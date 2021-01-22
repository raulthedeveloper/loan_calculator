import { React } from 'react'
import './controls.css'





export default function Sliders(props) {

    
    
let {interestMax,termMax,interest,term,amount } = props.data


   
function changeAmount(e){
      props.changeAmount(e.target.value)
}

function changeInterest(e){
    props.changeInterest(e.target.value)

}

function changeTerm(e){
    props.changeTerm(e.target.value)
}


    return (
        <div>
            <label>Loan Amount</label>
            <div className="slidecontainer">
                <input type="range" min="1" max="1000000" value={amount} className="slider" onChange={(e)=>changeAmount(e)} id="myRange"/> 
                <input type="text" value={amount} className="text-field" onChange={e =>changeAmount(e)} />
                
                </div>
                <label>Interest %</label>
                <div className="slidecontainer">

                <input type="range" min="1" max={interestMax.toString()} value={interest > interestMax ? interestMax : interest} className="slider" onChange={e => changeInterest(e)} id="myRange"/> 

                <input type="text" value={interest > interestMax ? interestMax : interest} className="text-field" onChange={e => changeInterest(e)}/>   

                </div>
                <label>Term Length</label>
                <div className="slidecontainer">

                <input type="range" min="1" max={termMax.toString()} value={term > termMax ? termMax : term} className="slider" onChange={e => changeTerm(e)} id="myRange"/> 

                <input type="text" value={term > termMax ? termMax : term} className="text-field" onChange={e =>changeTerm(e)}/>            

                </div>
        </div>
        
    )
}
