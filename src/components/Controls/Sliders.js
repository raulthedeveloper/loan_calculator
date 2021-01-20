import { React, useState} from 'react'
import './controls.css'

export default function Sliders() {

    let [ amount, setAmount ] = useState(20)
    let [ interest, setInterest ] = useState(80)
    let [ term, setTerm] = useState(40)


   

    return (
        <div>
            <label>Loan Amount</label>
            <div className="slidecontainer">
                <input type="range" min="1" max="100" value={amount} className="slider" onChange={e => setAmount(e.target.value)} id="myRange"/> 
                <input type="text" value={amount} className="text-field" onChange={e => setAmount(e.target.value)} />
                
                </div>
                <label>Interest %</label>
                <div className="slidecontainer">
                <input type="range" min="1" max="100" value={interest} className="slider" onChange={e => setInterest(e.target.value)} id="myRange"/> 
    <input type="text" value={interest} className="text-field" onChange={e => setInterest(e.target.value)}/>            
                </div>
                <label>Term Length</label>
                <div className="slidecontainer">
                <input type="range" min="1" max="100" value={term} className="slider" onChange={e => setTerm(e.target.value)} id="myRange"/> 
    <input type="text" value={term} className="text-field" onChange={e => setTerm(e.target.value)}/>            

                </div>
        </div>
        
    )
}
