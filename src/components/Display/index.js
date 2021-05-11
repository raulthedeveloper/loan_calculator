import React, { Component } from 'react'
import Chart from "../graph"
import Save from "./Save"
import ViewLoans from './ViewLoans'
import DisplaySavedLoans from './DisplaySavedLoans'
import './display.css'


//Adds commas to numbers to make them easier to read
function numberWithCommas(x) {
    if(x === null || x === undefined){
      return "NA"
    }else{
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
  }


export default class index extends Component {
    constructor(props){
        super(props)
              
        this.state = {
            title:props.payload.loanType,
            chartData:{},
            interestTotal:this.getInterest(),
            newData:Array
        }
    }



//methods calculates the interest total to used in render
getInterest = () =>{
    let {amount,interest,term} = this.props.payload
    return parseFloat(amount * (interest/100) * term).toFixed(2)
}

//  calculate components take amount, interest, term values from props and calculates values
// and return a span element with calculated values

CalculateInterest = () =>{
    let {amount,interest,term} = this.props.payload
return <span>${numberWithCommas(parseFloat(amount * (interest/100) * term).toFixed(2))}</span>
}

CalculateTotal = () =>{
    let {amount,interest,term} = this.props.payload
    let total = parseFloat(parseInt(amount) + amount * (interest/100) * term).toFixed(2)
return <span style={{fontWeight:"bold"}}>{"$" + numberWithCommas(total) }</span>
}

CalculateMonthly = () =>{
    let {amount,interest,term} = this.props.payload
    let total = parseInt(amount) + parseInt(parseFloat(amount * (interest/100) * term).toFixed(2))
    let monthly =  parseFloat(total /  term / 12 ).toFixed(2) // term is being divided by 12 (months)
    return <span>{ "$" + numberWithCommas(monthly) }</span>
}
    
// when component mounts the dounut chart data is set to state to be used as a prop to the chart component
    componentDidMount(){
        let {amount,interest,term} = this.props.payload

        this.setState({
            chartData: {
                labels: [
                    "INTEREST",
                    "PRINCIPLE",
                    
                ],
                datasets: [{
                        label: "Chart Data",
    
                        data: [
                            parseFloat(amount * (interest/100) * term).toFixed(2),
                            this.props.payload.amount,
                        ],
    
                        backgroundColor: [
                            '#e01502',
                            '#339e51',
                        ]
                    }
    
    
                ]
            }
        })
        
    }
    
    // Checks if props change. When prop changes new values update chart state
    componentDidUpdate(nextProp){
        let {amount,interest,term} = this.props.payload

            if(this.props !== nextProp){
                this.setState({
                    chartData: {
                        labels: [
                            "INTEREST",
                            "PRINCIPLE",
                            
                        ],
                        datasets: [{
                                label: "Chart Data",
            
                                data: [
                                    parseFloat(amount * (interest/100) * term).toFixed(2),
                                    this.props.payload.amount,
                                ],
            
                                backgroundColor: [
                                    '#e01502',
                                    '#339e51',
                                ]
                            }
            
            
                        ]
                    }
                })
            }
            
        }


    

    render() {
        return (
            <div className="chart-container">

            {
                this.props.showLoans ? <DisplaySavedLoans/> : <div> 
                    <Chart location={this.props.payload.loanType} chartData={this.state.chartData}  legendPosition="bottom"/>
                
                <div style={{marginLeft:"1rem",lineHeight:'2.3rem'}}>
                   

                    <div className="result-values"><span>Principle</span> <span>{"$" + numberWithCommas(this.props.payload.amount)}</span></div>

                    <div className="result-values">
                        <span>Interest</span> 
                        <this.CalculateInterest />
                        </div>
                    <div className="result-values"><span>Monthly</span> <this.CalculateMonthly/></div>
                    <div className="result-values" style={{borderTop:"solid"}}><span style={{fontWeight:"bold"}}>Loan Amount</span> <this.CalculateTotal /></div>

               <div className="save-buttons">
               
                <Save data={this.props.payload}/>

                <ViewLoans />
                
                
                
               </div>
                
                </div>


                </div>
            }

                
                
            </div>
        )
    }
}
