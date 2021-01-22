import React, { Component } from 'react'
import Chart from "../graph"
import './display.css'

export default class index extends Component {
    constructor(props){
        super(props)
        this.state = {
            title:props.payload.loanType,
            chartData:{}
        }
    }

    
CalculateInterest = () =>{
    let {amount,interest,term} = this.props.payload
return <span>{parseFloat(amount * (interest/100) * term).toFixed(2)}</span>
}

CalculateTotal = () =>{
    let {amount,interest,term} = this.props.payload
    let total = parseInt(amount) + parseFloat(amount * (interest/100) * term).toFixed(2)
return <span>{total}</span>
}
    

    componentDidMount(){
        this.setState({
            chartData: {
                labels: [
                    "INTEREST",
                    "PRINCIPLE",
                    
                ],
                datasets: [{
                        label: "Chart Data",
    
                        data: [
                            300,
                            122,
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


    render() {
        return (
            <div className="chart-container">
                <Chart location={this.props.payload.chartType} chartData={this.state.chartData}  legendPosition="bottom"/>
                <div style={{display:"flex",flexDirection:"column",textAlign:'left',marginLeft:"1rem",lineHeight:'2.3rem'}}>
                    <div style={{display:"flex", flexDirection:"column", justifyContent:'center'}}>
                    <div className="result-values">
                        <span>Interest</span> 
                        <this.CalculateInterest />
                        </div>
                    
                    <div className="result-values"><span>Principle</span> <span>2000</span></div>
                    <div className="result-values"><span>Total Due</span> <this.CalculateTotal /></div>

                    <div className="result-values"><span>Monthly Payments</span> <span>2000</span></div>
                    </div >
                
                </div>
                
            </div>
        )
    }
}
