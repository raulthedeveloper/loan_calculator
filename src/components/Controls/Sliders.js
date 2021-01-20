import { React, useState} from 'react'
import './controls.css'

export default function Sliders() {

    let [ amount, setAmount ] = useState(20)
    let [ interest, setInterest ] = useState(80)
    let [ term, setTerm] = useState(40)


    function sliderAmount(event){
        setAmount(event)
    }

    function sliderInterest(event){
        setInterest(event)
    }

    function sliderTerm(event){
        setTerm(event)
    }

    function fieldAmount(event){
        setAmount(event)
    }

    function fieldInterest(event){
        setInterest(event)
    }

    function fieldTerm(event){
        setTerm(event)
    }

    return (
        <div>
            <label>Amount</label>
            <div className="slidecontainer">
                <input type="range" min="1" max="100" value={amount} className="slider" onChange={sliderAmount} id="myRange"/> 
                <input type="text" value={amount} className="text-field" onChange={fieldAmount} />
                
                </div>
                <label>interest</label>
                <div className="slidecontainer">
                <input type="range" min="1" max="100" value={interest} className="slider" onChange={sliderInterest} id="myRange"/> 
    <input type="text" value={interest} className="text-field" onChange={fieldInterest}/>            
                </div>
                <label>Term</label>
                <div className="slidecontainer">
                <input type="range" min="1" max="100" value={term} className="slider" onChange={sliderTerm} id="myRange"/> 
    <input type="text" value={term} className="text-field" onChange={fieldTerm}/>            

                </div>
        </div>
        
    )
}
