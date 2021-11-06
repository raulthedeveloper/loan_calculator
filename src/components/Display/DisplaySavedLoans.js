import React, { useContext } from 'react'
import GlobalContext from '../../store/global-context'
import SaveButton from './Save'
import './display.css'
import useHotKeys from '../../Hooks/useHotKeys'

export default function DisplaySavedLoans() {
    let ctx = useContext(GlobalContext)



    useHotKeys('b', () => {
       back()
      })
   
      
      useHotKeys('c', () => {
        if(ctx.save.length !== 0){
          ctx.clearLoans()
        }
        
         
       
      })

      useHotKeys('x', () => {
        console.log(ctx.save)

        exportList()
      })



      function exportList(){
        let confirm = window.confirm("Are you sure you want to export your list");
        if(confirm){
          alert('Your list has been exported')
      
      }
      }

    function back(){
       
        ctx.displayLoan(false)
    }

    
      
      

    return (
        <div>
           <h1 style={{textAlign:'center'}}>Saved Loans</h1>
           
           <div style={{overflow:'scroll',height:'600px',overflowX:'hidden'}}>
           {
               
                ctx.save.length === 0 ? <h3>No Loans saved</h3> :  ctx.save.map((e,index) =>{
                        return <div key={index}  className="loan-list">
                            <div className="delete-item" onClick={() => ctx.deleteItem(index)}>x</div>
                            <ul onClick={() => ctx.updateCurrentChart(index)} style={{listStyle: 'none',paddingLeft: '10px'}}  >
                                <li>Name: {e.loanName}</li>
                                <li>Loan Type: {e.loan.loanType}</li>
                                <li>Years: {e.loan.term}</li>
                                <li>Interest: {e.loan.interest}%</li>
                                <li>Amount: ${e.loan.amount}</li>
                                </ul>
                                
                                </div>
                    }) 

                    
                }

                
           </div>
                
                
                <div className="save-buttons">
                <button className="bg-red-700 mr-3 hover:bg-red-800 text-white font-bold py-2 px-4 rounded" onClick={exportList}>Export</button>
                <SaveButton />
                <div>
                <button className="bg-red-700 mr-3 hover:bg-red-800 text-white font-bold py-2 px-4 rounded" style={ctx.save.length === 0 ? {background:"#f7775775"} : null} disabled={ctx.save.length === 0 || !ctx.save} onClick={ctx.clearLoans}>Clear Loans</button>
                </div>
                <button className="bg-red-700 mr-3 hover:bg-red-800 text-white font-bold py-2 px-4 rounded" onClick={back}>Back</button>
                </div>

                
           
        </div>
    )
}
