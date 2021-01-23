import React, { Component } from 'react'
import Chart from "../graph"
import './display.css'

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
            interestTotal:this.getInterest()
        }
    }

getInterest = () =>{
    let {amount,interest,term} = this.props.payload
    return parseFloat(amount * (interest/100) * term).toFixed(2)
}

    
CalculateInterest = () =>{
    let {amount,interest,term} = this.props.payload
return <span>${numberWithCommas(parseFloat(amount * (interest/100) * term).toFixed(2))}</span>
}

CalculateTotal = () =>{
    let {amount,interest,term} = this.props.payload
    let total = parseInt(amount) + parseInt(parseFloat(amount * (interest/100) * term).toFixed(2))
return <span>{"$" + numberWithCommas(total) }</span>
}

CalculateMonthly = () =>{
    let {amount,interest,term} = this.props.payload
    let total = parseInt(amount) + parseInt(parseFloat(amount * (interest/100) * term).toFixed(2))
    let monthly =  parseFloat(total /  term / 12 ).toFixed(2) // term is being divided by 12 (months)
    return <span>{ "$" + numberWithCommas(monthly) }</span>
}
    

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

                <Chart location={this.props.payload.loanType} chartData={this.state.chartData}  legendPosition="bottom"/>
                
                <div style={{display:"flex",flexDirection:"column",textAlign:'left',marginLeft:"1rem",lineHeight:'2.3rem'}}>
                    <div style={{display:"flex", flexDirection:"column", justifyContent:'center'}}>


                    <div className="result-values"><span>Principle</span> <span>{"$" + numberWithCommas(this.props.payload.amount)}</span></div>

                    <div className="result-values">
                        <span>Interest</span> 
                        <this.CalculateInterest />
                        </div>
                    <div className="result-values"><span>Monthly</span> <this.CalculateMonthly/></div>
                    <div className="result-values" style={{borderTop:"solid"}}><span >Loan Amount</span> <this.CalculateTotal /></div>

                    </div >
                
                </div>
                
            </div>
        )
    }
}
