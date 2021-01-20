import React, { Component } from 'react'
import Chart from "../graph"
import './display.css'

export default class index extends Component {
    constructor(){
        super()
        this.state = {
            title:"Loan",
            chartData:{}
        }
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
                <Chart location={this.state.title} chartData={this.state.chartData}  legendPosition="bottom"/>
                <div style={{display:"flex",flexDirection:"column",textAlign:'left',marginLeft:"1rem"}}>
                    <div style={{display:"flex", flexDirection:"column", justifyContent:'center'}}>
                    <div className="result-values">
                        <span>Interest</span> 
                        <span>2000</span>
                        </div>
                    
                    <div className="result-values"><span>Principle</span> <span>2000</span></div>
                    <div className="result-values"><span>Interest</span> <span>2000</span></div>
                    </div >
                
                </div>
                
            </div>
        )
    }
}
